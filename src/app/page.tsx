import Link from "next/link";
import {
  HERO_REDLINE,
  HERO_LEAD,
  SERVICES,
  PARTNERSHIP_BRANDS,
  FOUNDERS,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero — redline edit. Enacts the rebrand visually. No wordmark here (header has it). */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-900 md:text-6xl lg:text-7xl">
            {HERO_REDLINE.map((seg, i) => {
              if (seg.kind === "text") {
                return (
                  <span key={i}>
                    {seg.value}
                    {i < HERO_REDLINE.length - 1 ? " " : ""}
                  </span>
                );
              }
              if (seg.kind === "strike") {
                return (
                  <span key={i} className="redline-strike">
                    {seg.value}
                  </span>
                );
              }
              return (
                <span key={i} className="redline-insert text-[1.05em]">
                  {seg.value}
                </span>
              );
            })}
          </h1>
          <p className="mt-12 max-w-xl text-base text-neutral-500 md:text-lg">
            {HERO_LEAD}
          </p>
        </div>
      </section>

      {/* What we do — three practices. The substance lands here, not in the hero. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              What we do
            </h2>
            <span className="hidden text-xs uppercase tracking-widest text-neutral-500 md:block">
              Three practices, one team
            </span>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.slug} className="flex flex-col">
                <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
                  {s.name}
                </h3>
                <p className="mt-4 text-neutral-700">{s.short}</p>
                <Link
                  href={`/${s.slug}`}
                  className="mt-6 text-sm text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-[var(--accent)]"
                >
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work — brand partnership logo wall. */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              Selected partners
            </h2>
            <Link
              href="/partnerships"
              className="hidden text-sm text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:decoration-[var(--accent)] md:inline"
            >
              View Brand Partnerships
            </Link>
          </div>
          <ul className="grid grid-cols-2 items-center gap-x-8 gap-y-10 md:grid-cols-4 lg:grid-cols-6">
            {PARTNERSHIP_BRANDS.map((b) => (
              <li
                key={b.name}
                className="flex h-12 items-center justify-center text-center"
                title={b.name}
              >
                <span className="text-base font-semibold tracking-tight text-neutral-700 transition hover:text-neutral-900">
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

      {/* Who we are — founders. Restrained. */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Who we are
          </h2>
          <div className="mt-10 grid gap-12 md:grid-cols-2">
            {FOUNDERS.map((f) => (
              <div key={f.name}>
                <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
                  {f.name}
                </h3>
                <div className="mt-1 text-xs uppercase tracking-widest text-neutral-500">
                  {f.role}
                </div>
                <p className="mt-4 text-neutral-700">{f.blurb}</p>
              </div>
            ))}
          </div>
          <Link
            href="/about"
            className="mt-10 inline-block text-sm text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-[var(--accent)]"
          >
            More about Flavor Thing
          </Link>
        </div>
      </section>
    </>
  );
}
