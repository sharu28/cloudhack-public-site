import type { Metadata, Viewport } from "next";
import { Big_Shoulders, Big_Shoulders_Stencil, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

// Body + UI copy. Loaded as a single variable-font file (100–700) — an
// engineering heritage face, not a general consumer-product one.
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-plex-sans",
});

// Timestamps, reference codes, coordinates, prices — every data value on the
// site runs on this, deliberately developer-native.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-plex-mono",
});

// Condensed industrial numerals — split-flap digits and stat figures only.
// adjustFontFallback disabled: Next has no precomputed fallback-metric
// override table for this family, which otherwise logs a harmless but
// noisy build warning.
const bigShoulders = Big_Shoulders({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-big-shoulders",
  adjustFontFallback: false,
});

// The stencil cut — crate/shipping-label lettering, reserved for the
// wordmark and Status Chip labels only so it keeps its impact.
const bigShouldersStencil = Big_Shoulders_Stencil({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
  variable: "--font-big-shoulders-stencil",
  adjustFontFallback: false,
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
  themeColor: "#f1eada",
  width: "device-width",
  initialScale: 1,
};

const fontVariables = [
  plexSans.variable,
  plexMono.variable,
  bigShoulders.variable,
  bigShouldersStencil.variable,
].join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="font-body antialiased">
        <StructuredData />
        {/* Skip-to-content — first focusable element on every page (U4). */}
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {/* A quiet manifest/blueprint grid replaces the old gradient-blob
            field — flat, print-production texture instead of a glow. */}
        <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
          <div className="manifest-grid absolute inset-0" />
        </div>
        {children}
      </body>
    </html>
  );
}
