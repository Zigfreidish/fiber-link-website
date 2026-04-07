/**
 * Server component — no "use client" needed.
 * dotted-map runs at build time, pure SVG SMIL animations for pulses.
 */
import DottedMap from "dotted-map";

/* Pre-computed SVG coordinates (viewBox 0 0 119 60, height=60, diagonal grid) */
const CITIES = [
  { name: "San Francisco", x: 16,    y: 21.65 },
  { name: "Tokyo",         x: 108.5, y: 22.52 },
  { name: "Singapore",     x: 96,    y: 35.51 },
];

const BLUE = "#2480e0";

export default function WorldMapBackground() {
  const map = new DottedMap({ height: 60, grid: "diagonal" });
  const points = map.getPoints();

  return (
    <div className="world-map-bg" aria-hidden="true">
      <svg
        viewBox="0 0 119 60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: "100%", height: "100%" }}
      >
        {/* ── world dots — use currentColor so they adapt to theme ── */}
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={0.1} fill="currentColor" />
        ))}

        {/* ── city markers with SVG SMIL pulse ── */}
        {CITIES.map((city, i) => (
          <g key={i}>
            {/* outer pulse ring */}
            <circle cx={city.x} cy={city.y} r={0.45} fill="none"
              stroke={BLUE} strokeWidth={0.18} opacity="0">
              <animate attributeName="r"       values="0.45;1.6"  dur="2.2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0"     dur="2.2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
            </circle>
            {/* inner pulse ring (offset) */}
            <circle cx={city.x} cy={city.y} r={0.45} fill="none"
              stroke={BLUE} strokeWidth={0.12} opacity="0">
              <animate attributeName="r"       values="0.45;1.6"  dur="2.2s" begin={`${i * 0.4 + 1.1}s`} repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.7;0"     dur="2.2s" begin={`${i * 0.4 + 1.1}s`} repeatCount="indefinite" />
            </circle>
            {/* solid center dot */}
            <circle cx={city.x} cy={city.y} r={0.5} fill={BLUE} />
            {/* city label */}
            <text
              x={city.x + 0.9}
              y={city.y - 0.55}
              fontSize="1.85"
              fill={BLUE}
              fontFamily="Inter, sans-serif"
              fontWeight="600"
              opacity="0.85"
            >
              {city.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
