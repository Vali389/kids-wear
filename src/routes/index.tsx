import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { ArrowRight, ArrowLeft, Sparkles, Truck, ShieldCheck, RotateCcw } from "lucide-react";
import heroHome1 from "@/assets/herosectionew-1.jpeg";
import heroHome2 from "@/assets/herosectionnew-2.jpeg";
import heroHome3 from "@/assets/herosectionnew-3.jpeg";
import heroGirls1 from "@/assets/girls-herosectionew-1.jpeg";
import heroGirls2 from "@/assets/Girtsls-herosectiion-new-2.jpeg";
import heroGirls3 from "@/assets/giersherosection-new-3.jpeg";
import heroHome4 from "@/assets/herosectionnew-4.jpeg";
import catParty from "@/assets/herosectionnew-5.jpeg";
import catFestive from "@/assets/herosectionnew-3.jpeg";
import catShop from "@/assets/girls-herosectionew-1.jpeg";
import { products } from "@/data/products";
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
      { property: "og:image", content: heroHome1 },
    ],
  }),
  component: HomePage,
});

const slides = [
  {
    image: heroHome1,
    eyebrow: "Kathyayani Kids Wear",
    titleA: "Party-ready",
    titleB: "girls ensembles",
    subtitle:
      "Frocks, gowns and festive sets with breathable linings — made for birthdays, ceremonies and sparkle-filled days.",
    cta: "Shop collection",
    to: "/shop",
    bg: "var(--peach)",
    align: "left" as const,
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
  {
    image: heroGirls2,
    eyebrow: "Festive staples",
    titleA: "From tiny",
    titleB: "traditions…",
    subtitle: "Pink, maroon & gold classics with pleats, zari and joy in every swirl.",
    cta: "Shop festive",
    to: "/shop",
    bg: "var(--mint)",
    align: "left" as const,
  },
  {
    image: heroGirls3,
    eyebrow: "Curated hues",
    titleA: "Colour stories",
    titleB: "you’ll cherish",
    subtitle: "Handpicked palettes for heirloom portraits and living-room celebrations alike.",
    cta: "See new arrivals",
    to: "/shop",
    bg: "var(--peach)",
    align: "right" as const,
  },
  {
    image: heroHome4,
    eyebrow: "Hyderabad boutique",
    titleA: "Visit us via",
    titleB: "WhatsApp fits",
    subtitle:
      "Order help, sizing notes and stitched ideas — ping us anytime for personalized picks from Kukatpally.",
    cta: "Contact us",
    to: "/contact",
    bg: "var(--sky)",
    align: "left" as const,
  },
  {
    image: heroHome3,
    eyebrow: "Quality promise",
    titleA: "Comfort linings",
    titleB: "behind glamour",
    subtitle: "Cotton-soft layers where kids need them, so glamour never feels itchy.",
    cta: "Read about us",
    to: "/about",
    bg: "var(--sunshine)",
    align: "right" as const,
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
      {/* HERO CAROUSEL — full viewport WIDTH (breakout); height unchanged; object-contain = whole photo visible (tint in letterboxing) */}
      <section className="relative left-1/2 w-[100dvw] max-w-[100dvw] -translate-x-1/2 overflow-x-hidden">
        <div className="relative w-full max-w-none">
          <div className="relative h-[min(48svh,420px)] w-full min-h-[300px] overflow-hidden sm:h-[min(50svh,460px)] sm:min-h-[320px] md:h-[min(52svh,500px)]">
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
                  className="absolute inset-0 z-[1] h-full w-full max-w-none object-contain object-center"
                  draggable={false}
                />
                <div
                  className={`pointer-events-none absolute inset-0 z-[2] ${
                    s.align === "left"
                      ? "bg-gradient-to-t from-foreground/55 via-foreground/15 to-transparent sm:bg-gradient-to-r sm:from-foreground/45 sm:via-foreground/10 sm:to-transparent"
                      : "bg-gradient-to-t from-foreground/55 via-foreground/15 to-transparent sm:bg-gradient-to-l sm:from-foreground/45 sm:via-foreground/10 sm:to-transparent"
                  }`}
                />
                <div
                  className={`absolute inset-0 z-[3] flex items-end ${
                    s.align === "left" ? "sm:items-center sm:justify-start" : "sm:items-center sm:justify-end"
                  }`}
                >
                  <div className="w-full max-w-xl p-5 pb-10 sm:p-9 sm:pb-9 lg:p-12 lg:pb-11 text-background">
                    {i === active ? (
                      <>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-background/95 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-foreground animate-pop-in">
                          <Sparkles className="h-3 w-3" /> {s.eyebrow}
                        </span>
                        <h1
                          className="mt-4 font-display text-4xl leading-[0.98] sm:mt-5 sm:text-5xl sm:leading-[0.95] lg:text-[4.5rem] animate-fade-up"
                          style={{ animationDelay: "0.1s" }}
                        >
                          {s.titleA}
                          <br />
                          <em className="font-italic-display">{s.titleB}</em>
                        </h1>
                        <p
                          className="mt-4 max-w-md text-sm font-medium text-background/95 sm:mt-5 sm:text-base animate-fade-up"
                          style={{ animationDelay: "0.25s" }}
                        >
                          {s.subtitle}
                        </p>
                        <Link
                          to={s.to}
                          className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-pop transition-all hover:bg-foreground hover:text-background sm:mt-7 animate-fade-up"
                          style={{ animationDelay: "0.4s" }}
                        >
                          {s.cta} <ArrowRight className="h-4 w-4" />
                        </Link>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}

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

      {/* CATEGORIES — girls-focused only */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-berry">Shop the edit</p>
            <h2 className="mt-2 font-display text-4xl sm:text-6xl">
              Girls <em className="font-italic-display">festive staples</em>
            </h2>
          </div>
          <Link to="/shop" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-berry">
            Shop everything <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
          {[
            {
              to: "/shop",
              image: catParty,
              title: "Party gowns",
              color: "var(--sunshine)",
              desc: "Layered skirts, bows & dramatic hems",
            },
            {
              to: "/shop",
              image: catFestive,
              title: "Festive saree looks",
              color: "var(--peach)",
              desc: "Pattu moods, chunky work & heirloom polish",
            },
            {
              to: "/girls",
              image: catShop,
              title: "Full girls closet",
              color: "var(--mint)",
              desc: "Handpicked staples for birthdays & pujas",
            },
          ].map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="group relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl"
              style={{ backgroundColor: `color-mix(in oklab, ${c.color} 25%, var(--cream))` }}
            >
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="h-full max-h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/75 via-foreground/25 to-transparent p-6 text-background">
                <h3 className="font-display text-4xl">{c.title}</h3>
                <p className="text-sm font-medium opacity-95">{c.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold">
                  Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-berry">Featured</p>
            <h2 className="mt-2 font-display text-4xl sm:text-6xl">
              Curated by <em className="font-italic-display">Kathyayani</em>
            </h2>
          </div>
          <Link to="/shop" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-berry">
            Shop all pieces <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </section>

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
        <div className="overflow-hidden rounded-3xl bg-gradient-warm p-7 text-center sm:p-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">Styled by Kathyayani</p>
          <h2 className="mt-3 font-display text-3xl sm:text-6xl">
            Outfit planning for <em className="font-italic-display">big days</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base font-medium text-foreground/75">
            Share your event timeline and preferences — we reply with cohesive looks for siblings, cousins and photo-worthy moments alike.
          </p>
          <form
            className="mx-auto mt-7 flex w-full max-w-md flex-col gap-2 sm:flex-row"
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
