import Link from "next/link";
import {
  SERVICES,
  PARTNERSHIP_RECEIPTS,
  PARTNERSHIP_BRANDS,
} from "@/lib/data";
import PlaceholderImage from "@/components/PlaceholderImage";

const SERVICE = SERVICES.find((s) => s.slug === "partnerships")!;

export default function PartnershipsPage() {
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

      {/* Two-audience split. The reason this page is rebuilt: both sides of the table. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <article className="flex flex-col">
              <PlaceholderImage
                label="Creator with brand campaign assets"
                variant="carousel"
              />
              <div className="text-xs uppercase tracking-widest text-neutral-500 mt-8">
                For creators
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                Your deals, run by a senior team.
              </h2>
              <p className="mt-6 text-neutral-700 md:leading-relaxed">
                If you are a creator earning real revenue from brand work and
                want a team to structure, negotiate, produce, and report on
                your partnerships, we run them end to end. Some of the
                strongest creators in food, fashion, sport, and culture run
                their brand business with us.
              </p>
              <Link
                href="/contact"
                className="mt-10 inline-block text-sm text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-[var(--accent)]"
              >
                Work with us
              </Link>
            </article>

            <article className="flex flex-col">
              <PlaceholderImage
                label="Brand-side meeting with FT and creator"
                variant="carousel"
              />
              <div className="text-xs uppercase tracking-widest text-neutral-500 mt-8">
                For brands
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                Access to creators who actually move audiences.
              </h2>
              <p className="mt-6 text-neutral-700 md:leading-relaxed">
                If you are a brand or agency looking for a way in to the
                creators we work with, we design and run the campaign with you
                from creative through delivery. We do not broker
                introductions. We build the partnership.
              </p>
              <Link
                href="/contact"
                className="mt-10 inline-block text-sm text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-[var(--accent)]"
              >
                Build with us
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Logo wall. */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              Brands we have worked with
            </h2>
            <span className="hidden text-xs uppercase tracking-widest text-neutral-500 md:block">
              Selected partners
            </span>
          </div>
          <ul className="grid grid-cols-2 items-center gap-x-8 gap-y-12 md:grid-cols-5">
            {PARTNERSHIP_BRANDS.map((b) => (
              <li
                key={b.name}
                className="flex h-14 items-center justify-center text-center"
                title={b.name}
              >
                <span className="text-lg font-semibold tracking-tight text-neutral-700 transition hover:text-neutral-900">
                  {b.name}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-xs text-neutral-400">
            Wordmark placeholders. Brand SVGs to follow.
          </p>
        </div>
      </section>

      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            How we run a partnership
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {SERVICE.practiceAreas.map((p) => (
              <article key={p.name}>
                <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
                  {p.name}
                </h3>
                <p className="prose-editorial mt-4 text-neutral-700">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Selected work
          </h2>
          <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 text-sm md:grid-cols-3">
            {PARTNERSHIP_RECEIPTS.map((r) => (
              <li
                key={r.brand}
                className="border-t border-neutral-200 pt-4 text-neutral-700"
              >
                <div className="font-medium text-neutral-900">{r.brand}</div>
                <div className="mt-1 text-neutral-500">with {r.creator}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-neutral-400">
                  {r.year}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
