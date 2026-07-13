/**
 * Single source of truth for SEO/canonical identity.
 * The canonical domain is the live site (www.cloudhacksrilanka.com). Everything
 * else - metadataBase, robots, sitemap, manifest, JSON-LD - derives from here,
 * so there is exactly one place to change if the domain ever moves.
 */
export const SITE_URL = "https://www.cloudhacksrilanka.com";
export const SITE_NAME = "CloudHack 2026";
