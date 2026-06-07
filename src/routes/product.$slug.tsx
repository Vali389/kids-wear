import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { toast } from "sonner";
import { Heart, Minus, Plus, ShieldCheck, ShoppingBag, Truck, RotateCcw, ChevronRight, Check, X, Ruler } from "lucide-react";
import { findProduct, products, resolveProductSlug } from "@/data/products";
import { useCart } from "@/store/cart";
import { ProductCard } from "@/components/ProductCard";
import { ProductImageZoom } from "@/components/ProductImageZoom";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params, location }) => {
    const slug = resolveProductSlug(params, location.pathname);
    const product = findProduct(slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Kathyayani Kids Wear` },
          { name: "description", content: loaderData.product.shortDescription },
          { property: "og:title", content: `${loaderData.product.name} — Kathyayani Kids Wear` },
          { property: "og:description", content: loaderData.product.shortDescription },
          { property: "og:image", content: loaderData.product.images[0] },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-md px-4 py-20 text-center">
      <h1 className="font-display text-5xl">Product not found</h1>
      <p className="mt-2 text-muted-foreground">This little outfit must have run off.</p>
      <Link to="/shop" className="mt-6 inline-block rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background">
        Back to shop
      </Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState(product.sizes[1] ?? product.sizes[0]);
  const [qty, setQty] = useState(1);
  const [wishlisted, setWishlisted] = useState(false);
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);

  const addItem = useCart((s) => s.addItem);
  const openCart = useCart((s) => s.open);

  /**
   * Size-based pricing: if a product description encodes price steps like
   * "3–4Y ₹1,150 • 4–5Y ₹1,300 …" we parse them into a lookup map so the
   * displayed price updates when the user picks a size.
   */
  const sizePriceMap = useMemo<Record<string, number>>(() => {
    const map: Record<string, number> = {};
    // Match patterns like "3-4Y ₹1,150" or "3–4Y ₹1150"
    const rx = /([\d][\d\-–]+[YMy]+)\s*[₹]([\d,]+)/g;
    let m: RegExpExecArray | null;
    while ((m = rx.exec(product.description)) !== null) {
      const sizeKey = m[1].replace("–", "-");
      const price = Number(m[2].replace(/,/g, ""));
      if (!isNaN(price)) map[sizeKey] = price;
    }
    return map;
  }, [product.description]);

  const activePrice = sizePriceMap[size] ?? sizePriceMap[size.replace("-", "–")] ?? product.price;
  const activeMrp = product.mrp;

  const discount =
    activeMrp > activePrice
      ? Math.round(((activeMrp - activePrice) / activeMrp) * 100)
      : 0;

  const handleAdd = (buyNow = false) => {
    addItem(
      {
        productId: product.id,
        slug: product.slug,
        name: product.name,
        price: activePrice,
        size,
        image: product.images[0],
      },
      qty,
    );
    toast.success(`${product.name} (Size ${size}) added to bag`);
    if (buyNow) openCart();
  };

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/shop" className="hover:text-foreground">Shop</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="capitalize text-foreground">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        {/* GALLERY */}
        <div className="flex flex-col gap-3">
          <ProductImageZoom
            key={activeImage}
            src={product.images[activeImage]}
            alt={product.name}
            bgTint={product.colorChip}
            badges={
              product.badge || discount > 0 ? (
                <div className="flex w-full items-start justify-between gap-2">
                  {product.badge ? (
                    <span className="inline-flex rounded-full bg-foreground px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-background">
                      {product.badge}
                    </span>
                  ) : null}
                  {discount > 0 ? (
                    <span className="inline-flex rounded-full bg-berry px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-berry-foreground">
                      -{discount}% OFF
                    </span>
                  ) : null}
                </div>
              ) : undefined
            }
          />

          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {product.images.map((img: string, i: number) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-xl transition-all ${
                  i === activeImage
                    ? "ring-2 ring-foreground ring-offset-2 ring-offset-background"
                    : "opacity-65 hover:opacity-100"
                }`}
                style={{ backgroundColor: `color-mix(in oklab, ${product.colorChip} 12%, var(--cream))` }}
                aria-label={`View image ${i + 1}`}
              >
                <img src={img} alt="" className="max-h-full w-full object-contain p-1" />
              </button>
            ))}
          </div>
        </div>

        {/* DETAILS */}
        <div className="lg:sticky lg:top-28 lg:self-start space-y-7">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-berry">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </p>
            <h1 className="mt-2 font-display text-5xl leading-[1.02] sm:text-6xl">
              {product.name}
            </h1>
            <p className="mt-4 text-base text-muted-foreground">{product.shortDescription}</p>
            <p className="mt-2 text-sm font-semibold text-foreground">{product.ageLabel}</p>
            {product.stockNote ? (
              <p className="mt-1 text-sm font-medium text-berry">{product.stockNote}</p>
            ) : null}
          </div>

          {/* Price */}
          <div className="flex items-end gap-3">
            <span className="font-display text-4xl text-foreground">
              ₹{activePrice.toLocaleString("en-IN")}
            </span>
            {activeMrp > activePrice && (
              <>
                <span className="pb-1.5 text-base text-muted-foreground line-through">
                  ₹{activeMrp.toLocaleString("en-IN")}
                </span>
                <span className="mb-1.5 rounded-full bg-mint px-2.5 py-0.5 text-xs font-bold text-mint-foreground">
                  Save {discount}%
                </span>
              </>
            )}
          </div>

          <div className="h-px bg-border" />

          {/* SIZES */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold">
                Size <span className="text-muted-foreground">·</span>{" "}
                <span className="font-bold">{size}</span>
              </p>
              <button
                onClick={() => setSizeGuideOpen(true)}
                className="flex items-center gap-1 text-xs font-semibold text-berry underline underline-offset-2 hover:text-foreground transition-colors"
              >
                <Ruler className="h-3.5 w-3.5" />
                Size guide
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s: string) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`min-w-[68px] rounded-full border px-4 py-2.5 text-sm font-semibold transition-all ${
                    size === s
                      ? "border-foreground bg-foreground text-background"
                      : "border-border bg-card hover:border-foreground/40"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* QTY + ACTIONS */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center rounded-full border border-border bg-card p-1">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="grid h-9 w-9 place-items-center rounded-full hover:bg-accent"
                  aria-label="Decrease"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center font-semibold">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="grid h-9 w-9 place-items-center rounded-full hover:bg-accent"
                  aria-label="Increase"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={() => setWishlisted((w) => !w)}
                aria-label="Add to wishlist"
                className={`grid h-11 w-11 place-items-center rounded-full border border-border transition-all ${
                  wishlisted ? "border-berry bg-berry/10 text-berry" : "bg-card hover:border-foreground/40"
                }`}
              >
                <Heart className={`h-4 w-4 ${wishlisted ? "fill-current" : ""}`} />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              <button
                onClick={() => handleAdd(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-foreground hover:text-background active:scale-[0.98]"
              >
                <ShoppingBag className="h-4 w-4" /> Add to bag
              </button>
              <button
                onClick={() => handleAdd(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-all hover:bg-berry active:scale-[0.98]"
              >
                Buy now <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* USPs */}
          <div className="grid grid-cols-3 gap-2 rounded-2xl border border-border bg-card p-4">
            {[
              { icon: Truck, t: "Free over ₹999" },
              { icon: RotateCcw, t: "7-day returns" },
              { icon: ShieldCheck, t: "Secure checkout" },
            ].map((u, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <u.icon className="h-5 w-5 text-berry" />
                <span className="mt-1.5 text-[11px] font-semibold sm:text-xs">{u.t}</span>
              </div>
            ))}
          </div>

          {/* DESCRIPTION */}
          <div className="space-y-5 border-t border-border pt-6">
            <div>
              <h3 className="font-display text-2xl">Description</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-xl">Fabric</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{product.fabric}</p>
              </div>
              <div>
                <h3 className="font-display text-xl">Care</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{product.care}</p>
              </div>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {[
                "Designed in India",
                "Skin-friendly dyes",
                "Reinforced stitching",
                "Pre-shrunk fabric",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                  <Check className="h-4 w-4 text-berry" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="mb-8 font-display text-4xl sm:text-5xl">
            You might also <em className="font-italic-display">love</em>
          </h2>
          <div className="grid grid-cols-2 items-stretch gap-4 sm:gap-6 md:grid-cols-4">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}

      {/* SIZE GUIDE MODAL */}
      {sizeGuideOpen && (
        <SizeGuideModal category={product.category} onClose={() => setSizeGuideOpen(false)} />
      )}
    </div>
  );
}

/* ── Size Guide Modal ──────────────────────────────────────────────── */
function SizeGuideModal({ category, onClose }: { category: string; onClose: () => void }) {
  const babyRows = [
    { size: "Newborn", age: "0–1 month",   chest: "36–38", waist: "36–38", height: "50–54" },
    { size: "0–3M",    age: "0–3 months",  chest: "38–41", waist: "38–40", height: "54–61" },
    { size: "3–6M",    age: "3–6 months",  chest: "41–44", waist: "40–43", height: "61–67" },
    { size: "6–12M",   age: "6–12 months", chest: "44–47", waist: "43–46", height: "67–76" },
    { size: "12–18M",  age: "12–18 months",chest: "47–50", waist: "46–49", height: "76–82" },
    { size: "1–2Y",    age: "1–2 years",   chest: "50–53", waist: "49–51", height: "82–92" },
    { size: "2–3Y",    age: "2–3 years",   chest: "53–56", waist: "51–53", height: "92–98" },
  ];

  const girlsRows = [
    { size: "2–3Y",   age: "2–3 years",   chest: "53–56", waist: "51–53", height: "92–98"   },
    { size: "3–4Y",   age: "3–4 years",   chest: "56–59", waist: "53–55", height: "98–104"  },
    { size: "4–5Y",   age: "4–5 years",   chest: "59–62", waist: "55–57", height: "104–110" },
    { size: "5–6Y",   age: "5–6 years",   chest: "62–65", waist: "57–59", height: "110–116" },
    { size: "6–7Y",   age: "6–7 years",   chest: "65–68", waist: "59–61", height: "116–122" },
    { size: "7–8Y",   age: "7–8 years",   chest: "68–71", waist: "61–63", height: "122–128" },
    { size: "8–10Y",  age: "8–10 years",  chest: "71–76", waist: "63–66", height: "128–138" },
    { size: "10–12Y", age: "10–12 years", chest: "76–81", waist: "66–69", height: "138–148" },
    { size: "12–14Y", age: "12–14 years", chest: "81–86", waist: "69–72", height: "148–158" },
  ];

  const boysRows = [
    { size: "1–2Y",   age: "1–2 years",   chest: "50–53", waist: "49–51", height: "82–92"   },
    { size: "2–3Y",   age: "2–3 years",   chest: "53–56", waist: "51–53", height: "92–98"   },
    { size: "3–4Y",   age: "3–4 years",   chest: "56–59", waist: "53–55", height: "98–104"  },
    { size: "4–5Y",   age: "4–5 years",   chest: "59–62", waist: "55–57", height: "104–110" },
    { size: "5–6Y",   age: "5–6 years",   chest: "62–65", waist: "57–59", height: "110–116" },
    { size: "6–7Y",   age: "6–7 years",   chest: "65–68", waist: "59–61", height: "116–122" },
    { size: "7–8Y",   age: "7–8 years",   chest: "68–71", waist: "61–63", height: "122–128" },
    { size: "8–9Y",   age: "8–9 years",   chest: "71–74", waist: "63–65", height: "128–133" },
    { size: "9–10Y",  age: "9–10 years",  chest: "74–77", waist: "65–67", height: "133–138" },
    { size: "10–11Y", age: "10–11 years", chest: "77–80", waist: "67–69", height: "138–143" },
    { size: "11–12Y", age: "11–12 years", chest: "80–84", waist: "69–72", height: "143–148" },
  ];

  const ladiesRows = [
    { size: "S",   age: "Bust 34\"", chest: "86–90",  waist: "68–72",  height: "155–160" },
    { size: "M",   age: "Bust 36\"", chest: "91–95",  waist: "73–77",  height: "158–163" },
    { size: "L",   age: "Bust 38\"", chest: "96–100", waist: "78–82",  height: "160–165" },
    { size: "XL",  age: "Bust 40\"", chest: "101–105",waist: "83–87",  height: "162–167" },
    { size: "XXL", age: "Bust 42\"", chest: "106–110",waist: "88–93",  height: "163–168" },
  ];

  const isBaby   = category === "baby";
  const isBoys   = category === "boys";
  const isLadies = category === "ladies";
  const rows = isBaby ? babyRows : isBoys ? boysRows : isLadies ? ladiesRows : girlsRows;
  const title = isBaby ? "Baby Size Guide" : isBoys ? "Boys Size Guide" : isLadies ? "Ladies Size Guide" : "Girls Size Guide";

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between bg-card px-6 py-5 border-b border-border rounded-t-3xl sm:rounded-t-3xl">
          <div className="flex items-center gap-2">
            <Ruler className="h-5 w-5 text-berry" />
            <h2 className="font-display text-2xl font-bold">{title}</h2>
          </div>
          <button
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full bg-accent hover:bg-border transition-colors"
            aria-label="Close size guide"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Table */}
        <div className="px-6 py-5">
          <p className="mb-4 text-sm text-muted-foreground">
            All measurements are in <strong>centimetres (cm)</strong>. Sizes are approximate — if your child is between sizes, we recommend sizing up for comfort.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-accent text-left">
                  <th className="px-4 py-3 font-bold text-foreground">Size</th>
                  <th className="px-4 py-3 font-bold text-foreground">{isLadies ? "Bust" : "Age"}</th>
                  <th className="px-4 py-3 font-bold text-foreground">Chest (cm)</th>
                  <th className="px-4 py-3 font-bold text-foreground">Waist (cm)</th>
                  <th className="px-4 py-3 font-bold text-foreground">Height (cm)</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.size} className={i % 2 === 0 ? "bg-background" : "bg-accent/40"}>
                    <td className="px-4 py-3 font-bold text-berry">{r.size}</td>
                    <td className="px-4 py-3 text-muted-foreground">{r.age}</td>
                    <td className="px-4 py-3">{r.chest}</td>
                    <td className="px-4 py-3">{r.waist}</td>
                    <td className="px-4 py-3">{r.height}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* How to measure */}
          <div className="mt-5 rounded-2xl bg-accent/60 p-4 space-y-2">
            <p className="text-sm font-bold text-foreground">📏 How to measure</p>
            <ul className="space-y-1 text-xs text-muted-foreground">
              <li><strong>Chest:</strong> Measure around the fullest part of the chest, keeping the tape horizontal.</li>
              <li><strong>Waist:</strong> Measure around the natural waistline, keeping the tape comfortably loose.</li>
              <li><strong>Height:</strong> Stand straight against a wall and measure from floor to top of head.</li>
            </ul>
          </div>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Still unsure? <a href="https://wa.me/917995889904" target="_blank" rel="noreferrer" className="font-semibold text-berry underline underline-offset-2">Chat with us on WhatsApp</a> for personalised sizing help.
          </p>
        </div>
      </div>
    </div>
  );
}

