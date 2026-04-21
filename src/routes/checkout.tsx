import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useCart } from "@/store/cart";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Tinytots" },
      { name: "description", content: "Complete your order via WhatsApp." },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    notes: "",
  });

  const total = subtotal();
  const shipping = total >= 999 || total === 0 ? 0 : 79;
  const grand = total + shipping;

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const placeOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) {
      toast.error("Your bag is empty");
      return;
    }

    const itemLines = items
      .map(
        (i, idx) =>
          `${idx + 1}. ${i.name} | Size: ${i.size} | Qty: ${i.qty} | ₹${(i.price * i.qty).toLocaleString("en-IN")}`,
      )
      .join("\n");

    const msg = `🌈 *NEW ORDER — Tinytots*

*Customer:* ${form.name}
*Phone:* ${form.phone}
*Email:* ${form.email || "—"}

*Shipping Address:*
${form.address}
${form.city}, ${form.state} - ${form.pincode}

*Order Items:*
${itemLines}

*Subtotal:* ₹${total.toLocaleString("en-IN")}
*Shipping:* ${shipping === 0 ? "FREE" : `₹${shipping}`}
*Total:* ₹${grand.toLocaleString("en-IN")}

${form.notes ? `*Notes:* ${form.notes}` : ""}

Please confirm my order. Thank you! 🎉`;

    const phoneNumber = "917995889904"; // 91 country code + number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(msg)}`;

    window.open(url, "_blank");
    toast.success("Opening WhatsApp to confirm your order!");
    clear();
    setTimeout(() => navigate({ to: "/" }), 1500);
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <div className="grid h-24 w-24 mx-auto place-items-center rounded-full bg-accent text-4xl">🧸</div>
        <h1 className="mt-4 font-display text-3xl font-bold">Your bag is empty</h1>
        <p className="mt-2 text-muted-foreground">Add some happy outfits to checkout.</p>
        <Link
          to="/shop"
          className="mt-6 inline-block rounded-full bg-berry px-6 py-3 text-sm font-bold text-berry-foreground shadow-pop"
        >
          Start shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <p className="font-display text-sm font-bold uppercase tracking-widest text-berry">Almost there</p>
        <h1 className="mt-1 font-display text-4xl font-bold sm:text-5xl">Checkout</h1>
        <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
          Fill in your details — we'll confirm via WhatsApp.
        </p>
      </div>

      <form onSubmit={placeOrder} className="grid gap-8 lg:grid-cols-[1fr_400px]">
        {/* FORM */}
        <div className="space-y-6 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <h2 className="font-display text-xl font-bold">Billing & Shipping</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" required value={form.name} onChange={update("name")} />
            <Field label="Phone" required type="tel" value={form.phone} onChange={update("phone")} />
          </div>
          <Field label="Email (optional)" type="email" value={form.email} onChange={update("email")} />
          <Field label="Address" required value={form.address} onChange={update("address")} />
          <div className="grid gap-4 sm:grid-cols-3">
            <Field label="City" required value={form.city} onChange={update("city")} />
            <Field label="State" required value={form.state} onChange={update("state")} />
            <Field label="Pincode" required value={form.pincode} onChange={update("pincode")} />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-muted-foreground">
              Order notes (optional)
            </label>
            <textarea
              value={form.notes}
              onChange={update("notes")}
              rows={3}
              placeholder="Anything we should know?"
              className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium outline-none focus:border-berry"
            />
          </div>
        </div>

        {/* SUMMARY */}
        <aside className="space-y-4">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h2 className="font-display text-xl font-bold">Order summary</h2>
            <ul className="mt-4 space-y-3">
              {items.map((i) => (
                <li key={i.id} className="flex gap-3">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-muted">
                    <img src={i.image} alt={i.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1 text-sm">
                    <p className="font-display font-bold leading-tight">{i.name}</p>
                    <p className="text-xs text-muted-foreground">Size {i.size} · Qty {i.qty}</p>
                  </div>
                  <span className="font-display text-sm font-bold">
                    ₹{(i.price * i.qty).toLocaleString("en-IN")}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 space-y-1 border-t border-border pt-4 text-sm">
              <Row label="Subtotal" value={`₹${total.toLocaleString("en-IN")}`} />
              <Row label="Shipping" value={shipping === 0 ? "FREE" : `₹${shipping}`} />
              <div className="my-2 h-px bg-border" />
              <Row label="Total" value={`₹${grand.toLocaleString("en-IN")}`} bold />
            </div>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-display text-base font-bold text-white shadow-pop transition-transform hover:scale-[1.02] active:scale-95"
          >
            <MessageCircle className="h-5 w-5 fill-white" />
            Place order via WhatsApp
            <ArrowRight className="h-5 w-5" />
          </button>
          <p className="text-center text-xs text-muted-foreground">
            We'll open WhatsApp with your order details to confirm.
          </p>
        </aside>
      </form>
    </div>
  );
}

function Field({
  label,
  required,
  type = "text",
  value,
  onChange,
}: {
  label: string;
  required?: boolean;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-muted-foreground">
        {label} {required && <span className="text-berry">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium outline-none focus:border-berry"
      />
    </div>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className={bold ? "font-display text-base font-bold" : "text-muted-foreground"}>{label}</span>
      <span className={bold ? "font-display text-lg font-bold text-berry" : "font-bold"}>{value}</span>
    </div>
  );
}
