import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/boys")({
  beforeLoad: () => {
    throw redirect({ to: "/girls" });
  },
  component: () => null,
});
