import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Leaf, Sparkles, Users } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Tinytots" },
      { name: "description", content: "We make joyful, comfy clothing for kids — designed in India, made to be loved." },
      { property: "og:title", content: "About — Tinytots" },
      { property: "og:description", content: "Joyful, comfy clothing for kids — designed in India." },
      { property: "og:image", content: hero1 },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="font-display text-sm font-bold uppercase tracking-widest text-berry">Our story</p>
        <h1 className="mt-2 font-display text-5xl font-bold sm:text-6xl">
          Made with <span className="text-gradient-berry">tiny love</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Tinytots was born out of a simple wish: kids' clothing that's as joyful and comfy as their
          imaginations are big. Every piece is designed in India, crafted from organic fabrics, and made
          to be passed down between siblings, cousins and best friends.
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl shadow-pop">
        <img src={hero1} alt="Our collection" className="h-full w-full object-cover animate-kenburns-in" />
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Leaf, t: "Organic fabrics", d: "Soft, breathable cotton — kind to skin and planet." },
          { icon: Heart, t: "Designed with care", d: "Tested for comfort by tiny humans we love." },
          { icon: Sparkles, t: "Joyful prints", d: "Pastel rainbows, daisies, dinos and stars." },
          { icon: Users, t: "Family-run", d: "A small studio, big dreams, bigger smiles." },
        ].map((v, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-berry">
              <v.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-3 font-display text-lg font-bold">{v.t}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-3xl bg-gradient-warm p-8 text-center shadow-pop sm:p-12">
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Come say hi 👋</h2>
        <p className="mx-auto mt-2 max-w-lg text-base font-semibold text-foreground/80">
          Got questions, custom orders, or just want to share a cute photo? We're always listening.
        </p>
        <Link
          to="/contact"
          className="mt-5 inline-block rounded-full bg-foreground px-6 py-3 text-sm font-bold text-background shadow-pop"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
