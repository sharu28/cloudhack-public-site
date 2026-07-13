import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { site } from "@/content/site";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

/**
 * FAQ accordion. Native <details>/<summary> so it works without client JS
 * and stays accessible; the chevron rotates on open.
 */
export function FAQ() {
  const { faq } = site;

  return (
    <Section id="faq" eyebrow="FAQ" title={faq.heading}>
      <div className="mx-auto max-w-3xl">
        {faq.items.map((item, i) => (
          <Reveal as="div" key={item.q} delay={i * 0.04}>
            <details className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                <span className="text-base font-semibold tracking-[-0.01em] text-ink sm:text-lg">
                  {item.q}
                </span>
                <ChevronDown
                  className="size-5 shrink-0 text-ink-2 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="max-w-2xl pb-6 text-sm leading-relaxed text-ink-2 sm:text-base">
                <p>{item.a}</p>
                {"href" in item && item.href && (
                  <Link
                    href={item.href}
                    className="mt-3 inline-flex text-sm font-semibold text-stamp transition-colors hover:text-stamp-deep"
                  >
                    {item.linkLabel}
                  </Link>
                )}
              </div>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
