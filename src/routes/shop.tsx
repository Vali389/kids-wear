import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState, useEffect, useRef } from "react";
import { Search, SlidersHorizontal, Grid2x2, Grid3x3, List, ChevronDown, Truck, RotateCcw, ShieldCheck, ShoppingBag } from "lucide-react";
import {
  products,
  searchProducts,
  productMatchesPriceBand,
  productMatchesAgeFilter,
  priceBandLabel,
  type Category,
  type AgeBucket,
  type AgeFilter,
  type PriceBand,
} from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

type ShopSearch = {
  q?: string;
  cat?: Category | "all";
  age?: AgeFilter;
  price?: PriceBand;
};

const CATEGORIES: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "baby", label: "Baby" },
  { value: "girls", label: "Girls" },
  { value: "ladies", label: "Ladies" },
  { value: "boys", label: "Boys" },
];

const AGE_FILTERS: { value: AgeFilter; label: string }[] = [
  { value: "all", label: "All ages" },
  { value: "0-12m", label: "0–12 months" },
  { value: "1-3y", label: "1–3 years" },
  { value: "3-6y", label: "3–6 years" },
  { value: "6-12y", label: "6–12 years" },
  { value: "12plus", label: "12+ years" },
  { value: "ladies", label: "Ladies wear" },
];

const INITIAL_VISIBLE = 8;
const SHOP_LOAD_MORE_STEP = 8;
/** Minimum spinner time so the circular loader is visible (catalog is local). */
const SHOP_LOAD_MORE_LOADER_MS = 380;

type ShopGridLayout = "grid2" | "grid3" | "list";

const PRICE_FILTERS: { value: PriceBand; label: string }[] = [
  { value: "all", label: "Any price" },
  { value: "under1000", label: priceBandLabel.under1000 },
  { value: "1000-1500", label: priceBandLabel["1000-1500"] },
  { value: "1500-2000", label: priceBandLabel["1500-2000"] },
  { value: "2000plus", label: priceBandLabel["2000plus"] },
];

function parseCat(raw: unknown): Category | "all" | undefined {
  const v = typeof raw === "string" ? raw : undefined;
  if (!v) return undefined;
  if (v === "all") return "all";
  if (v === "baby" || v === "girls" || v === "ladies" || v === "boys") return v as Category;
  return undefined;
}

function parseAge(raw: unknown): AgeFilter | undefined {
  const v = typeof raw === "string" ? raw : undefined;
  if (!v) return undefined;
  if (v === "all") return "all";
  if (["0-12m", "1-3y", "3-6y", "6-12y", "12plus", "ladies"].includes(v)) return v as AgeBucket;
  return undefined;
}

function parsePrice(raw: unknown): PriceBand | undefined {
  const v = typeof raw === "string" ? raw : undefined;
  if (!v) return undefined;
  if (v === "all") return "all";
  if (["under1000", "1000-1500", "1500-2000", "2000plus"].includes(v)) return v as Exclude<PriceBand, "all">;
  return undefined;
}

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Kathyayani Kids Wear" },
      {
        name: "description",
        content: "Browse party frocks, lehengas and festive wear — filter by age and price.",
      },
      { property: "og:title", content: "Shop — Kathyayani Kids Wear" },
      { property: "og:description", content: "Party & festive catalog with age and price filters." },
    ],
  }),
  validateSearch: (search: Record<string, unknown>): ShopSearch => ({
    q: typeof search.q === "string" ? search.q : undefined,
    cat: parseCat(search.cat) ?? undefined,
    age: parseAge(search.age) ?? undefined,
    price: parsePrice(search.price) ?? undefined,
  }),
  component: ShopPage,
});

/** Accordion facets (reference: vertical list rows + chevron) — desktop sidebar & mobile sheet. */
function ShopFilterSections({
  cat,
  age,
  price,
  onCategory,
  onAge,
  onPrice,
}: {
  cat: Category | "all";
  age: AgeFilter;
  price: PriceBand;
  onCategory: (value: Category | "all") => void;
  onAge: (value: AgeFilter) => void;
  onPrice: (value: PriceBand) => void;
}) {
  const rowTitle = "text-sm font-bold text-foreground mb-4 block";
  const filterItem = "flex items-center justify-between py-1.5 text-sm transition-colors hover:text-berry";
  const filterActive = "flex items-center justify-between py-1.5 text-sm font-bold text-berry";

  return (
    <div className="flex flex-col gap-8">
      <div>
        <span className={rowTitle}>Categories</span>
        <div className="flex flex-col gap-1">
          {CATEGORIES.map((c) => {
            const count = c.value === 'all' ? products.length : products.filter(p => p.category === c.value).length;
            return (
              <button
                key={c.value}
                type="button"
                onClick={() => onCategory(c.value)}
                className={cat === c.value ? filterActive : filterItem}
              >
                <span>{c.label}</span>
                <span className="text-[11px] opacity-60">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <span className={rowTitle}>Age Filter</span>
        <div className="flex flex-col gap-1">
          {AGE_FILTERS.map((a) => {
            const count = a.value === 'all' ? products.length : products.filter(p => productMatchesAgeFilter(p.ageBuckets, a.value)).length;
            return (
              <button
                key={a.value}
                type="button"
                onClick={() => onAge(a.value)}
                className={age === a.value ? filterActive : filterItem}
              >
                <span>{a.label}</span>
                <span className="text-[11px] opacity-60">({count})</span>
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <span className={rowTitle}>Price Range</span>
        <div className="flex flex-col gap-1">
          {PRICE_FILTERS.map((p) => {
            const count = p.value === 'all' ? products.length : products.filter(p_obj => productMatchesPriceBand(p_obj.price, p.value)).length;
            return (
              <button
                key={p.value}
                type="button"
                onClick={() => onPrice(p.value)}
                className={price === p.value ? filterActive : filterItem}
              >
                <span>{p.label}</span>
                <span className="text-[11px] opacity-60">({count})</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ShopPage() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();

  const [query, setQuery] = useState(search.q ?? "");
  const [cat, setCat] = useState<Category | "all">(search.cat ?? "all");
  const [age, setAge] = useState<AgeFilter>(search.age ?? "all");
  const [price, setPrice] = useState<PriceBand>(search.price ?? "all");
  const [sort, setSort] = useState<"new" | "lo" | "hi">("new");
  const [gridLayout, setGridLayout] = useState<ShopGridLayout>("grid3");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [shopLoadMoreBusy, setShopLoadMoreBusy] = useState(false);
  const shopLoadMoreTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    setQuery(search.q ?? "");
    setCat(search.cat ?? "all");
    setAge(search.age ?? "all");
    setPrice(search.price ?? "all");
  }, [search.q, search.cat, search.age, search.price]);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [search.q, search.cat, search.age, search.price]);

  useEffect(() => {
    return () => {
      if (shopLoadMoreTimerRef.current !== null) {
        clearTimeout(shopLoadMoreTimerRef.current);
        shopLoadMoreTimerRef.current = null;
      }
    };
  }, []);

  const filtered = useMemo(() => {
    let list = query ? searchProducts(query) : products;
    if (cat !== "all") list = list.filter((p) => p.category === cat);
    if (age !== "all") list = list.filter((p) => productMatchesAgeFilter(p.ageBuckets, age));
    if (price !== "all") list = list.filter((p) => productMatchesPriceBand(p.price, price));
    if (sort === "lo") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "hi") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [query, cat, age, price, sort]);

  const visibleProducts = filtered.slice(0, visibleCount);

  const syncUrl = (next: Partial<ShopSearch>) => {
    const nextCat = next.cat !== undefined ? next.cat : cat;
    const nextAge = next.age !== undefined ? next.age : age;
    const nextPrice = next.price !== undefined ? next.price : price;
    const nextQ = next.q !== undefined ? next.q : query.trim() || undefined;
    navigate({
      search: {
        q: nextQ,
        cat: nextCat === "all" ? undefined : nextCat,
        age: nextAge === "all" ? undefined : nextAge,
        price: nextPrice === "all" ? undefined : nextPrice,
      },
    });
  };

  const setCategory = (value: Category | "all") => {
    setCat(value);
    syncUrl({ cat: value });
  };
  const setAgeFilter = (value: AgeFilter) => {
    setAge(value);
    syncUrl({ age: value });
  };
  const setPriceBand = (value: PriceBand) => {
    setPrice(value);
    syncUrl({ price: value });
  };

  const filterBody = (
    <ShopFilterSections
      cat={cat}
      age={age}
      price={price}
      onCategory={setCategory}
      onAge={setAgeFilter}
      onPrice={setPriceBand}
    />
  );

  const activeFacetCount =
    (cat !== "all" ? 1 : 0) + (age !== "all" ? 1 : 0) + (price !== "all" ? 1 : 0);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center lg:text-left">
          <p className="font-display text-sm font-bold uppercase tracking-widest text-berry">Collection</p>
          <h1 className="mt-1 font-display text-3xl font-bold sm:text-5xl">Shop the collection</h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground lg:mx-0">
            Use filters on the left to narrow pieces. Name, age, and price appear on cards; full details on each
            product page.
          </p>
        </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          syncUrl({ q: query.trim() || undefined });
        }}
        className="mx-auto mt-6 flex max-w-xl items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-soft focus-within:border-berry lg:mx-0"
      >
        <Search className="h-5 w-5 text-muted-foreground" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search frocks, lehengas, twinning…"
          className="flex-1 bg-transparent py-1.5 text-sm font-medium outline-none placeholder:text-muted-foreground"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              syncUrl({ q: undefined });
            }}
            className="rounded-full px-2 py-1 text-xs font-bold text-muted-foreground hover:bg-accent"
          >
            Clear
          </button>
        )}
      </form>

      {/*
       * ISAK-style collection (https://www.isakfragrances.com/collections/perfumes): one window
       * scrollbar; sidebar is sticky below the nav with a pinned “Filters” heading and facets
       * scrolling inside the rail — product grid moves independently beside it.
       */}
      <div className="mt-8 flex flex-col gap-8 lg:mt-6 lg:flex-row lg:items-start lg:gap-0 lg:border-t lg:border-border/50">
        <aside className="hidden shrink-0 border-r border-border/50 bg-muted/45 lg:sticky lg:top-[var(--shop-sticky-offset)] lg:z-20 lg:flex lg:h-[calc(100dvh-var(--shop-sticky-offset)-var(--shop-sticky-bottom-gap))] lg:w-[300px] lg:flex-col lg:self-start xl:w-[316px]">
          <div className="shrink-0 border-b border-border/60 bg-muted/45 px-6 pb-4 pt-10">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-body text-[11px] font-black uppercase tracking-[0.15em] text-foreground">
                Filters
              </h2>
              {(cat !== "all" || age !== "all" || price !== "all") && (
                <button
                  type="button"
                  className="text-[11px] font-bold uppercase tracking-wide text-berry hover:underline"
                  onClick={() => {
                    setQuery("");
                    setCat("all");
                    setAge("all");
                    setPrice("all");
                    navigate({ to: "/shop", search: {} });
                  }}
                >
                  Clear all
                </button>
              )}
            </div>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 pb-10 pt-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {filterBody}
          </div>
        </aside>

        <div className="min-w-0 flex-1 lg:bg-background lg:pl-10 lg:pr-4 lg:pt-10 xl:pl-14">
          {/* Mobile — Flipkart-style drawer from left */}
          <div className="flex shrink-0 flex-wrap items-center gap-3 lg:hidden">
            <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border-2 border-foreground bg-background px-4 py-2.5 font-body text-sm font-bold text-foreground shadow-soft"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                  {activeFacetCount > 0 ? (
                    <span className="grid h-6 min-w-6 place-items-center rounded-full bg-berry px-1.5 text-[11px] font-black text-berry-foreground">
                      {activeFacetCount}
                    </span>
                  ) : null}
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="flex w-[min(100vw-3rem,22rem)] max-w-none flex-col gap-0 p-0">
                <SheetHeader className="border-b border-border px-6 py-4 text-left">
                  <SheetTitle className="font-display text-xl">Filters</SheetTitle>
                  <p className="text-xs text-muted-foreground">Tap an option — results update instantly.</p>
                </SheetHeader>
                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-5">{filterBody}</div>
                <SheetFooter className="gap-3 border-t border-border bg-muted/30 p-4">
                  <SheetClose asChild>
                    <button
                      type="button"
                      className="w-full rounded-full bg-foreground py-3.5 font-body text-sm font-bold text-background shadow-soft"
                    >
                      Show {filtered.length} product{filtered.length === 1 ? "" : "s"}
                    </button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>

            {(cat !== "all" || age !== "all" || price !== "all") && (
              <button
                type="button"
                className="text-sm font-semibold text-berry underline-offset-4 hover:underline"
                onClick={() => {
                  setQuery("");
                  setCat("all");
                  setAge("all");
                  setPrice("all");
                  navigate({ to: "/shop", search: {} });
                }}
              >
                Clear all
              </button>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="mt-10 text-center lg:mt-0 lg:border lg:border-border/70 lg:rounded-2xl lg:bg-card/40 lg:p-12">
              <p className="font-display text-2xl font-bold">No matches yet</p>
              <p className="mt-2 text-sm text-muted-foreground">Try different filters or clear search.</p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCat("all");
                  setAge("all");
                  setPrice("all");
                  navigate({ to: "/shop", search: {} });
                }}
                className="mt-6 inline-block rounded-full bg-berry px-6 py-3 text-sm font-bold text-berry-foreground shadow-pop"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid w-full grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2 border-b border-border/60 bg-background pb-3 pt-0 sm:pb-4">
                <div className="flex shrink-0 items-center gap-px">
                  <button
                    type="button"
                    aria-label="Large grid — 2 columns"
                    aria-pressed={gridLayout === "grid2"}
                    onClick={() => setGridLayout("grid2")}
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-sm transition-colors ${
                      gridLayout === "grid2"
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                    }`}
                  >
                    <Grid2x2 className="h-[17px] w-[17px]" strokeWidth={1.75} aria-hidden />
                  </button>
                  <button
                    type="button"
                    aria-label="Dense grid — 3 columns"
                    aria-pressed={gridLayout === "grid3"}
                    onClick={() => setGridLayout("grid3")}
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-sm transition-colors ${
                      gridLayout === "grid3"
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                    }`}
                  >
                    <Grid3x3 className="h-[17px] w-[17px]" strokeWidth={1.75} aria-hidden />
                  </button>
                  <button
                    type="button"
                    aria-label="List view"
                    aria-pressed={gridLayout === "list"}
                    onClick={() => setGridLayout("list")}
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-sm transition-colors ${
                      gridLayout === "list"
                        ? "bg-muted text-foreground"
                        : "text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                    }`}
                  >
                    <List className="h-[17px] w-[17px]" strokeWidth={1.75} aria-hidden />
                  </button>
                </div>

                <p className="truncate text-center font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground sm:text-[11px]">
                  {filtered.length}&nbsp;product{filtered.length === 1 ? "" : "s"}
                </p>

                <label className="relative inline-flex shrink-0 items-center justify-self-end rounded-full border border-border/70 bg-transparent px-2.5 py-1 sm:px-3 sm:py-1.5">
                  <SlidersHorizontal className="pointer-events-none hidden h-3.5 w-3.5 text-muted-foreground sm:block" />
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as typeof sort)}
                    className="max-w-[7.5rem] cursor-pointer appearance-none bg-transparent py-1 pl-0 text-[10px] font-semibold uppercase tracking-wide outline-none sm:max-w-none sm:pl-2 sm:pr-6 sm:text-xs"
                  >
                    <option value="new">Newest</option>
                    <option value="lo">Price: low → high</option>
                    <option value="hi">Price: high → low</option>
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-2 top-1/2 hidden h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground sm:block"
                    aria-hidden
                  />
                </label>
              </div>

              <div
                className={
                  gridLayout === "list"
                    ? "mt-8 flex flex-col gap-4 overflow-x-clip sm:mt-10"
                    : gridLayout === "grid2"
                      ? "mt-10 grid grid-cols-2 items-stretch gap-x-8 gap-y-12 overflow-x-clip sm:gap-x-12 sm:gap-y-16"
                      : "mt-10 grid grid-cols-2 items-stretch gap-x-8 gap-y-14 overflow-x-clip sm:gap-x-10 sm:gap-y-16 md:grid-cols-3 md:gap-x-12"
                }
              >
                {visibleProducts.map((p, i) => (
                  <ProductCard
                    key={p.id}
                    product={p}
                    index={i}
                    layout={gridLayout === "list" ? "list" : "grid"}
                    listingStyle={gridLayout === "list" ? "default" : "catalog"}
                  />
                ))}
              </div>

              {visibleCount < filtered.length ? (
                <div className="mt-10 flex flex-col items-center">
                  {shopLoadMoreBusy ? (
                    <div
                      className="flex min-h-[88px] w-full max-w-md flex-col items-center justify-center gap-3 rounded-2xl border border-border/60 bg-muted/20 py-10"
                      role="status"
                      aria-live="polite"
                      aria-busy="true"
                    >
                      <span
                        className="inline-block h-10 w-10 shrink-0 rounded-full border-2 border-berry border-t-transparent opacity-90 animate-spin"
                        aria-hidden
                      />
                      <span className="text-sm font-medium text-muted-foreground">Loading more products…</span>
                      <span className="sr-only">Loading more products</span>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        const total = filtered.length;
                        setShopLoadMoreBusy(true);
                        if (shopLoadMoreTimerRef.current !== null) clearTimeout(shopLoadMoreTimerRef.current);
                        shopLoadMoreTimerRef.current = setTimeout(() => {
                          shopLoadMoreTimerRef.current = null;
                          setVisibleCount((n) => Math.min(total, n + SHOP_LOAD_MORE_STEP));
                          setShopLoadMoreBusy(false);
                        }, SHOP_LOAD_MORE_LOADER_MS);
                      }}
                      className="inline-flex min-h-[48px] min-w-[220px] items-center justify-center rounded-full border-2 border-foreground bg-background px-8 py-3 font-body text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-foreground hover:text-background"
                    >
                      {`View more (${Math.min(SHOP_LOAD_MORE_STEP, filtered.length - visibleCount)} more)`}
                    </button>
                  )}
                </div>
              ) : null}
            </>
          )}
        </div>
      </div>
    </div>

    {/* USP STRIP — Premium Berry bar moved to bottom */}
      <section className="relative left-1/2 mt-16 w-[100dvw] max-w-[100dvw] -translate-x-1/2 overflow-hidden bg-gradient-to-r from-[#D81B60] via-[#EC407A] to-[#C2185B] py-8 text-white shadow-2xl sm:mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-x-8">
            {[
              { icon: Truck, title: "FREE SHIPPING", sub: "Free shipping T&C Applied" },
              { icon: RotateCcw, title: "Flexible Returns", sub: "Flexible Returns T&C Applied" },
              { icon: ShieldCheck, title: "SECURE PAYMENTS", sub: "Payment are Secured & trusted" },
              { icon: ShoppingBag, title: "assorted apparel", sub: "Minor variations may occur" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-widest text-white sm:text-[12px]">{item.title}</p>
                  <p className="text-[10px] font-medium text-white/80 sm:text-[11px]">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
