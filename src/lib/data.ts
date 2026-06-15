// Single source of truth for site content.
// Updated by Sheryl (main agent) from .claude/memory/ + Notion.
// Brian edits in Claude Code; strategic copy shifts come back to the brief.

// Brian's locked positioning (2026-06-15 voice memo).
// He explicitly shifted from "creator economy" to "creators in the attention economy"
// — broader frame, sharper claim. Hero now states this directly, no redline edit.
export const NORTH_STAR =
  "We are an advisory company for creators in the attention economy.";

// HERO_LEAD intentionally removed 2026-06-15 per Brian. With Variant D
// (kinetic typography) the manifesto sentence is the hero; no supporting
// line under it. Restraint over reassurance.

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
      "Two sides of one table. Creators who want their deals run by a senior team, and brands who want a way in to the creators we work with.",
    long:
      "Brand Partnerships works in both directions. Creators come to us because they want their deals structured and run by a team that has been on the other side of the table. Brands come to us because we have direct relationships with creators whose audiences and craft they want to be in business with. We sit between both sides and run the partnership from identification through delivery: fit, structure, terms, production, outcomes.",
    practiceAreas: [
      {
        name: "For creators",
        body: "If you are a creator earning real revenue from brand work and want a senior team to run your partnerships, this is the practice that runs them. We negotiate, structure, produce, and report. Some of the strongest creators in food, fashion, sport, and culture run their brand business with us.",
      },
      {
        name: "For brands",
        body: "If you are a brand or agency looking for a way in to one of our creator partners, this is the practice that opens the door. We do not broker introductions. We design and run the campaign with you, from creative through delivery.",
      },
      {
        name: "Deal structure and terms",
        body: "Pricing, scope, deliverables, performance terms, exclusivity windows. Structured to grow into multi-year partnerships, not one-off transactions.",
      },
      {
        name: "Production and outcomes",
        body: "We oversee creative production end-to-end. Measurement and reporting on the back end. Most of our partnerships are renewals.",
      },
    ],
  },
  {
    slug: "investing",
    name: "Investing",
    short:
      "Three modes. We angel invest. We open the door to larger capital. And sometimes we build the company ourselves.",
    long:
      "Investing is the smallest of the three by dollars and the most aligned by incentive. We work in three modes, depending on what the situation actually needs. Sometimes a small angel check from us is the right answer. Sometimes the right answer is for us to make introductions to the larger pools of capital where we have relationships. And sometimes the right answer is for us to incubate the company ourselves.",
    practiceAreas: [
      {
        name: "Angel checks",
        body: "We write small checks into companies we have direct conviction in. The portfolio is meaningful, not enormous. We do this because skin in the game makes us a better advisor.",
      },
      {
        name: "Capital introductions",
        body: "When the right round is larger than our check size, we open the door. We have relationships across early-stage funds, growth funds, and strategic capital. We do not charge for introductions.",
      },
      {
        name: "Incubation",
        body: "Occasionally we see a gap in the market that is best filled by building the company ourselves. Little Chonk is one example. Righteous Eats is another. When we incubate, we bring the operating muscle and the network from day one.",
      },
    ],
  },
] as const;

// Brand partnership logos. Wordmark-placeholder rendering until SVG assets arrive.
// Brian's list (2026-05-27) trimmed to 10 on 2026-06-15. Vita Coco dropped — weakest
// brand recognition in the lineup vs. the consumer-tier names around it. Easy swap
// if Brian wants a different one out.
export const PARTNERSHIP_BRANDS = [
  { name: "Apple", domain: "apple.com" },
  { name: "Samsung", domain: "samsung.com" },
  { name: "Coca-Cola", domain: "coca-cola.com" },
  { name: "On Running", domain: "on.com" },
  { name: "Toyota", domain: "toyota.com" },
  { name: "New York Mets", domain: "mlb.com" },
  { name: "NYC Gov", domain: "nyc.gov" },
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

export const FOUNDER_PRINCIPAL = {
  name: "Brian Lee",
  role: "Founder",
  // First-person origin. Names confirmed by Brian voice memo 2026-06-15.
  // Anderson .Paak / Jonathan Park / Jaeki Cho are the trio he listed; "Rob" was
  // mentioned and then de-prioritized ("probably not"), so omitted.
  bio: [
    "I have been on every side of the creator economy. I started inside operating companies — Broadcom, Knocksteady, Group Nine Media — through several exits. Along the way I have spent the last fifteen years advising creators in the rooms where the real decisions get made.",
    "I helped Anderson .Paak shape the operating side of his career when he was scaling from Grammy-winning artist into a multi-property creative business. I worked with Jonathan Park on the strategic moves that took his platform from cult to scale. I co-founded Flavor Thing with Jaeki Cho because the two of us saw the same gap from different sides of the same table.",
    "Flavor Thing is the firm I wished existed every time I sat across from a creator who needed real operating counsel and could not find it anywhere serious.",
  ],
} as const;

export const COFOUNDER = {
  name: "Jaeki Cho",
  role: "Co-founder",
  bio: "One of New York's most recognized food and culture creators, with an audience built over a decade as a journalist and on-camera personality. Founder of Righteous Eats and the face of much of the partnership work we run. The customer we serve, on the founding team.",
} as const;

// Backwards compatibility: keep the FOUNDERS array shape for any callers
// that still consume it (other pages reference it for the home + practice CTAs).
export const FOUNDERS = [
  {
    name: FOUNDER_PRINCIPAL.name,
    role: FOUNDER_PRINCIPAL.role,
    blurb: FOUNDER_PRINCIPAL.bio[0],
  },
  {
    name: COFOUNDER.name,
    role: COFOUNDER.role,
    blurb: COFOUNDER.bio,
  },
] as const;

// Strategic advisor council. Confirmed by Brian 2026-06-15.
// Tight triangulation: a long-time media operator (Meyer), the leading
// kids/family creator-economy executive (Moonves), and a senior creator-
// platform product leader (Clanon).
export const ADVISORS = [
  {
    name: "Mickey Meyer",
    affiliation: "Co-founder, Jash. Former Group Nine Media",
    note: "Long-time collaborator on the operating side of building creator-led media.",
  },
  {
    name: "Julia Moonves",
    affiliation: "SVP, Commercial Revenue, Pocket.Watch",
    note: "Built Pocket.Watch's brand partnerships and ad sales practice into a category-defining business across Nintendo, Mattel, and Lego.",
  },
  {
    name: "Sam Corrao Clanon",
    affiliation: "Director of Product, Create, LinkedIn",
    note: "Previously led creator product and content strategy at Snap, TikTok, and Group Nine. The platform-side voice on the council.",
  },
] as const;

// Creators and properties Brian has worked with materially over fifteen years.
// Restrained list, not exhaustive.
export const PAST_AFFILIATES = [
  { name: "Anderson .Paak", context: "Multi-year operating advisory" },
  { name: "Jonathan Park", context: "Platform strategy and scaling" },
  { name: "Group Nine Media", context: "Operating role through exit" },
  { name: "Jash", context: "Co-creator network on the operating side" },
  { name: "Broadcom", context: "Early operator role" },
  { name: "Knocksteady", context: "Founding team" },
] as const;

// /about page is now built around the principal. Mirrors Smooth Media's About
// template structure (manifesto hero, origin, mission, council, pull quote)
// but the origin is Brian's first-person story, not a company-voice paragraph.
export const ABOUT = {
  manifesto:
    "We started Flavor Thing because creators are the next generation of operating businesses, and the firms built to serve them do not yet exist.",
  mission:
    "Creators today are running real businesses with real revenue, real teams, and real consequences. They have brands, audiences, and decisions to make every week that no MBA-trained consultancy understands and no talent agency is built to handle. We built Flavor Thing for that specific gap: an operating firm that advises the strategy, runs the brand partnerships, and puts capital behind the right bets. From one team.",
  pullQuote:
    "Creators are the next generation of operating businesses. Flavor Thing is the operating company built for them.",
} as const;

export const NAV = [
  { href: "/advisory", label: "Advisory" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/investing", label: "Investing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const SITE = {
  name: "Flavor Thing",
  url: "https://flavorthing.com",
  email: "hello@flavorthing.com",
} as const;

// Social placeholders per Brian 2026-06-15. Real handles to follow.
// Note: Brian directed adding the Beehiiv newsletter link to the footer even
// though the FT Beehiiv task was killed earlier on 2026-05-27 — the footer slot
// is reserved so the link can drop in when a newsletter platform is chosen.
export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/flavorthing" },
  { label: "Instagram", href: "https://www.instagram.com/flavorthing" },
  { label: "Twitter", href: "https://twitter.com/flavorthing" },
  { label: "Newsletter", href: "https://flavorthing.beehiiv.com" },
] as const;
