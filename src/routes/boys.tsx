import { createFileRoute } from "@tanstack/react-router";
import { productsByCategory } from "@/data/products";
import { CategoryPage } from "./girls";
import catBoys from "@/assets/cat-boys.jpg";

export const Route = createFileRoute("/boys")({
  head: () => ({
    meta: [
      { title: "Boys Wear — Tinytots" },
      { name: "description", content: "Cool tees, denim and hoodies for adventurous boys." },
      { property: "og:title", content: "Boys Wear — Tinytots" },
      { property: "og:description", content: "Cool tees, denim and hoodies for adventurous boys." },
      { property: "og:image", content: catBoys },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Boys"
      subtitle="Tees, denim, hoodies & joggers built for adventures"
      image={catBoys}
      bg="var(--sky)"
      items={productsByCategory("boys")}
    />
  ),
});
