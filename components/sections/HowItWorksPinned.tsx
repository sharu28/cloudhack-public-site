"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { Hammer, Megaphone, Trophy } from "lucide-react";
import { site } from "@/content/site";
import { RingIcon } from "@/components/ui/bento";
import { HowItWorks } from "@/components/sections/HowItWorks";

const STEP_ICONS = [Megaphone, Hammer, Trophy];

/**
 * The "immersive / pinned" variant of How-it-works (selected via SCROLL_MODE in
 * lib/config.ts). The section is a tall scroll track; an inner panel sticks to
 * the viewport while the three steps cross-fade through it, driven by the track's
 * scroll progress — apple.com product-sequence style. Under prefers-reduced-motion
 * it falls back to the normal stacked <HowItWorks /> so nothing is lost.
 */
export function HowItWorksPinned() {
  const reduce = useReducedMotion();
  const { howItWorks } = site;
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Respect reduced motion — no pinning / scroll-jacking.
  if (reduce) return <HowItWorks />;

  const total = howItWorks.steps.length;

  return (
    <section id="how" className="relative">
      <div ref={ref} style={{ height: `${total * 100}vh` }}>
        <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden px-6">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[var(--color-text)] sm:text-4xl md:text-[2.75rem]">
              {howItWorks.heading}
            </h2>

            {/* The fixed-height stage the steps fade through */}
            <div className="relative mt-10 h-72 sm:h-80">
              {howItWorks.steps.map((step, i) => (
                <PinnedStep
                  key={step.time}
                  progress={scrollYProgress}
                  index={i}
                  total={total}
                  time={step.time}
                  title={step.title}
                  body={step.body}
                  Icon={STEP_ICONS[i] ?? Megaphone}
                />
              ))}
            </div>

            {/* Progress line that fills as you scroll through the sequence */}
            <div className="mt-6 h-px w-full overflow-hidden bg-[var(--color-line)]">
              <motion.div
                style={{ scaleX: scrollYProgress }}
                className="h-full w-full origin-left bg-gradient-to-r from-teal via-cyan to-violet"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PinnedStep({
  progress,
  index,
  total,
  time,
  title,
  body,
  Icon,
}: {
  progress: MotionValue<number>;
  index: number;
  total: number;
  time: string;
  title: string;
  body: string;
  Icon: typeof Megaphone;
}) {
  const seg = 1 / total;
  const start = index * seg;
  // Fade/translate in as this step's window opens and out as the next begins.
  const opacity = useTransform(
    progress,
    [start - seg * 0.5, start, start + seg * 0.7, start + seg],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    progress,
    [start - seg * 0.5, start, start + seg],
    [48, 0, -48]
  );

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 grid items-center gap-6 lg:grid-cols-[auto_1fr] lg:gap-12"
    >
      <div className="select-none bg-gradient-to-br from-teal via-cyan to-violet bg-clip-text text-7xl font-semibold leading-none text-transparent sm:text-8xl lg:text-[9rem]">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div>
        <div className="flex items-center gap-4">
          <RingIcon>
            <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
          </RingIcon>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-text-2)]">
            {time}
          </span>
        </div>
        <h3 className="mt-5 text-3xl font-semibold text-[var(--color-text)] sm:text-4xl">
          {title}
        </h3>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-text-2)]">
          {body}
        </p>
      </div>
    </motion.div>
  );
}
