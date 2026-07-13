import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

/**
 * A hard-edged manifest card — the one place besides Split-Flap boards where
 * a bounded "card" shape earns its keep (Hosts: two distinct organizations
 * genuinely warrant separate bounded surfaces). A die-cut notch at one
 * corner and a hard, unblurred offset shadow stand in for the rounded,
 * soft-shadowed card this system deliberately avoids; on hover the card
 * lifts along that same offset, like picking a card up off a stack.
 */
export function ManifestCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "notch-corner relative flex h-full flex-col border border-ink bg-paper-raised p-7 shadow-raised transition-[transform,box-shadow] duration-300 ease-standard hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-lifted sm:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
