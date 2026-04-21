import { useEffect, useState } from "react";
import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { Logo } from "./Logo";
import { useCart } from "@/store/cart";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop All" },
  { to: "/girls", label: "Girls" },
  { to: "/boys", label: "Boys" },
  { to: "/baby", label: "Baby" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const navigate = useNavigate();
  const { location } = useRouterState();
  const totalCount = useCart((s) => s.totalCount());
  const openCart = useCart((s) => s.open);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/shop", search: { q: query } });
    setSearchOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/60"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      {/* Promo bar */}
      <div className="bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-3 py-2 text-center text-[10px] font-medium leading-relaxed tracking-wide sm:text-[11px]">
          Free shipping on orders over ₹999 · Use code{" "}
          <span className="rounded-full bg-background/15 px-2 py-0.5 font-semibold">TINY10</span>{" "}
          for 10% off
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <button
          className="grid h-10 w-10 place-items-center rounded-xl text-foreground hover:bg-accent lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <Logo className="mr-auto lg:mr-6" />

        <nav className="mx-auto hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{
                className: "text-foreground font-semibold",
              }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <button
            className="grid h-10 w-10 place-items-center rounded-xl text-foreground hover:bg-accent"
            onClick={() => setSearchOpen((v) => !v)}
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <Link
            to="/login"
            className="grid h-10 w-10 place-items-center rounded-xl text-foreground hover:bg-accent"
            aria-label="Account"
          >
            <User className="h-5 w-5" />
          </Link>
          <button
            className="relative grid h-10 w-10 place-items-center rounded-xl text-foreground hover:bg-accent"
            onClick={openCart}
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {totalCount > 0 && (
              <span className="animate-pop-in absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-berry px-1 text-[11px] font-bold text-berry-foreground ring-2 ring-background">
                {totalCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur">
          <form
            onSubmit={submitSearch}
            className="mx-auto flex max-w-3xl items-center gap-2 px-4 py-3"
          >
            <Search className="h-5 w-5 text-muted-foreground" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for dresses, tees, hoodies…"
              className="flex-1 bg-transparent text-base font-medium text-foreground outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="rounded-full bg-berry px-4 py-2 text-sm font-bold text-berry-foreground shadow-soft transition-transform active:scale-95"
            >
              Search
            </button>
          </form>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-xl px-4 py-3 text-base font-semibold text-foreground/80 hover:bg-accent"
                activeProps={{ className: "bg-accent text-accent-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
