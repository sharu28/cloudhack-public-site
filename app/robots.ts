import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Serves /robots.txt. Everything is crawlable — the /api/* routes are POST-only
// and harmless if fetched — so we allow all and point crawlers at the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
