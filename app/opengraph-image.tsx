import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = "CloudHack 2026 - Where Cloud Meets Creation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The DISPATCH waypoint stamp - the same crosshair-on-glow-red mark used
 *  for the favicon and every true Route Line waypoint, rotated slightly as
 *  if pressed onto the manifest at an angle. */
function WaypointStamp() {
  return (
    <div
      style={{
        position: "absolute",
        right: 88,
        top: 70,
        width: 190,
        height: 190,
        border: "3px solid #8a7c5f",
        background: "#a62e1d",
        transform: "rotate(-8deg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "absolute", width: 3, height: 100, background: "#f5efe1", display: "flex" }} />
      <div style={{ position: "absolute", width: 100, height: 3, background: "#f5efe1", display: "flex" }} />
    </div>
  );
}

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#161210",
          padding: "72px 80px",
          color: "#f5efe1",
          fontFamily: "sans-serif",
        }}
      >
        {/* Ambient glow, standing in for the drifting orb field (static
            for the OG card - the real page animates this). */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(255,107,71,0.20) 0%, rgba(166,46,29,0.06) 45%, transparent 72%)",
            display: "flex",
          }}
        />
        <WaypointStamp />
        <div
          style={{
            position: "relative",
            display: "flex",
            color: "#ff6b47",
            fontSize: 20,
            fontWeight: 400,
            letterSpacing: "0.16em",
          }}
        >
          ETHER LABS &amp; CONVOY TECHNOLOGIES PRESENT
        </div>
        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 122, fontWeight: 100, letterSpacing: "-0.03em", lineHeight: 0.9 }}>
            CLOUDHACK
          </div>
          <div style={{ display: "flex", marginTop: 18, alignItems: "center" }}>
            <div style={{ display: "flex", color: "#ff6b47", fontSize: 64, fontWeight: 200, letterSpacing: "-0.02em" }}>
              2026
            </div>
            <div style={{ display: "flex", marginLeft: 28, color: "#a39a8a", fontSize: 28, fontWeight: 300 }}>
              {site.hero.tagline}
            </div>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#a39a8a",
            fontSize: 22,
            fontFamily: "monospace",
          }}
        >
          <div style={{ display: "flex" }}>cloudhacksrilanka.com</div>
          <div style={{ display: "flex", width: 16, height: 16, background: "#ff6b47" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
