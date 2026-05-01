import type { IncomingMessage, ServerResponse } from "node:http";
import type { ReadableStream as WebReadableStream } from "node:stream/web";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import ssr from "../dist/server/index.js";

export const config = {
  runtime: "nodejs",
  maxDuration: 60,
};

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  try {
    const protocol = (req.headers["x-forwarded-proto"] as string) ?? "https";
    const host =
      (req.headers["x-forwarded-host"] as string) ?? (req.headers.host as string) ?? "localhost";
    const url = new URL(req.url ?? "/", `${protocol}://${host}`);

    const headers = new Headers();
    for (const [key, value] of Object.entries(req.headers)) {
      if (value == null) continue;
      if (Array.isArray(value)) {
        for (const v of value) headers.append(key, v);
      } else {
        headers.set(key, value);
      }
    }

    const method = req.method ?? "GET";
    const contentLength = Number(req.headers["content-length"] ?? 0);
    const hasBody = contentLength > 0 && !["GET", "HEAD", "OPTIONS"].includes(method);

    const request = new Request(url.toString(), {
      method,
      headers,
      ...(hasBody
        ? {
            body: Readable.toWeb(req) as unknown as ReadableStream<Uint8Array>,
            duplex: "half",
          }
        : {}),
    } as RequestInit);

    const response = await ssr.fetch(request);

    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      const k = key.toLowerCase();
      if (k === "transfer-encoding" || k === "content-encoding") return;
      try {
        res.appendHeader(key, value);
      } catch {
        res.setHeader(key, value);
      }
    });

    if (response.body) {
      await pipeline(Readable.fromWeb(response.body as unknown as WebReadableStream), res);
    } else {
      res.end();
    }
  } catch (e) {
    console.error("[api ssr]", e);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("content-type", "application/json; charset=utf-8");
      res.end(
        JSON.stringify({
          message: e instanceof Error ? e.message : String(e),
        }),
      );
    }
  }
}
