import { site } from "@/content/site";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

/**
 * Site-wide JSON-LD structured data (Organization + WebSite). Rendered once in
 * the root layout so search engines get a machine-readable description of the
 * event brand on every page.
 *
 * NOTE: an `Event` node (eligible for Google event rich results) is deliberately
 * omitted until the exact venue/address is locked.
 */
export function StructuredData() {
  // Only include real, resolvable partner URLs in sameAs (the footer socials are
  // still "#" placeholders and would be invalid).
  const sameAs = site.hosts.items
    .map((h) => h.href)
    .filter((href) => href.startsWith("http"));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "CloudHack",
        alternateName: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/icon.svg`,
        description: site.hero.oneLiner,
        sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: `${site.hero.tagline} — ${site.hero.oneLiner}`,
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
