import type { Metadata } from "next";
import { MeetupConnectForm } from "@/components/MeetupConnectForm";

export const metadata: Metadata = {
  title: "Stay connected",
  description: "Share your details after meeting the Ether Labs team at a builder meetup.",
  alternates: { canonical: "/connect" },
  robots: { index: false, follow: false },
};

export default function ConnectPage() {
  return (
    <main id="main" className="relative flex min-h-screen items-center px-4 py-10 sm:px-6">
      <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <section className="px-2 sm:px-0">
          <div className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-stamp">
            <span className="h-2 w-2 rounded-full bg-stamp shadow-[0_0_16px_rgba(255,107,71,0.8)]" />
            Ether Labs / Builder meetup
          </div>
          <h1 className="mt-6 max-w-xl text-4xl font-thin tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
            Let&apos;s keep the build going.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-2 sm:text-lg">
            Drop your details and a quick note about what you&apos;re working on. I&apos;ll follow up after the meetup while the conversation is still fresh.
          </p>
          <div className="mt-8 hidden border-l border-stamp pl-4 text-sm text-ink-2 lg:block">
            Built for the hallway conversation: short, mobile-first, and done in about 30 seconds.
          </div>
        </section>

        <section className="border border-line-strong bg-paper-raised p-5 shadow-raised sm:p-8" aria-label="Connection form">
          <MeetupConnectForm />
        </section>
      </div>
    </main>
  );
}
