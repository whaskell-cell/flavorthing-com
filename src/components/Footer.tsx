import Link from "next/link";
import { NAV, SITE, SOCIALS } from "@/lib/data";

// Per Brian 2026-06-15:
// - Drop the REF / 501(c)(3) line (REF is not a subsidiary of Flavor Thing).
// - Drop the "advisory company for the creator economy" tagline (already
//   carried by the hero; footer should not repeat positioning).
// - Add social placeholders for LinkedIn, Instagram, Twitter, Newsletter.
export default function Footer() {
  return (
    <footer className="mt-32 border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-12 md:grid-cols-4">
        <div>
          <div className="text-lg font-bold tracking-tight text-neutral-900">
            {SITE.name}
          </div>
          <div className="mt-4 text-sm text-neutral-500">New York</div>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-1 block text-sm text-neutral-500 hover:text-neutral-900"
          >
            {SITE.email}
          </a>
        </div>
        <nav className="flex flex-col gap-3 text-sm text-neutral-700">
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            Site
          </div>
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
        <nav className="flex flex-col gap-3 text-sm text-neutral-700">
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            Follow
          </div>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="transition-colors hover:text-neutral-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.label}
            </a>
          ))}
        </nav>
        <div className="flex flex-col gap-3 text-sm text-neutral-500">
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            Legal
          </div>
          <div>
            &copy; {new Date().getFullYear()} Flavor Thing. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
