# flavorthing.com

The website for Flavor Thing — the advisory company for the creator economy.

**Strategy brief:** `~/Library/CloudStorage/Dropbox-FlavorThing/BRIAN LEE/flavorthing-com-redesign-brief.md`

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Vercel preview deployment

## Local dev

```bash
npm install
npm run dev
# open http://localhost:3000
```

## How to iterate

Two tracks, on purpose.

**Track A — strategic.** Copy, voice, positioning, North Star. Lives in this repo's `src/lib/data.ts` (single source of truth for content) and in the Dropbox brief. Owned by Sheryl (main agent) and Marc (Brian Lee Brand voice). When the strategy moves, the brief moves first, then `data.ts`.

**Track B — tactical.** Layout, components, typography, visual decisions. Brian iterates on his MacBook in Claude Code against this repo. Voice in, code change, Vercel preview updates, repeat.

When tactical needs a strategic input ("what should the partnerships page open with?"), Brian DMs Sheryl. When strategic needs to see a preview, Sheryl pings the Vercel URL.

## Information architecture

```
/              Home (north star, services, selected work, who we are)
/advisory      Advisory practice
/partnerships  Brand Partnerships
/investing     Angel Investing + portfolio
/about         Who we are
/contact       Contact
```

## Editing content

Most copy lives in `src/lib/data.ts`. Change it there and the pages update. Strategic changes (the North Star, the practice areas, the portfolio list) should first move in the brief, then propagate to this file.

## Vercel hookup

This repo is not yet wired to Vercel. To connect:

1. Brian, from his MacBook: log into Vercel with the GitHub account that owns this repo (whaskell-cell).
2. Import `whaskell-cell/flavorthing-com`. Accept defaults. Deploy.
3. Vercel will give a preview URL like `https://flavorthing-com.vercel.app`. Drop that URL back into the Sheryl DM session so it lands in the daily log.
4. DNS swap for `flavorthing.com` itself happens after v1 sign-off.

## License

Proprietary. All rights reserved.
