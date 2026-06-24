import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RegisterForm } from "@/components/RegisterForm";
import { CircuitCorner } from "@/components/graphics";

export const metadata: Metadata = {
  title: "Register your team — Cloudhack 2026",
  description:
    "Register a team of 3–4 builders for Cloudhack 2026, a one-day AI hackathon in Colombo.",
};

export default function SignupPage() {
  const { signup } = site;

  return (
    <>
      <Nav />
      <main className="relative overflow-hidden px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <CircuitCorner className="absolute right-0 top-24 hidden text-teal/15 lg:block" />

        <div className="relative mx-auto max-w-xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[var(--color-text-2)] transition hover:text-[#0071e3]"
          >
            <span>←</span> Back to home
          </Link>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
            {signup.title}
          </h1>
          <p className="mt-3 text-[var(--color-text-2)]">{signup.subtitle}</p>

          <div className="mt-10">
            <RegisterForm />
          </div>

          {/* ── Sponsor enquiries ─────────────────────────────────────────── */}
          <section
            id="sponsor"
            className="mt-16 rounded-2xl border border-[var(--color-line)] bg-[var(--color-paper)] p-7 shadow-sm scroll-mt-28"
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
                  className="transition hover:text-[#0071e3]"
                >
                  {signup.sponsorEnquiries.email}
                </a>
                <a
                  href={`tel:${signup.sponsorEnquiries.phone.replace(/\s/g, "")}`}
                  className="transition hover:text-[#0071e3]"
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
