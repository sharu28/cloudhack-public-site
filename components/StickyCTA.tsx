"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const target = new Date(site.event.startISO).getTime();
    const days = Math.ceil((target - Date.now()) / 86_400_000);
    setDaysLeft(days > 0 ? days : null);

    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (daysLeft === null) return null;

  return (
    <div
      aria-hidden={!visible}
      className={`fixed bottom-5 left-1/2 z-40 -translate-x-1/2 transition-all duration-300 sm:bottom-6 sm:left-auto sm:right-6 sm:translate-x-0 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <div className="flex items-center gap-4 rounded-full border border-tarmac bg-obsidian/90 py-2 pl-5 pr-2 shadow-lg shadow-black/40 backdrop-blur-xl">
        <span className="whitespace-nowrap text-sm text-cloud">
          <span className="font-tomorrow font-medium text-ignition-orange">
            {daysLeft}
          </span>{" "}
          {daysLeft === 1 ? "day" : "days"} to go
        </span>
        <Link
          href={site.hero.ctaHref}
          tabIndex={visible ? 0 : -1}
          className="whitespace-nowrap rounded-full bg-ignition-orange px-5 py-2 text-sm font-semibold text-stark-white transition hover:bg-ignition-orange/90"
        >
          {site.hero.ctaLabel}
        </Link>
      </div>
    </div>
  );
}
