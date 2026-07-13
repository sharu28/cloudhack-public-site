import type { ReactNode } from "react";

import { StatusChip } from "@/components/StatusChip";
import type { DispatchStage } from "@/lib/dispatch";
import { cn } from "@/lib/utils";

/**
 * A hard-edged ledger row — the shape lists take instead of a rounded bento
 * card. Every row carries a real reference stub (a sequence number, plus
 * either a manifest code like "TRK-01" or custom leading content such as a
 * Split-Flap time), so even the decorative numbering maps to something a
 * real manifest would print. Used for Tracks, Why Participate, Prizes,
 * Schedule, and the Cloud Platform build stages.
 */
export function ManifestRow({
  index,
  total,
  code,
  leading,
  icon,
  title,
  description,
  trailing,
  statusStage,
  className,
}: {
  index: number;
  total: number;
  code?: string;
  leading?: ReactNode;
  icon?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  trailing?: ReactNode;
  statusStage?: DispatchStage;
  className?: string;
}) {
  return (
    <li
      className={cn(
        "group relative flex flex-col gap-4 border-b border-line py-6 first:border-t sm:flex-row sm:items-start sm:gap-7 sm:py-7",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-0 -left-px w-[2px] scale-y-0 bg-stamp transition-transform duration-300 ease-standard group-hover:scale-y-100"
      />

      {/* Reference stub */}
      <div className="flex shrink-0 items-center gap-3 sm:w-24 sm:flex-col sm:items-start sm:gap-1">
        {leading ?? (
          <span className="font-mono text-xs font-light uppercase tracking-[0.06em] text-stamp">
            {code}
          </span>
        )}
        <span className="font-mono text-[10px] tabular-nums text-ink-2/60">
          {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
        </span>
      </div>

      {icon && (
        <div className="flex size-10 shrink-0 items-center justify-center border border-line-strong bg-paper-raised text-stamp">
          {icon}
        </div>
      )}

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <h3 className="text-lg font-extralight tracking-[-0.015em] text-ink sm:text-xl">{title}</h3>
          {statusStage && <StatusChip stage={statusStage} srPrefix="Stage" />}
        </div>
        {description && (
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-2">{description}</p>
        )}
      </div>

      {trailing && <div className="shrink-0 sm:text-right">{trailing}</div>}
    </li>
  );
}

/** Wraps a list of ManifestRow items with the shared list semantics. */
export function ManifestList({ children, className }: { children: ReactNode; className?: string }) {
  return <ol className={cn("flex flex-col", className)}>{children}</ol>;
}
