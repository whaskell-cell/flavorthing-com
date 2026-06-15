// Variant C — Animated structural diagram.
// Three-node graph (Creators / Brands / Capital) with Flavor Thing at the center.
// Subtle radial pulse from the center node every 3s. CSS-only animation, no JS.
//
// Says: structure literalized. The integration thesis (we are the firm where
// these three sides meet) shown rather than told.

export default function HeroDiagram() {
  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 480 480"
        className="h-auto w-full"
        role="img"
        aria-label="Diagram showing Flavor Thing at the intersection of Creators, Brands, and Capital"
      >
        {/* Connector lines */}
        <g stroke="#d4d4d4" strokeWidth="1.5" strokeLinecap="round">
          <line x1="240" y1="240" x2="240" y2="90" />
          <line x1="240" y1="240" x2="100" y2="370" />
          <line x1="240" y1="240" x2="380" y2="370" />
        </g>

        {/* Pulse rings — three staggered so the diagram breathes. */}
        <circle
          cx="240"
          cy="240"
          r="48"
          fill="none"
          stroke="#d8232a"
          strokeWidth="1.5"
          className="ht-pulse"
          style={{ animationDelay: "0s" }}
        />
        <circle
          cx="240"
          cy="240"
          r="48"
          fill="none"
          stroke="#d8232a"
          strokeWidth="1.5"
          className="ht-pulse"
          style={{ animationDelay: "1s" }}
        />
        <circle
          cx="240"
          cy="240"
          r="48"
          fill="none"
          stroke="#d8232a"
          strokeWidth="1.5"
          className="ht-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Outer nodes */}
        {/* Creators (top) */}
        <g>
          <circle
            cx="240"
            cy="90"
            r="48"
            fill="#ffffff"
            stroke="#0a0a0a"
            strokeWidth="1.5"
          />
          <text
            x="240"
            y="90"
            textAnchor="middle"
            dy="5"
            fill="#0a0a0a"
            fontSize="14"
            fontWeight="500"
            fontFamily="var(--font-sans), sans-serif"
          >
            Creators
          </text>
        </g>

        {/* Brands (bottom-left) */}
        <g>
          <circle
            cx="100"
            cy="370"
            r="48"
            fill="#ffffff"
            stroke="#0a0a0a"
            strokeWidth="1.5"
          />
          <text
            x="100"
            y="370"
            textAnchor="middle"
            dy="5"
            fill="#0a0a0a"
            fontSize="14"
            fontWeight="500"
            fontFamily="var(--font-sans), sans-serif"
          >
            Brands
          </text>
        </g>

        {/* Capital (bottom-right) */}
        <g>
          <circle
            cx="380"
            cy="370"
            r="48"
            fill="#ffffff"
            stroke="#0a0a0a"
            strokeWidth="1.5"
          />
          <text
            x="380"
            y="370"
            textAnchor="middle"
            dy="5"
            fill="#0a0a0a"
            fontSize="14"
            fontWeight="500"
            fontFamily="var(--font-sans), sans-serif"
          >
            Capital
          </text>
        </g>

        {/* Center node — Flavor Thing */}
        <g>
          <circle cx="240" cy="240" r="56" fill="#0a0a0a" />
          <text
            x="240"
            y="240"
            textAnchor="middle"
            dy="0"
            fill="#ffffff"
            fontSize="11"
            fontWeight="600"
            fontFamily="var(--font-sans), sans-serif"
            letterSpacing="0.05em"
          >
            FLAVOR
          </text>
          <text
            x="240"
            y="240"
            textAnchor="middle"
            dy="16"
            fill="#ffffff"
            fontSize="11"
            fontWeight="600"
            fontFamily="var(--font-sans), sans-serif"
            letterSpacing="0.05em"
          >
            THING
          </text>
        </g>
      </svg>
    </div>
  );
}
