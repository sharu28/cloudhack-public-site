import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// 1200×630 social share card, generated from code so it always matches the
// brand (Tomorrow type, "Precision Night Vision" palette — see DESIGN.md).
// Next.js injects og:image automatically from this file; twitter-image.tsx
// re-exports it for the summary_large_image card.
export const alt = "CloudHack 2026 — Where Cloud Meets Creation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FONT = "https://raw.githubusercontent.com/google/fonts/main/ofl/tomorrow";

async function loadFont(file: string): Promise<ArrayBuffer> {
  const res = await fetch(`${FONT}/${file}`);
  if (!res.ok) throw new Error(`Failed to load font ${file}`);
  return res.arrayBuffer();
}

export default async function OpengraphImage() {
  let fonts;
  try {
    const [medium, regular] = await Promise.all([
      loadFont("Tomorrow-Medium.ttf"),
      loadFont("Tomorrow-Regular.ttf"),
    ]);
    fonts = [
      { name: "Tomorrow", data: medium, weight: 500 as const, style: "normal" as const },
      { name: "Tomorrow", data: regular, weight: 400 as const, style: "normal" as const },
    ];
  } catch {
    // Network unavailable at render time: fall back to a text-free brand card
    // (no glyphs → no font required) so og:image always resolves.
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000000",
            border: "1px solid #262626",
          }}
        >
          <div style={{ display: "flex", width: 140, height: 140, backgroundColor: "#ffa41c", borderRadius: 28 }} />
        </div>
      ),
      { ...size },
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000000",
          padding: "72px 80px",
          border: "1px solid #262626",
          fontFamily: "Tomorrow",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#ffa41c",
            fontSize: 26,
            fontWeight: 500,
            letterSpacing: "0.18em",
          }}
        >
          ETHER LABS &amp; CONVOY TECH PRESENT
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              color: "#ffffff",
              fontSize: 150,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            CLOUDHACK
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", marginTop: 10 }}>
            <div style={{ display: "flex", color: "#ffffff", fontSize: 80, fontWeight: 500, letterSpacing: "-0.02em" }}>
              2026
            </div>
            <div style={{ display: "flex", color: "#aaaaaa", fontSize: 40, fontWeight: 400, marginLeft: 28, paddingBottom: 10 }}>
              {site.hero.tagline}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", color: "#999999", fontSize: 28, fontWeight: 400, letterSpacing: "0.02em" }}>
            cloudhacksrilanka.com
          </div>
          <div style={{ display: "flex", width: 18, height: 18, backgroundColor: "#ffa41c", borderRadius: 4 }} />
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
