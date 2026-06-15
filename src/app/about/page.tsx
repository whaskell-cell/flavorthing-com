import Link from "next/link";
import { ABOUT, FOUNDERS } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      {/* Manifesto hero — leads with "We started Flavor Thing because…" */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            About
          </div>
          <h1 className="mt-6 max-w-4xl text-3xl font-semibold leading-[1.15] tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
            {ABOUT.manifesto}
          </h1>
        </div>
      </section>

      {/* Origin story — 3 paragraphs, restrained measure. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-20">
            <div className="text-xs uppercase tracking-widest text-neutral-500">
              Origin
            </div>
            <div className="space-y-6 text-neutral-700 md:text-lg md:leading-relaxed">
              {ABOUT.origin.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders — named, bios, no ornament. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-20">
            <div className="text-xs uppercase tracking-widest text-neutral-500">
              Founders
            </div>
            <div className="grid gap-12 md:grid-cols-2">
              {FOUNDERS.map((f) => (
                <div key={f.name}>
                  <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">
                    {f.name}
                  </h3>
                  <div className="mt-1 text-xs uppercase tracking-widest text-neutral-500">
                    {f.role}
                  </div>
                  <p className="mt-5 text-neutral-700 md:leading-relaxed">
                    {f.blurb}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission. Substantive paragraph, not slogans. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-20">
            <div className="text-xs uppercase tracking-widest text-neutral-500">
              Mission
            </div>
            <p className="text-neutral-700 md:text-lg md:leading-relaxed">
              {ABOUT.mission}
            </p>
          </div>
        </div>
      </section>

      {/* How we work — the two-founder + AI ops differentiator. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-20">
            <div className="text-xs uppercase tracking-widest text-neutral-500">
              How we work
            </div>
            <p className="text-neutral-700 md:text-lg md:leading-relaxed">
              {ABOUT.howWeWork}
            </p>
          </div>
        </div>
      </section>

      {/* Scale. Receipts as a vertical list. Restrained. */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-20">
            <div className="text-xs uppercase tracking-widest text-neutral-500">
              Today
            </div>
            <ul className="space-y-5">
              {ABOUT.scaleClaims.map((c, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 border-t border-neutral-200 pt-5 text-neutral-700 md:text-lg"
                >
                  <span className="font-handwriting text-2xl leading-none text-[var(--accent)] md:text-3xl">
                    /
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pull quote — the manifesto reframed. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-32 md:py-40">
          <blockquote className="mx-auto max-w-4xl text-center">
            <p className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-5xl">
              &ldquo;{ABOUT.pullQuote}&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* CTA. */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-20">
            <div className="text-xs uppercase tracking-widest text-neutral-500">
              Get in touch
            </div>
            <div>
              <p className="text-neutral-700 md:text-lg md:leading-relaxed">
                If you are a creator running a real business, or a brand looking
                for a partnership team that does the work all the way through,
                we should talk.
              </p>
              <Link
                href="/contact"
                className="mt-10 inline-block text-sm text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-[var(--accent)]"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
