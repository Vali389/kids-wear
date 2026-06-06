import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/baby")({
  beforeLoad: () => {
    throw redirect({ to: "/shop", search: { cat: "baby" } });
  },
  component: () => null,
});
