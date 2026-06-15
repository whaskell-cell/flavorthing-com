import Link from "next/link";
import { FOUNDERS } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="text-sm uppercase tracking-widest text-neutral-500">
            About
          </div>
          <h1 className="mt-4 font-serif text-5xl text-neutral-900 md:text-6xl">
            A small team, the way it should be.
          </h1>
          <p className="prose-editorial mt-10 max-w-2xl text-lg text-neutral-700">
            Flavor Thing is a two-founder holding company based in New York.
            One of the founders is a long-time operator. The other is a creator.
            That combination is not a marketing line. It is why we built the
            firm the way we did, and why creators trust us with the parts of
            their business they do not trust anyone else with.
          </p>
        </div>
      </section>

      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">
            Founders
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {FOUNDERS.map((f) => (
              <div key={f.name}>
                <h3 className="font-serif text-2xl text-neutral-900">
                  {f.name}
                </h3>
                <div className="mt-1 text-sm uppercase tracking-widest text-neutral-500">
                  {f.role}
                </div>
                <p className="prose-editorial mt-4 text-neutral-700">{f.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">
            How we work
          </h2>
          <p className="prose-editorial mt-6 text-neutral-700">
            We run a small holding company on a stack of AI agents that handle
            the operating workload of a much larger team. That is not the
            product we sell. It is how we are able to do the work we sell at
            the quality our clients expect, with two founders.
          </p>
          <p className="prose-editorial mt-6 text-neutral-700">
            If you want to know what an operating company built for the era we
            are in actually looks like, this is one.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block border-b border-neutral-900 pb-1 text-sm text-neutral-900 hover:text-neutral-600"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
