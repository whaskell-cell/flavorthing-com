// Shared post-hero sections for the home page and the hero-variant preview routes.
// Hero is rendered by the page; HomeSections takes care of everything below it.

import Link from "next/link";
import { SERVICES, PARTNERSHIP_BRANDS } from "@/lib/data";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function HomeSections() {
  return (
    <>
      {/* Selected partners — wordmark placeholders, 5x2 grid. */}
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
          <ul className="grid grid-cols-2 items-center gap-x-8 gap-y-10 md:grid-cols-5">
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

      {/* What we do — three practices. */}
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

      {/* The work — splash carousel. */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              The work
            </h2>
            <span className="hidden text-xs uppercase tracking-widest text-neutral-500 md:block">
              Selected campaigns
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <PlaceholderImage
              label="On Running x Jaeki Cho campaign still"
              variant="carousel"
            />
            <PlaceholderImage
              label="Apple Pay x Jaeki x TBWA"
              variant="carousel"
            />
            <PlaceholderImage
              label="New York Mets x Jaeki Cho"
              variant="carousel"
            />
          </div>
          <p className="mt-8 text-xs text-neutral-400">
            Imagery placeholder. Photography and campaign stills to follow.
          </p>
        </div>
      </section>
    </>
  );
}
