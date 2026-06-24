/**
 * Accent graphics — thin cyan hexagonal "circuit board" line patterns and a
 * small pixelated arrow/cursor motif. All decorative, so aria-hidden.
 */

export function CircuitCorner({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="220"
      height="220"
      viewBox="0 0 220 220"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <g opacity="0.7">
        {/* hexagon */}
        <path d="M150 20 L186 41 L186 83 L150 104 L114 83 L114 41 Z" />
        {/* traces fanning out */}
        <path d="M150 104 L150 150 L120 180" />
        <path d="M114 62 L70 62 L50 82" />
        <path d="M186 62 L210 62" />
        <path d="M150 20 L150 0" />
        {/* nodes */}
        <circle cx="120" cy="180" r="3" fill="currentColor" stroke="none" />
        <circle cx="50" cy="82" r="3" fill="currentColor" stroke="none" />
        <circle cx="210" cy="62" r="3" fill="currentColor" stroke="none" />
        {/* secondary smaller hex */}
        <path
          d="M64 120 L84 132 L84 156 L64 168 L44 156 L44 132 Z"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}

export function PixelArrow({ className = "" }: { className?: string }) {
  // A blocky, pixelated cursor/arrow built from unit squares on a grid.
  const cells = [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
    [1, 5],
    [2, 2],
    [2, 3],
    [2, 4],
    [3, 3],
    [3, 4],
    [3, 5],
    [4, 4],
    [4, 5],
  ];
  return (
    <svg
      aria-hidden="true"
      className={className}
      width="44"
      height="56"
      viewBox="0 0 5 7"
      fill="currentColor"
      shapeRendering="crispEdges"
    >
      {cells.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" />
      ))}
    </svg>
  );
}

/**
 * Convoy Tech logo — three horizontal speed-lines tapering to the right,
 * representing speed and infrastructure.
 */
export function ConvoyLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-label="Convoy Tech"
      role="img"
      className={className}
      viewBox="0 0 64 28"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Three horizontal speed-line chevrons */}
      <path d="M0 4 L40 4 L52 14 L40 24 L0 24 L10 14 Z" opacity="0.25" />
      <path d="M6 8 L44 8 L56 14 L44 20 L6 20 L14 14 Z" opacity="0.55" />
      <path d="M14 11 L48 11 L60 14 L48 17 L14 17 L20 14 Z" />
    </svg>
  );
}

/**
 * Ether Labs logo — a rounded square, clean and minimal.
 */
export function EtherLabsLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-label="Ether Labs"
      role="img"
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="32" height="32" rx="7" ry="7" />
    </svg>
  );
}
