import Link from "next/link";
import { HERO_LEAD } from "@/lib/data";
import HomeSections from "@/components/HomeSections";
import HeroKinetic from "@/components/HeroKinetic";

// Preview route — Variant D: kinetic typography manifesto in the hero slot.
// The North Star sentence fills the hero; no image. Typography as the moment.

export const metadata = {
  title: "Hero Variant D — Flavor Thing",
};

export default function HeroDPreview() {
  return (
    <>
      {/* Hero — typography only, full width. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-40">
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            Variant D — Kinetic typography
          </div>
          <div className="mt-8">
            <HeroKinetic />
          </div>
          <p className="mt-12 max-w-xl text-base text-neutral-600 md:text-lg">
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
      </section>

      <HomeSections />
    </>
  );
}
