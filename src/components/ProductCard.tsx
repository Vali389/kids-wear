import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Eye, Heart, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import type { Product } from "@/data/products";
import { useCart } from "@/store/cart";
import { useWishlist } from "@/store/wishlist";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

function ActionIconButton({
  label,
  onClick,
  children,
  active,
}: {
  label: string;
  onClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  active?: boolean;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-label={label}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClick(e);
          }}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-foreground shadow-md ring-1 ring-black/5 transition-transform hover:scale-105 hover:bg-white active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30"
        >
          <span className={active ? "text-berry" : ""}>{children}</span>
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" className="font-medium">
        {label}
      </TooltipContent>
    </Tooltip>
  );
}

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const discount =
    product.mrp > product.price
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : 0;
  const categoryLabel =
    product.category.charAt(0).toUpperCase() + product.category.slice(1);

  const defaultSize = product.sizes[0] ?? "";
  const addItem = useCart((s) => s.addItem);
  const openCart = useCart((s) => s.open);
  const toggleWishlist = useWishlist((s) => s.toggle);
  const isFavorite = useWishlist((s) => s.ids.includes(product.id));

  const [quickOpen, setQuickOpen] = useState(false);

  const handleAddToCart = () => {
    if (!defaultSize) {
      toast.error("Please choose a size on the product page");
      return;
    }
    addItem(
      {
        productId: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        size: defaultSize,
        image: product.images[0],
      },
      1,
    );
    toast.success(`${product.name} added to bag`);
    openCart();
  };

  const handleFavorite = () => {
    const wasFavorite = isFavorite;
    toggleWishlist(product.id);
    toast.success(wasFavorite ? "Removed from favourites" : "Added to favourites");
  };

  return (
    <>
      <article
        className="group animate-fade-up"
        style={{ animationDelay: `${index * 60}ms` }}
      >
        <div className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-card transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-pop">
          <div
            className="relative aspect-[4/5] overflow-hidden bg-cream"
            style={{
              backgroundColor: `color-mix(in oklab, ${product.colorChip} 12%, var(--cream))`,
            }}
          >
            <Link
              to="/product/$slug"
              params={{ slug: product.slug }}
              className="absolute inset-0 z-0"
              aria-label={`View ${product.name}`}
            />
            <img
              src={product.images[0]}
              alt=""
              loading="lazy"
              className="relative z-[1] h-full w-full object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {product.images[1] && (
              <img
                src={product.images[1]}
                alt=""
                loading="lazy"
                className="pointer-events-none absolute inset-0 z-[1] h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            )}

            <div className="pointer-events-none absolute left-3 top-3 z-[2] flex flex-wrap items-center gap-1.5">
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

            {/* Hover actions: favourite, cart, quick view */}
            <div className="pointer-events-none absolute inset-x-0 bottom-3 z-[3] flex justify-center px-2 opacity-100 transition-all duration-300 sm:bottom-4 sm:translate-y-1 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
              <div className="pointer-events-auto flex items-center gap-2">
                <ActionIconButton
                  label="Add to favourite"
                  active={isFavorite}
                  onClick={handleFavorite}
                >
                  <Heart
                    className={`h-4 w-4 ${isFavorite ? "fill-current" : ""}`}
                    strokeWidth={1.75}
                  />
                </ActionIconButton>
                <ActionIconButton label="Add to cart" onClick={handleAddToCart}>
                  <ShoppingBag className="h-4 w-4" strokeWidth={1.75} />
                </ActionIconButton>
                <ActionIconButton label="Quick view" onClick={() => setQuickOpen(true)}>
                  <Eye className="h-4 w-4" strokeWidth={1.75} />
                </ActionIconButton>
              </div>
            </div>
          </div>

          <Link
            to="/product/$slug"
            params={{ slug: product.slug }}
            className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/60"
          >
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
          </Link>
        </div>
      </article>

      <Dialog open={quickOpen} onOpenChange={setQuickOpen}>
        <DialogContent className="max-w-md gap-0 overflow-hidden p-0 sm:max-w-lg">
          <div className="grid sm:grid-cols-2">
            <div
              className="relative aspect-[4/5] sm:aspect-auto sm:min-h-[280px]"
              style={{
                backgroundColor: `color-mix(in oklab, ${product.colorChip} 15%, var(--cream))`,
              }}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center gap-3 p-6">
              <DialogHeader className="text-left">
                <DialogTitle className="font-display text-xl leading-tight">
                  {product.name}
                </DialogTitle>
                <DialogDescription className="line-clamp-3 text-left">
                  {product.shortDescription}
                </DialogDescription>
              </DialogHeader>
              <p className="font-body text-lg font-semibold text-foreground">
                ₹{product.price.toLocaleString("en-IN")}
                {product.mrp > product.price && (
                  <span className="ml-2 text-sm font-medium text-muted-foreground line-through">
                    ₹{product.mrp.toLocaleString("en-IN")}
                  </span>
                )}
              </p>
              <Link
                to="/product/$slug"
                params={{ slug: product.slug }}
                onClick={() => setQuickOpen(false)}
                className="inline-flex w-fit items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                View full details
              </Link>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
