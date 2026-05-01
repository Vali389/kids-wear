import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Kathyayani Kids Wear" },
      {
        name: "description",
        content: "Review Kathyayani Kids Wear terms for orders and website use.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-bold sm:text-5xl">Terms & conditions</h1>
      <div className="mt-8 space-y-6 text-sm leading-7 text-muted-foreground">
        <p>
          By using this website, you agree to place genuine orders and provide accurate details for
          delivery and communication.
        </p>
        <p>
          Product colors may vary slightly due to photography and screen settings. We try to keep stock
          details accurate, but availability can change without prior notice.
        </p>
        <p>
          Prices and promotions may be updated at any time. Final order confirmation is provided through
          WhatsApp before dispatch.
        </p>
      </div>
    </div>
  );
}
