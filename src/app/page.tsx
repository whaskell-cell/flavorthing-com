import HomeSections from "@/components/HomeSections";
import HeroKinetic from "@/components/HeroKinetic";
import HeroBackdrop from "@/components/HeroBackdrop";
import BrianWritingSection from "@/components/BrianWritingSection";

// Production home — Variant D + dark backdrop locked 2026-06-15 PM.
// Kinetic typography manifesto over a dark "attention economy collage"
// backdrop placeholder. No CTAs in the hero (Brian directive).
export default function Home() {
  return (
    <>
      <section className="relative border-b border-neutral-200 bg-neutral-950 text-white">
        <HeroBackdrop />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-44">
          <HeroKinetic />
        </div>
      </section>

      <HomeSections />
      <BrianWritingSection />
    </>
  );
}
