import { site } from "@/content/site";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

/**
 * Site-wide JSON-LD structured data (Organization + WebSite + Event). Rendered
 * once in the root layout so search engines get a machine-readable description
 * of the event on every page - the Event node makes the page eligible for
 * Google event rich results.
 */
export function StructuredData() {
  // Only include real, resolvable partner URLs in sameAs (the footer socials are
  // still "#" placeholders and would be invalid).
  const sameAs = site.hosts.items
    .map((h) => h.href)
    .filter((href) => href.startsWith("http"));

  const eventNode = site.event.startISO
    ? {
        "@type": "Event",
        "@id": `${SITE_URL}/#event`,
        name: SITE_NAME,
        description: `${site.hero.tagline} - ${site.hero.oneLiner}`,
        startDate: site.event.startISO,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
        ...(site.venue.mapQuery
          ? {
              location: {
                "@type": "Place",
                name: site.venue.name,
                address: {
                  "@type": "PostalAddress",
                  addressLocality: site.venue.city,
                  addressCountry: "LK",
                },
              },
            }
          : {}),
        organizer: { "@id": `${SITE_URL}/#organization` },
        isAccessibleForFree: true,
        offers: {
          "@type": "Offer",
          url: `${SITE_URL}${site.hero.ctaHref}`,
          price: "0",
          priceCurrency: "LKR",
          availability: "https://schema.org/InStock",
        },
        image: [`${SITE_URL}/opengraph-image`],
      }
    : null;

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
        description: `${site.hero.tagline} - ${site.hero.oneLiner}`,
        inLanguage: "en",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      ...(eventNode ? [eventNode] : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
