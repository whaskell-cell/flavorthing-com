import { BRIAN_WRITING } from "@/lib/data";
import { SubstackIcon } from "@/components/SocialIcons";

// "From Brian" — surface for Brian Lee's Substack. Used on home and About.
// He is positioning as the face of the firm; his writing is the public
// front door to that.

export default function BrianWritingSection() {
  return (
    <section className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div>
            <div className="text-xs uppercase tracking-widest text-neutral-500">
              From Brian
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
              {BRIAN_WRITING.headline}
            </h2>
            <p className="mt-8 max-w-xl text-neutral-700 md:text-lg md:leading-relaxed">
              {BRIAN_WRITING.body}
            </p>
            <a
              href={BRIAN_WRITING.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 text-sm text-neutral-900 underline decoration-neutral-300 underline-offset-4 hover:decoration-[var(--accent)]"
            >
              <SubstackIcon className="h-4 w-4" />
              {BRIAN_WRITING.cta}
            </a>
          </div>
          <div className="rounded-md border border-neutral-200 bg-white p-8 md:p-10">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-neutral-500">
              <SubstackIcon className="h-4 w-4 text-[var(--accent)]" />
              {BRIAN_WRITING.name}
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-neutral-900">
              The operating side of the attention economy.
            </h3>
            <p className="mt-4 text-sm text-neutral-600">
              Free to read. New dispatches as they ship.
            </p>
            <p className="mt-10 text-xs text-neutral-400">
              Newsletter card. Live Substack feed integration to follow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
