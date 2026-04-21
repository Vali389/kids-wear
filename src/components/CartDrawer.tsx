import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useEffect } from "react";
import { useCart } from "@/store/cart";

export function CartDrawer() {
  const { items, isOpen, close, removeItem, updateQty, subtotal } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const total = subtotal();
  const shipping = total >= 999 || total === 0 ? 0 : 79;

  return (
    <div className="fixed inset-0 z-[100]">
      <div
        className="absolute inset-0 bg-foreground/40 backdrop-blur-sm animate-fade-up"
        onClick={close}
      />
      <aside
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-background shadow-pop animate-pop-in"
        style={{ animationDuration: "0.35s" }}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-berry" />
            <h2 className="font-display text-xl font-bold">Your Bag</h2>
          </div>
          <button
            onClick={close}
            className="grid h-9 w-9 place-items-center rounded-xl hover:bg-accent"
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
            <div className="grid h-24 w-24 place-items-center rounded-full bg-accent text-4xl">
              🧸
            </div>
            <h3 className="font-display text-2xl font-bold">Your bag is empty</h3>
            <p className="text-sm text-muted-foreground">
              Add some happy outfits and watch them appear here.
            </p>
            <Link
              to="/shop"
              onClick={close}
              className="mt-2 rounded-full bg-berry px-6 py-3 text-sm font-bold text-berry-foreground shadow-soft transition-transform hover:scale-105"
            >
              Start shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="space-y-4">
                {items.map((it) => (
                  <li
                    key={it.id}
                    className="flex gap-3 rounded-2xl border border-border bg-card p-3"
                  >
                    <Link
                      to="/product/$slug"
                      params={{ slug: it.slug }}
                      onClick={close}
                      className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-muted"
                    >
                      <img src={it.image} alt={it.name} className="h-full w-full object-cover" />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link
                            to="/product/$slug"
                            params={{ slug: it.slug }}
                            onClick={close}
                            className="font-display text-sm font-bold leading-tight hover:text-berry"
                          >
                            {it.name}
                          </Link>
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            Size {it.size}
                          </p>
                        </div>
                        <button
                          onClick={() => removeItem(it.id)}
                          className="grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                          aria-label="Remove"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center gap-1 rounded-full bg-muted p-1">
                          <button
                            onClick={() => updateQty(it.id, it.qty - 1)}
                            className="grid h-6 w-6 place-items-center rounded-full hover:bg-background"
                            aria-label="Decrease"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-6 text-center text-sm font-bold">{it.qty}</span>
                          <button
                            onClick={() => updateQty(it.id, it.qty + 1)}
                            className="grid h-6 w-6 place-items-center rounded-full hover:bg-background"
                            aria-label="Increase"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="font-display text-sm font-bold">
                          ₹{(it.price * it.qty).toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border bg-card px-5 py-4">
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-bold">₹{total.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-bold">
                    {shipping === 0 ? "FREE" : `₹${shipping}`}
                  </span>
                </div>
                <div className="my-2 h-px bg-border" />
                <div className="flex justify-between">
                  <span className="font-display text-base font-bold">Total</span>
                  <span className="font-display text-lg font-bold text-berry">
                    ₹{(total + shipping).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
              <Link
                to="/checkout"
                onClick={close}
                className="mt-4 block rounded-full bg-gradient-berry px-6 py-3.5 text-center text-sm font-bold text-berry-foreground shadow-pop transition-transform hover:scale-[1.02] active:scale-95"
              >
                Buy Now → Checkout
              </Link>
              <button
                onClick={close}
                className="mt-2 block w-full rounded-full px-6 py-2.5 text-center text-sm font-semibold text-muted-foreground hover:text-foreground"
              >
                Continue shopping
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
