import Link from "next/link";
import {
  NORTH_STAR,
  HERO_LEAD,
  SERVICES,
  PARTNERSHIP_BRANDS,
} from "@/lib/data";
import PlaceholderImage from "@/components/PlaceholderImage";

// Brian's locked home page flow (2026-06-15 voice memo):
//   Hero → Selected partners → What we do → Splash carousel
// Explicitly NO "Who we are" on the home page anymore.
export default function Home() {
  return (
    <>
      {/* Hero — direct positioning, no redline edit. Splashy image to the right. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-[1.05fr_1fr] md:gap-16">
            <div>
              <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
                {NORTH_STAR}
              </h1>
              <p className="mt-8 max-w-xl text-base text-neutral-600 md:text-lg">
                {HERO_LEAD}
              </p>
              <div className="mt-10 flex gap-6 text-sm">
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
            <PlaceholderImage
              label="Brian and Jaeki on set"
              variant="square"
              className="md:rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Selected partners — wordmark placeholders. */}
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

      {/* Splash carousel — placeholder images, the visual closer of the home page. */}
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
