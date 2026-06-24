import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
  themeColor: "#ffffff",
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
