import { createFileRoute } from "@tanstack/react-router";
import { productsByCategory } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import catGirls from "@/assets/girls-herosectionew-1.jpeg";

export const Route = createFileRoute("/girls")({
  head: () => ({
    meta: [
      { title: "Girls wear — Kathyayani Kids Wear" },
      {
        name: "description",
        content: "Party frocks, lehengas & festive gowns — comfortable linings for every occasion.",
      },
      { property: "og:title", content: "Girls wear — Kathyayani Kids Wear" },
      {
        property: "og:description",
        content: "Party frocks, lehengas & festive gowns.",
      },
      { property: "og:image", content: catGirls },
    ],
  }),
  component: () => (
    <CategoryPage
      title="Girls"
      subtitle="Party frocks, gowns & festive ethnic ensembles"
      image={catGirls}
      bg="var(--peach)"
      items={productsByCategory("girls")}
    />
  ),
});

export function CategoryPage({
  title,
  subtitle,
  image,
  bg,
  items,
}: {
  title: string;
  subtitle: string;
  image: string;
  bg: string;
  items: ReturnType<typeof productsByCategory>;
}) {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <div
          className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-pop"
          style={{ backgroundColor: `color-mix(in oklab, ${bg} 35%, white)` }}
        >
          <div className="grid items-center gap-6 p-6 sm:grid-cols-2 sm:p-12">
            <div>
              <p className="font-display text-sm font-bold uppercase tracking-widest text-berry">Collection</p>
              <h1 className="mt-2 font-display text-5xl font-bold leading-none sm:text-6xl">{title}</h1>
              <p className="mt-3 max-w-md text-base font-semibold text-foreground/80">{subtitle}</p>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img src={image} alt={title} className="h-full w-full object-cover animate-kenburns-in" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {items.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
