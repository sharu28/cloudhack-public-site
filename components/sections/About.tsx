import { site } from "@/content/site";
import { FeaturePanel } from "@/components/ui/FeaturePanel";

export function About() {
  const { about } = site;

  return (
    <FeaturePanel
      id="about"
      eyebrow="About"
      title={about.heading}
      body={about.body}
    >
      {/* A compact pull-quote that frames CloudHack as a movement. */}
      <div className="relative mx-auto flex w-full max-w-sm flex-col gap-4 overflow-hidden rounded-lg border border-tarmac bg-charcoal p-6 sm:p-7">
        <span
          className="font-tomorrow text-4xl leading-none text-tarmac"
          aria-hidden="true"
        >
          &ldquo;
        </span>
        <p className="font-tomorrow text-xl font-medium leading-snug tracking-[-0.01em] text-stark-white sm:text-2xl">
          {about.pullQuote}
        </p>
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-dusk-gray">
          <span className="h-px w-8 bg-ignition-orange" aria-hidden="true" />
          Sri Lanka&rsquo;s tech future
        </div>
      </div>
    </FeaturePanel>
  );
}
