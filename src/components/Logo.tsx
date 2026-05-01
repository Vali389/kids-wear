import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`group inline-flex flex-col leading-tight sm:flex-row sm:items-baseline sm:gap-1 ${className}`}
      aria-label="Kathyayani Kids Wear home"
    >
      <span className="font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
        Kathyayani
      </span>
      <span className="font-body text-[11px] font-semibold uppercase tracking-[0.28em] text-berry sm:text-xs">
        Kids Wear
      </span>
    </Link>
  );
}
