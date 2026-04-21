import { Link } from "@tanstack/react-router";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-baseline gap-0.5 ${className}`}
      aria-label="Tinytots home"
    >
      <span className="font-display text-3xl leading-none tracking-tight text-foreground">
        tiny
      </span>
      <em className="font-italic-display text-3xl leading-none tracking-tight text-berry">
        tots
      </em>
      <span className="ml-0.5 h-1.5 w-1.5 self-center rounded-full bg-berry" />
    </Link>
  );
}
