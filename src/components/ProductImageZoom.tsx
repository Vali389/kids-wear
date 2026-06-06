import { useCallback, useRef, useState, type ReactNode } from "react";

const ZOOM = 2.4;
/** Lens size as fraction of container (Amazon-like ~¼ width). */
const LENS_FRAC = 0.34;

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

/**
 * Desktop hover zoom similar to Amazon PDP: lens follows the cursor; larger crop shows beside the main photo.
 */
export function ProductImageZoom({
  src,
  alt,
  bgTint,
  className,
  badges,
}: {
  src: string;
  alt: string;
  bgTint: string;
  className?: string;
  badges?: ReactNode;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [rel, setRel] = useState({ x: 0.5, y: 0.5 });

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.width < 8 || r.height < 8) return;
    const x = clamp((e.clientX - r.left) / r.width, 0, 1);
    const y = clamp((e.clientY - r.top) / r.height, 0, 1);
    setRel({ x, y });
  }, []);

  const lensHalf = LENS_FRAC / 2;
  const lx = clamp(rel.x - lensHalf, 0, 1 - LENS_FRAC);
  const ly = clamp(rel.y - lensHalf, 0, 1 - LENS_FRAC);

  return (
    <div className={`flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-5 ${className ?? ""}`}>
      <div
        ref={wrapRef}
        className="relative aspect-[4/5] min-h-0 w-full min-w-0 flex-[1.1] overflow-hidden rounded-2xl lg:max-w-[min(560px,52%)] [@media(hover:hover)_and_(pointer:fine)]:lg:cursor-crosshair"
        style={{
          backgroundColor: `color-mix(in oklab, ${bgTint} 12%, var(--cream))`,
        }}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        onMouseMove={onMove}
      >
        <img
          src={src}
          alt={alt}
          className="relative z-[1] h-full w-full object-contain p-2 animate-fade-in select-none"
          draggable={false}
        />

        {badges ? <div className="pointer-events-none absolute left-0 top-0 z-[3] w-full px-4 pt-4">{badges}</div> : null}

        {/* Lens — desktop fine pointer only */}
        <div
          className={`pointer-events-none absolute inset-0 z-[2] hidden lg:block ${active ? "opacity-100" : "opacity-0"} transition-opacity [@media(pointer:coarse)]:hidden`}
        >
          <div
            className="absolute rounded-md border-2 border-white bg-white/10 shadow-md ring-1 ring-black/10"
            style={{
              width: `${LENS_FRAC * 100}%`,
              height: `${LENS_FRAC * 100}%`,
              left: `${lx * 100}%`,
              top: `${ly * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Magnified preview — Amazon-style side panel (large screens + hover device) */}
      <div
        aria-hidden={!active}
        className="relative hidden aspect-[4/5] min-h-[200px] min-w-0 shrink-0 rounded-2xl border border-border/70 bg-muted/40 lg:flex lg:max-w-[min(420px,48%)] lg:flex-1 [@media(hover:none)]:hidden [@media(pointer:coarse)]:hidden"
        style={{
          backgroundColor: active ? undefined : `color-mix(in oklab, ${bgTint} 8%, var(--cream))`,
          backgroundImage: active ? `url(${src})` : undefined,
          backgroundRepeat: "no-repeat",
          backgroundSize: `${ZOOM * 100}% ${ZOOM * 100}%`,
          backgroundPosition: `${rel.x * 100}% ${rel.y * 100}%`,
        }}
      >
        {!active ? (
          <span className="pointer-events-none flex h-full w-full items-center justify-center px-6 text-center text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground/75">
            Hover to zoom
          </span>
        ) : null}
      </div>
    </div>
  );
}
