import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { ManifestList, ManifestRow } from "@/components/ManifestRow";
import type { DispatchStage } from "@/lib/dispatch";

const STEP_STAGES: DispatchStage[] = ["PENDING", "BUILDING", "DEPLOYING", "DEPLOYED"];

/**
 * Cloud Platform — consolidated (P3): absorbs the old Details section's
 * duplicated AI-model/tokens/deployment content so it's said exactly once.
 * Presented as a literal four-stage manifest — Workshop, Build, Deploy,
 * Submit — each stamped with the matching real Status Chip state. This is
 * the most literal use of the status-machine device on the page: these
 * four rows ARE the `pending → building → deploying → deployed` lifecycle,
 * not just a page scroll position standing in for it.
 */
export function CloudPlatform() {
  const { cloudPlatform, convoyCloudPage, details } = site;
  const buildSetup = details.groups.find((g) => g.title === "Build setup");

  return (
    <Section
      id="cloud-platform"
      eyebrow="Cloud platform"
      title={cloudPlatform.heading}
      intro={cloudPlatform.intro}
    >
      <ManifestList>
        {convoyCloudPage.steps.map((step, i) => (
          <ManifestRow
            key={step.title}
            index={i}
            total={convoyCloudPage.steps.length}
            code={step.label}
            title={step.title}
            description={step.body}
            statusStage={STEP_STAGES[i]}
          />
        ))}
      </ManifestList>

      {buildSetup && (
        <dl className="mt-8 grid grid-cols-1 gap-px border border-line-strong bg-line-strong sm:grid-cols-3">
          {buildSetup.items.map((item) => (
            <div key={item.label} className="bg-paper-raised p-5">
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-2">
                {item.label}
              </dt>
              <dd className="mt-1.5">
                <span className="block text-base font-semibold text-ink">{item.value}</span>
                <span className="mt-1 block text-xs leading-relaxed text-ink-2">{item.note}</span>
              </dd>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href={cloudPlatform.ctaHref}
          className="group inline-flex items-center justify-center gap-2 border border-ink bg-stamp px-6 py-3 text-sm font-semibold text-paper-raised shadow-stamp transition-colors hover:bg-stamp-deep"
        >
          {cloudPlatform.ctaLabel}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>
        <a
          href={cloudPlatform.externalHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 border border-ink bg-paper-raised px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-stamp hover:text-stamp"
        >
          {cloudPlatform.externalLabel}
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </Section>
  );
}
