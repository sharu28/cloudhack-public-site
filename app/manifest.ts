import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/seo";

// PWA / mobile web app manifest. Auto-linked via <link rel="manifest">.
// Colours match the DISPATCH theme (see viewport.themeColor).
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Where Cloud Meets Creation`,
    short_name: SITE_NAME,
    description:
      "A one-day hackathon where 80 of Sri Lanka's best young builders solve real business problems set by sponsor companies.",
    start_url: "/",
    display: "standalone",
    background_color: "#161210",
    theme_color: "#161210",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
