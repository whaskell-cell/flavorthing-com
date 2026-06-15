// Single source of truth for site content.
// Updated by Sheryl (main agent) from .claude/memory/ + Notion.
// Brian edits in Claude Code; strategic copy shifts come back to the brief.

// Brian's locked positioning (2026-06-15).
// Sequence: "advisory company" -> "operating firm" -> "strategy firm" (locked).
// "Strategy firm" sits in the Bain register ("global consultancy / strategy
// consulting"), is a real industry category (unlike "operating firm" which I
// had invented from "operating partner"), and distinguishes from the Advisory
// practice below. Confirms with the buyer profile Brian named on 2026-06-15:
// institutional clients (Manhattan Institute, Webtoon, 500 Startups) plus
// creators. The subject matter stays "creators in the attention economy."
export const NORTH_STAR =
  "We are a strategy firm for creators in the attention economy.";

// HERO_LEAD intentionally removed 2026-06-15 per Brian. With Variant D
// (kinetic typography) the manifesto sentence is the hero; no supporting
// line under it. Restraint over reassurance.

export const SERVICES = [
  {
    slug: "advisory",
    name: "Advisory",
    short:
      "We are paid by think tanks, platforms, accelerators, and creators for the way we think about where the attention economy is heading.",
    long:
      "The headline practice. We work with the people building, investing in, and operating inside the attention economy — institutional research bodies, consumer technology platforms, accelerators, and the creators themselves. Positioning a category, sizing where the addressable market is going, responding to institutional and platform pressure, and building the systems that let a small organization behave like a much larger one. Sometimes our client is a creator. Often it is the company, fund, or think tank trying to understand the creator landscape with rigor.",
    practiceAreas: [
      {
        name: "Positioning & Category Strategy",
        body: "Where a creator fits in the market today, where the market is going, and where they should move next. Sometimes that means redirecting a lifestyle creator into consumer technology reviews because the addressable market is structurally larger.",
      },
      {
        name: "Reputation & Crisis Communications",
        body: "The work nobody wants to call about until they have to. Brand fire-drills, comms response, navigating institutional and platform pressure with the right voice and the right speed.",
      },
      {
        name: "Brand & Content Development",
        body: "Voice, intellectual property development, platform strategy, content roadmaps. The frameworks a creator needs to behave like a media company instead of a personality.",
      },
      {
        name: "Operating Infrastructure",
        body: "The workflow, automation, and tooling layer that lets a small team behave like a much larger one. Includes our AI agent operating playbook, which we run inside our own holding company.",
      },
    ],
    engagement: {
      title: "Engagement",
      // Brian: "we're the ones that can take something that's already really well
      // defined and successful, but take it to the next level. Word or two about scale."
      body: [
        "Our work tends to land in one of two places. Either we are designing the next phase for a creator already operating at meaningful scale and looking to compound it. Or we are scoping a defined transformation for a creator approaching the inflection point where the operating model has to change.",
        "Most engagements run as monthly retainers or scoped projects. We occasionally take equity in lieu of fees when the company, the relationship, and the conviction warrant it.",
      ],
    },
  },
  {
    slug: "partnerships",
    name: "Brand Partnerships",
    short:
      "We architect the brand partnerships our creator clients run, and we architect the campaigns our brand clients build with them. Two sides of one table.",
    long:
      "Brand Partnerships is where strategy meets execution. We architect partnerships in both directions: for creators who want their brand business positioned, structured, and renewed, and for brand teams who want a senior counterpart who can run a campaign from creative through delivery. We are not an introduction service. We design the work and stay on it until it ships.",
    practiceAreas: [
      {
        name: "For creators",
        body: "Inbound brand interest is leverage if it is positioned well. We work with creators on the strategic positioning of inbound opportunities, the structuring and negotiation of terms, and the multi-channel architecture that turns a single campaign into compounding value. The brand business that lasts is the brand business that is set up well from the start.",
      },
      {
        name: "For brands",
        body: "We design and run creator partnerships with brand teams and agencies who want a senior strategic counterpart, not a roster. Brand fit, deal structure, creative direction, production oversight, and outcomes reporting. The work has to be good or the partnership does not renew, and most of our brand partnerships are renewals.",
      },
      {
        name: "Deal architecture",
        body: "Pricing, scope, deliverables, performance terms, exclusivity windows, IP rights. Structured to grow into multi-year programs, not one-off transactions.",
      },
      {
        name: "Production & outcomes",
        body: "We oversee creative production end to end and report on outcomes after delivery. The case for the next campaign is built into the close of this one.",
      },
      {
        name: "Engagement",
        body: "Most brand partnerships run on a per-campaign basis with a commission structure tied to deal value, with retainer arrangements for ongoing strategic counsel. Multi-year programs are scoped as a series of campaigns rather than a single contract.",
      },
    ],
    // ICP / buyer-type list rendered as a strip on the Partnerships page.
    // Brian on 2026-06-15: "we work with everyone from think tanks to
    // government officials, policymakers, CPG brands, et cetera."
    icp: [
      "CPG brands",
      "Government tourism boards",
      "Talent agencies",
      "Consumer technology platforms",
      "Think tanks and policy organizations",
      "Sports and lifestyle brands",
      "International brands across Italy, France, Spain, and Korea",
      "Fortune 100 marketing teams",
    ],
  },
  {
    slug: "investing",
    name: "Investing",
    short:
      "We write small angel checks. We open the door to larger capital. And on occasion, we build the company ourselves.",
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

// Named case studies — brand x creator x outcome, structured like Smooth Media's
// "For Brands" examples (Matt Wolfe x HubSpot, CatGPT x Bolt, etc). Brian named
// these in his 2026-06-15 voice memo. Detail copy is placeholder; refine with
// Ovitz once campaign outcome data is confirmed for each.
export const CASE_STUDIES = [
  {
    brand: "NYC Tourism + NYC Gov",
    creator: "Jaeki Cho",
    headline: "A multi-platform love letter to New York that won a Webby.",
    body: "Concept-to-distribution campaign with NYC Tourism and NYC city government. Original short-form video across Instagram and TikTok plus on-the-ground activations. Recognized with a Webby Award.",
    accolade: "Webby Award winner",
  },
  {
    brand: "Ray-Ban Meta",
    creator: "Jaeki Cho",
    headline: "A launch campaign that turned a product drop into a cultural moment.",
    body: "Brand-creator partnership for Meta's Ray-Ban smart glasses across Instagram and TikTok. The campaign went viral inside its first 48 hours and outperformed paid benchmarks across both surfaces.",
    accolade: "Viral campaign",
  },
  {
    brand: "Lyft",
    creator: "Jaeki Cho",
    headline: "A rideshare campaign that punched above its budget.",
    body: "Multi-format Lyft campaign positioned as a New York love letter. Earned organic reach orders of magnitude above paid baseline and was renewed.",
    accolade: "Viral campaign",
  },
  {
    brand: "On Running",
    creator: "Jaeki Cho",
    headline: "A four-year ambassadorship that anchors the running and lifestyle category.",
    body: "Multi-year, multi-campaign partnership across product launches, NYC Marathon activations, and editorial. The longest-running partnership on our roster, currently in its fourth year.",
    accolade: "Multi-year partnership",
  },
  {
    brand: "Apple Pay × TBWA",
    creator: "Jaeki Cho",
    headline: "A flagship financial-product campaign for Apple via TBWA.",
    body: "Strategic partnership architecture and creative production for an Apple Pay campaign through TBWA. Multi-channel rollout across Apple's brand surfaces and Jaeki's owned channels.",
    accolade: "Brand x agency partnership",
  },
] as const;

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
  // Updated 2026-06-15 PM to surface the institutional buyer profile: Brian's
  // paying advisory clients include think tanks, consumer tech platforms, and
  // accelerators in addition to creators. That audience should hear itself
  // in the bio, not be relegated to "creators only."
  bio: [
    "I have been on every side of the attention economy. I started inside operating companies — Broadcom, Knocksteady, Group Nine Media — through several exits. Today I advise across the full spectrum of the space: institutional clients like the Manhattan Institute, consumer technology platforms like Webtoon, accelerators like 500 Startups, and creators like Anderson .Paak, Jonathan Park, and Jaeki Cho.",
    "What ties them together is not category. It is that all of them are people who have paid for the way I think about where attention is heading, how creators are building real businesses inside it, and what it takes to operate seriously in that environment.",
    "I co-founded Flavor Thing with Jaeki Cho because we saw the same gap from different sides of the same table. The firm we wished existed every time we sat across from a creator, a company, or an institution who needed real strategic counsel on this space and could not find it anywhere serious.",
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

// Creators, companies, and institutions Brian has worked with materially over
// fifteen years. Restrained list, not exhaustive. Mix of paying advisory
// clients and operating roles.
export const PAST_AFFILIATES = [
  { name: "Manhattan Institute", context: "Strategic advisory — attention economy" },
  { name: "Webtoon", context: "Strategic advisory — consumer technology" },
  { name: "500 Startups", context: "Strategic advisory — investor side" },
  { name: "Anderson .Paak", context: "Multi-year operating advisory" },
  { name: "Jonathan Park", context: "Platform strategy and scaling" },
  { name: "Group Nine Media", context: "Operating role through exit" },
  { name: "Jash", context: "Co-creator network on the operating side" },
  { name: "Broadcom", context: "Early operator role" },
  { name: "Knocksteady", context: "Founding team" },
] as const;

// Institutional advisory clients — surfaced on the Advisory page as a separate
// signal from the creator-side partnership receipts. These are the people who
// pay Brian directly for the way he thinks about the attention economy.
export const INSTITUTIONAL_CLIENTS = [
  { name: "Manhattan Institute", kind: "Think tank" },
  { name: "Webtoon", kind: "Consumer technology platform" },
  { name: "500 Startups", kind: "Accelerator / investor" },
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

// Social rails. Updated 2026-06-15 PM:
// - Icons in the footer rather than text labels.
// - Newsletter platform pivoted from Beehiiv to Substack per Brian; the slot
//   points at Brian's personal Substack since he is becoming the face of the
//   firm and his writing is the public surface.
// - URLs are placeholders pending confirmation of the actual handles.
export const SOCIALS = [
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/flavorthing" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/flavorthing" },
  { id: "x", label: "X", href: "https://x.com/flavorthing" },
  { id: "substack", label: "Substack", href: "https://brianlee.substack.com" },
] as const;

// Brian's writing surface. Substack. Featured on the homepage and About page
// because Brian is positioning as the public face of the firm.
export const BRIAN_WRITING = {
  url: "https://brianlee.substack.com",
  headline: "What Brian is writing.",
  body:
    "Brian publishes weekly on the operating side of the attention economy. Frameworks, market reads, and the build-in-public notes from running Flavor Thing. Subscribe to read it as it ships.",
  cta: "Read on Substack",
} as const;
