import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Cloud,
  Server,
  Workflow,
} from "lucide-react";
import { site } from "@/content/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ManifestList, ManifestRow } from "@/components/ManifestRow";
import { StatusChip } from "@/components/StatusChip";
import type { DispatchStage } from "@/lib/dispatch";

export const metadata: Metadata = {
  title: "What is Convoy Cloud?",
  description:
    "Learn how CloudHack teams will deploy final apps on Convoy Cloud, the event's Cloud Platform Partner.",
  alternates: {
    canonical: "/convoy-cloud",
  },
  openGraph: {
    title: "What is Convoy Cloud? — CloudHack 2026",
    description:
      "CloudHack teams deploy final apps on Convoy Cloud for live demos and judging, with hands-on guidance at the in-person workshop.",
    url: "/convoy-cloud",
    siteName: "CloudHack 2026",
    type: "website",
    locale: "en_US",
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

const sectionIcons = [Cloud, Server, CalendarDays, CheckCircle2];
const STEP_STAGES: DispatchStage[] = ["PENDING", "BUILDING", "DEPLOYING", "DEPLOYED"];

export default function ConvoyCloudPage() {
  const { convoyCloudPage } = site;

  return (
    <>
      <Nav />
      <main id="main" className="relative px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-2 transition-colors hover:text-stamp"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to home
          </Link>

          <section className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <Reveal>
              <div>
                <p className="font-mono text-xs font-light uppercase tracking-[0.18em] text-stamp">
                  The cloud platform partner
                </p>
                <h1 className="mt-4 max-w-3xl text-4xl font-thin tracking-[-0.03em] text-ink sm:text-5xl md:text-6xl md:leading-[1.03]">
                  {convoyCloudPage.title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-2">
                  {convoyCloudPage.subtitle}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-stamp-deep px-6 py-3 text-sm font-light text-ink shadow-stamp transition-colors hover:opacity-90"
                  >
                    Register for CloudHack
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/#cloud-platform"
                    className="inline-flex items-center justify-center rounded-full border border-line-strong bg-transparent px-6 py-3 text-sm font-light text-ink transition-colors hover:border-stamp hover:text-stamp"
                  >
                    View event requirement
                  </Link>
                  <a
                    href={convoyCloudPage.externalHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-line-strong bg-transparent px-6 py-3 text-sm font-light text-ink transition-colors hover:border-stamp hover:text-stamp"
                  >
                    {convoyCloudPage.externalLabel}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="notch-corner border border-line-strong bg-paper-raised p-8 shadow-raised">
                <div className="flex size-12 items-center justify-center border border-line-strong bg-paper text-stamp">
                  <CalendarDays className="size-5" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-2xl font-extralight tracking-[-0.02em] text-ink">
                  In-person platform workshop
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-2">
                  {convoyCloudPage.workshop}
                </p>
              </div>
            </Reveal>
          </section>

          <section className="mt-16 sm:mt-20">
            <Reveal>
              <div className="flex items-center gap-3">
                <Workflow className="size-5 text-stamp" strokeWidth={1.75} aria-hidden="true" />
                <h2 className="text-3xl font-extralight tracking-[-0.02em] text-ink">
                  CloudHack deployment flow
                </h2>
              </div>
              <p className="mt-2 max-w-2xl text-sm text-ink-2">
                The same four stages your app will actually run through on deploy day — see{" "}
                <Link href="/#cloud-platform" className="font-light text-stamp hover:text-ink">
                  Cloud Platform
                </Link>{" "}
                on the homepage for the short version.
              </p>
            </Reveal>

            <div className="mt-8">
              <ManifestList>
                {convoyCloudPage.steps.map((step, i) => (
                  <ManifestRow
                    key={step.title}
                    index={i}
                    total={convoyCloudPage.steps.length}
                    code={step.label}
                    title={step.title}
                    description={step.body}
                    statusStage={STEP_STAGES[i]}
                  />
                ))}
              </ManifestList>
            </div>
          </section>

          <section className="mt-16 grid gap-px border border-line-strong bg-line-strong sm:mt-20 md:grid-cols-2">
            {convoyCloudPage.sections.map((section, i) => {
              const Icon = sectionIcons[i] ?? Cloud;

              return (
                <Reveal as="div" key={section.title} delay={i * 0.05} className="bg-paper-raised">
                  <div className="flex h-full gap-4 p-7">
                    <div className="flex size-11 shrink-0 items-center justify-center border border-line-strong bg-paper text-stamp">
                      <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <div>
                      <h2 className="text-xl font-extralight tracking-[-0.01em] text-ink">
                        {section.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-ink-2">{section.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </section>

          <section className="mt-16 sm:mt-20">
            <Reveal>
              <div className="flex items-center gap-3">
                <h2 className="text-3xl font-extralight tracking-[-0.02em] text-ink">Convoy Cloud FAQ</h2>
                <StatusChip stage="DEPLOYED" />
              </div>
            </Reveal>
            <div className="mt-6 max-w-3xl">
              {convoyCloudPage.faq.map((item, i) => (
                <Reveal as="div" key={item.q} delay={i * 0.04}>
                  <details className="group border-b border-line">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                      <span className="text-base font-light tracking-[-0.01em] text-ink sm:text-lg">
                        {item.q}
                      </span>
                      <ArrowRight
                        className="size-5 shrink-0 text-ink-2 transition-transform duration-200 group-open:rotate-90"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="max-w-2xl pb-6 text-sm leading-relaxed text-ink-2 sm:text-base">
                      {item.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
