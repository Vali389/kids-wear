import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { ArrowRight, ArrowLeft, Sparkles, Truck, ShieldCheck, RotateCcw, Loader2 } from "lucide-react";
import hero1 from "@/assets/hero/traditional-elegance.png";
import hero2 from "@/assets/hero/kids_ethnic_wear_hero_2_1778329736443.png";
import hero3 from "@/assets/hero/kids_ethnic_wear_hero_3_1778329774693.png";
import ctaBg from "@/assets/hero/cta-bg.png";
import heroGirls1 from "@/assets/hero-1.png";
import heroGirls2 from "@/assets/hero-2.png";
import heroGirls3 from "@/assets/hero-3.png";
import catParty from "@/assets/herosectionnew-5.jpeg";
import catFestive from "@/assets/herosectionnew-3.jpeg";
import catShop from "@/assets/girls-herosectionew-1.jpeg";
import type { Product } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kathyayani Kids Wear — Party & festive girls wear" },
      {
        name: "description",
        content:
          "Kathyayani Kids Wear — party frocks, lehengas & ethnic gowns in Hyderabad. Comfortable linings for every celebration.",
      },
      { property: "og:title", content: "Kathyayani Kids Wear" },
      {
        property: "og:description",
        content: "Festive girls wear curated with comfortable linings. Kukatpally, Hyderabad.",
      },
      { property: "og:image", content: hero1 },
    ],
  }),
  component: HomePage,
});

const slides = [
  {
    image: hero1,
    bg: "var(--peach)",
    eyebrow: "Royal Collections",
    titleA: "Traditional",
    titleB: "Elegance",
    subtitle: "Exquisite lehengas and cholis for your little princess.",
    cta: "Explore Festive",
    to: "/shop",
    align: "left" as const,
  },
  {
    image: hero2,
    bg: "var(--sunshine)",
    eyebrow: "Designer Fits",
    titleA: "Festive",
    titleB: "Grandeur",
    subtitle: "Grand gowns designed for memorable celebrations.",
    cta: "Shop Gowns",
    to: "/shop",
    align: "right" as const,
  },
  {
    image: heroGirls1,
    eyebrow: "For little stars",
    titleA: "Ethnic flair,",
    titleB: "gentle fabrics",
    subtitle:
      "Thoughtful trims and drapes that photograph beautifully yet feel easy for kids to wear all evening.",
    cta: "View girls edits",
    to: "/girls",
    bg: "var(--lavender)",
    align: "right" as const,
  },
];

/** Two full rows of the home featured grid: 2 cols × 2 → 4, 3×2 → 6, 4×2 → 8 */
function getFeaturedTwoRowCount(): number {
  return 14;
}

const HOME_FEATURED_LOAD_MORE = 4;
/** Minimum spinner time on View more so the circular loader is visible (data is already local). */
const HOME_VIEW_MORE_LOADER_MS = 380;

/** Home spotlight surfaces newest SKU-style ids first (`p36` … `p1`) — shop catalogue order unchanged. */
function homeSpotlightOrder(list: Product[]): Product[] {
  return [...list].sort((a, b) => {
    const na = Number(String(a.id).replace(/^p/i, ""));
    const nb = Number(String(b.id).replace(/^p/i, ""));
    return (Number.isFinite(nb) ? nb : 0) - (Number.isFinite(na) ? na : 0);
  });
}

function FeaturedCelebrationSection() {
  const [catalog, setCatalog] = useState<Product[] | null>(null);
  const displayCatalog = useMemo(
    () => (catalog ? homeSpotlightOrder(catalog) : null),
    [catalog],
  );
  const featuredTotal = displayCatalog?.length ?? 0;
  const [featuredVisible, setFeaturedVisible] = useState(14);
  const [loadMoreBusy, setLoadMoreBusy] = useState(false);
  const loadMoreTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let cancelled = false;
    void import("@/data/products").then((m) => {
      if (!cancelled) setCatalog(m.products);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    return () => {
      if (loadMoreTimerRef.current !== null) {
        clearTimeout(loadMoreTimerRef.current);
        loadMoreTimerRef.current = null;
      }
    };
  }, []);

  useLayoutEffect(() => {
    if (!displayCatalog) return;
    setFeaturedVisible(Math.min(displayCatalog.length, getFeaturedTwoRowCount()));
  }, [displayCatalog]);

  return (
    <section className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-berry">
            Spotlight
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Kathyayani&apos;s <em className="font-italic-display font-semibold">celebration edit</em>
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Party frocks, lehengas &amp; twinning — the pieces shoppers love right now from our
            Hyderabad studio.
          </p>
        </div>
        <Link
          to="/shop"
          className="inline-flex shrink-0 items-center gap-1.5 self-start text-sm font-bold uppercase tracking-wider text-foreground underline-offset-4 transition-colors hover:text-berry sm:self-auto"
        >
          Explore full collection
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
      {!displayCatalog ? (
        <div
          className="flex min-h-[min(380px,50svh)] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-foreground/15 bg-muted/20"
          role="status"
          aria-live="polite"
          aria-busy="true"
        >
          <Loader2 className="h-10 w-10 animate-spin text-berry" aria-hidden />
          <span className="text-sm font-medium text-muted-foreground">Loading edits…</span>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 items-stretch gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {displayCatalog.slice(0, featuredVisible).map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          {featuredVisible < featuredTotal ? (
            <div className="mt-10 flex flex-col items-center">
              {loadMoreBusy ? (
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
                  <span className="text-sm font-medium text-muted-foreground">Loading more pieces…</span>
                  <span className="sr-only">Loading more products</span>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setLoadMoreBusy(true);
                    if (loadMoreTimerRef.current !== null) clearTimeout(loadMoreTimerRef.current);
                    loadMoreTimerRef.current = setTimeout(() => {
                      loadMoreTimerRef.current = null;
                      setFeaturedVisible((n) => Math.min(featuredTotal, n + HOME_FEATURED_LOAD_MORE));
                      setLoadMoreBusy(false);
                    }, HOME_VIEW_MORE_LOADER_MS);
                  }}
                  className="inline-flex min-h-[48px] min-w-[200px] cursor-pointer items-center justify-center rounded-full border-2 border-foreground bg-background px-10 py-3 font-body text-sm font-bold uppercase tracking-[0.15em] text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  View more
                </button>
              )}
            </div>
          ) : null}
        </>
      )}
    </section>
  );
}

function HomePage() {
  const [active, setActive] = useState(0);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % slides.length), 6500);
    return () => clearInterval(id);
  }, []);

  const goPrev = () => setActive((a) => (a - 1 + slides.length) % slides.length);
  const goNext = () => setActive((a) => (a + 1) % slides.length);

  return (
    <div>
      {/* HERO CAROUSEL — Full 100vh impact with centered content */}
      <section className="relative left-1/2 w-[100dvw] max-w-[100dvw] -translate-x-1/2 overflow-x-hidden">
        <div className="relative w-full max-w-none">
          <div className="relative h-[100vh] w-full min-h-[600px] overflow-hidden">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                  i === active ? "z-[1] opacity-100" : "pointer-events-none z-0 opacity-0"
                }`}
                style={{ backgroundColor: `color-mix(in oklab, ${s.bg} 22%, var(--cream))` }}
                aria-hidden={i !== active}
              >
                <img
                  src={s.image}
                  alt={`${s.titleA} ${s.titleB}`}
                  className="absolute inset-0 z-[1] h-full w-full max-w-none object-cover object-top"
                  draggable={false}
                />
                <div className="pointer-events-none absolute inset-0 z-[2] bg-black/50 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

                <div className={`absolute inset-0 z-[3] flex items-center p-6 sm:p-12 lg:p-24 ${s.align === 'left' ? 'justify-start text-left' : s.align === 'right' ? 'justify-end text-right' : 'justify-center text-center'}`}>
                  <div className="w-full max-w-3xl text-background">
                    {i === active ? (
                      <>
                        <div className={`mb-6 flex animate-pop-in ${s.align === 'left' ? 'justify-start' : s.align === 'right' ? 'justify-end' : 'justify-center'}`}>
                          <span className="rounded-full border border-primary px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-primary backdrop-blur-sm">
                            {s.eyebrow}
                          </span>
                        </div>
                        <h1
                          className="font-display text-6xl font-black leading-[0.9] tracking-tighter uppercase sm:text-7xl lg:text-[7.5rem] animate-fade-up drop-shadow-2xl text-primary"
                          style={{ animationDelay: "0.1s" }}
                        >
                          {s.titleA}
                          <br />
                          <span className="text-white">{s.titleB}</span>
                        </h1>
                        <p
                          className={`mt-8 max-w-2xl text-base font-bold text-white/90 sm:mt-8 sm:text-xl animate-fade-up drop-shadow-lg ${s.align === 'left' ? 'mr-auto' : s.align === 'right' ? 'ml-auto' : 'mx-auto'}`}
                          style={{ animationDelay: "0.25s" }}
                        >
                          {s.subtitle}
                        </p>
                        <div className="mt-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
                          <em className="font-italic-display text-primary text-xl sm:text-2xl lg:text-3xl font-semibold italic">
                            "Build your vision with us"
                          </em>
                        </div>
                        <div className="mt-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                          <Link
                            to={s.to}
                            className="inline-flex items-center gap-4 rounded-full bg-primary px-12 py-5 text-base font-black uppercase tracking-widest text-background shadow-2xl transition-all hover:scale-105 hover:bg-white hover:text-primary active:scale-95"
                          >
                            {s.cta} <ArrowRight className="h-5 w-5" strokeWidth={3} />
                          </Link>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}

            {/* Subtle Controls */}
            <div className="absolute inset-x-0 bottom-12 z-[10] flex items-center justify-center gap-4">
              <button
                onClick={goPrev}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all hover:bg-primary hover:text-background"
                aria-label="Previous slide"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2.5">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 transition-all duration-300 ${
                      i === active ? "w-8 rounded-full bg-primary" : "w-1.5 rounded-full bg-white/40"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={goNext}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all hover:bg-primary hover:text-background"
                aria-label="Next slide"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* USP STRIP */}
      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {[
            { icon: Truck, label: "Dispatch & delivery PAN India • Local pickup in Hyderabad available" },
            { icon: Sparkles, label: "Crepe • tissue • cotton linings handcrafted for fuss-free wear" },
            { icon: RotateCcw, label: "Size guidance on WhatsApp before you checkout" },
            { icon: ShieldCheck, label: "Secure WhatsApp confirmations for every Kathyayani order" },
          ].map((u, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
            >
              <u.icon className="h-4 w-4 shrink-0 text-berry" />
              <span className="text-xs font-semibold sm:text-sm">{u.label}</span>
            </div>
          ))}
        </div>
      </section>



      <FeaturedCelebrationSection />

      {/* MARQUEE */}
      <section className="mt-16 overflow-hidden border-y border-foreground/10 bg-foreground py-5 text-background sm:mt-24">
        <div className="flex animate-marquee whitespace-nowrap font-display text-3xl tracking-tight sm:text-4xl">
          {[...Array(2)].map((_, j) => (
            <div key={j} className="flex shrink-0 items-center gap-10 pr-10">
              {[
                "Kathyayani Kids Wear",
                "Kukatpally • Hyderabad",
                "Party frocks • Lehengas • Ethnic gowns",
                "Crepe • tissue • cotton linings",
                "DM us on WhatsApp for sizing help",
              ].map((t) => (
                <span key={`${t}-${j}`} className="flex items-center gap-10">
                  <span><em className="font-italic-display">{t}</em></span>
                  <span className="text-background/40">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6 lg:px-8">
        <div 
          className="relative overflow-hidden rounded-3xl p-7 text-center sm:p-16"
          style={{ 
            backgroundImage: `url(${ctaBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Styled by Kathyayani</p>
            <h2 className="mt-4 font-display text-4xl text-white sm:text-7xl">
              Outfit planning for <em className="font-italic-display text-primary">big days</em>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base font-medium text-white/80 sm:text-lg">
              Share your event timeline and preferences — we reply with cohesive looks for siblings, cousins and photo-worthy moments alike.
            </p>
            <form
              className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                if (!email.trim()) return;
                toast.success("Thanks! We'll share Kathyayani updates & restock notes soon.");
                setEmail("");
              }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-full border border-white/20 bg-black/40 px-6 py-4 text-sm font-medium text-white placeholder:text-white/40 outline-none backdrop-blur-md focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-8 py-4 text-sm font-black uppercase tracking-widest text-background shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
