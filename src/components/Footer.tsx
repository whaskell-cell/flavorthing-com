import Link from "next/link";
import { NAV, SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="font-serif text-lg text-neutral-900">{SITE.name}</div>
          <p className="mt-3 max-w-sm text-sm text-neutral-600">
            The advisory company for the creator economy.
          </p>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm text-neutral-700">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="text-sm text-neutral-500">
          <div>
            <a href={`mailto:${SITE.email}`} className="hover:text-neutral-900">
              {SITE.email}
            </a>
          </div>
          <div className="mt-1">New York</div>
          <div className="mt-3 text-xs text-neutral-400">
            Righteous Eats Foundation is a 501(c)(3). {SITE.refEin}.
          </div>
        </div>
      </div>
    </footer>
  );
}
