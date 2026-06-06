import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo-1.jpeg";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-2 ${className}`}
      aria-label="Kathyayani Kids Wear home"
    >
      <img
        src={logoImg}
        alt="Kathyayani Kids Wear"
        className="h-10 w-auto rounded-full ring-2 ring-primary/20 transition-transform group-hover:scale-105 sm:h-12"
      />
      <div className="flex flex-col leading-tight">
        <span className="font-display text-lg font-bold tracking-tight text-foreground sm:text-xl">
          Kathyayani
        </span>
        <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-primary sm:text-[11px]">
          Kids Wear
        </span>
      </div>
    </Link>
  );
}
