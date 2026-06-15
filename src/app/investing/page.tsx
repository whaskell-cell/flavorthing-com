import Link from "next/link";
import {
  SERVICES,
  PORTFOLIO_INVESTMENTS,
  PORTFOLIO_FOUNDER_STAKES,
} from "@/lib/data";
import PlaceholderImage from "@/components/PlaceholderImage";

const SERVICE = SERVICES.find((s) => s.slug === "investing")!;

export default function InvestingPage() {
  return (
    <>
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            Practice
          </div>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
            {SERVICE.name}
          </h1>
          <p className="mt-10 max-w-3xl text-lg text-neutral-700 md:text-xl md:leading-relaxed">
            {SERVICE.long}
          </p>
        </div>
      </section>

      {/* Three modes. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Three modes
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {SERVICE.practiceAreas.map((p, i) => (
              <article key={p.name} className="flex flex-col">
                <div className="text-xs uppercase tracking-widest text-neutral-500">
                  Mode {i + 1}
                </div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900">
                  {p.name}
                </h3>
                <p className="prose-editorial mt-4 text-neutral-700">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio — angel positions. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Portfolio
          </h2>
          <p className="mt-4 max-w-xl text-neutral-600">
            A selection of companies we have backed. Not an exhaustive list.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 text-sm md:grid-cols-3 lg:grid-cols-4">
            {PORTFOLIO_INVESTMENTS.map((p) => (
              <li
                key={p.name}
                className="border-t border-neutral-200 pt-3 text-neutral-700"
              >
                <div className="font-medium text-neutral-900">{p.name}</div>
                <div className="mt-1 text-xs text-neutral-500">{p.note}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Founder stakes. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Founder stakes
          </h2>
          <p className="mt-4 max-w-xl text-neutral-600">
            Companies we founded or co-founded.
          </p>
          <ul className="mt-10 grid grid-cols-1 gap-6 text-sm md:grid-cols-2">
            {PORTFOLIO_FOUNDER_STAKES.map((p) => (
              <li
                key={p.name}
                className="border-t border-neutral-200 pt-4 text-neutral-700"
              >
                <div className="font-medium text-neutral-900">{p.name}</div>
                <div className="mt-1 text-neutral-500">{p.note}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Incubation case study — Little Chonk. Sketched-out visual journey,
          per Brian 2026-06-15. Sits below the three modes / portfolio because
          incubation is mode 3 and benefits from the build-up. */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            Mode 3 — Incubation case study
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            Little Chonk: a creator, a dog, and a backpack.
          </h2>
          <p className="prose-editorial mt-8 max-w-3xl text-lg text-neutral-700">
            We took a creator with a real audience around their dog and turned
            an affinity moment into a real product. This is the build journey
            from concept sketch to launched company.
          </p>

          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            <figure>
              <PlaceholderImage
                label="Early backpack sketches"
                variant="square"
              />
              <figcaption className="mt-3 text-xs uppercase tracking-widest text-neutral-500">
                Step 1 — Concept
              </figcaption>
            </figure>
            <figure>
              <PlaceholderImage
                label="Material and silhouette iterations"
                variant="square"
              />
              <figcaption className="mt-3 text-xs uppercase tracking-widest text-neutral-500">
                Step 2 — Iterations
              </figcaption>
            </figure>
            <figure>
              <PlaceholderImage
                label="Creator and dog hero shot"
                variant="square"
              />
              <figcaption className="mt-3 text-xs uppercase tracking-widest text-neutral-500">
                Step 3 — Creator
              </figcaption>
            </figure>
            <figure>
              <PlaceholderImage
                label="Final product on a Manhattan sidewalk"
                variant="square"
              />
              <figcaption className="mt-3 text-xs uppercase tracking-widest text-neutral-500">
                Step 4 — Launch
              </figcaption>
            </figure>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
            <PlaceholderImage
              label="Little Chonk website hero screen"
              variant="wide"
            />
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                From audience to affinity product.
              </h3>
              <p className="prose-editorial mt-6 text-neutral-700">
                We brought the operating muscle, the design partners, and the
                go-to-market motion from day one. Little Chonk is now one of
                two founder-stake companies on our books.
              </p>
            </div>
          </div>
          <p className="mt-10 text-xs text-neutral-400">
            Sketch and product imagery placeholder. Real assets to follow.
          </p>
        </div>
      </section>

      {/* CTA. */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            For founders
          </h2>
          <p className="prose-editorial mt-6 text-neutral-700">
            We write small angel checks where we have conviction. We open the
            door to larger pools of capital when the round needs to be bigger
            than what we write. And we incubate when the gap in the market is
            big enough that the right answer is to build the company
            ourselves.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block text-sm text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-[var(--accent)]"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
