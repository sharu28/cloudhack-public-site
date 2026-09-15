import { CalendarClock } from "lucide-react";
import { site } from "@/content/site";

export function AnnouncementBanner() {
  const { announcement } = site;

  return (
    <aside
      aria-labelledby="schedule-update-title"
      className="px-5 pt-28 sm:-mb-20 sm:px-8 sm:pt-32"
    >
      <div className="mx-auto flex max-w-6xl items-start gap-4 border border-stamp bg-stamp-wash px-4 py-5 sm:gap-5 sm:px-6">
        <div className="flex size-10 shrink-0 items-center justify-center border border-stamp bg-paper-raised text-stamp">
          <CalendarClock className="size-4" strokeWidth={1.75} aria-hidden="true" />
        </div>
        <div>
          <p className="font-mono text-[10px] font-light uppercase tracking-[0.18em] text-stamp">
            {announcement.label}
          </p>
          <h2 id="schedule-update-title" className="mt-1 text-xl font-extralight tracking-[-0.01em] text-ink">
            {announcement.title}
          </h2>
          <p className="mt-2 max-w-4xl text-sm leading-relaxed text-ink-2 sm:text-base">
            {announcement.body}
          </p>
        </div>
      </div>
    </aside>
  );
}
