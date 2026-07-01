import { ImageResponse } from "next/og";

// iOS home-screen touch icon (180×180 PNG). Rasterises the same "> _" prompt
// mark used by the SVG favicon, so both stay identical. No text → no font needed.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

const MARK = `<svg width="180" height="180" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="14" fill="#000000"/>
  <polyline points="20,20 34,32 20,44" fill="none" stroke="#ffffff" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="37" y="39" width="16" height="6" rx="3" fill="#ffa41c"/>
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
