import Link from "next/link";
import {
  SERVICES,
  PARTNERSHIP_BRANDS,
  CASE_STUDIES,
} from "@/lib/data";
import PlaceholderImage from "@/components/PlaceholderImage";

const SERVICE = SERVICES.find((s) => s.slug === "partnerships")!;

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

      {/* Two-audience split — pro-agency register. */}
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

      {/* Logo wall. */}
      <section className="border-b border-neutral-200 bg-neutral-50">
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

      {/* Selected case studies — Smooth-style brand x creator x outcome. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              Selected case studies
            </h2>
            <p className="mt-4 max-w-2xl text-neutral-600">
              A representative slice of the brand partnerships we have run.
            </p>
          </div>
          <ul className="space-y-12">
            {CASE_STUDIES.map((c) => (
              <li
                key={c.brand}
                className="grid gap-8 border-t border-neutral-200 pt-10 md:grid-cols-[260px_1fr] md:gap-12"
              >
                <PlaceholderImage
                  label={`${c.brand} × ${c.creator}`}
                  variant="square"
                />
                <div>
                  <div className="text-xs uppercase tracking-widest text-neutral-500">
                    {c.accolade}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900">
                    {c.brand} × {c.creator}
                  </h3>
                  <p className="mt-3 text-lg text-neutral-700 md:leading-relaxed">
                    {c.headline}
                  </p>
                  <p className="mt-5 text-neutral-700">{c.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-xs text-neutral-400">
            Campaign imagery placeholders. Stills to follow.
          </p>
        </div>
      </section>

      {/* How we run a partnership — practice areas 3 and 4. */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            How we run a partnership
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {SERVICE.practiceAreas.slice(2).map((p) => (
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
