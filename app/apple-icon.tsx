import { ImageResponse } from "next/og";

// iOS home-screen touch icon. Mirrors the DISPATCH waypoint mark: a stamped
// crosshair on ink-stamp red, the same device the Route Line uses at every
// true waypoint.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const MARK = `<svg width="180" height="180" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="10" fill="#161210"/>
  <rect x="16" y="16" width="32" height="32" fill="#a62e1d"/>
  <rect x="16" y="16" width="32" height="32" fill="none" stroke="#8a7c5f" stroke-width="1.5"/>
  <path d="M32 24v16M24 32h16" stroke="#f5efe1" stroke-width="2.5" stroke-linecap="square"/>
</svg>`;

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        <img
          width={180}
          height={180}
          src={`data:image/svg+xml;base64,${Buffer.from(MARK).toString("base64")}`}
          alt=""
        />
      </div>
    ),
    { ...size },
  );
}
