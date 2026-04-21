import { createFileRoute } from "@tanstack/react-router";
import { productsByCategory } from "@/data/products";
import { CategoryPage } from "./girls";
import catBaby from "@/assets/cat-baby.jpg";

export const Route = createFileRoute("/baby")({
  head: () => ({
    meta: [
      { title: "Baby Wear — Tinytots" },
      { name: "description", content: "Cosy onesies, dungarees and PJs for the tiniest humans." },
      { property: "og:title", content: "Baby Wear — Tinytots" },
      { property: "og:description", content: "Cosy onesies, dungarees and PJs for the tiniest humans." },
      { property: "og:image", content: catBaby },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Baby"
      subtitle="Cosy onesies, dungarees & PJs for the tiniest humans"
      image={catBaby}
      bg="var(--mint)"
      items={productsByCategory("baby")}
    />
  ),
});
