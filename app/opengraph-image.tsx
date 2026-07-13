import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = "CloudHack 2026 - Where Cloud Meets Creation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The DISPATCH waypoint stamp — the same crosshair-on-stamp-red mark used
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
        border: "3px solid #1c1712",
        background: "#a62e1d",
        transform: "rotate(-8deg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "absolute", width: 3, height: 100, background: "#f1eada", display: "flex" }} />
      <div style={{ position: "absolute", width: 100, height: 3, background: "#f1eada", display: "flex" }} />
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
          background: "#f1eada",
          padding: "72px 80px",
          color: "#1c1712",
          fontFamily: "sans-serif",
        }}
      >
        <WaypointStamp />
        <div
          style={{
            position: "relative",
            display: "flex",
            color: "#a62e1d",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.16em",
          }}
        >
          ETHER LABS &amp; CONVOY TECH PRESENT
        </div>
        <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 118, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 0.9 }}>
            CLOUDHACK
          </div>
          <div style={{ display: "flex", marginTop: 18, alignItems: "center" }}>
            <div style={{ display: "flex", color: "#a62e1d", fontSize: 64, fontWeight: 800, letterSpacing: "-0.02em" }}>
              2026
            </div>
            <div style={{ display: "flex", marginLeft: 28, color: "#5c5344", fontSize: 30, fontWeight: 400 }}>
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
            color: "#5c5344",
            fontSize: 24,
            fontFamily: "monospace",
          }}
        >
          <div style={{ display: "flex" }}>cloudhacksrilanka.com</div>
          <div style={{ display: "flex", width: 16, height: 16, background: "#a62e1d" }} />
        </div>
      </div>
    ),
    { ...size },
  );
}
