import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartDrawer } from "@/components/CartDrawer";
import { FloatingActions } from "@/components/FloatingActions";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-bold text-gradient-berry">404</h1>
        <h2 className="mt-4 font-display text-2xl font-bold text-foreground">Lost in the playground</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for ran off to play somewhere else.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-berry px-6 py-3 text-sm font-bold text-berry-foreground shadow-pop transition-transform hover:scale-105"
          >
            Take me home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Tinytots — Joyful Kids Wear" },
      { name: "description", content: "Playful, comfy & colorful clothing for tiny humans. Shop dresses, tees, hoodies and more." },
      { property: "og:title", content: "Tinytots — Joyful Kids Wear" },
      { property: "og:description", content: "Playful, comfy & colorful clothing for tiny humans." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh]">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
      <FloatingActions />
      <Toaster position="top-center" richColors />
    </>
  );
}
