import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Leaf, Sparkles, Users } from "lucide-react";
import aboutHero from "@/assets/herosectionnew-4.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Kathyayani Kids Wear" },
      {
        name: "description",
        content:
          "Kathyayani Kids Wear — party frocks & festive girls wear from our studio in Kukatpally, Hyderabad.",
      },
      { property: "og:title", content: "About — Kathyayani Kids Wear" },
      {
        property: "og:description",
        content: "Party & festive ensembles with comfortable cotton linings.",
      },
      { property: "og:image", content: aboutHero },
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
          <span className="text-gradient-berry">Kathyayani</span> Kids Wear
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          We focus on festive and party-ready girls&apos; wear — long frocks, gowns, lehengas and ethnic
          pieces lined with cotton so children stay comfortable through long celebrations. Based in{" "}
          <span className="font-semibold text-foreground">
            Sardar Patel nagar, Kukatpally, Hyderabad — 500085
          </span>
          .
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-3xl shadow-pop">
        <img
          src={aboutHero}
          alt="Kathyayani Kids Wear collection"
          className="h-full w-full animate-kenburns-in object-cover"
        />
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Leaf, t: "Comfortable linings", d: "Cotton lining on tissue and layered pieces where it matters." },
          { icon: Heart, t: "Made for celebrations", d: "Birthdays, functions & festivals — designed to shine." },
          { icon: Sparkles, t: "Ethnic & party edit", d: "Frocks, zari borders, gowns and floral details." },
          { icon: Users, t: "Local studio", d: "Pickup and sizing help at our Kukatpally address." },
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
        <h2 className="font-display text-3xl font-bold sm:text-4xl">Visit or message us</h2>
        <p className="mx-auto mt-2 max-w-lg text-base font-semibold text-foreground/80">
          Questions about sizes, fabric or WhatsApp ordering? We&apos;d love to help.
        </p>
        <Link
          to="/contact"
          className="mt-5 inline-block rounded-full bg-foreground px-6 py-3 text-sm font-bold text-background shadow-pop"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
