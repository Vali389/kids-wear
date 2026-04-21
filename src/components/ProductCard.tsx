import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const discount =
    product.mrp > product.price
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : 0;

  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className="group relative block animate-fade-up"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div
        className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-cream"
        style={{ backgroundColor: `color-mix(in oklab, ${product.colorChip} 12%, var(--cream))` }}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {product.images[1] && (
          <img
            src={product.images[1]}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        )}

        {/* Top badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className="rounded-full bg-foreground px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-background">
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="rounded-full bg-berry px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-berry-foreground">
              -{discount}%
            </span>
          )}
        </div>

        {/* Quick action arrow */}
        <div className="absolute right-3 top-3 grid h-9 w-9 translate-y-1 place-items-center rounded-full bg-background/95 text-foreground opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-3 flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-body text-sm font-semibold text-foreground">
            {product.name}
          </h3>
          <p className="mt-0.5 truncate text-xs text-muted-foreground">
            {product.shortDescription}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <p className="font-body text-sm font-bold text-foreground">
            ₹{product.price.toLocaleString("en-IN")}
          </p>
          {product.mrp > product.price && (
            <p className="text-[11px] text-muted-foreground line-through">
              ₹{product.mrp.toLocaleString("en-IN")}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
