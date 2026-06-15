// HeroBackdrop — placeholder for the hero's animated attention-economy collage.
//
// Brian (2026-06-15) wants a hero background similar to delgola.co's
// aerial-waves-crashing loop, but representing the platforms and surfaces that
// constitute the attention economy: TikTok, Instagram, X, Twitch, Kick,
// Netflix, YouTube, Substack, Threads, Bluesky, live TV, podcasts.
//
// For v1 we render a dark gradient with the platform names floating at low
// opacity in a loose grid, so the concept reads even before the real motion
// asset is produced. Future swap: replace this component with a video / GIF /
// canvas animation that cycles through real platform UI captures.
//
// The kinetic typography from HeroKinetic sits ON TOP of this backdrop.

const PLATFORMS = [
  "TikTok",
  "Instagram",
  "X",
  "Threads",
  "YouTube",
  "Twitch",
  "Kick",
  "Substack",
  "Netflix",
  "Spotify",
  "Bluesky",
  "Discord",
];

export default function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Dark base gradient. */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#1a1a1a,#050505_65%)]" />

      {/* Subtle grid lines, hinting at phone screens / platform UIs. */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "84px 84px",
        }}
      />

      {/* Soft accent glow in the corner. */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[var(--accent)] opacity-[0.12] blur-3xl" />

      {/* Floating platform name labels at low opacity. */}
      <ul className="absolute inset-0">
        {PLATFORMS.map((name, i) => {
          // Deterministic positioning derived from index so the layout is
          // stable but feels scattered.
          const left = ((i * 137) % 90) + 4; // 4..94
          const top = ((i * 71) % 80) + 8; // 8..88
          const rotate = ((i * 41) % 14) - 7; // -7..7 deg
          const opacity = 0.06 + ((i * 13) % 9) / 100; // 0.06..0.15
          const size = 14 + ((i * 19) % 18); // 14..32 px
          return (
            <li
              key={name}
              className="absolute select-none font-semibold tracking-tight text-white"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                opacity,
                fontSize: `${size}px`,
                letterSpacing: "-0.02em",
              }}
            >
              {name}
            </li>
          );
        })}
      </ul>

      {/* Placeholder caption — removed once the real animated asset lands. */}
      <div className="absolute bottom-4 right-4 text-[10px] uppercase tracking-widest text-white/30">
        Backdrop placeholder · animated collage to follow
      </div>
    </div>
  );
}
