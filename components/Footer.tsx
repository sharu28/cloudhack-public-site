import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  const { footer, brand } = site;

  return (
    <footer className="relative border-t border-line-strong bg-paper-dim px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="text-3xl font-extralight tracking-[-0.02em] text-ink">
            {brand.wordmark}
            <span className="text-stamp"> {brand.year}</span>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {footer.partners.map((p) => (
              <div key={p.name}>
                <div className="text-sm font-light text-ink">
                  {p.name}
                  <span className="ml-2 text-xs font-medium text-ink-2">{p.role}</span>
                </div>
                <ul className="mt-3 space-y-1.5 font-mono text-sm text-ink-2">
                  <li>
                    <a
                      href={p.websiteHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-stamp"
                    >
                      {p.website}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${p.email}`} className="transition-colors hover:text-stamp">
                      {p.email}
                    </a>
                  </li>
                  {p.phone && (
                    <li>
                      <a
                        href={`tel:${p.phone.replace(/\s/g, "")}`}
                        className="transition-colors hover:text-stamp"
                      >
                        {p.phone}
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Closing tagline */}
        <p className="mt-14 max-w-2xl text-sm leading-relaxed text-ink-2">{footer.tagline}</p>

        <div className="mt-8 flex flex-col gap-4 border-t border-line-strong pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-mono text-xs text-ink-2">
            © {brand.year} {footer.copyright}
          </div>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <li>
              <Link
                href="/partners"
                className="text-xs font-light uppercase tracking-[0.14em] text-ink-2 transition-colors hover:text-stamp"
              >
                Partners
              </Link>
            </li>
            {footer.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-light uppercase tracking-[0.14em] text-ink-2 transition-colors hover:text-stamp"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
