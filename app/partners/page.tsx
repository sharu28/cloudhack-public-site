import type { Metadata } from "next";
import Link from "next/link";
import { Check, Minus, ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ClipReveal } from "@/components/ui/ClipReveal";
import { Contact2 } from "@/components/ui/contact-2";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Partner with CloudHack",
  description:
    "Sponsor a hackathon in Sri Lanka: set a real problem track, judge the demos, and meet 80 of Sri Lanka's strongest university and early-career builders at CloudHack 2026.",
  alternates: {
    canonical: "/partners",
  },
  openGraph: {
    title: "Partner with CloudHack 2026",
    description:
      "Set the problem. Meet the builders. Sponsorship tiers, judging seats, and recruiting access for CloudHack 2026.",
    url: "/partners",
    siteName: "CloudHack 2026",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "CloudHack 2026 - Where Cloud Meets Creation",
      },
    ],
  },
};

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="mx-auto size-4 text-stamp" strokeWidth={2.5} aria-label="Included" />
    ) : (
      <Minus className="mx-auto size-4 text-ink-2/50" aria-label="Not included" />
    );
  }
  return <span className="text-sm font-light text-ink">{value}</span>;
}

export default function PartnersPage() {
  const { forSponsors, sponsors, signup } = site;
  const confirmedSponsors = sponsors.logos.filter((l) => l.confirmed);

  return (
    <>
      <Nav />
      <main id="main" className="px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-2 transition-colors hover:text-stamp"
          >
            <span aria-hidden="true">←</span> Back to home
          </Link>

          {/* ── Page header ─────────────────────────────────────────────── */}
          <ClipReveal className="mt-10 max-w-3xl">
            <p className="font-mono text-xs font-light uppercase tracking-[0.2em] text-stamp">
              For partners
            </p>
            <h1 className="mt-4 text-4xl font-thin tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl md:leading-[1.03]">
              Set the problem.
              <br />
              Meet the builders.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">{forSponsors.body}</p>
          </ClipReveal>

          {/* ── Tier ledger - real tabular data, a real <table> ─────────── */}
          <Reveal as="div" delay={0.1}>
            <div className="mt-14 overflow-x-auto border border-line-strong">
              <table className="w-full min-w-[36rem] border-collapse text-left">
                <thead>
                  <tr>
                    <th scope="col" className="border-b border-line-strong bg-paper-dim p-4">
                      <span className="sr-only">Comparison</span>
                    </th>
                    {forSponsors.tiers.map((tier) => (
                      <th
                        key={tier.name}
                        scope="col"
                        className={cn(
                          "border-b border-l border-line-strong p-4 text-left align-bottom",
                          tier.highlight ? "bg-stamp-wash" : "bg-paper-dim"
                        )}
                      >
                        <span className="block font-mono text-xs uppercase tracking-[0.14em] text-ink-2">
                          Tier
                        </span>
                        <span className="mt-1 flex items-center gap-2 text-lg font-extralight tracking-[-0.01em] text-ink">
                          {tier.name}
                          {tier.highlight && (
                            <span className="border border-stamp px-1.5 py-0.5 text-[9px] font-light uppercase tracking-[0.1em] text-stamp">
                              Exclusive
                            </span>
                          )}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {forSponsors.rows.map((row) => (
                    <tr key={row.key}>
                      <th
                        scope="row"
                        className="border-t border-line-strong bg-paper-raised p-4 text-left font-mono text-xs uppercase tracking-[0.1em] text-ink-2"
                      >
                        {row.label}
                      </th>
                      {forSponsors.tiers.map((tier) => (
                        <td
                          key={tier.name}
                          className={cn(
                            "border-l border-t border-line-strong p-4 text-center",
                            tier.highlight && "bg-stamp-wash/40"
                          )}
                        >
                          <CellValue value={tier.values[row.key as keyof typeof tier.values]} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-2">
              {forSponsors.footnote}
            </p>
          </Reveal>

          {/* ── Confirmed partners - honest, no synthetic "coming soon" plates ── */}
          <Reveal as="div" delay={0.2}>
            <div className="mt-16 border-t border-line-strong pt-10">
              <p className="font-mono text-xs font-light uppercase tracking-[0.18em] text-ink-2">
                {sponsors.heading}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                {confirmedSponsors.map((logo) => (
                  <div
                    key={logo.name}
                    className="flex items-center gap-3 border border-line-strong bg-paper-raised px-5 py-3"
                  >
                    <span className="text-base font-extralight tracking-[-0.01em] text-ink">
                      {logo.name}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-2">
                      {logo.tier}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-ink-2">{sponsors.pending}</p>
            </div>
          </Reveal>

          {/* ── Enquiry form ─────────────────────────────────────────────── */}
          <div className="mt-20 border-t border-line-strong pt-14">
            <Contact2
              title="Talk to us"
              description="Tell us about your organization, which tier fits, or ask a question - enquiries go straight to the CloudHack partnerships inbox."
              email={signup.sponsorEnquiries.email}
              phone={signup.sponsorEnquiries.phone}
              web={{ label: "cloudhacksrilanka.com", url: "https://www.cloudhacksrilanka.com" }}
            />
          </div>

          <Reveal delay={0.1}>
            <div className="mt-14 flex flex-wrap items-center gap-4 border border-line-strong bg-paper-dim px-6 py-5">
              <p className="text-sm text-ink-2">Prefer email? Reach the team directly:</p>
              <a
                href={forSponsors.ctaHref}
                className="group inline-flex items-center gap-2 text-sm font-light text-stamp"
              >
                {forSponsors.ctaLabel}
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
