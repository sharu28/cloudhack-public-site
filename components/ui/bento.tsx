import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * On-brand abstract accents for the bento-grid sections.
 *
 * These replace the generic gauge/globe/avatar illustrations from the original
 * "features-8" block with visuals drawn from this site's own language: the
 * signature teal → cyan → blue → violet → magenta gradient (the same one the
 * background field uses), a concentric "ring" icon motif, and a soft conic glow
 * that reads as a fragment of the morphing background blob. Every accent is
 * decorative (aria-hidden) and sits behind/around the real content.
 */

const GRADIENT_STOPS = (
  <>
    <stop offset="0%" stopColor="#2dd4bf" />
    <stop offset="35%" stopColor="#22d3ee" />
    <stop offset="70%" stopColor="#8b5cf6" />
    <stop offset="100%" stopColor="#e879f9" />
  </>
);

/** A vivid gradient badge holding a white icon, with a faint outer halo. Reads as
 *  a colourful brand accent on the light cards. */
export function RingIcon({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex aspect-square size-12 items-center justify-center rounded-full bg-gradient-to-br from-teal via-cyan to-violet text-white shadow-sm before:absolute before:-inset-1.5 before:rounded-full before:border before:border-black/5"
    >
      {children}
    </div>
  );
}

/** A flowing signal/momentum line that fades into the card — for "build" / progress. */
export function SignalAccent({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("w-full", className)}
      viewBox="0 0 366 231"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 179.796L4.057 172.195V183.933L7.201 174.398L8.456 183.933L10.055 186.948V155.455L12.635 152.613V145.122L15.302 134.71V155.455L16.692 160.829L18.122 172.195V158.182L19.8 152.613L21.41 148.111V137.548L23.686 142.407V126.049L25.766 127.87V120.525L27.276 118.066L29.18 112.407V123.822L31.043 120.525V130.26L32.356 134.71L34.406 145.122V137.548L35.898 130.26L37.187 126.049L38.658 134.71L40.659 138.977V126.049L43.756 130.26V123.822L45.972 112.407L47.339 103.407V92.473L49.213 98.465V106.053L52.58 89.756L54.456 82.775L56.118 87.966L58.938 89.756V98.465L60.762 103.407L62.055 123.822L63.879 118.066L65.631 122.082L68.548 114.229L70.299 109.729L71.89 118.066L73.579 123.822V130.26L74.945 134.861L76.924 127.87L78.352 134.71V138.977L80.079 142.407V152.613L83.042 142.407V130.26L86.791 123.822L89.012 116.645V122.082L90.606 127.87L92.354 131.77L93.71 123.822L95.464 118.066L96.755 122.082V137.548L99.709 140.988V131.77L101.711 120.525L103.036 116.645V133.348L104.893 136.218L106.951 140.988L108.933 134.71L110.797 130.26L112.856 140.988V148.111L115.711 152.613L117.941 145.122L119.999 140.988L121.501 148.111L123.4 152.613L125.401 158.182L127.992 152.613L131.578 146.76V155.455L134.143 158.182L135.818 164.629L138.329 158.182L140.612 160.829L144.117 166.757L146.118 155.455L147.823 149.804L151.02 152.613L154.886 145.122L158.496 140.988V133.348L161.295 127.87V122.082L162.855 116.645V109.729L164.83 103.407L166.894 109.729L176.249 98.465L178.254 106.169L180.77 98.465V81.045L182.906 69.164L184.8 56.867L186.477 62.843L187.848 79.748L188.849 106.169L191.351 79.748L193.485 75.645V98.465L196.622 94.452L198.623 87.423V79.748L200.717 75.645L202.276 81.045V89.397L203.638 113.023L205.334 99.804L207.164 94.452L208.982 98.465V102.176L211.267 107.64L212.788 81.045L214.437 66.008L216.19 62.843L217.941 56.867V79.748L220.28 75.645L222.516 66.008V73.676H226.174V84.866L228.566 98.465L230.316 75.645L233.61 94.452V104.25L236.882 102.176L239.543 113.023L241.057 98.465L243.604 94.452L244.975 106.169L245.975 87.423L247.272 89.397L250.732 84.866L251.733 96.755L254.644 94.452L257.452 99.804L259.853 91.311L261.193 84.866L264.162 75.645L265.808 87.423L267.247 58.49L269.757 66.008L276.625 13.515L273.33 58.49L276.25 67.656L282.377 20.197L281.37 58.49V66.008L283.579 75.645L286.033 56.867L287.436 73.676L290.628 77.664L292.414 84.866L294.214 61.39L296.215 18.962L300.826 0.948L297.531 56.867L299.973 62.843L305.548 22.06L299.755 114.956L301.907 105.378L304.192 112.688V94.993L308.009 80.083L310.003 94.993L311.004 102.127L312.386 105.378L315.007 112.688L316.853 98.004L318.895 105.378L321.257 94.993L324.349 100.81L325.032 80.083L327.604 61.573L329.357 74.986L332.611 52.657L334.352 48.555L335.785 55.264L338.377 59.589V73.426L341.699 87.518L343.843 93.435L347.714 82.117L350.229 78.682L351.974 89.756L353.323 94.993L355.821 93.435L357.799 102.127L360.684 108.794L363.219 98.004L365 89.756"
        stroke="url(#bento-signal)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="bento-signal" x1="0" y1="0" x2="366" y2="0" gradientUnits="userSpaceOnUse">
          {GRADIENT_STOPS}
        </linearGradient>
      </defs>
    </svg>
  );
}

/** Concentric orbit rings with a gradient core + a node on the outer ring — for "place" / network. */
export function OrbitAccent({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("h-full w-full", className)}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="88" stroke="white" strokeOpacity="0.06" />
      <circle cx="100" cy="100" r="62" stroke="white" strokeOpacity="0.1" />
      <circle cx="100" cy="100" r="36" stroke="url(#bento-orbit)" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="10" fill="url(#bento-orbit)" />
      <circle cx="100" cy="12" r="4" fill="#22d3ee" />
      <circle cx="162" cy="138" r="3" fill="#8b5cf6" />
      <defs>
        <linearGradient id="bento-orbit" x1="64" y1="64" x2="136" y2="136" gradientUnits="userSpaceOnUse">
          {GRADIENT_STOPS}
        </linearGradient>
      </defs>
    </svg>
  );
}

/** A soft conic glow — a fragment of the morphing background blob — for hero bento cells. */
export function GlowAccent({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute", className)}>
      <div className="blob h-full w-full opacity-40" />
    </div>
  );
}
