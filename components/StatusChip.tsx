"use client";

import { useDispatchProgress } from "@/components/DispatchProgress";
import { stageForId, type DispatchStage } from "@/lib/dispatch";
import { cn } from "@/lib/utils";

/**
 * The Status Chip — a small pinned readout using the platform's own
 * deployment states. Rather than inventing a four-colour traffic light (a
 * hue this palette deliberately doesn't have), the four stages are told
 * through the SAME two brand colours at rising then resolving intensity:
 * an empty ink mark (pending) warms to an empty stamp-red mark (building),
 * peaks as a solid stamp-red mark (deploying), and settles into a solid ink
 * mark once deployed — read the state, don't just decorate with one.
 */
const STAGE_DOT: Record<DispatchStage, string> = {
  PENDING: "border border-ink-2/60 bg-transparent",
  BUILDING: "border border-stamp bg-transparent",
  DEPLOYING: "border border-stamp bg-stamp",
  DEPLOYED: "border border-line-strong bg-ink",
};

export function StatusChip({
  stage,
  className,
  srPrefix,
}: {
  stage: DispatchStage;
  className?: string;
  /** Prefix announced to screen readers only, e.g. "Pipeline stage". Omit to
   *  keep the chip fully decorative (aria-hidden). */
  srPrefix?: string;
}) {
  const content = (
    <span
      className={cn(
        "inline-flex w-max items-center gap-2 border border-line-strong bg-paper-raised px-2.5 py-[5px]",
        className
      )}
    >
      <span aria-hidden="true" className={cn("size-2 shrink-0", STAGE_DOT[stage])} />
      <span
        key={stage}
        className="font-mono text-[10px] font-light uppercase tracking-[0.16em] text-ink"
        style={{ animation: "chip-fade var(--duration-base) var(--ease-standard)" }}
      >
        {stage}
      </span>
    </span>
  );

  if (!srPrefix) {
    return (
      <span aria-hidden="true" className="inline-block">
        {content}
      </span>
    );
  }

  return (
    <span className="inline-block">
      <span className="sr-only">
        {srPrefix}: {stage.charAt(0) + stage.slice(1).toLowerCase()}
      </span>
      <span aria-hidden="true">{content}</span>
    </span>
  );
}

/** Static, per-section variant — each section already knows its own fixed
 *  stage, so this needs no scroll tracking. Used inline near the eyebrow on
 *  small screens, where a fixed corner chip would eat scarce viewport space. */
export function StatusChipInline({ id, className }: { id: string; className?: string }) {
  return (
    <StatusChip stage={stageForId(id)} className={className} srPrefix="Pipeline stage" />
  );
}

/** Fixed, scroll-driven variant — desktop only (md+); advances as the active
 *  waypoint changes. Purely ambient/thematic (the real section identity is
 *  already in the visible heading), so it stays out of the a11y tree. */
export function StatusChipGlobal() {
  const { activeId } = useDispatchProgress();

  return (
    <div className="fixed right-4 top-[5.75rem] z-40 hidden md:block lg:right-6 xl:right-8">
      <StatusChip stage={stageForId(activeId)} />
    </div>
  );
}
