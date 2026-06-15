import Link from "next/link";
import {
  NORTH_STAR,
  HERO_SUBHEAD,
  SERVICES,
  PARTNERSHIP_RECEIPTS,
  FOUNDERS,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
          <h1 className="font-serif text-5xl text-neutral-900 md:text-7xl">
            {NORTH_STAR}
          </h1>
          <p className="prose-editorial mt-10 max-w-2xl text-lg text-neutral-700 md:text-xl">
            {HERO_SUBHEAD}
          </p>
          <div className="mt-12 flex gap-6 text-sm">
            <Link
              href="/partnerships"
              className="border-b border-neutral-900 pb-1 text-neutral-900 transition-colors hover:text-neutral-600"
            >
              Our work
            </Link>
            <Link
              href="/contact"
              className="border-b border-transparent pb-1 text-neutral-600 transition-colors hover:border-neutral-400 hover:text-neutral-900"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Three services */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">
              What we do
            </h2>
            <span className="hidden text-sm uppercase tracking-widest text-neutral-500 md:block">
              Three practices, one team
            </span>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.slug} className="flex flex-col">
                <h3 className="font-serif text-2xl text-neutral-900">{s.name}</h3>
                <p className="mt-4 text-neutral-700">{s.short}</p>
                <Link
                  href={`/${s.slug}`}
                  className="mt-6 text-sm text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900"
                >
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 max-w-xl text-neutral-600">
            A few of the brand partnerships our creator partners and our team
            have run together.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 text-sm md:grid-cols-4">
            {PARTNERSHIP_RECEIPTS.map((r) => (
              <li
                key={r.brand}
                className="border-t border-neutral-200 pt-4 text-neutral-700"
              >
                <div className="font-medium text-neutral-900">{r.brand}</div>
                <div className="mt-1 text-neutral-500">
                  with {r.creator}
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-neutral-400">
                  {r.year}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who we are */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">
            Who we are
          </h2>
          <div className="mt-10 grid gap-12 md:grid-cols-2">
            {FOUNDERS.map((f) => (
              <div key={f.name}>
                <h3 className="font-serif text-2xl text-neutral-900">
                  {f.name}
                </h3>
                <div className="mt-1 text-sm uppercase tracking-widest text-neutral-500">
                  {f.role}
                </div>
                <p className="mt-4 text-neutral-700">{f.blurb}</p>
              </div>
            ))}
          </div>
          <Link
            href="/about"
            className="mt-10 inline-block border-b border-neutral-900 pb-1 text-sm text-neutral-900 hover:text-neutral-600"
          >
            More about Flavor Thing
          </Link>
        </div>
      </section>
    </>
  );
}
