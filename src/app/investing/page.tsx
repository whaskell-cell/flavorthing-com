import Link from "next/link";
import {
  SERVICES,
  PORTFOLIO_INVESTMENTS,
  PORTFOLIO_FOUNDER_STAKES,
} from "@/lib/data";

const SERVICE = SERVICES.find((s) => s.slug === "investing")!;

export default function InvestingPage() {
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
            Portfolio
          </h2>
          <p className="mt-4 max-w-xl text-neutral-600">
            A selection of companies we have backed. Not an exhaustive list.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 text-sm md:grid-cols-3 lg:grid-cols-4">
            {PORTFOLIO_INVESTMENTS.map((p) => (
              <li
                key={p.name}
                className="border-t border-neutral-200 pt-3 text-neutral-700"
              >
                <div className="font-medium text-neutral-900">{p.name}</div>
                <div className="mt-1 text-xs text-neutral-500">{p.note}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-neutral-200">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">
            Founder stakes
          </h2>
          <p className="mt-4 max-w-xl text-neutral-600">
            Companies we founded or co-founded.
          </p>
          <ul className="mt-10 grid grid-cols-1 gap-6 text-sm md:grid-cols-2">
            {PORTFOLIO_FOUNDER_STAKES.map((p) => (
              <li
                key={p.name}
                className="border-t border-neutral-200 pt-4 text-neutral-700"
              >
                <div className="font-medium text-neutral-900">{p.name}</div>
                <div className="mt-1 text-neutral-500">{p.note}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="font-serif text-3xl text-neutral-900 md:text-4xl">
            For founders
          </h2>
          <p className="prose-editorial mt-6 text-neutral-700">
            We write small angel checks into companies we have direct conviction
            in. Sometimes we structure equity-for-services where our advisory
            and partnership infrastructure is the value-add.
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
