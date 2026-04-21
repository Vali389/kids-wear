import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Tinytots" },
      { name: "description", content: "Read how Tinytots collects and uses customer information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-bold sm:text-5xl">Privacy policy</h1>
      <p className="mt-4 text-sm leading-7 text-muted-foreground">
        Tinytots respects your privacy. We only collect details needed to process your order, provide
        customer support, and improve your shopping experience. We do not sell your personal data.
      </p>
      <div className="mt-8 space-y-6 text-sm leading-7 text-muted-foreground">
        <p>
          We may collect your name, phone number, email, and delivery address when you place an order
          or contact us. This information is used only for order fulfillment and communication.
        </p>
        <p>
          If you subscribe to updates, your email is used only for product updates and offers. You can
          unsubscribe at any time by contacting us.
        </p>
        <p>
          For privacy-related requests, contact us at{" "}
          <a className="font-semibold text-foreground" href="mailto:hello@tinytots.com">
            hello@tinytots.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
