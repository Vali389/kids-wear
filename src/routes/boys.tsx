import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/boys")({
  beforeLoad: () => {
    throw redirect({ to: "/shop", search: { cat: "boys" } });
  },
  component: () => null,
});
