import type { Metadata, Viewport } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";
import { StructuredData } from "@/components/StructuredData";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

// Body + UI copy, thin-to-medium only — Convoy Cloud's own register, never
// bold. Loaded as five static weights (Inter's variable axis would pull in
// the full 100–900 range; static files keep only what's actually used).
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"],
  display: "swap",
  variable: "--font-inter",
});

// Timestamps, reference codes, coordinates, prices, Split-Flap digits —
// every data value on the site runs on this, deliberately developer-native.
// Weights: 300 for mono labels/eyebrows (the site's default text weight),
// 500 for Split-Flap digit readouts (deliberately a touch heavier than the
// thin body register, so live data reads like an instrument, not prose).
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CloudHack 2026 — Where Cloud Meets Creation",
    template: "%s — CloudHack 2026",
  },
  description:
    "A one-day hackathon where 80 of Sri Lanka's strongest university students and early-career builders compete to solve real business problems set by sponsor companies. Co-hosted by Ether Labs & Convoy Tech.",
  applicationName: SITE_NAME,
  keywords: [
    "CloudHack",
    "hackathon",
    "Sri Lanka",
    "Colombo",
    "cloud",
    "developers",
    "students",
    "Ether Labs",
    "Convoy Tech",
  ],
  authors: [
    { name: "Ether Labs", url: "https://etherlabs.lk" },
    { name: "Convoy Tech", url: "https://convoy-tech.com" },
  ],
  creator: "Ether Labs & Convoy Tech",
  publisher: "Ether Labs & Convoy Tech",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "CloudHack 2026 — Where Cloud Meets Creation",
    description:
      "80 of Sri Lanka's best young builders. Real problems. One day to solve them.",
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
    // og:image is injected automatically from app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudHack 2026",
    description:
      "Where Cloud Meets Creation — a one-day hackathon in Colombo.",
    // twitter:image is injected automatically from app/twitter-image.tsx
  },
  // Google Search Console — HTML-tag ownership verification.
  verification: { google: "R6oXdIBrWJf4ggA55Z1QJppqFW3dShUzUmPHUdzkkHQ" },
};

export const viewport: Viewport = {
  themeColor: "#161210",
  width: "device-width",
  initialScale: 1,
};

const fontVariables = [inter.variable, plexMono.variable].join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${fontVariables}`}>
      <body className="font-body antialiased">
        <StructuredData />
        {/* Skip-to-content — first focusable element on every page (U4). */}
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {/* Dark control-plane canvas: a quiet manifest/blueprint grid plus
            slow drifting glow orbs (disabled under reduced-motion). */}
        <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-paper">
          <BackgroundOrbs />
          <div className="manifest-grid absolute inset-0" />
        </div>
        {children}
      </body>
    </html>
  );
}
