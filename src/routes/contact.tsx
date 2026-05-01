import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kathyayani Kids Wear" },
      { name: "description", content: "Visit or message Kathyayani Kids Wear — Kukatpally, Hyderabad." },
      { property: "og:title", content: "Contact — Kathyayani Kids Wear" },
      { property: "og:description", content: "Party wear & ethnic ensembles — Kukatpally, Hyderabad." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="font-display text-sm font-bold uppercase tracking-widest text-berry">Say hello</p>
        <h1 className="mt-1 font-display text-5xl font-bold sm:text-6xl">Get in touch</h1>
        <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
          Sizes, pickups at our Kukatpally studio or WhatsApp ordering — we're happy to help.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_360px]">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            toast.success("Thanks! We'll get back to you soon 🌈");
            setForm({ name: "", email: "", message: "" });
          }}
          className="space-y-4 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-muted-foreground">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium outline-none focus:border-berry"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-muted-foreground">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium outline-none focus:border-berry"
              />
            </div>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-muted-foreground">Message</label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium outline-none focus:border-berry"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-gradient-berry py-3.5 font-display text-base font-bold text-berry-foreground shadow-pop transition-transform hover:scale-[1.02] active:scale-95"
          >
            Send message
          </button>
        </form>

        <aside className="space-y-3">
          {[
            { icon: Phone, t: "Call us", d: "+91 79958 89904" },
            { icon: MessageCircle, t: "WhatsApp", d: "+91 79958 89904", href: "https://wa.me/917995889904" },
            { icon: Mail, t: "Write to us", d: "Send a note via the form →" },
            {
              icon: MapPin,
              t: "Studio",
              d: "202, Niharika residency, Sardar Patel nagar, Kukatpally — 500085",
            },
          ].map((c, i) => {
            const Inner = (
              <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft transition-transform hover:-translate-y-0.5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent text-berry">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{c.t}</p>
                  <p className="font-display text-base font-bold">{c.d}</p>
                </div>
              </div>
            );
            return c.href ? (
              <a key={i} href={c.href} target="_blank" rel="noopener noreferrer">{Inner}</a>
            ) : (
              <div key={i}>{Inner}</div>
            );
          })}
        </aside>
      </div>
    </div>
  );
}
