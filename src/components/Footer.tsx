import { SITE, SOCIALS } from "@/lib/data";
import {
  LinkedInIcon,
  InstagramIcon,
  XIcon,
  SubstackIcon,
} from "@/components/SocialIcons";

const ICONS = {
  linkedin: LinkedInIcon,
  instagram: InstagramIcon,
  x: XIcon,
  substack: SubstackIcon,
} as const;

// Per Brian 2026-06-15 PM:
// - Drop the Site nav column (redundant with the header).
// - WeWork 6th Ave / 37th address in the contact column.
// - 3-column layout instead of 4.
export default function Footer() {
  return (
    <footer className="mt-32 border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="text-lg font-bold tracking-tight text-neutral-900">
            {SITE.name}
          </div>
          <div className="mt-4 space-y-1 text-sm text-neutral-500">
            {SITE.address.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-4 block text-sm text-neutral-500 hover:text-neutral-900"
          >
            {SITE.email}
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-xs uppercase tracking-widest text-neutral-500">
            Follow
          </div>
          <div className="flex items-center gap-4">
            {SOCIALS.map((s) => {
              const Icon = ICONS[s.id as keyof typeof ICONS];
              return (
                <a
                  key={s.id}
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 transition hover:text-neutral-900"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>
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
