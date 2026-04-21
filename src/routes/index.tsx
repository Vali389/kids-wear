import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ArrowRight, ArrowLeft, Sparkles, Truck, ShieldCheck, RotateCcw, Leaf } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import hero4 from "@/assets/hero-4.jpg";
import hero5 from "@/assets/hero-5.jpg";
import catGirls from "@/assets/cat-girls.jpg";
import catBoys from "@/assets/cat-boys.jpg";
import catBaby from "@/assets/cat-baby.jpg";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tinytots — Modern Kids Wear" },
      { name: "description", content: "Modern, comfortable and beautifully designed clothing for kids. Dresses, tees, hoodies, dungarees and more." },
      { property: "og:title", content: "Tinytots — Modern Kids Wear" },
      { property: "og:description", content: "Modern, comfortable and beautifully designed clothing for kids." },
      { property: "og:image", content: hero1 },
    ],
  }),
  component: HomePage,
});

const slides = [
  {
    image: hero1,
    eyebrow: "Spring '26 Edit",
    titleA: "Tiny outfits,",
    titleB: "big personalities",
    subtitle: "A new collection of soft pastels and pieces designed to be loved, lived in, and passed down.",
    cta: "Shop the collection",
    to: "/shop",
    bg: "var(--peach)",
    align: "left" as const,
    anim: "animate-kenburns-in",
  },
  {
    image: hero2,
    eyebrow: "For the boys",
    titleA: "Built for ",
    titleB: "backyard adventures",
    subtitle: "Soft denim, cosy hoodies and joggers designed to keep up with every jump.",
    cta: "Shop boys",
    to: "/boys",
    bg: "var(--sky)",
    align: "right" as const,
    anim: "animate-kenburns-out",
  },
  {
    image: hero3,
    eyebrow: "Tiny humans",
    titleA: "Buttery soft,",
    titleB: "made for cuddles",
    subtitle: "Knitwear, dungarees and PJs in organic cotton — gentle on baby skin from day one.",
    cta: "Shop baby",
    to: "/baby",
    bg: "var(--mint)",
    align: "left" as const,
    anim: "animate-kenburns-in",
  },
  {
    image: hero4,
    eyebrow: "Sunshine days",
    titleA: "Made for ",
    titleB: "wildflower runs",
    subtitle: "Breezy dresses and easy overalls in earthy pastels — perfect for chasing the sun.",
    cta: "Shop new arrivals",
    to: "/shop",
    bg: "var(--peach)",
    align: "right" as const,
    anim: "animate-kenburns-out",
  },
  {
    image: hero5,
    eyebrow: "Squad goals",
    titleA: "Best friends,",
    titleB: "best fits",
    subtitle: "Coordinated colour stories so the whole crew looks (and feels) their happy best.",
    cta: "Shop the edit",
    to: "/shop",
    bg: "var(--lavender)",
    align: "left" as const,
    anim: "animate-kenburns-in",
  },
];

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
      {/* HERO CAROUSEL */}
      <section className="relative">
        <div className="relative w-full">
          <div className="relative overflow-hidden">
            <div className="relative h-[82svh] min-h-[500px] w-full sm:h-[100svh] sm:min-h-[560px]">
              {slides.map((s, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    i === active ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                  style={{ backgroundColor: `color-mix(in oklab, ${s.bg} 25%, var(--cream))` }}
                >
                  <img
                    src={s.image}
                    alt={`${s.titleA} ${s.titleB}`}
                    className={`h-full w-full object-cover ${i === active ? s.anim : ""}`}
                  />
                  <div
                    className={`absolute inset-0 ${
                      s.align === "left"
                        ? "bg-gradient-to-t from-foreground/55 via-foreground/15 to-transparent sm:bg-gradient-to-r sm:from-foreground/45 sm:via-foreground/10 sm:to-transparent"
                        : "bg-gradient-to-t from-foreground/55 via-foreground/15 to-transparent sm:bg-gradient-to-l sm:from-foreground/45 sm:via-foreground/10 sm:to-transparent"
                    }`}
                  />
                  <div
                    className={`absolute inset-0 flex items-end ${
                      s.align === "left" ? "sm:items-center sm:justify-start" : "sm:items-center sm:justify-end"
                    }`}
                  >
                    <div className="w-full max-w-xl p-5 pb-8 sm:p-12 lg:p-16 text-background">
                      {i === active && (
                        <>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-background/95 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-foreground animate-pop-in">
                            <Sparkles className="h-3 w-3" /> {s.eyebrow}
                          </span>
                          <h1
                            className="mt-4 font-display text-4xl leading-[0.98] sm:mt-5 sm:text-6xl sm:leading-[0.95] lg:text-[5.5rem] animate-fade-up"
                            style={{ animationDelay: "0.1s" }}
                          >
                            {s.titleA}
                            <br />
                            <em className="font-italic-display">{s.titleB}</em>
                          </h1>
                          <p
                            className="mt-4 max-w-md text-sm font-medium text-background/95 sm:mt-5 sm:text-lg animate-fade-up"
                            style={{ animationDelay: "0.25s" }}
                          >
                            {s.subtitle}
                          </p>
                          <Link
                            to={s.to}
                            className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-pop transition-all hover:bg-foreground hover:text-background sm:mt-7 sm:px-7 sm:py-3.5 animate-fade-up"
                            style={{ animationDelay: "0.4s" }}
                          >
                            {s.cta} <ArrowRight className="h-4 w-4" />
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel arrows */}
            <button
              onClick={goPrev}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-background/85 text-foreground backdrop-blur transition-all hover:bg-background hover:scale-105 sm:grid"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={goNext}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-background/85 text-foreground backdrop-blur transition-all hover:bg-background hover:scale-105 sm:grid"
            >
              <ArrowRight className="h-5 w-5" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === active ? "w-8 bg-background" : "w-1.5 bg-background/60 hover:bg-background/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USP STRIP */}
      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {[
            { icon: Truck, label: "Free shipping over ₹999" },
            { icon: Leaf, label: "100% organic cotton" },
            { icon: RotateCcw, label: "Easy 7-day returns" },
            { icon: ShieldCheck, label: "Secure checkout" },
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

      {/* CATEGORIES */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-berry">Shop by category</p>
            <h2 className="mt-2 font-display text-4xl sm:text-6xl">
              Tiny <em className="font-italic-display">categories</em>
            </h2>
          </div>
          <Link to="/shop" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-berry">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
          {[
            { to: "/girls" as const, image: catGirls, title: "Girls", color: "var(--peach)", desc: "Dresses, skirts & more" },
            { to: "/boys" as const, image: catBoys, title: "Boys", color: "var(--sky)", desc: "Tees, denim & hoodies" },
            { to: "/baby" as const, image: catBaby, title: "Baby", color: "var(--mint)", desc: "Onesies, PJs & knits" },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group relative block aspect-[4/5] overflow-hidden rounded-2xl"
              style={{ backgroundColor: `color-mix(in oklab, ${c.color} 25%, var(--cream))` }}
            >
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/75 via-foreground/25 to-transparent p-6 text-background">
                <h3 className="font-display text-4xl">{c.title}</h3>
                <p className="text-sm font-medium opacity-95">{c.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold">
                  Shop now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-berry">Just dropped</p>
            <h2 className="mt-2 font-display text-4xl sm:text-6xl">
              New <em className="font-italic-display">favourites</em>
            </h2>
          </div>
          <Link to="/shop" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-berry">
            Shop all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.slice(0, 8).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <section className="mt-16 overflow-hidden border-y border-foreground/10 bg-foreground py-5 text-background sm:mt-24">
        <div className="flex animate-marquee whitespace-nowrap font-display text-3xl tracking-tight sm:text-4xl">
          {[...Array(2)].map((_, j) => (
            <div key={j} className="flex shrink-0 items-center gap-10 pr-10">
              {["Made with love", "Free shipping over ₹999", "100% organic cotton", "Easy 7-day returns", "Designed in India"].map((t) => (
                <span key={t} className="flex items-center gap-10">
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
        <div className="overflow-hidden rounded-3xl bg-gradient-warm p-7 text-center sm:p-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">Join the tribe</p>
          <h2 className="mt-3 font-display text-3xl sm:text-6xl">
            Be the first to know about <em className="font-italic-display">new drops</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-medium text-foreground/75">
            Sign up for early access, exclusive sales and 10% off your first order.
          </p>
          <form
            className="mx-auto mt-7 flex w-full max-w-md flex-col gap-2 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              if (!email.trim()) return;
              toast.success("You're subscribed. Welcome to Tinytots updates!");
              setEmail("");
            }}
          >
            <input
              type="email"
              placeholder="you@happy.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-full border border-border bg-background px-5 py-3.5 text-sm font-medium outline-none focus:border-berry focus:ring-2 focus:ring-berry/20"
            />
            <button
              type="submit"
              className="rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-transform active:scale-95"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
