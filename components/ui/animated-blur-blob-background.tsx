import { cn } from "@/lib/utils";

/**
 * Animated blur-blob background (an equivalent of the 21st.dev
 * "animated-blur-blob-background" by easemize — the registry source is API-key
 * gated, so this is a faithful reimplementation on our own gradient tokens).
 *
 * Several large, vivid, heavily-blurred blobs drift on staggered loops to form a
 * living aurora. It's purely decorative (aria-hidden, pointer-events-none) and
 * its animations pause automatically under prefers-reduced-motion via the global
 * rule in globals.css. Designed for the dark hero; pass `className` to size/scope
 * it to any positioned container.
 */
export function AnimatedBlurBlobBackground({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <span className="blur-blob blur-blob-1" />
      <span className="blur-blob blur-blob-2" />
      <span className="blur-blob blur-blob-3" />
      <span className="blur-blob blur-blob-4" />
      <span className="blur-blob blur-blob-5" />
    </div>
  );
}
