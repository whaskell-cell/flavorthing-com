import Link from "next/link";
import { SERVICES, INSTITUTIONAL_CLIENTS, FEATURED_INSIGHT } from "@/lib/data";

const SERVICE = SERVICES.find((s) => s.slug === "advisory")!;

export default function AdvisoryPage() {
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
          <p className="prose-editorial mt-8 max-w-3xl text-lg text-neutral-700 md:text-xl md:leading-relaxed">
            {SERVICE.long}
          </p>
        </div>
      </section>

      {/* What this looks like — the four practice pillars (moved up per Brian 2026-06-15). */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            What this looks like
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

      {/* Whom we advise — institutional clients + creator partners. */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              Whom we advise
            </h2>
            <span className="hidden text-xs uppercase tracking-widest text-neutral-500 md:block">
              Selected clients
            </span>
          </div>
          <div className="grid gap-12 md:grid-cols-2">
            <article>
              <div className="text-xs uppercase tracking-widest text-neutral-500">
                Institutional
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                Companies, funds, and think tanks.
              </h3>
              <p className="mt-6 max-w-md text-neutral-700 md:leading-relaxed">
                Organizations that pay for the way we think about the
                attention economy. The work spans market sizing, policy
                framing, platform strategy, and creator-landscape rigor.
              </p>
              <ul className="mt-10 space-y-0 text-sm">
                {INSTITUTIONAL_CLIENTS.map((c) => (
                  <li
                    key={c.name}
                    className="border-t border-neutral-200 pt-3 pb-4 text-neutral-700"
                  >
                    <div className="font-medium text-neutral-900">
                      {c.name}
                    </div>
                    <div className="mt-1 text-xs text-neutral-500">
                      {c.kind}
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-neutral-400">
                Selected list. Not exhaustive.
              </p>
            </article>

            <article>
              <div className="text-xs uppercase tracking-widest text-neutral-500">
                Creators
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
                Operators building real businesses.
              </h3>
              <p className="mt-6 max-w-md text-neutral-700 md:leading-relaxed">
                Creators who run their brand, audience, and operations as
                operating businesses, and want strategic counsel on the
                decisions most agencies and managers will not touch. From
                category positioning to crisis response.
              </p>
              <ul className="mt-10 space-y-0 text-sm">
                <li className="border-t border-neutral-200 pt-3 pb-4 text-neutral-700">
                  <div className="font-medium text-neutral-900">
                    Anderson .Paak
                  </div>
                  <div className="mt-1 text-xs text-neutral-500">
                    Music / Multi-property
                  </div>
                </li>
                <li className="border-t border-neutral-200 pt-3 pb-4 text-neutral-700">
                  <div className="font-medium text-neutral-900">
                    Jonathan Park
                  </div>
                  <div className="mt-1 text-xs text-neutral-500">
                    Platform / Scale
                  </div>
                </li>
                <li className="border-t border-neutral-200 pt-3 pb-4 text-neutral-700">
                  <div className="font-medium text-neutral-900">
                    Jaeki Cho
                  </div>
                  <div className="mt-1 text-xs text-neutral-500">
                    Food / Culture / NYC
                  </div>
                </li>
              </ul>
              <p className="mt-6 text-xs text-neutral-400">
                Selected partners. Many engagements are private.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* AI Operating Playbook callout — surfaces the differentiator that
          most institutional buyers haven't seen credibly claimed elsewhere.
          Links to the full piece on /insights. */}
      <section className="border-b border-neutral-200 bg-neutral-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr] md:gap-16">
            <div>
              <div className="text-xs uppercase tracking-widest text-white/60">
                Featured perspective
              </div>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                The AI Operating Playbook.
              </h2>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/80 md:text-xl">
                Two founders. Five AI agents. The operating layer underneath
                everything we do — and the layer we can design with you.
              </p>
              <Link
                href={`/insights/${FEATURED_INSIGHT.slug}`}
                className="mt-10 inline-block border-b border-white/40 pb-1 text-sm text-white transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Read the piece
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="rounded-md border border-white/20 bg-white/[0.04] p-10">
                <ul className="space-y-4 text-sm">
                  <li className="flex items-baseline gap-4">
                    <span className="w-16 text-xs uppercase tracking-widest text-white/40">
                      Sheryl
                    </span>
                    <span className="text-white/80">COO. Orchestrates.</span>
                  </li>
                  <li className="flex items-baseline gap-4">
                    <span className="w-16 text-xs uppercase tracking-widest text-white/40">
                      Marc
                    </span>
                    <span className="text-white/80">Content strategy.</span>
                  </li>
                  <li className="flex items-baseline gap-4">
                    <span className="w-16 text-xs uppercase tracking-widest text-white/40">
                      Mayer
                    </span>
                    <span className="text-white/80">Content operations.</span>
                  </li>
                  <li className="flex items-baseline gap-4">
                    <span className="w-16 text-xs uppercase tracking-widest text-white/40">
                      Ovitz
                    </span>
                    <span className="text-white/80">
                      Brand partnerships.
                    </span>
                  </li>
                  <li className="flex items-baseline gap-4">
                    <span className="w-16 text-xs uppercase tracking-widest text-white/40">
                      Tadashi
                    </span>
                    <span className="text-white/80">Foundation work.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement — scale + retainers + equity. */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            {SERVICE.engagement?.title ?? "Engagement"}
          </h2>
          <div className="prose-editorial mt-8 max-w-3xl space-y-6 text-neutral-700">
            {SERVICE.engagement?.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-block text-sm text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-[var(--accent)]"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
