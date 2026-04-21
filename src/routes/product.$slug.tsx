import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Heart, Minus, Plus, ShieldCheck, ShoppingBag, Truck, RotateCcw, ChevronRight, Check } from "lucide-react";
import { findProduct, products } from "@/data/products";
import { useCart } from "@/store/cart";
import { ProductCard } from "@/components/ProductCard";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = findProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Tinytots` },
          { name: "description", content: loaderData.product.shortDescription },
          { property: "og:title", content: `${loaderData.product.name} — Tinytots` },
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

  const addItem = useCart((s) => s.addItem);
  const openCart = useCart((s) => s.open);

  const discount =
    product.mrp > product.price
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : 0;

  const handleAdd = (buyNow = false) => {
    addItem(
      {
        productId: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
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
          <div
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
            style={{ backgroundColor: `color-mix(in oklab, ${product.colorChip} 12%, var(--cream))` }}
          >
            <img
              src={product.images[activeImage]}
              alt={product.name}
              className="h-full w-full object-cover animate-fade-in"
              key={activeImage}
            />
            {product.badge && (
              <span className="absolute left-4 top-4 rounded-full bg-foreground px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-background">
                {product.badge}
              </span>
            )}
            {discount > 0 && (
              <span className="absolute right-4 top-4 rounded-full bg-berry px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-berry-foreground">
                -{discount}% OFF
              </span>
            )}
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {product.images.map((img: string, i: number) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`relative aspect-square overflow-hidden rounded-xl transition-all ${
                  i === activeImage
                    ? "ring-2 ring-foreground ring-offset-2 ring-offset-background"
                    : "opacity-65 hover:opacity-100"
                }`}
                style={{ backgroundColor: `color-mix(in oklab, ${product.colorChip} 12%, var(--cream))` }}
                aria-label={`View image ${i + 1}`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* DETAILS */}
        <div className="lg:sticky lg:top-28 lg:self-start space-y-7">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-berry">{product.category}</p>
            <h1 className="mt-2 font-display text-5xl leading-[1.02] sm:text-6xl">
              {product.name}
            </h1>
            <p className="mt-4 text-base text-muted-foreground">{product.shortDescription}</p>
          </div>

          {/* Price */}
          <div className="flex items-end gap-3">
            <span className="font-display text-4xl text-foreground">
              ₹{product.price.toLocaleString("en-IN")}
            </span>
            {product.mrp > product.price && (
              <>
                <span className="pb-1.5 text-base text-muted-foreground line-through">
                  ₹{product.mrp.toLocaleString("en-IN")}
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
              <button className="text-xs font-semibold text-muted-foreground underline underline-offset-2 hover:text-foreground">
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
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
