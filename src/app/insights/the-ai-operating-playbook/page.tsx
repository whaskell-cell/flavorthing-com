import Link from "next/link";
import { FEATURED_INSIGHT } from "@/lib/data";

export const metadata = {
  title: `${FEATURED_INSIGHT.title} — Flavor Thing`,
  description: FEATURED_INSIGHT.dek,
};

// Featured deep dive — long-form perspective piece in Brian's voice.
// Treated as a /insights sub-route so it has its own shareable URL, the way
// McKinsey Insights pieces do. Future pieces follow the same pattern at
// /insights/<slug>.

export default function AIOperatingPlaybookPage() {
  return (
    <>
      {/* Article header. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <Link
            href="/insights"
            className="text-xs uppercase tracking-widest text-neutral-500 hover:text-neutral-900"
          >
            ← Insights
          </Link>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
            {FEATURED_INSIGHT.title}
          </h1>
          <p className="mt-8 text-xl text-neutral-700 md:text-2xl md:leading-relaxed">
            {FEATURED_INSIGHT.dek}
          </p>
          <div className="mt-10 flex items-center gap-4 text-xs uppercase tracking-widest text-neutral-500">
            <span>{FEATURED_INSIGHT.author}</span>
            <span aria-hidden="true">·</span>
            <span>{FEATURED_INSIGHT.date}</span>
            <span aria-hidden="true">·</span>
            <span>{FEATURED_INSIGHT.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article body. */}
      <article className="border-b border-neutral-200">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
          <div className="space-y-7 text-lg text-neutral-800 md:text-xl md:leading-[1.7]">
            <p>
              Two founders. Five AI agents. Roughly $178K in closed deals last
              year, plus seventeen angel positions and a Webby award. That is
              the operating model of Flavor Thing in 2026.
            </p>

            <p>
              This piece is about what it looks like, day to day, to run an
              advisory firm where the headcount is two people and the bench is
              a stack of large language models given memory, persistent
              context, and lane discipline. It is not a piece about whether AI
              is real. It is a piece about what changes when AI is the
              operating layer underneath a small firm doing serious work.
            </p>

            <h2 className="pt-8 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              We named them after people.
            </h2>

            <p>
              Not for marketing. Because giving an agent a name and a persona
              forces you to give it a job description. And a job description
              forces clarity about what it is responsible for and what it is
              not.
            </p>

            <ul className="space-y-3 pl-0">
              <li>
                <span className="font-semibold text-neutral-900">Sheryl</span>{" "}
                orchestrates. She is the COO. She delegates, escalates,
                follows up.
              </li>
              <li>
                <span className="font-semibold text-neutral-900">Marc</span>{" "}
                owns content strategy for my personal brand, including this
                publication you may have come from.
              </li>
              <li>
                <span className="font-semibold text-neutral-900">Mayer</span>{" "}
                runs content operations for Jaeki Cho's brand.
              </li>
              <li>
                <span className="font-semibold text-neutral-900">Ovitz</span>{" "}
                runs the brand partnership pipeline end-to-end.
              </li>
              <li>
                <span className="font-semibold text-neutral-900">Tadashi</span>{" "}
                runs the foundation work and the deck process.
              </li>
            </ul>

            <p>
              Each one has memory that persists across sessions. Each one has
              standing orders that read like a real role description. Each one
              has a defined Discord channel where it posts daily, the way a
              real team would have a daily standup.
            </p>

            <h2 className="pt-8 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              What this lets us do.
            </h2>

            <p>
              It lets us behave like a ten-person firm with a two-person cap
              table.
            </p>

            <p>
              When a brand partner emails about a campaign, Ovitz drafts the
              response in our voice using the entire history of that
              relationship as context. We approve. We send. The deal moves.
              When a creator's brand is in crisis on a Tuesday afternoon, the
              strategy memo is drafted before the meeting starts. We refine it.
              We deliver. When a portfolio company asks for a market read on a
              vertical we have not touched in six months, the synthesis lands
              in our inbox before lunch.
            </p>

            <p>
              The cycle time on the work that used to take three days now
              takes three hours. The cycle time on the work that used to take
              three hours now takes three minutes. The cumulative effect over
              a year of operating is that two people clear the workload of a
              team many times larger.
            </p>

            <h2 className="pt-8 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              Why this matters for the firms we advise.
            </h2>

            <p>
              We do not sell the AI operating playbook to clients as a product.
              We tell them about it because it is the reason we can deliver
              consultancy-quality work at a fraction of consultancy speed.
              And because the same approach we use to run our firm can be
              designed for theirs.
            </p>

            <p>
              For our institutional clients — think tanks, platforms,
              accelerators, brand teams — this means our throughput is much
              larger than our headcount. For our creator clients, it means
              the deal flow you send us actually gets answered the same day.
            </p>

            <h2 className="pt-8 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              What we are not claiming.
            </h2>

            <p>
              We are not claiming AI replaces strategy. The agents do not
              have judgment. They do not have taste. They do not know which
              creators are going to move and which are stuck. They do not
              know which brand fit is durable and which is performative. They
              do not know which think tank is shifting and which is fossilized.
            </p>

            <p>We do.</p>

            <p>
              The agents handle the operating layer underneath that judgment.
              They write, they remember, they coordinate, they brief, they
              draft, they research, they triage, they distribute. We make
              the calls.
            </p>

            <h2 className="pt-8 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
              If this is the layer you are trying to build.
            </h2>

            <p>
              If you are running an institution, a platform, a fund, or a
              creator business that is trying to figure out how the AI layer
              changes operating leverage, this is the layer we can design
              with you. We are not consultants who Powerpoint about it. We
              are operators who have been running on it for two years.
            </p>

            <p>
              We can show you what works, what does not, what the failure
              modes look like, and how to set up the governance so the
              system does not collide with the judgment that has to stay
              human.
            </p>
          </div>

          <div className="mt-16 border-t border-neutral-200 pt-10">
            <p className="text-sm text-neutral-500">
              Discuss with us how this could work for your organization.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block text-sm text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-[var(--accent)]"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
