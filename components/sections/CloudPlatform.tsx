import Link from "next/link";
import { ArrowRight, Cpu, Infinity as InfinityIcon } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "@/components/Section";
import { ManifestList, ManifestRow } from "@/components/ManifestRow";
import type { DispatchStage } from "@/lib/dispatch";

const STEP_STAGES: DispatchStage[] = ["PENDING", "BUILDING", "DEPLOYING", "DEPLOYED"];
const BUILD_SETUP_ICONS: Record<string, typeof Cpu> = {
  Inference: Cpu,
  Tokens: InfinityIcon,
};

/**
 * Cloud Platform - consolidated (P3): absorbs the old Details section's
 * duplicated AI-model/tokens/deployment content so it's said exactly once.
 * Presented as a literal four-stage manifest - Workshop, Build, Deploy,
 * Submit - each stamped with the matching real Status Chip state. This is
 * the most literal use of the status-machine device on the page: these
 * four rows ARE the `pending → building → deploying → deployed` lifecycle,
 * not just a page scroll position standing in for it.
 *
 * The build-setup tile grid below reuses the icon-box pattern from the
 * Details section's essentials grid instead of a bare stacked dt/dd list,
 * so the two manifest-tile treatments on the page read as one consistent
 * device. The old third tile (Deployment: Convoy Cloud) is dropped here -
 * the four-stage manifest above and the Ground Rules section already say
 * that once each; a third repeat added nothing.
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
        <div className="mt-8 grid grid-cols-1 gap-px border border-line-strong bg-line-strong sm:grid-cols-2">
          {buildSetup.items.map((item) => {
            const Icon = BUILD_SETUP_ICONS[item.label] ?? Cpu;
            return (
              <div key={item.label} className="flex items-start gap-4 bg-paper-raised p-6">
                <div className="flex size-11 shrink-0 items-center justify-center border border-line-strong bg-paper text-stamp">
                  <Icon className="size-4" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-[0.16em] text-ink-2">
                    {item.label}
                  </div>
                  <div className="mt-1 text-xl font-extralight tracking-[-0.02em] text-ink">
                    {item.value}
                  </div>
                  {item.note && <div className="mt-1 text-sm text-ink-2">{item.note}</div>}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href={cloudPlatform.ctaHref}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-stamp-deep px-6 py-3 text-sm font-light text-ink shadow-stamp transition-colors hover:opacity-90"
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
          className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-transparent px-6 py-3 text-sm font-light text-ink transition-colors hover:border-stamp hover:text-stamp"
        >
          {cloudPlatform.externalLabel}
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </Section>
  );
}
