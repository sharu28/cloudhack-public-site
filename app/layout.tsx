import type { Metadata, Viewport } from "next";
import { Inter, Tomorrow } from "next/font/google";
import "./globals.css";
import { AnimatedBlurBlobBackground } from "@/components/ui/animated-blur-blob-background";

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
  metadataBase: new URL("https://cloudhack.lk"),
  title: "CloudHack 2026 — Where Cloud Meets Creation",
  description:
    "A one-day hackathon where 80 of Sri Lanka's strongest university students and early-career builders compete to solve real business problems set by sponsor companies. Co-hosted by Ether Labs & Convoy Tech.",
  keywords: [
    "CloudHack",
    "hackathon",
    "Sri Lanka",
    "Colombo",
    "Ether Labs",
    "Convoy Tech",
  ],
  openGraph: {
    title: "CloudHack 2026 — Where Cloud Meets Creation",
    description:
      "80 of Sri Lanka's best young builders. Real problems. One day to solve them.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudHack 2026",
    description:
      "Where Cloud Meets Creation — a one-day hackathon in Colombo.",
  },
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
