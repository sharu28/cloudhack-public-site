import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, Globe } from "lucide-react";
import { site } from "@/content/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RegisterForm } from "@/components/RegisterForm";
import { CircuitCorner } from "@/components/graphics";

export const metadata: Metadata = {
  // Root layout's title.template appends " — CloudHack 2026", so keep this short.
  title: "Register your team",
  description:
    "Register a team of 3–4 builders for CloudHack 2026, a one-day hackathon in Colombo.",
  alternates: {
    canonical: "/signup",
  },
  // Next.js replaces (doesn't deep-merge) the parent openGraph, so restate it
  // here with this page's own og:url. og:image still comes from the file convention.
  openGraph: {
    title: "Register your team — CloudHack 2026",
    description:
      "Register a team of 3–4 builders for CloudHack 2026, a one-day hackathon in Colombo.",
    url: "/signup",
    siteName: "CloudHack 2026",
    type: "website",
    locale: "en_US",
    // Restate the generated card — overriding openGraph drops the file-convention
    // og:image, so point back at the same /opengraph-image route.
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "CloudHack 2026 — Where Cloud Meets Creation",
      },
    ],
  },
};

export default function SignupPage() {
  const { signup, contact } = site;

  return (
    <>
      <Nav />
      <main className="relative overflow-hidden px-5 pb-24 pt-28 sm:px-8 sm:pt-32">
        <CircuitCorner className="absolute right-0 top-24 hidden text-white/10 lg:block" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-2)] transition hover:text-ignition-orange"
          >
            <span>←</span> Back to home
          </Link>

          {/* Two-column layout (same theme the contact page used): intro +
              contact details on the left, the registration form on the right. */}
          <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:gap-20">
            <div className="flex w-full max-w-sm flex-col gap-10">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                  {signup.title}
                </h1>
                <p className="mt-3 text-[var(--color-text-2)]">
                  {signup.subtitle}
                </p>
              </div>

              <div>
                <h2 className="mb-5 text-xl font-semibold text-[var(--color-text)]">
                  Questions?
                </h2>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-tarmac bg-graphite text-stark-white">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-[var(--color-text)] transition hover:text-ignition-orange"
                    >
                      {contact.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-tarmac bg-graphite text-stark-white">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="text-[var(--color-text)] transition hover:text-ignition-orange"
                    >
                      {contact.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-tarmac bg-graphite text-stark-white">
                      <Globe className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <a
                      href={contact.web.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-text)] transition hover:text-ignition-orange"
                    >
                      {contact.web.label}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full lg:max-w-2xl lg:flex-1">
              <RegisterForm />
            </div>
          </div>

          {/* ── Sponsor enquiries ─────────────────────────────────────────── */}
          <section
            id="sponsor"
            className="mt-16 rounded-lg border border-[var(--color-line)] bg-[var(--color-paper)] p-7 scroll-mt-28"
          >
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-2)]">
              {signup.sponsorEnquiries.heading}
            </h2>
            <p className="mt-4 text-[var(--color-text-2)]">
              Interested in setting a problem or backing the event?
            </p>
            <div className="mt-4 text-sm">
              <div className="font-semibold text-[var(--color-text)]">
                {signup.sponsorEnquiries.name}
                <span className="ml-2 font-normal text-[var(--color-text-2)]">
                  {signup.sponsorEnquiries.role}
                </span>
              </div>
              <div className="mt-2 flex flex-col gap-1 text-[var(--color-text-2)]">
                <a
                  href={`mailto:${signup.sponsorEnquiries.email}`}
                  className="transition hover:text-ignition-orange"
                >
                  {signup.sponsorEnquiries.email}
                </a>
                <a
                  href={`tel:${signup.sponsorEnquiries.phone.replace(/\s/g, "")}`}
                  className="transition hover:text-ignition-orange"
                >
                  {signup.sponsorEnquiries.phone}
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
