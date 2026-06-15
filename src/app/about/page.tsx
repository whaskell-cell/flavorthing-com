import Link from "next/link";
import {
  ABOUT,
  FOUNDER_PRINCIPAL,
  COFOUNDER,
  ADVISORS,
  PAST_AFFILIATES,
} from "@/lib/data";
import PlaceholderImage from "@/components/PlaceholderImage";

export default function AboutPage() {
  return (
    <>
      {/* Manifesto hero. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            About
          </div>
          <h1 className="mt-6 max-w-4xl text-3xl font-semibold leading-[1.15] tracking-tight text-neutral-900 md:text-5xl lg:text-6xl">
            {ABOUT.manifesto}
          </h1>
        </div>
      </section>

      {/* Founder / origin — first person, Brian-led. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-20">
            <div className="text-xs uppercase tracking-widest text-neutral-500">
              Founder
            </div>
            <div>
              <div className="grid gap-10 md:grid-cols-[1fr_220px] md:items-start">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                    {FOUNDER_PRINCIPAL.name}
                  </h2>
                  <div className="mt-1 text-xs uppercase tracking-widest text-neutral-500">
                    {FOUNDER_PRINCIPAL.role}
                  </div>
                </div>
                <PlaceholderImage
                  label="Brian Lee portrait"
                  variant="person"
                />
              </div>
              <div className="mt-10 space-y-6 text-neutral-700 md:text-lg md:leading-relaxed">
                {FOUNDER_PRINCIPAL.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-founder — Jaeki. Restrained, deferential to the principal but real. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-20">
            <div className="text-xs uppercase tracking-widest text-neutral-500">
              Co-founder
            </div>
            <div className="grid gap-10 md:grid-cols-[220px_1fr] md:items-start">
              <PlaceholderImage
                label="Jaeki Cho portrait"
                variant="person"
              />
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                  {COFOUNDER.name}
                </h2>
                <div className="mt-1 text-xs uppercase tracking-widest text-neutral-500">
                  {COFOUNDER.role}
                </div>
                <p className="mt-6 text-neutral-700 md:text-lg md:leading-relaxed">
                  {COFOUNDER.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Council of advisors. */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-20">
            <div className="text-xs uppercase tracking-widest text-neutral-500">
              Council
            </div>
            <div>
              <p className="text-neutral-700 md:text-lg md:leading-relaxed">
                The firm runs with the counsel of operators we trust at the
                strategic level. Each of them has built or scaled in the
                domains our creator partners are operating in.
              </p>
              <ul className="mt-12 grid gap-10 md:grid-cols-2">
                {ADVISORS.map((a) => (
                  <li
                    key={a.name}
                    className="border-t border-neutral-200 pt-6"
                  >
                    <div className="flex items-start gap-4">
                      <PlaceholderImage
                        label={a.name}
                        variant="square"
                        className="w-16 flex-none"
                      />
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                          {a.name}
                        </h3>
                        <div className="mt-1 text-xs uppercase tracking-widest text-neutral-500">
                          {a.affiliation}
                        </div>
                        <p className="mt-3 text-sm text-neutral-700">
                          {a.note}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-10 text-xs text-neutral-400">
                Portrait imagery to follow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past affiliates — receipts of Brian's career. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-20">
            <div className="text-xs uppercase tracking-widest text-neutral-500">
              Past affiliates
            </div>
            <div>
              <p className="text-neutral-700 md:text-lg md:leading-relaxed">
                Creators, companies, and platforms we have worked with
                materially. Not exhaustive.
              </p>
              <ul className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3">
                {PAST_AFFILIATES.map((p) => (
                  <li
                    key={p.name}
                    className="border-t border-neutral-200 pt-4 text-sm"
                  >
                    <div className="font-semibold tracking-tight text-neutral-900">
                      {p.name}
                    </div>
                    <div className="mt-1 text-neutral-500">{p.context}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission. Substantive paragraph, not slogans. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
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

      {/* Pull quote. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <blockquote className="mx-auto max-w-4xl text-center">
            <p className="text-3xl font-semibold leading-tight tracking-tight text-neutral-900 md:text-5xl">
              &ldquo;{ABOUT.pullQuote}&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* CTA. */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid gap-12 md:grid-cols-[200px_1fr] md:gap-20">
            <div className="text-xs uppercase tracking-widest text-neutral-500">
              Get in touch
            </div>
            <div>
              <p className="text-neutral-700 md:text-lg md:leading-relaxed">
                If you are a creator running a real business, or a brand
                looking for a partnership team that does the work all the way
                through, we should talk.
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
