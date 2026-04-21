import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Heart, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border/60 bg-card">
      <div className="bg-gradient-rainbow h-2 w-full" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <Logo />
          <p className="max-w-xs text-sm text-muted-foreground">
            Joyful, comfy and play-ready clothing for the tiniest humans.
            Made with love, designed to be passed down.
          </p>
          <div className="flex gap-2">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-foreground hover:bg-berry hover:text-berry-foreground"
              aria-label="Instagram"
            >
              <span className="text-base font-bold">IG</span>
            </a>
            <a
              href="mailto:hello@tinytots.com"
              className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-foreground hover:bg-berry hover:text-berry-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-base font-bold">Shop</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-foreground">All Products</Link></li>
            <li><Link to="/girls" className="hover:text-foreground">Girls</Link></li>
            <li><Link to="/boys" className="hover:text-foreground">Boys</Link></li>
            <li><Link to="/baby" className="hover:text-foreground">Baby</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-base font-bold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About us</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><Link to="/privacy" className="hover:text-foreground">Privacy policy</Link></li>
            <li><Link to="/terms" className="hover:text-foreground">Terms & conditions</Link></li>
            <li><Link to="/shipping-returns" className="hover:text-foreground">Shipping & returns</Link></li>
            <li><Link to="/login" className="hover:text-foreground">Login</Link></li>
            <li><Link to="/signup" className="hover:text-foreground">Create account</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-base font-bold">Stay in the loop</h4>
          <p className="mt-3 text-sm text-muted-foreground">
            New drops, sales and the cutest news — straight to your inbox.
          </p>
          <form
            className="mt-3 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (!email.trim()) return;
              toast.success("Thanks for subscribing! We'll keep you posted.");
              setEmail("");
            }}
          >
            <input
              type="email"
              placeholder="you@happy.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-berry"
            />
            <button
              type="submit"
              className="rounded-full bg-berry px-4 py-2.5 text-sm font-bold text-berry-foreground shadow-soft transition-transform active:scale-95"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Tinytots. All rights reserved.</p>
          <p className="inline-flex items-center gap-1">
            Made with <Heart className="h-3.5 w-3.5 fill-berry text-berry" /> for little ones
          </p>
        </div>
      </div>
    </footer>
  );
}
