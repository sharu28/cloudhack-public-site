import type { Metadata, Viewport } from "next";
import { Inter, Tomorrow } from "next/font/google";
import "./globals.css";
import { AnimatedBlurBlobBackground } from "@/components/ui/animated-blur-blob-background";
import { StructuredData } from "@/components/StructuredData";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

// Tomorrow — the technical, semi-monospace display face for all headings and
// prominent UI labels (see DESIGN.md). Weights 400/500 per the type spec.
const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-tomorrow",
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
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${tomorrow.variable}`}>
      <body className="font-sans antialiased">
        <StructuredData />
        {/* Consistent graphite-haze backdrop behind every section, on every page. */}
        <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
          <AnimatedBlurBlobBackground />
          {/* Scrim + vignette so the moving haze never competes with text */}
          <div className="absolute inset-0 bg-ink/55" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--color-ink)_92%)]" />
          <div className="noise absolute inset-0 opacity-[0.035]" />
        </div>
        {children}
      </body>
    </html>
  );
}
