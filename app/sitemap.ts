import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Serves /sitemap.xml. Update this list when new pages are added.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/signup`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/partners`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/glenr`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
