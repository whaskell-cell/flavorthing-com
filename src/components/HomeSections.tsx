// Post-hero sections for the home page.
// Per Brian 2026-06-15: home page is hero + "What we do" only. Selected partners
// and The Work live on the inner pages (/partnerships).

import Link from "next/link";
import { SERVICES } from "@/lib/data";

export default function HomeSections() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            What we do
          </h2>
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
  );
}
