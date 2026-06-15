import Link from "next/link";
import { SERVICES } from "@/lib/data";

const SERVICE = SERVICES.find((s) => s.slug === "advisory")!;

export default function AdvisoryPage() {
  return (
    <>
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-sm uppercase tracking-widest text-neutral-500">
            Practice
          </div>
          <h1 className="mt-4 font-serif text-5xl text-neutral-900 md:text-6xl">
            {SERVICE.name}
          </h1>
          <p className="prose-editorial mt-8 text-lg text-neutral-700">
            {SERVICE.long}
          </p>
        </div>
      </section>

      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">
            What this looks like
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {SERVICE.practiceAreas.map((p) => (
              <article key={p.name}>
                <h3 className="font-serif text-2xl text-neutral-900">
                  {p.name}
                </h3>
                <p className="prose-editorial mt-4 text-neutral-700">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">
            Engagement
          </h2>
          <p className="prose-editorial mt-6 text-neutral-700">
            Most Advisory engagements run as monthly retainers or scoped
            projects. We occasionally take equity in lieu of fees when the
            company and the relationship warrant it.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block border-b border-neutral-900 pb-1 text-sm text-neutral-900 hover:text-neutral-600"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
