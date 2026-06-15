import Link from "next/link";
import HomeSections from "@/components/HomeSections";
import HeroKinetic from "@/components/HeroKinetic";
import BrianWritingSection from "@/components/BrianWritingSection";

// Production home — Variant D locked 2026-06-15.
// Kinetic typography manifesto as the hero. No image, no lead paragraph.
// Words carry the work; everything else stays below the fold.
export default function Home() {
  return (
    <>
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-44">
          <HeroKinetic />
          <div className="mt-14 flex gap-6 text-sm">
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
      <BrianWritingSection />
    </>
  );
}
