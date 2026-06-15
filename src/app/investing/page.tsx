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

      {/* Three modes — angel, intros, incubation. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24">
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

      {/* Incubation example — Little Chonk. */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <PlaceholderImage
              label="Little Chonk dog backpack on a Manhattan sidewalk"
              variant="carousel"
              className="md:rounded-lg"
            />
            <div>
              <div className="text-xs uppercase tracking-widest text-neutral-500">
                Incubation case study
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                Little Chonk
              </h2>
              <p className="prose-editorial mt-6 text-neutral-700">
                We saw a gap in how dog owners actually move through cities and
                built the company that filled it. From concept through
                go-to-market we brought the operating muscle, the design
                partners, and the network from day one. Little Chonk is one of
                two founder-stake companies on our books today.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24">
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

      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24">
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

      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
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
