// Single source of truth for site content.
// Updated by Sheryl (main agent) from .claude/memory/ + Notion.
// Brian edits in Claude Code; strategic copy shifts come back to the brief.

export const NORTH_STAR = "The advisory company for the creator economy.";

// Redline-edit hero: enacts the rebrand visually.
// Each segment is either kept as-is, marked-out (old positioning), or written-in (new positioning).
export const HERO_REDLINE = [
  { kind: "text", value: "We are" },
  { kind: "strike", value: "an accelerator for content creators scaling their businesses" },
  { kind: "insert", value: "the advisory company for the creator economy" },
  { kind: "text", value: "." },
] as const;

// Restrained lead under the hero. Does NOT preview the practice list below.
export const HERO_LEAD = "New York. Two founders. Six clients we wish we could name and a few we can.";

export const SERVICES = [
  {
    slug: "advisory",
    name: "Advisory",
    short:
      "Strategic positioning, crisis and reputation, brand and content, and operating infrastructure for creators running real businesses.",
    long:
      "The headline practice. We work alongside creators on the strategic decisions most agencies and managers will not touch. Positioning a creator inside a market, redirecting a career into a larger addressable space, responding to institutional pressure, and building the systems that let a personality scale into a media company.",
    practiceAreas: [
      {
        name: "Strategic positioning",
        body: "Where a creator fits in the market today, where the market is going, and where they should move next. Sometimes that means redirecting a lifestyle creator into consumer technology reviews because the addressable market is structurally larger.",
      },
      {
        name: "Crisis and reputation",
        body: "The work nobody wants to call about until they have to. Brand fire-drills, comms response, navigating institutional pressure with the right voice and the right speed.",
      },
      {
        name: "Brand and content",
        body: "Voice, intellectual property development, platform strategy, content roadmaps. The frameworks a creator needs to behave like a media company instead of a personality.",
      },
      {
        name: "Operations",
        body: "The workflow, automation, and tooling layer that lets a small team behave like a much larger one. Includes our AI agent operating playbook, which we run inside our own holding company.",
      },
    ],
  },
  {
    slug: "partnerships",
    name: "Brand Partnerships",
    short:
      "We sit between brands and creators and run the partnership end-to-end. Strategy through execution.",
    long:
      "Brand Partnerships is where strategy meets execution. We sit between brands and creators and run the partnership from identification through delivery: fit, structure, terms, production, outcomes. The deal does not stop at signature; we stay on it until it ships.",
    practiceAreas: [
      {
        name: "Brand strategy and fit",
        body: "Matching creator and brand to where the work will actually move the needle. We turn down deals when fit is wrong because reputation compounds.",
      },
      {
        name: "Deal structure and terms",
        body: "Pricing, scope, deliverables, performance terms, exclusivity windows. Structured to grow into multi-year partnerships, not one-off transactions.",
      },
      {
        name: "Production and delivery",
        body: "We oversee creative production end-to-end with our creator partners. The work has to be good or the deal does not renew.",
      },
      {
        name: "Outcomes and renewal",
        body: "Measurement, reporting, and the case for the next campaign. Most of our partnerships are renewals.",
      },
    ],
  },
  {
    slug: "investing",
    name: "Angel Investing",
    short:
      "Selective angel checks into companies we have conviction in. Sometimes equity-for-services.",
    long:
      "Angel Investing is the smallest of the three by dollars and the most aligned by incentive. We write small checks into companies we have direct conviction in, and we sometimes structure equity-for-services where our advisory and partnership infrastructure is the value-add. We are not a fund.",
    practiceAreas: [],
  },
] as const;

// Brand partnership logos. Sourced via Clearbit logo API for first pass; swap to local SVGs later.
// Brian's list, 2026-05-27 voice memo. Pending Ovitz validation on public-okay names.
export const PARTNERSHIP_BRANDS = [
  { name: "Apple", domain: "apple.com" },
  { name: "Samsung", domain: "samsung.com" },
  { name: "Coca-Cola", domain: "coca-cola.com" },
  { name: "On Running", domain: "on.com" },
  { name: "Toyota", domain: "toyota.com" },
  { name: "New York Mets", domain: "mlb.com" },
  { name: "NYC Gov", domain: "nyc.gov" },
  { name: "Vita Coco", domain: "vitacoco.com" },
  { name: "Oatly", domain: "oatly.com" },
  { name: "QuickBooks", domain: "intuit.com" },
  { name: "Lyft", domain: "lyft.com" },
] as const;

// Public-okay receipts list for Brand Partnerships page detail.
// Pending Ovitz sign-off; placeholder text below.
export const PARTNERSHIP_RECEIPTS: { brand: string; creator: string; year: string }[] = [
  { brand: "On Running", creator: "Jaeki Cho", year: "2022 to 2026" },
  { brand: "Apple Pay / TBWA", creator: "Jaeki Cho", year: "2026" },
  { brand: "Flight Club / Complex", creator: "Jaeki Cho", year: "2026" },
  { brand: "New York Mets", creator: "Jaeki Cho", year: "2026" },
];

// Carry over from the existing flavorthing.com /portfolio page.
export const PORTFOLIO_INVESTMENTS = [
  { name: "Liquid Death", note: "Beverage" },
  { name: "Chamberlain Coffee", note: "Beverage" },
  { name: "Karat", note: "Fintech for creators" },
  { name: "Beacons", note: "Link-in-bio for creators" },
  { name: "Tomo", note: "Consumer credit" },
  { name: "Kolkata Chai", note: "Beverage" },
  { name: "Workstream", note: "Hiring" },
  { name: "Bloxsnacks", note: "Kids nutrition" },
  { name: "Nectar", note: "Beverage" },
  { name: "Yumi", note: "Kids nutrition" },
  { name: "Prime Roots", note: "Alternative protein" },
  { name: "Coco Floss", note: "Oral care" },
  { name: "Canopy", note: "Fund infrastructure" },
  { name: "Clarium Health", note: "Hospital supply chain" },
  { name: "Sea Monsters", note: "Snacks" },
  { name: "Altru", note: "Brand community" },
  { name: "D36", note: "Talent infrastructure for South Asian stories" },
] as const;

export const PORTFOLIO_FOUNDER_STAKES = [
  { name: "Righteous Eats", note: "NYC food media and the foundation behind it" },
  { name: "Little Chonk", note: "Dog backpack" },
] as const;

export const FOUNDERS = [
  {
    name: "Brian Lee",
    role: "Co-founder and President",
    blurb:
      "Operator background across Broadcom, Knocksteady, Group Nine, and Righteous Eats. Builds the operating infrastructure underneath everything we do.",
  },
  {
    name: "Jaeki Cho",
    role: "Co-founder",
    blurb:
      "Creator, journalist, and the face of Righteous Eats. The customer we serve, on the founding team.",
  },
] as const;

export const NAV = [
  { href: "/advisory", label: "Advisory" },
  { href: "/partnerships", label: "Brand Partnerships" },
  { href: "/investing", label: "Investing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const SITE = {
  name: "Flavor Thing",
  url: "https://flavorthing.com",
  email: "hello@flavorthing.com",
  refEin: "EIN 33-4081108", // Righteous Eats Foundation, 501(c)(3)
} as const;
