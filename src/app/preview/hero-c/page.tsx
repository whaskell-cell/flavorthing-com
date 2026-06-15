import Link from "next/link";
import { NORTH_STAR, HERO_LEAD } from "@/lib/data";
import HomeSections from "@/components/HomeSections";
import HeroDiagram from "@/components/HeroDiagram";

// Preview route — Variant C: animated structural diagram in the hero slot.
// Not in the nav. Production swap happens after Brian picks a variant.

export const metadata = {
  title: "Hero Variant C — Flavor Thing",
};

export default function HeroCPreview() {
  return (
    <>
      {/* Hero with structural diagram. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.05fr_1fr] md:gap-16">
            <div>
              <div className="text-xs uppercase tracking-widest text-neutral-500">
                Variant C — Structural diagram
              </div>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
                {NORTH_STAR}
              </h1>
              <p className="mt-8 max-w-xl text-base text-neutral-600 md:text-lg">
                {HERO_LEAD}
              </p>
              <div className="mt-10 flex gap-6 text-sm">
                <Link
                  href="/partnerships"
                  className="text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition hover:decoration-[var(--accent)]"
                >
                  Our work
                </Link>
                <Link
                  href="/contact"
                  className="text-neutral-700 underline decoration-transparent underline-offset-4 transition hover:decoration-neutral-300"
                >
                  Get in touch
                </Link>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md">
              <HeroDiagram />
            </div>
          </div>
        </div>
      </section>

      <HomeSections />
    </>
  );
}
