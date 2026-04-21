import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { products, searchProducts, type Category } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

type ShopSearch = { q?: string; cat?: Category | "all" };

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop All Kids Wear — Tinytots" },
      { name: "description", content: "Browse our full collection of joyful kids clothing." },
      { property: "og:title", content: "Shop All — Tinytots" },
      { property: "og:description", content: "Browse our full collection of joyful kids clothing." },
    ],
  }),
  validateSearch: (search: Record<string, unknown>): ShopSearch => ({
    q: typeof search.q === "string" ? search.q : undefined,
    cat: (search.cat as Category | "all" | undefined) ?? undefined,
  }),
  component: ShopPage,
});

function ShopPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const [query, setQuery] = useState(search.q ?? "");
  const [cat, setCat] = useState<Category | "all">(search.cat ?? "all");
  const [sort, setSort] = useState<"new" | "lo" | "hi">("new");

  const filtered = useMemo(() => {
    let list = query ? searchProducts(query) : products;
    if (cat !== "all") list = list.filter((p) => p.category === cat);
    if (sort === "lo") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "hi") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [query, cat, sort]);

  const cats: { value: Category | "all"; label: string }[] = [
    { value: "all", label: "All" },
    { value: "girls", label: "Girls" },
    { value: "boys", label: "Boys" },
    { value: "baby", label: "Baby" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="font-display text-sm font-bold uppercase tracking-widest text-berry">Collection</p>
        <h1 className="mt-1 font-display text-4xl font-bold sm:text-5xl">Shop everything</h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
          {filtered.length} happy {filtered.length === 1 ? "piece" : "pieces"} ready to play.
        </p>
      </div>

      {/* Search */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate({ search: { q: query, cat } });
        }}
        className="mx-auto mt-6 flex max-w-xl items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-soft focus-within:border-berry"
      >
        <Search className="h-5 w-5 text-muted-foreground" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search dresses, tees, hoodies…"
          className="flex-1 bg-transparent py-1.5 text-sm font-medium outline-none placeholder:text-muted-foreground"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              navigate({ search: { cat } });
            }}
            className="rounded-full px-2 py-1 text-xs font-bold text-muted-foreground hover:bg-accent"
          >
            Clear
          </button>
        )}
      </form>

      {/* Filter chips */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c.value}
              onClick={() => setCat(c.value)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
                cat === c.value
                  ? "bg-berry text-berry-foreground shadow-pop"
                  : "bg-card text-foreground hover:bg-accent"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <label className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-sm">
          <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as typeof sort)}
            className="bg-transparent text-sm font-bold outline-none"
          >
            <option value="new">Newest</option>
            <option value="lo">Price: low → high</option>
            <option value="hi">Price: high → low</option>
          </select>
        </label>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="mt-16 text-center">
          <p className="font-display text-2xl font-bold">No matches yet 🧸</p>
          <p className="mt-2 text-sm text-muted-foreground">Try a different search or category.</p>
          <Link
            to="/shop"
            onClick={() => {
              setQuery("");
              setCat("all");
            }}
            className="mt-6 inline-block rounded-full bg-berry px-6 py-3 text-sm font-bold text-berry-foreground shadow-pop"
          >
            Reset filters
          </Link>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
