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
          className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-black/40 text-white backdrop-blur-md ring-1 ring-white/20 transition-all hover:scale-110 hover:bg-primary hover:text-background active:scale-95 focus-visible:outline-none"
        >
          <span>{children}</span>
        </button>
      </TooltipTrigger>
      <TooltipContent side="top" className="font-medium">
        {label}
      </TooltipContent>
    </Tooltip>
  );
}

export function ProductCard({
  product,
  index = 0,
  compact = true,
  layout = "grid",
  listingStyle = "default",
}: {
  product: Product;
  index?: number;
  /** Listing: name + age + price without long copy (details on PDP). */
  compact?: boolean;
  layout?: "grid" | "list";
  /** `catalog` = centered type, light frame, editorial grid (shop reference). */
  listingStyle?: "default" | "catalog";
}) {
  const discount =
    product.mrp > product.price
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : 0;
  const categoryLabel =
    product.category.charAt(0).toUpperCase() + product.category.slice(1);
  const defaultSize = product.sizes[0] ?? "";
  const isList = layout === "list";
  const isCatalog = listingStyle === "catalog" && compact && !isList;
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
        className="group animate-fade-up h-full"
        style={{ animationDelay: `${index * 60}ms` }}
      >
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isCatalog
              ? "flex min-h-0 h-full flex-col rounded-sm border border-border/40 bg-background shadow-none hover:shadow-md"
              : `rounded-2xl border border-border/70 bg-card shadow-card group-hover:-translate-y-1 group-hover:shadow-pop ${
                  isList
                    ? "grid h-full min-h-[5.75rem] grid-cols-[minmax(5.5rem,7.5rem)_1fr] items-stretch sm:min-h-[6.75rem] sm:grid-cols-[minmax(7rem,9rem)_1fr]"
                    : "flex min-h-0 h-full flex-col"
                }`
          }`}
        >
          <div
            className={`relative flex w-full shrink-0 items-center justify-center overflow-hidden bg-cream ${
              isList ? "aspect-square" : isCatalog ? "aspect-[3/4]" : "aspect-[4/5]"
            }`}
            style={{
              backgroundColor: `color-mix(in oklab, ${product.colorChip} 12%, var(--cream))`,
            }}
          >
            <Link
              to={`/product/${encodeURIComponent(product.slug)}`}
              className="absolute inset-0 z-0"
              aria-label={`View ${product.name}`}
            />
            <img
              src={product.images[0]}
              alt=""
              loading="lazy"
              className={`relative z-[1] h-full max-h-full object-contain p-1 pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.02] ${isList ? "w-full" : "w-full"}`}
            />
            {!compact && product.images[1] && (
              <img
                src={product.images[1]}
                alt=""
                loading="lazy"
                className="pointer-events-none absolute inset-0 z-[1] h-full max-h-full w-full object-contain p-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            )}

            {isCatalog ? (
              <span className="pointer-events-none absolute bottom-3 right-3 z-[2] select-none font-body text-[9px] font-semibold uppercase tracking-[0.25em] text-foreground/20 sm:bottom-4 sm:right-4 sm:text-[10px]">
                Kathyayani
              </span>
            ) : null}

            {!compact ? (
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
            ) : null}

            {/* Hover actions: favourite, cart, quick view */}
            <div className="pointer-events-none absolute inset-0 z-[3] flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="pointer-events-auto flex items-center gap-3">
                <ActionIconButton
                  label="Add to favourite"
                  active={isFavorite}
                  onClick={handleFavorite}
                >
                  <Heart
                    className={`h-5 w-5 ${isFavorite ? "fill-primary text-primary" : "text-white"}`}
                    strokeWidth={2}
                  />
                </ActionIconButton>
                <ActionIconButton label="Add to cart" onClick={handleAddToCart}>
                  <ShoppingBag className="h-5 w-5 text-white" strokeWidth={2} />
                </ActionIconButton>
                <ActionIconButton label="Quick view" onClick={() => setQuickOpen(true)}>
                  <Eye className="h-5 w-5 text-white" strokeWidth={2} />
                </ActionIconButton>
              </div>
            </div>
          </div>

          <Link
            to={`/product/${encodeURIComponent(product.slug)}`}
            className={`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/60 min-w-0 ${
              isList
                ? "flex min-h-0 min-w-0 flex-1 flex-col justify-center px-3 py-2.5 sm:px-4 sm:py-3"
                : "flex min-h-0 flex-1 flex-col"
            }`}
          >
            {isList ? (
              <div className="flex w-full min-h-0 min-w-0 flex-1 items-stretch justify-between gap-4">
                <div className="flex min-w-0 flex-1 flex-col justify-center">
                  {!compact && product.tag ? (
                    <p className="mb-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                      {product.tag}
                    </p>
                  ) : null}
                  <h3 className="line-clamp-2 font-body text-sm font-semibold text-foreground sm:text-[15px]">
                    {product.name}
                  </h3>
                  {compact ? (
                    <p className="mt-0.5 text-[10px] font-medium text-muted-foreground sm:text-[11px]">{product.ageLabel}</p>
                  ) : null}
                  {!compact ? (
                    <>
                      <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-muted-foreground sm:text-xs sm:leading-5">
                        {product.shortDescription}
                      </p>
                      <p className="mt-0.5 text-[10px] font-medium text-muted-foreground sm:text-[11px]">
                        {product.ageLabel}
                      </p>
                      {product.stockNote ? (
                        <p className="mt-0.5 text-[10px] font-semibold text-berry sm:text-[11px]">{product.stockNote}</p>
                      ) : null}
                    </>
                  ) : null}
                </div>
                <div className="flex shrink-0 flex-col justify-end pb-0.5 text-right">
                  <p className="font-body text-[15px] font-semibold leading-tight text-foreground sm:text-base">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                  {product.mrp > product.price && (
                    <p className="mt-0.5 text-[11px] font-medium leading-tight text-muted-foreground line-through">
                      ₹{product.mrp.toLocaleString("en-IN")}
                    </p>
                  )}
                </div>
              </div>
            ) : isCatalog ? (
              <div className="flex flex-1 flex-col items-center justify-center px-3 pb-8 pt-5 text-center sm:px-4 sm:pb-9 sm:pt-6">
                <h3 className="line-clamp-3 max-w-full font-body text-[11px] font-semibold uppercase leading-snug tracking-[0.08em] text-foreground sm:text-xs">
                  {product.name}
                </h3>
                <p className="mt-2 max-w-[18ch] font-body text-[10px] font-medium leading-snug text-muted-foreground sm:text-[11px]">
                  {product.ageLabel}
                </p>
                <div className="mt-3 flex flex-col items-center gap-0.5">
                  <p className="font-body text-sm font-semibold tracking-wide text-foreground sm:text-[15px]">
                    ₹{product.price.toLocaleString("en-IN")}
                  </p>
                  {product.mrp > product.price ? (
                    <p className="text-[11px] font-medium text-muted-foreground line-through">
                      ₹{product.mrp.toLocaleString("en-IN")}
                    </p>
                  ) : null}
                </div>
              </div>
            ) : (
              <div className="flex flex-1 flex-col px-3 pb-3 pt-2.5 sm:px-3.5 sm:pb-3.5 sm:pt-3">
                {!compact && product.tag ? (
                  <p className="mb-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                    {product.tag}
                  </p>
                ) : null}
                <div className="flex min-h-[4.75rem] flex-1 items-stretch justify-between gap-3 sm:min-h-[5rem]">
                  <div className="flex min-w-0 flex-1 flex-col">
                    <h3
                      className={`font-body font-semibold leading-snug text-foreground ${compact ? "line-clamp-2 text-sm sm:text-[15px]" : "line-clamp-1 text-sm sm:text-[15px]"}`}
                    >
                      {product.name}
                    </h3>
                    {compact ? (
                      <p className="mt-0.5 shrink-0 text-[10px] font-medium leading-tight text-muted-foreground sm:text-[11px]">
                        {product.ageLabel}
                      </p>
                    ) : null}
                    {!compact ? (
                      <>
                        <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-muted-foreground sm:text-xs sm:leading-5">
                          {product.shortDescription}
                        </p>
                        <p className="mt-0.5 text-[10px] font-medium text-muted-foreground sm:text-[11px]">
                          {product.ageLabel}
                        </p>
                        {product.stockNote ? (
                          <p className="mt-0.5 text-[10px] font-semibold text-berry sm:text-[11px]">{product.stockNote}</p>
                        ) : null}
                      </>
                    ) : null}
                  </div>
                  <div className="flex shrink-0 flex-col justify-end pb-0.5 text-right">
                    <p className="font-body text-[15px] font-semibold leading-tight text-foreground sm:text-base">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>
                    {product.mrp > product.price && (
                      <p className="mt-0.5 text-[11px] font-medium leading-tight text-muted-foreground line-through">
                        ₹{product.mrp.toLocaleString("en-IN")}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </Link>
        </div>
      </article>

      <Dialog open={quickOpen} onOpenChange={setQuickOpen}>
        <DialogContent className="max-w-md gap-0 overflow-hidden p-0 sm:max-w-lg">
          <div className="grid sm:grid-cols-2">
            <div
              className="relative flex aspect-[4/5] items-center justify-center sm:aspect-auto sm:min-h-[280px]"
              style={{
                backgroundColor: `color-mix(in oklab, ${product.colorChip} 15%, var(--cream))`,
              }}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="max-h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center gap-3 p-6">
              <DialogHeader className="text-left">
                <DialogTitle className="font-display text-xl leading-tight">
                  {product.name}
                </DialogTitle>
                <p className="text-sm font-medium text-muted-foreground">{product.ageLabel}</p>
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
                to={`/product/${encodeURIComponent(product.slug)}`}
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
