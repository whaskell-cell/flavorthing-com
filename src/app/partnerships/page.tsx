import Link from "next/link";
import {
  SERVICES,
  PARTNERSHIP_BRANDS,
  CASE_STUDIES,
} from "@/lib/data";
import PlaceholderImage from "@/components/PlaceholderImage";

const SERVICE = SERVICES.find((s) => s.slug === "partnerships")!;

// Pillars 0..1 surface as the dual audience above; 2..4 surface as the
// "How we run a partnership" section below (Deal architecture / Production &
// outcomes / Engagement).
const HOW_PILLARS = SERVICE.practiceAreas.slice(2);

export default function PartnershipsPage() {
  return (
    <>
      {/* Practice hero. */}
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

      {/* Two-audience split. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-2">
            <article className="flex flex-col">
              <PlaceholderImage
                label="Creator partnership campaign assets"
                variant="carousel"
              />
              <div className="mt-8 text-xs uppercase tracking-widest text-neutral-500">
                For creators
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                Your brand business, architected.
              </h2>
              <p className="prose-editorial mt-6 text-neutral-700">
                {SERVICE.practiceAreas[0].body}
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
                label="Brand team and creator on set"
                variant="carousel"
              />
              <div className="mt-8 text-xs uppercase tracking-widest text-neutral-500">
                For brands
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                A senior strategic counterpart, not a roster.
              </h2>
              <p className="prose-editorial mt-6 text-neutral-700">
                {SERVICE.practiceAreas[1].body}
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

      {/* ICP strip — who we work with, signaled by buyer type. */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              Who we work with
            </h2>
            <span className="hidden text-xs uppercase tracking-widest text-neutral-500 md:block">
              Buyer profile
            </span>
          </div>
          <p className="max-w-2xl text-neutral-700 md:text-lg md:leading-relaxed">
            Our brand partnership work spans the buyer profiles most agencies
            do not serve in the same room.
          </p>
          <ul className="mt-10 flex flex-wrap gap-3">
            {SERVICE.icp?.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-800"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Logo wall. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
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

      {/* Selected case studies — snippet style, no long body copy. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              Selected campaigns
            </h2>
            <p className="mt-4 max-w-2xl text-neutral-600">
              Snippets from work we have run.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {CASE_STUDIES.map((c) => (
              <li key={c.brand} className="flex flex-col">
                <PlaceholderImage
                  label={`${c.brand} × ${c.creator}`}
                  variant="carousel"
                />
                <div className="mt-5 text-xs uppercase tracking-widest text-neutral-500">
                  {c.accolade}
                </div>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-neutral-900">
                  {c.brand} × {c.creator}
                </h3>
                <p className="mt-2 text-sm text-neutral-700">{c.headline}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-xs text-neutral-400">
            Campaign stills and motion to follow. We are not posting full
            videos here.
          </p>
        </div>
      </section>

      {/* How we run a partnership — Deal architecture / Production & outcomes / Engagement. */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            How we run a partnership
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3">
            {HOW_PILLARS.map((p) => (
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
    </>
  );
}
