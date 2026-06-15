// Dependency-free image placeholder. CSS gradient + label. Looks like a real
// mock so Brian can see exactly where the photography or asset will land,
// without an external CDN we don't control.

type Variant = "hero" | "carousel" | "square" | "wide" | "person";

const VARIANTS: Record<Variant, string> = {
  hero: "aspect-[16/9] md:aspect-[21/9]",
  carousel: "aspect-[3/2]",
  wide: "aspect-[5/2]",
  square: "aspect-square",
  person: "aspect-[4/5]",
};

export default function PlaceholderImage({
  label,
  variant = "hero",
  className = "",
}: {
  label: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-md bg-gradient-to-br from-neutral-100 via-neutral-50 to-neutral-200 ${VARIANTS[variant]} ${className}`}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(216,35,42,0.06),transparent_55%),radial-gradient(circle_at_75%_80%,rgba(10,10,10,0.05),transparent_60%)]" />
      <div className="relative flex flex-col items-center gap-2 text-center">
        <span className="text-xs uppercase tracking-widest text-neutral-500">
          Image
        </span>
        <span className="px-6 text-sm text-neutral-700 md:text-base">
          {label}
        </span>
      </div>
    </div>
  );
}
