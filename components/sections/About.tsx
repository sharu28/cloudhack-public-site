import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { ClipReveal } from "@/components/ui/ClipReveal";
import { Parallax } from "@/components/Parallax";

/**
 * About - a full-width editorial statement, not a two-column panel with a
 * floating pull-quote card (V4/V5). The quote becomes a stamped manifest
 * entry: a ledger line with a hard rule, not a rounded card. Motion is the
 * typographic mask reveal only - no card, no tilt (Section 8).
 */
export function About() {
  const { about } = site;

  return (
    <Section id="about" eyebrow="About" title={about.heading} intro={about.body}>
      <ClipReveal className="max-w-3xl" delay={0.1}>
        <Parallax speed={14}>
          <div className="flex items-start gap-5 border-l-2 border-stamp py-1 pl-6">
            <span aria-hidden="true" className="mt-1 font-mono text-4xl leading-none text-stamp/25">
              &ldquo;
            </span>
            <p className="text-2xl font-extralight leading-snug tracking-[-0.02em] text-ink sm:text-3xl">
              {about.pullQuote}
            </p>
          </div>
        </Parallax>
      </ClipReveal>
    </Section>
  );
}
