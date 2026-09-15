/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  EDIT ALL SITE COPY HERE
 * ─────────────────────────────────────────────────────────────────────────────
 *  This is the single source of truth for editable text, dates, contacts and
 *  links across the whole site. Tweak the date, tagline, contacts, etc. without
 *  hunting through components. Reflects the CloudHack 2026 content brief.
 */

export const site = {
  // ── Brand ────────────────────────────────────────────────────────────────
  brand: {
    wordmark: "CLOUDHACK",
    year: "2026",
    eyebrow: "ETHER LABS  &  GLENR present",
  },

  // Event timing. Single source of truth for the countdown timer and sticky CTA.
  event: {
    startISO: null as string | null,
    countdownLabel: "Kickoff in",
  },

  announcement: {
    label: "Schedule update",
    title: "CloudHack has been postponed",
    body:
      "Due to a scheduling conflict with one of our lead sponsors, we're not able to hold CloudHack this week, so the hackathon has been postponed to the second week of October. The exact date will be announced soon.",
  },

  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    // ✏️ The headline tagline for the event.
    tagline: "Where Cloud Meets Creation",
    // Short, punchy one-liner under the tagline.
    oneLiner:
      "80 of Sri Lanka's best young builders. One real problem. Three days to build and prove it.",
    ctaLabel: "Sign Up",
    ctaHref: "/signup",
    partnerLabel: "Join as a Partner",
    partnerHref: "/partners",
    // Quick stats surfaced just below the CTA.
    stats: [
      { value: "80", label: "Participants" },
      { value: "~20", label: "Teams" },
      { value: "3", label: "Days" },
    ],
  },

  // ── About CloudHack ────────────────────────────────────────────────────────
  about: {
    heading: "About CloudHack",
    body:
      "CloudHack is a three-day hackathon where 80 of Sri Lanka's strongest " +
      "university students and early-career builders compete to solve a real " +
      "business problem shaped with our sponsors. Born from a simple belief - " +
      "Sri Lanka has exceptional tech talent that deserves a stage - CloudHack " +
      "isn't just a hackathon. It's the beginning of a movement. A community " +
      "where students and professionals collaborate, grow, and put Sri Lanka's " +
      "tech scene on the map.",
    // Short pull-quote for the visual side of the section.
    pullQuote: "Not just a hackathon. The beginning of a movement.",
  },

  // ── Themes / Tracks ────────────────────────────────────────────────────────
  //  These map to sponsor problem tracks - each Track Partner owns one. Kept
  //  generic (no sponsor names) until sponsors are confirmed.
  tracks: {
    heading: "The themes",
    intro:
      "The challenge will be grounded in Automation, Sustainability, and AI Enablement. " +
      "The exact problem statement will be revealed two days before the in-person final.",
    items: [
      {
        name: "Automation",
        blurb:
          "Build tools that eliminate repetitive tasks and drive efficiency.",
      },
      {
        name: "Sustainability",
        blurb:
          "Build solutions that cut waste, save resources, or support a greener Sri Lanka.",
      },
      {
        name: "AI Enablement",
        blurb:
          "Bring AI into real workflows - practical tools that make businesses smarter and faster.",
      },
    ],
  },

  // ── The Challenge ────────────────────────────────────────────────────────────
  challenge: {
    heading: "The Challenge",
    intro:
      "The exact problem statement will be revealed two days before the in-person final. Teams will then have two consecutive days to build remotely together.",
    status: "Coming soon",
    note: "The themes are public; the final brief stays under wraps until the remote build begins.",
  },

  // ── Prizes ───────────────────────────────────────────────────────────────────
  prizes: {
    heading: "Prizes",
    intro:
      "There's more than bragging rights on the line - the top three teams take home cash prizes.",
    note: "Prize pool confirmed for the top three places.",
    items: [
      { place: "1st", amount: "LKR 100,000" },
      { place: "2nd", amount: "LKR 60,000" },
      { place: "3rd", amount: "LKR 40,000" },
    ],
  },

  // ── Event details ──────────────────────────────────────────────────────────
  details: {
    heading: "Event details",
    notice: "Postponed to the second week of October. Exact dates will be announced soon.",
    essentials: [
      {
        icon: "calendar",
        label: "When",
        value: "Second week of October 2026",
        note: "Exact dates · announcing soon",
      },
      {
        icon: "pin",
        label: "Venue",
        value: "ESOFT University Colombo, Block B",
        note: "Colombo",
      },
      {
        icon: "clock",
        label: "Duration",
        value: "Three days",
        note: "Two remote build days · one in-person final",
      },
    ],
    groups: [
      {
        title: "Who should apply",
        items: [
          {
            label: "Eligibility",
            value: "Students & early-career builders",
            note: "Open to builders in Sri Lanka across technical and product roles.",
          },
          {
            label: "Teams",
            value: "Solo, partial, or full",
            note: "Final event teams will be 3–4 members.",
          },
          {
            label: "Capacity",
            value: "80 curated builders",
            note: "Selected from university and early-career applicants.",
          },
        ],
      },
      {
        title: "Build setup",
        ctaLabel: "How Glenr works",
        ctaHref: "/glenr",
        items: [
          {
            label: "Inference",
            value: "Shared inference endpoint",
            note: "Includes models hosted directly by Glenr.",
          },
          {
            label: "Tokens",
            value: "Unlimited for teams",
            note: "No personal API tokens needed.",
          },
        ],
      },
    ],
  },

  // ── Venue ────────────────────────────────────────────────────────────────
  //  ✏️ `mapQuery` drives the Open in Maps link - refine it (or swap in a
  //  full address) once the exact building/hall is confirmed.
  venue: {
    heading: "The venue",
    intro: "Teams come together at ESOFT University Colombo, Block B for the final day. The exact October date will be announced soon.",
    name: "ESOFT University Colombo, Block B",
    city: "Colombo",
    mapQuery: "ESOFT University Colombo, Block B",
    notes: [
      {
        title: "Final-day arrival",
        body: "Check-in time and arrival instructions will be shared once the new date is confirmed.",
      },
      {
        title: "What to bring",
        body: "Laptop, charger, and whatever you build best with. Reliable WiFi and laptop power are required in the venue selection.",
      },
      {
        title: "Getting there",
        body: "Exact hall, entrance, parking, and arrival instructions will be emailed to confirmed participants.",
      },
    ],
  },

  cloudPlatform: {
    heading: "Cloud platform",
    intro:
      "Every final app runs on Glenr, our Cloud Platform Partner, giving judges a live, shared platform for review.",
    ctaLabel: "What is Glenr?",
    ctaHref: "/glenr",
    externalLabel: "Visit Glenr",
    externalHref: "https://glenr.io",
    items: [
      {
        title: "Submit a live demo link",
        body: "Teams include a working Glenr URL with their repo and short presentation or demo video.",
      },
      {
        title: "In-person workshop",
        body: "A hands-on session will walk teams through the platform, deployment flow, environment variables, and demo setup. The workshop date will be announced soon.",
      },
    ],
  },

  // Participant-facing format for the three-day hackathon.
  schedule: {
    heading: "How the three days work",
    intro:
      "The problem statement is revealed before two consecutive remote build days. Teams then meet mentors and judges in person on the final day.",
    note: "Exact dates and final-day timings will be announced soon.",
    items: [
      {
        phase: "DAY 1",
        title: "Problem reveal & remote build",
        blurb: "The exact problem statement is revealed and teams begin building remotely together.",
      },
      {
        phase: "DAY 2",
        title: "Remote build continues",
        blurb: "Teams work remotely for a second consecutive day to develop and test their prototypes.",
      },
      {
        phase: "DAY 3",
        title: "In-person final",
        blurb: "Teams come to the venue to talk with mentors, review their approach, showcase prototypes, make final changes, and deliver their demos and pitches.",
      },
    ],
  },

  // Judges/mentors panel isn't confirmed yet - rendered as a one-line
  // footnote under Hosts (see components/sections/Hosts.tsx) rather than a
  // standalone section of placeholder cards.
  judges: {
    heading: "Judges & mentors",
    intro:
      "Industry engineers and founders who shape the challenge, mentor teams on the final day, and judge the demos and pitches.",
    pending: "The full panel is being confirmed. Announcing soon.",
  },

  // Keynote speakers aren't confirmed yet - same honest-pending pattern as
  // Judges above. Shape is ready (name/role/org/bio/photo) for whenever real
  // speakers are locked in; renders as a single pending line until then,
  // never as empty cards (see DESIGN.md: no placeholder theater).
  speakers: {
    heading: "Keynote speakers",
    intro: "Short keynotes will open and close the in-person final.",
    pending: "Speaker names and bios are being confirmed. Announcing soon.",
    items: [] as Array<{
      name: string;
      role: string;
      org: string;
      bio: string;
      photo: string;
    }>,
  },

  // ── Judging & rules ─────────────────────────────────────────────────────────
  //  ✏️ The detailed scoring criteria aren't locked yet, so only the ground
  //  rules are public. Once the judging sheet is final, add the criteria here
  //  and surface them in components/sections/Rules.tsx.
  rules: {
    heading: "Judging & rules",
    intro:
      "Every team demos to the full judging panel and is scored on the same sheet. Detailed criteria will be shared before the final presentations - here are the ground rules to plan around.",
    criteriaNote: "Full judging criteria will be shared before demos and pitches on the final day.",
    rulesHeading: "Ground rules",
    items: [
      "Teams are 3–4 people. Every member must be registered.",
      "All project code must be written during the three-day hackathon window. Open-source libraries, frameworks and AI tools (including the hackathon inference endpoint) are fair game.",
      "Each team builds against the revealed problem statement, grounded in Automation, Sustainability, and AI Enablement.",
      "Final submissions must be demoable apps that are deployed on Glenr.",
      "Final submissions must include a working demo, a GitHub/repo link, and a short demo video. Submission links close before final demos.",
      "Judges' decisions are final.",
    ],
  },

  // ── Community ───────────────────────────────────────────────────────────────
  //  ✏️ Drop the real WhatsApp invite URL into `href` - the button renders as
  //  "link coming soon" until it starts with http.
  community: {
    heading: "Join the community",
    body: "The CloudHack WhatsApp community is where schedule announcements drop first - and where solo builders can find teammates before the event.",
    ctaLabel: "Join the WhatsApp community",
    pendingLabel: "WhatsApp community link coming soon",
    href: "https://chat.whatsapp.com/KND60dRYwZz8GE3YU9NH9U",
  },

  // ── Who's behind CloudHack ──────────────────────────────────────────────────
  hosts: {
    heading: "Who's behind CloudHack",
    items: [
      {
        name: "Ether Labs",
        role: "AI Partner",
        blurb:
          "A Colombo-based AI automation company building AI agents and custom " +
          "workflow automation for startups and growing businesses. Brings the AI " +
          "tooling, mentorship and judging to the event.",
        email: "sharu@etherlabs.lk",
        website: "etherlabs.lk",
        href: "https://etherlabs.lk",
      },
      {
        name: "Glenr",
        role: "Tech Partner",
        blurb:
          "The technology and infrastructure partner behind the event. Glenr " +
          "will set up the cluster and a shared inference endpoint - " +
          "spanning several models, including some hosted directly by Glenr - " +
          "that teams use to build and run their solutions throughout the hackathon.",
        email: "krishakary2j@gmail.com",
        website: "glenr.io",
        href: "https://glenr.io",
      },
    ],
  },

  // ── Why participate ─────────────────────────────────────────────────────────
  whyParticipate: {
    heading: "Why participate",
    items: [
      {
        title: "Solve a real problem",
        body: "Build against an actual business challenge shaped with our sponsors - not a made-up brief.",
      },
      {
        title: "Showcase your talent",
        body: "Get your skills in front of sponsor companies through a real, working project - not an interview.",
      },
      {
        title: "Connect & collaborate",
        body: "Meet Sri Lanka's sharpest young builders in one room.",
      },
      {
        title: "Be part of the movement",
        body: "Help shape the future of Sri Lanka's tech community.",
      },
    ],
  },

  // ── Partners teaser (homepage) ──────────────────────────────────────────────
  //  A compact, honest pointer to /partners - the homepage no longer carries
  //  the full sponsorship pricing table inside the participant funnel.
  partnersTeaser: {
    eyebrow: "Partnerships",
    heading: "The exclusive title partnership is open.",
    body: "One title slot, sponsor tracks, judging seats and recruiting access are open - full tiers and contribution levels live on the partnership page.",
    ctaLabel: "View partnership tiers",
    ctaHref: "/partners",
  },

  // ── For sponsors ────────────────────────────────────────────────────────────
  forSponsors: {
    heading: "For sponsors",
    body:
      "You set a real problem from your business. You walk away with working " +
      "solutions - and the people who built them.",
    // Comparison rows; each tier carries a value for every row key. Booleans
    // render as ✓ / -; strings render as text.
    rows: [
      { key: "slots", label: "Slots" },
      { key: "contribution", label: "Contribution (LKR)" },
      { key: "ownTrack", label: "Own a problem track" },
      { key: "judging", label: "Judging panel seat" },
      { key: "cvAccess", label: "CV access" },
      { key: "recruiting", label: "Recruiting table" },
    ],
    tiers: [
      {
        name: "Title",
        highlight: true,
        values: {
          slots: "1 (exclusive)",
          contribution: "500,000",
          ownTrack: true,
          judging: true,
          cvAccess: "All",
          recruiting: true,
        },
      },
      {
        name: "Track Partner",
        highlight: false,
        values: {
          slots: "Up to 5",
          contribution: "150,000",
          ownTrack: true,
          judging: true,
          cvAccess: true,
          recruiting: true,
        },
      },
      {
        name: "Community",
        highlight: false,
        values: {
          slots: "Open",
          contribution: "50,000",
          ownTrack: false,
          judging: false,
          cvAccess: false,
          recruiting: false,
        },
      },
    ],
    footnote:
      "In-kind support (cloud credits, prizes, venue, food) counts toward a tier.",
    ctaLabel: "Interested in sponsoring? Get in touch",
    ctaHref: "mailto:sharu@etherlabs.lk",
  },

  // ── Sponsors (confirmed partners) ───────────────────────────────────────────
  //  ✏️ Only real, confirmed partners belong in `logos` - silence over
  //  placeholder theater (see /partners, which shows this list honestly
  //  instead of a marquee padded out with synthetic "coming soon" names).
  sponsors: {
    heading: "Sponsors",
    intro: "Made possible by our incredible partners.",
    pending: "The exclusive title partnership and supporting partner slots are open.",
    logos: [] as Array<{
      name: string;
      tier: string;
      logo: string;
      blurb: string;
      confirmed: boolean;
    }>,
  },

  // ── FAQ ──────────────────────────────────────────────────────────────────────
  faq: {
    heading: "FAQ",
    items: [
      {
        q: "Who can participate?",
        a:
          "CloudHack is open to university students and early-career builders in Sri Lanka. " +
          "Teams can include developers, AI builders, designers, product thinkers, or anyone " +
          "who can help ship a working prototype across the three-day format.",
      },
      {
        q: "How do I register?",
        a:
          "Hit any “Sign Up” button on this page to open the registration " +
          "form. Tell us about you and your team, and we'll be in touch with next steps.",
      },
      {
        q: "Can I register solo or with a partial team?",
        a:
          "You can register solo, with a partial team, or as a full team. Full event " +
          "teams will be 3–4 members; solo and partial applicants can use the WhatsApp " +
          "community to find teammates before selection.",
      },
      {
        q: "Do I need to register every team member now?",
        a:
          "For now, only the captain needs to register. We'll collect full member " +
          "details from shortlisted teams.",
      },
      {
        q: "What should I bring on the final day?",
        a:
          "Your laptop, charger, and whatever you build best with. You do not need " +
          "to bring your own AI API tokens.",
      },
      {
        q: "Is there a registration fee?",
        a: "No. CloudHack is free to participate in for selected builders.",
      },
      {
        q: "What do I need to build?",
        a:
          "The exact problem statement will be revealed two days before the in-person final. " +
          "Use the two remote build days to create a working prototype, then refine and present it " +
          "at the venue. Final submissions must include a working demo, a GitHub/repo link, and a " +
          "short presentation or demo video.",
      },
      {
        q: "What is Glenr?",
        a:
          "Glenr is CloudHack's Cloud Platform Partner. Teams will use it " +
          "to deploy final apps for demos and judging, with an in-person platform " +
          "workshop ahead of the hackathon. The workshop date will be announced soon.",
        href: "/glenr",
        linkLabel: "Learn about Glenr",
      },
      {
        q: "Do teams need their own AI API tokens?",
        a:
          "No. We will provide teams with access to a shared inference " +
          "endpoint spanning multiple models, including some hosted directly " +
          "on Glenr, with unlimited tokens for teams during the event. Glenr " +
          "sets up the cluster so teams can build without using their own tokens.",
      },
      {
        q: "When and where exactly is the event?",
        a:
          "CloudHack 2026 has been postponed to the second week of October 2026. " +
          "The exact dates will be announced soon, with the final day at ESOFT University Colombo, Block B.",
      },
    ],
  },

  // ── Contact ──────────────────────────────────────────────────────────────────
  contact: {
    title: "Contact Us",
    description:
      "Questions, partnership ideas, or just want to say hello? Send us a " +
      "message and the CloudHack team will get back to you.",
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
        name: "Glenr",
        role: "Tech Partner",
        website: "glenr.io",
        websiteHref: "https://glenr.io",
        email: "krishakary2j@gmail.com",
        phone: "",
      },
    ],
    // ✏️ Add real social URLs once confirmed.
    socials: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
    tagline:
      "CloudHack 2026 - Co-hosted by Ether Labs & Glenr. Building Sri Lanka's " +
      "Tech Future, One Hack at a Time.",
    copyright: "CloudHack 2026 · Co-hosted by Ether Labs & Glenr",
  },

  // ── Signup page ──────────────────────────────────────────────────────────────
  signup: {
    title: "Register a team for CloudHack 2026",
    subtitle:
      "You can register solo, with a partial team, or as a full team. Full event teams will be 3–4 members; only the captain needs to submit this form for now.",
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

  glenrPage: {
    title: "What is Glenr?",
    subtitle:
      "Glenr is CloudHack's Cloud Platform Partner. Every team will deploy its final app on the platform so demos are live, reviewable, and consistent for judges.",
    externalLabel: "Visit Glenr",
    externalHref: "https://glenr.io",
    workshop:
      "The in-person Glenr workshop will take place ahead of CloudHack. The date, time, and location will be announced soon through email and WhatsApp.",
    steps: [
      {
        label: "Workshop",
        title: "Learn the platform",
        body: "Selected teams attend the in-person Glenr workshop and get comfortable with the deployment workflow ahead of the hackathon. The workshop date will be announced soon.",
      },
      {
        label: "Build",
        title: "Ship locally first",
        body: "Teams build their prototype remotely over two consecutive days using their preferred framework, repo, and local development setup.",
      },
      {
        label: "Deploy",
        title: "Publish on Glenr",
        body: "Teams deploy the app, test the live URL, and keep it ready for judges when submissions close.",
      },
      {
        label: "Submit",
        title: "Share the demo package",
        body: "Final submissions include the Glenr URL, GitHub/repo link, and a short presentation or demo video.",
      },
    ],
    sections: [
      {
        title: "Why CloudHack uses it",
        body: "Hackathon demos are easier to judge when they are deployed in one reliable place. Glenr gives teams a shared deployment path, gives judges live URLs to test, and helps avoid laptop-only demos or last-minute hosting issues.",
      },
      {
        title: "How it works for teams",
        body: "Teams build remotely over the first two days, then publish their frontend, backend, or full-stack app to Glenr for the in-person final. The final package should include the deployed URL, a GitHub/repo link, and a short presentation or demo video.",
      },
      {
        title: "What the workshop covers",
        body: "The workshop will cover account setup, project deployment, environment variables, repo structure, live URLs, troubleshooting, and what judges expect to see in a final deployed demo.",
      },
      {
        title: "What to prepare",
        body: "Bring a laptop, make sure your GitHub account is ready, and be comfortable running a basic web app locally. Keep secrets out of your repo and be ready to document any environment variables your project needs.",
      },
    ],
    faq: [
      {
        q: "Do I need Glenr experience to apply?",
        a: "No. The workshop is designed to get selected teams comfortable with the platform ahead of the hackathon.",
      },
      {
        q: "Can we use another hosting provider?",
        a: "For final CloudHack judging, apps need to be deployed on Glenr. You can still use familiar tools while building locally.",
      },
      {
        q: "What if my app needs a backend or database?",
        a: "Bring your expected stack and environment-variable needs to the workshop. The Glenr team will explain the supported deployment path and help teams plan a demo-safe setup.",
      },
    ],
  },
} as const;

export type Site = typeof site;
