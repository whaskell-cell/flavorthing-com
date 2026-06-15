import Link from "next/link";
import {
  ABOUT,
  FOUNDER_PRINCIPAL,
  COFOUNDER,
  ADVISORS,
  PAST_AFFILIATES,
} from "@/lib/data";
import PlaceholderImage from "@/components/PlaceholderImage";

// Restructured 2026-06-15 PM to match the practice-page template.
// Pattern: Hero (eyebrow + word H1 + description) -> content sections -> CTA.
// Removed standalone Mission and Pull Quote sections — the manifesto is now
// folded into the hero description, and the bio paragraphs carry the mission.

export default function AboutPage() {
  return (
    <>
      {/* Hero — matches Advisory / Partnerships / Investing pattern. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            About
          </div>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
            About
          </h1>
          <p className="prose-editorial mt-10 max-w-3xl text-lg text-neutral-700 md:text-xl md:leading-relaxed">
            {ABOUT.manifesto}
          </p>
        </div>
      </section>

      {/* Founder — Brian. First-person, the spine of the page. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            Founder
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            {FOUNDER_PRINCIPAL.name}
          </h2>
          <div className="mt-1 text-xs uppercase tracking-widest text-neutral-500">
            {FOUNDER_PRINCIPAL.role}
          </div>
          <div className="mt-12 grid gap-12 md:grid-cols-[260px_1fr] md:gap-16">
            <PlaceholderImage label="Brian Lee portrait" variant="person" />
            <div className="space-y-6 text-neutral-700 md:text-lg md:leading-relaxed">
              {FOUNDER_PRINCIPAL.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Co-founder — Jaeki. Same layout as founder, smaller bio. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            Co-founder
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            {COFOUNDER.name}
          </h2>
          <div className="mt-1 text-xs uppercase tracking-widest text-neutral-500">
            {COFOUNDER.role}
          </div>
          <div className="mt-12 grid gap-12 md:grid-cols-[260px_1fr] md:gap-16">
            <PlaceholderImage label="Jaeki Cho portrait" variant="person" />
            <p className="text-neutral-700 md:text-lg md:leading-relaxed">
              {COFOUNDER.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Council — matches the Advisory "Whom we advise" list pattern. */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              Council
            </h2>
            <span className="hidden text-xs uppercase tracking-widest text-neutral-500 md:block">
              Strategic advisors
            </span>
          </div>
          <p className="max-w-2xl text-neutral-700 md:text-lg md:leading-relaxed">
            We run with the counsel of operators we trust at the strategic
            level. Each of them has built or scaled in the domains our clients
            are operating in.
          </p>
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {ADVISORS.map((a) => (
              <li
                key={a.name}
                className="border-t border-neutral-200 pt-6"
              >
                <h3 className="text-lg font-semibold tracking-tight text-neutral-900">
                  {a.name}
                </h3>
                <div className="mt-1 text-xs uppercase tracking-widest text-neutral-500">
                  {a.affiliation}
                </div>
                <p className="mt-3 text-sm text-neutral-700">{a.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Past affiliates — matches the Investing portfolio list pattern. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Past affiliates
          </h2>
          <p className="mt-4 max-w-xl text-neutral-600">
            Creators, companies, and institutions Brian has worked with
            materially. Not exhaustive.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 text-sm md:grid-cols-3">
            {PAST_AFFILIATES.map((p) => (
              <li
                key={p.name}
                className="border-t border-neutral-200 pt-4 text-neutral-700"
              >
                <div className="font-medium text-neutral-900">{p.name}</div>
                <div className="mt-1 text-xs text-neutral-500">{p.context}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA — matches every other page's closing pattern. */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Get in touch
          </h2>
          <p className="prose-editorial mt-6 text-neutral-700">
            If you are a creator running a real business, an institution
            making decisions about the attention economy, or a brand looking
            for a partnership team that does the work all the way through, we
            should talk.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block text-sm text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-[var(--accent)]"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
