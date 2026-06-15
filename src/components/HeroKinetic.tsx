// Variant D — Kinetic typography manifesto.
// The North Star sentence reveals word by word with a short upward shift.
// Key nouns ("advisory" and "attention economy") get a quiet red emphasis.
// CSS-only animation, no JS. Plays once on mount.
//
// Says: gravitas + restraint. The words carry the work.

import { NORTH_STAR } from "@/lib/data";

// Words inside this set get the accent color treatment. Multi-word phrases
// are matched as a contiguous run during render.
const EMPHASIZE: Set<string> = new Set(["advisory", "attention", "economy."]);

export default function HeroKinetic() {
  const words = NORTH_STAR.split(" ");
  return (
    <h1 className="max-w-5xl text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
      {words.map((w, i) => {
        const lower = w.toLowerCase();
        const emphasize = EMPHASIZE.has(lower);
        return (
          <span
            key={i}
            className={`ht-kinetic-word inline-block ${
              emphasize ? "text-[var(--accent)]" : ""
            }`}
            style={{ animationDelay: `${i * 140}ms` }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </h1>
  );
}
