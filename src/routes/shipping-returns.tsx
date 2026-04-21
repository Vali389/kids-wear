import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/shipping-returns")({
  head: () => ({
    meta: [
      { title: "Shipping & Returns — Tinytots" },
      { name: "description", content: "Read Tinytots shipping timelines and return policy details." },
    ],
  }),
  component: ShippingReturnsPage,
});

function ShippingReturnsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-display text-4xl font-bold sm:text-5xl">Shipping & returns</h1>
      <div className="mt-8 space-y-6 text-sm leading-7 text-muted-foreground">
        <p>
          Orders are processed within 1-2 business days. Standard delivery usually takes 3-7 business
          days depending on location.
        </p>
        <p>
          We offer free shipping on orders above ₹999. A small shipping fee may apply on lower-value
          orders and is shown at checkout.
        </p>
        <p>
          Returns are accepted within 7 days of delivery for unused items in original condition. To
          request a return, contact us with your order details on WhatsApp.
        </p>
      </div>
    </div>
  );
}
