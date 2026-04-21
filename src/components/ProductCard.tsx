import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const discount =
    product.mrp > product.price
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : 0;
  const categoryLabel =
    product.category.charAt(0).toUpperCase() + product.category.slice(1);

  return (
    <Link
      to="/product/$slug"
      params={{ slug: product.slug }}
      className="group relative block animate-fade-up focus-visible:outline-none"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <article className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-card transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-pop group-focus-visible:ring-2 group-focus-visible:ring-primary/60">
        <div
          className="relative aspect-[4/5] overflow-hidden bg-cream"
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
          <div className="absolute left-3 top-3 flex flex-wrap items-center gap-1.5">
            <span className="rounded-full bg-background/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground backdrop-blur">
              {categoryLabel}
            </span>
            {product.badge && (
              <span className="rounded-full bg-foreground px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-background">
                {product.badge}
              </span>
            )}
            {discount > 0 && (
              <span className="rounded-full bg-berry px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-berry-foreground">
                Save {discount}%
              </span>
            )}
          </div>

          {/* Quick action arrow */}
          <div className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/95 text-foreground opacity-100 backdrop-blur transition-all duration-300 sm:translate-y-1 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        <div className="space-y-1.5 px-3 pb-3 pt-2.5 sm:px-3.5 sm:pb-3.5 sm:pt-3">
          {product.tag ? (
            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              {product.tag}
            </p>
          ) : null}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <h3 className="line-clamp-1 font-body text-sm font-semibold text-foreground sm:text-[15px]">
                {product.name}
              </h3>
              <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-muted-foreground sm:text-xs sm:leading-5">
                {product.shortDescription}
              </p>
            </div>
            <div className="shrink-0 text-right">
              <p className="font-body text-[15px] font-semibold text-foreground sm:text-base">
                ₹{product.price.toLocaleString("en-IN")}
              </p>
              {product.mrp > product.price && (
                <p className="text-[11px] font-medium text-muted-foreground line-through">
                  ₹{product.mrp.toLocaleString("en-IN")}
                </p>
              )}
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
