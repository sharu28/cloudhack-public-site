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
import { CircuitCorner } from "@/components/graphics";

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

export default function ConvoyCloudPage() {
  const { convoyCloudPage } = site;

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
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to home
          </Link>

          <section className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <Reveal>
              <div>
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-[var(--color-text)] sm:text-5xl md:text-6xl md:leading-[1.05]">
                  {convoyCloudPage.title}
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-text-2)]">
                  {convoyCloudPage.subtitle}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-ignition-orange px-6 py-3 text-sm font-semibold text-stark-white transition hover:bg-ignition-orange/90"
                  >
                    Register for CloudHack
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                  <Link
                    href="/#cloud-platform"
                    className="inline-flex items-center justify-center rounded-lg border border-tarmac bg-graphite px-6 py-3 text-sm font-medium text-stark-white transition hover:bg-tarmac"
                  >
                    View event requirement
                  </Link>
                  <a
                    href={convoyCloudPage.externalHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-tarmac bg-graphite px-6 py-3 text-sm font-medium text-stark-white transition hover:bg-tarmac"
                  >
                    {convoyCloudPage.externalLabel}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-lg border border-ignition-orange/30 bg-charcoal p-7">
                <div className="flex size-12 items-center justify-center rounded-lg border border-tarmac bg-graphite">
                  <CalendarDays
                    className="size-5 text-ignition-orange"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-stark-white">
                  In-person platform workshop
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ash">
                  {convoyCloudPage.workshop}
                </p>
              </div>
            </Reveal>
          </section>

          <section className="mt-16 sm:mt-20">
            <Reveal>
              <div className="flex items-center gap-3">
                <Workflow
                  className="size-5 text-ignition-orange"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <h2 className="text-2xl font-semibold text-stark-white">
                  CloudHack deployment flow
                </h2>
              </div>
            </Reveal>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              {convoyCloudPage.steps.map((step, i) => (
                <Reveal as="div" key={step.title} delay={i * 0.05}>
                  <div className="flex h-full flex-col rounded-lg border border-tarmac bg-charcoal p-5">
                    <span className="font-tomorrow text-xs font-medium uppercase tracking-[0.18em] text-dusk-gray">
                      {step.label}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-stark-white">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ash">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section className="mt-16 grid gap-4 sm:mt-20 md:grid-cols-2">
            {convoyCloudPage.sections.map((section, i) => {
              const Icon = sectionIcons[i] ?? Cloud;

              return (
                <Reveal as="div" key={section.title} delay={i * 0.05}>
                  <div className="flex h-full gap-4 rounded-lg border border-tarmac bg-charcoal p-6">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-tarmac bg-graphite">
                      <Icon
                        className="size-5 text-stark-white"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-stark-white">
                        {section.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-ash">
                        {section.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </section>

          <section className="mt-16 sm:mt-20">
            <Reveal>
              <h2 className="text-2xl font-semibold text-stark-white">
                Convoy Cloud FAQ
              </h2>
            </Reveal>
            <div className="mt-6 max-w-3xl">
              {convoyCloudPage.faq.map((item, i) => (
                <Reveal as="div" key={item.q} delay={i * 0.04}>
                  <details className="group border-b border-tarmac">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                      <span className="font-tomorrow text-base font-medium text-stark-white sm:text-lg">
                        {item.q}
                      </span>
                      <ArrowRight
                        className="size-5 shrink-0 text-dusk-gray transition-transform duration-200 group-open:rotate-90"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="max-w-2xl pb-6 text-sm leading-relaxed text-ash sm:text-base">
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
