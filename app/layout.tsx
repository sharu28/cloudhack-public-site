import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AnimatedBlurBlobBackground } from "@/components/ui/animated-blur-blob-background";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cloudhack.lk"),
  title: "Cloudhack 2026 — A one-day AI hackathon in Colombo",
  description:
    "A one-day hackathon where 80 of Sri Lanka's strongest university students and early-career AI builders compete to solve real business problems set by sponsors. Co-hosted by Convoy Tech & Ether Labs.",
  keywords: [
    "Cloudhack",
    "hackathon",
    "Sri Lanka",
    "Colombo",
    "AI",
    "Convoy Tech",
    "Ether Labs",
  ],
  openGraph: {
    title: "Cloudhack 2026 — A one-day AI hackathon in Colombo",
    description:
      "80 of Sri Lanka's strongest builders. Real problems from real sponsors. One day to build, break down, and hack.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloudhack 2026",
    description:
      "A one-day AI hackathon in Colombo. Build. Break Down. Hack.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {/* Consistent gradient backdrop behind every section, on every page. */}
        <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden">
          <AnimatedBlurBlobBackground />
          {/* Scrim + vignette so the aurora never competes with text */}
          <div className="absolute inset-0 bg-ink/55" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,var(--color-ink)_95%)]" />
          <div className="noise absolute inset-0 opacity-[0.035]" />
        </div>
        {children}
      </body>
    </html>
  );
}
