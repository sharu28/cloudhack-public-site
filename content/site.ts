/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EDIT ALL SITE COPY HERE
 * ─────────────────────────────────────────────────────────────────────────────
 *  This is the single source of truth for editable text, dates, contacts and
 *  links across the whole site. Tweak the date, catchphrase, contacts, etc.
 *  without hunting through components.
 */

export const site = {
  // ── Brand ────────────────────────────────────────────────────────────────
  brand: {
    wordmark: "CLOUDHACK",
    year: "2026",
    eyebrow: "CONVOY TECH  &  ETHER LABS present",
  },

  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    // ✏️ Editable catchphrase — swap this line whenever you like.
    catchphrase: "Insert cool catchphrase for Hackathon",
    // Tagline parts. "Hack" is rendered bold + italic in the component.
    taglineLead: "Build. Break Down. ",
    taglineEmphasis: "Hack.",
    ctaLabel: "Sign Up",
    ctaHref: "/signup",
    partnerLabel: "Join as a Partner",
    partnerHref: "/signup#sponsor",
  },

  // ── What is Cloudhack ──────────────────────────────────────────────────────
  about: {
    heading: "What is Cloudhack",
    body:
      "A one-day hackathon where 80 of Sri Lanka's strongest university students and " +
      "early-career AI builders compete to solve real business problems set by sponsors.",
    stats: [
      { value: "1", label: "Day" },
      { value: "~20", label: "Teams" },
      { value: "80", label: "Builders" },
    ],
  },

  // ── How the day works ──────────────────────────────────────────────────────
  howItWorks: {
    heading: "How the day works",
    steps: [
      {
        time: "Morning",
        title: "Sponsors set the challenge",
        body:
          "Each sponsor presents a real problem from their business to the room.",
      },
      {
        time: "Through the day",
        title: "Teams build",
        body:
          "Teams of 3–4 pick a problem and build a working AI-powered prototype that solves it.",
      },
      {
        time: "Evening",
        title: "Demos & judging",
        body:
          "Every team demos to a judging panel including the sponsors, and winners are chosen for each problem.",
      },
    ],
  },

  // ── Event details ──────────────────────────────────────────────────────────
  details: {
    heading: "Event details",
    items: [
      {
        icon: "calendar",
        label: "When",
        // ✏️ Update the date here once it's finalised.
        value: "Late July 2026",
        note: "Exact date being finalised",
      },
      {
        icon: "pin",
        label: "Where",
        value: "SLIIT Colombo",
        note: "New Kandy Rd, Malabe",
      },
      {
        icon: "users",
        label: "Who",
        value: "80 participants",
        note: "Moratuwa · UCSC · IIT · SLIIT · NSBM",
      },
    ],
  },

  // ── Hosts ──────────────────────────────────────────────────────────────────
  hosts: {
    heading: "Hosts",
    items: [
      {
        name: "Convoy Tech",
        role: "Tech Partner",
        blurb: "Infrastructure & platform.",
        href: "https://convoy-tech.com",
      },
      {
        name: "Ether Labs",
        role: "AI Partner",
        blurb: "AI tooling, mentorship & judging.",
        href: "https://etherlabs.lk",
      },
    ],
  },

  // ── Sponsors ────────────────────────────────────────────────────────────────
  sponsors: {
    heading: "Why sponsor Cloudhack",
    body:
      "Put a real problem in front of 80 of the country's sharpest AI builders and " +
      "walk away with working prototypes, talent on your radar, and your brand front of mind.",
    tiers: [
      {
        name: "Title",
        blurb: "Headline billing across the event, keynote slot, and first pick of talent.",
      },
      {
        name: "Track Partner",
        blurb: "Own a problem track, set the brief, and judge the teams solving it.",
      },
      {
        name: "Community",
        blurb: "Back the ecosystem with mentorship, prizes, or in-kind support.",
      },
    ],
    ctaLabel: "Become a sponsor",
    ctaHref: "/signup#sponsor",
  },

  // ── Contact ──────────────────────────────────────────────────────────────────
  contact: {
    title: "Contact Us",
    description:
      "Questions, partnership ideas, or just want to say hello? Send us a " +
      "message and the Cloudhack team will get back to you.",
    phone: "+94 74 221 6040",
    email: "sharu@etherlabs.lk",
    web: { label: "etherlabs.lk", url: "https://etherlabs.lk" },
  },

  // ── Footer / contacts ────────────────────────────────────────────────────────
  footer: {
    partners: [
      {
        name: "Ether Labs",
        role: "AI Partner",
        website: "etherlabs.lk",
        websiteHref: "https://etherlabs.lk",
        email: "sharu@etherlabs.lk",
        phone: "+94 74 221 6040",
      },
      {
        name: "Convoy Tech",
        role: "Tech Partner",
        website: "convoy-tech.com",
        websiteHref: "https://convoy-tech.com",
        email: "info@convoy-tech.com",
        phone: "",
      },
    ],
    copyright: "Cloudhack 2026 · Co-hosted by Convoy Tech & Ether Labs",
  },

  // ── Signup page ────────────────────────────────────────────────────────────
  signup: {
    title: "Register a team for Cloudhack 2026",
    subtitle:
      "Teams of 3–4 builders. Fill in your captain's details below and we'll be in touch with next steps.",
    universities: ["Moratuwa", "UCSC", "IIT", "SLIIT", "NSBM", "Other"],
    roles: ["Developer", "AI Builder", "Designer", "Other"],
    sponsorEnquiries: {
      heading: "Sponsor enquiries",
      name: "Sharukesh Seker",
      role: "Founder",
      email: "sharu@etherlabs.lk",
      phone: "+94 74 221 6040",
    },
  },
} as const;

export type Site = typeof site;
