import { BRIAN_WRITING } from "@/lib/data";
import { SubstackIcon } from "@/components/SocialIcons";

// "Latest from Notes from Baba" — Goldman/JPM-style news aggregator surface
// per Brian 2026-06-15 PM. A small list of recent post titles + dates, each
// linking through to Substack. Replaces the earlier card-style manifesto block.

export default function BrianWritingSection() {
  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <div className="text-xs uppercase tracking-widest text-neutral-500">
              Latest
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              From {BRIAN_WRITING.name}
            </h2>
          </div>
          <a
            href={BRIAN_WRITING.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 text-sm text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:decoration-[var(--accent)] md:inline-flex"
          >
            <SubstackIcon className="h-4 w-4 text-[var(--accent)]" />
            View all on Substack
          </a>
        </div>

        <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
          {BRIAN_WRITING.posts.map((post, i) => (
            <li key={i}>
              <a
                href={BRIAN_WRITING.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 py-6 transition-colors hover:bg-neutral-50 md:flex-row md:items-baseline md:justify-between md:gap-8 md:px-2"
              >
                <h3 className="text-lg font-semibold tracking-tight text-neutral-900 transition-colors group-hover:text-[var(--accent)] md:text-xl">
                  {post.title}
                </h3>
                <div className="flex shrink-0 items-center gap-4 text-xs uppercase tracking-widest text-neutral-500">
                  <span>{post.date}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <a
          href={BRIAN_WRITING.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 text-sm text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:decoration-[var(--accent)] md:hidden"
        >
          <SubstackIcon className="h-4 w-4 text-[var(--accent)]" />
          View all on Substack
        </a>

        <p className="mt-10 text-xs text-neutral-400">
          Live Substack feed integration to follow. Headlines above are
          placeholders.
        </p>
      </div>
    </section>
  );
}
