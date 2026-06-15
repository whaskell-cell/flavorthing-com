import Link from "next/link";
import {
  FEATURED_INSIGHT,
  BRIAN_WRITING,
  YOUTUBE_VIDEOS,
  PRESS_MENTIONS,
} from "@/lib/data";
import PlaceholderImage from "@/components/PlaceholderImage";
import { SubstackIcon } from "@/components/SocialIcons";

export const metadata = {
  title: "Insights — Flavor Thing",
  description:
    "Published thinking from Flavor Thing on the operating side of the attention economy.",
};

export default function InsightsPage() {
  return (
    <>
      {/* Hero — matches the practice page template. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            Insights
          </div>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-neutral-900 md:text-6xl">
            Insights
          </h1>
          <p className="prose-editorial mt-10 max-w-3xl text-lg text-neutral-700 md:text-xl md:leading-relaxed">
            How we are thinking about the attention economy. Frameworks,
            market reads, and the build-in-public dispatches from running the
            firm. Published in long-form on Substack, in video on YouTube,
            and in the occasional deep-dive piece below.
          </p>
        </div>
      </section>

      {/* Featured piece — The AI Operating Playbook. */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
            <div>
              <div className="text-xs uppercase tracking-widest text-neutral-500">
                Featured perspective
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
                {FEATURED_INSIGHT.title}
              </h2>
              <p className="mt-8 max-w-xl text-lg text-neutral-700 md:text-xl md:leading-relaxed">
                {FEATURED_INSIGHT.dek}
              </p>
              <div className="mt-8 flex items-center gap-4 text-xs uppercase tracking-widest text-neutral-500">
                <span>{FEATURED_INSIGHT.author}</span>
                <span aria-hidden="true">·</span>
                <span>{FEATURED_INSIGHT.date}</span>
                <span aria-hidden="true">·</span>
                <span>{FEATURED_INSIGHT.readTime}</span>
              </div>
              <Link
                href={`/insights/${FEATURED_INSIGHT.slug}`}
                className="mt-10 inline-block text-sm text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-[var(--accent)]"
              >
                Read the piece
              </Link>
            </div>
            <PlaceholderImage
              label="Operating layer visual — five agents and two founders"
              variant="square"
            />
          </div>
        </div>
      </section>

      {/* From Notes from Baba — Substack post list, news-aggregator style. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-neutral-500">
                Substack
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
              All posts on Substack
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
        </div>
      </section>

      {/* From YouTube — video cards with thumbnail placeholders. */}
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-neutral-500">
                YouTube
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                On the channel
              </h2>
            </div>
            <a
              href="https://www.youtube.com/@brian_lee"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-sm text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:decoration-[var(--accent)] md:inline"
            >
              All videos
            </a>
          </div>
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {YOUTUBE_VIDEOS.map((v) => (
              <li key={v.title}>
                <a
                  href={v.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col"
                >
                  <PlaceholderImage
                    label={v.title}
                    variant="carousel"
                  />
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-neutral-900 transition-colors group-hover:text-[var(--accent)]">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">{v.note}</p>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-xs text-neutral-400">
            Video thumbnails to follow.
          </p>
        </div>
      </section>

      {/* Press / media strip. Placeholder logos. */}
      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mb-12">
            <div className="text-xs uppercase tracking-widest text-neutral-500">
              Press
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
              Featured in
            </h2>
          </div>
          <ul className="grid grid-cols-2 items-center gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
            {PRESS_MENTIONS.map((m) => (
              <li
                key={m.name}
                className="flex h-12 items-center justify-center text-center"
                title={m.name}
              >
                <span className="text-base font-semibold tracking-tight text-neutral-700">
                  {m.name}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-xs text-neutral-400">
            Wordmark placeholders. Final list pending Brian's confirmation of
            where pieces have run.
          </p>
        </div>
      </section>

      {/* CTA. */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Work with us
          </h2>
          <p className="prose-editorial mt-6 text-neutral-700">
            If you are running an institution, a platform, or a creator
            business and the published thinking above is the way you want to
            think about the work, we should talk.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block text-sm text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-[var(--accent)]"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
