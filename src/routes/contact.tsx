import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Tinytots" },
      { name: "description", content: "Reach out to the Tinytots team — we'd love to hear from you." },
      { property: "og:title", content: "Contact — Tinytots" },
      { property: "og:description", content: "Reach out to the Tinytots team." },
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
          Questions, custom orders, or just want to chat? We reply faster than a toddler at snack time.
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
            { icon: Mail, t: "Email", d: "hello@tinytots.com", href: "mailto:hello@tinytots.com" },
            { icon: MapPin, t: "Studio", d: "Bengaluru, India" },
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
