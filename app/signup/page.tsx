import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, Globe, ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RegisterForm } from "@/components/RegisterForm";

export const metadata: Metadata = {
  // Root layout's title.template appends " — CloudHack 2026", so keep this short.
  title: "Register your team",
  description:
    "Register solo, with a partial team, or as a full team for CloudHack 2026, a one-day hackathon in Colombo.",
  alternates: {
    canonical: "/signup",
  },
  // Next.js replaces (doesn't deep-merge) the parent openGraph, so restate it
  // here with this page's own og:url. og:image still comes from the file convention.
  openGraph: {
    title: "Register your team — CloudHack 2026",
    description:
      "Register solo, with a partial team, or as a full team for CloudHack 2026, a one-day hackathon in Colombo.",
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
      <main id="main" className="relative px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-2 transition-colors hover:text-stamp"
          >
            <span aria-hidden="true">←</span> Back to home
          </Link>

          <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:gap-20">
            <div className="flex w-full max-w-sm flex-col gap-10">
              <div>
                <p className="font-mono text-xs font-light uppercase tracking-[0.18em] text-stamp">
                  CloudHack 2026
                </p>
                <h1 className="mt-4 text-4xl font-thin tracking-[-0.03em] text-ink sm:text-5xl">
                  {signup.title}
                </h1>
                <p className="mt-3 text-ink-2">{signup.subtitle}</p>
              </div>

              <div>
                <h2 className="mb-5 font-mono text-xs font-light uppercase tracking-[0.16em] text-ink-2">
                  Questions?
                </h2>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center border border-line-strong bg-paper text-stamp">
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-mono text-sm text-ink transition-colors hover:text-stamp"
                    >
                      {contact.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center border border-line-strong bg-paper text-stamp">
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="font-mono text-sm text-ink transition-colors hover:text-stamp"
                    >
                      {contact.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center border border-line-strong bg-paper text-stamp">
                      <Globe className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <a
                      href={contact.web.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm text-ink transition-colors hover:text-stamp"
                    >
                      {contact.web.label}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full border border-line-strong bg-paper-raised p-6 shadow-raised sm:p-8 lg:max-w-2xl lg:flex-1">
              <RegisterForm />
            </div>
          </div>

          {/* ── Sponsor enquiries — a slim pointer, the full pitch and form
              now live on /partners so it's said in one place. ────────────── */}
          <section
            id="sponsor"
            className="mt-16 scroll-mt-28 border border-line-strong bg-paper-dim p-6 sm:p-7"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-mono text-xs font-light uppercase tracking-[0.2em] text-ink-2">
                  {signup.sponsorEnquiries.heading}
                </h2>
                <p className="mt-2 text-sm text-ink-2">
                  Interested in setting a problem or backing the event? Tiers, contribution levels
                  and the enquiry form all live on the partnership page.
                </p>
              </div>
              <Link
                href="/partners"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-line-strong bg-transparent px-5 py-3 text-sm font-light text-ink transition-colors hover:border-stamp hover:text-stamp"
              >
                View partnership tiers
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
