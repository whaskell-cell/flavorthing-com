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
      "Two decades inside operating companies, including Broadcom, Knocksteady, and Group Nine Media. Long-time advisor to and investor in the creator economy. Built and exited businesses on both sides of the table — the brand side and the talent side.",
  },
  {
    name: "Jaeki Cho",
    role: "Co-founder",
    blurb:
      "One of New York's most recognized food and culture creators, with an audience built over a decade as a journalist and on-camera personality. Founder of Righteous Eats and the face of much of the partnership work we run. The customer we serve, on the founding team.",
  },
] as const;

// /about page content. Structured to mirror Smooth Media's About template
// (manifesto hero, origin, founders, mission, scale, pull quote) so the
// register reads like a peer, not a smaller version.
export const ABOUT = {
  manifesto:
    "We started Flavor Thing because creators are the next generation of operating businesses, and the firms built to serve them do not yet exist.",
  origin: [
    "Brian Lee spent two decades inside operating companies — Broadcom, Knocksteady, Group Nine Media — through several exits and a long run advising and investing in the creator economy from the brand side. Jaeki Cho built an audience over a decade as a journalist and on-camera personality, then quietly turned Righteous Eats into a media property that runs partnerships with the largest brands in the country.",
    "We met where the operator world and the creator world overlap, looked at the field of firms available to creators running real businesses, and concluded the right one had not been built yet. Talent agencies were good at booking but not at strategy. Strategy consultancies were good at frameworks but not at the cultural register the work requires. Early-stage funds wrote checks but had no operating muscle. The creators who needed all three were stitching together three different vendors who did not coordinate.",
    "Flavor Thing is the firm we wished existed when we were on the other side of the conversation.",
  ],
  mission:
    "Creators today are running real businesses with real revenue, real teams, and real consequences. They have brands. They have audiences. They have decisions to make every week that no MBA-trained consultancy understands and no talent agency is built to handle. We built Flavor Thing for that specific gap: an operating firm that advises the strategy, runs the brand partnerships, and puts capital behind the right bets. From one team.",
  howWeWork:
    "We run a two-founder bench amplified by an operating stack that lets us deliver at a level associated with much larger firms. That is how we are able to do McKinsey-quality strategy work, CAA-quality deal making, and a fund-quality capital allocation discipline as a small, deliberate firm. The stack does not show up in the work. The outcomes do.",
  scaleClaims: [
    "11 brand partnerships across consumer technology, sports, mobility, and beverage",
    "17 active angel positions, with founder stakes in Righteous Eats and Little Chonk",
    "Multi-year partnerships including On Running (4 years and counting), Apple Pay via TBWA, and the New York Mets",
    "A 501(c)(3) sister organization, Righteous Eats Foundation, that anchors our cause-marketing work",
  ],
  pullQuote:
    "Creators are the next generation of operating businesses. Flavor Thing is the operating company built for them.",
} as const;

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
