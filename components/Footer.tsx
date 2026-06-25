import { site } from "@/content/site";

export function Footer() {
  const { footer, brand } = site;

  return (
    <footer className="relative border-t border-[var(--color-line)] px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="wordmark text-3xl text-stark-white">
            {brand.wordmark}
            <span className="text-ignition-orange"> {brand.year}</span>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {footer.partners.map((p) => (
              <div key={p.name}>
                <div className="text-sm font-semibold text-[var(--color-text)]">
                  {p.name}
                  <span className="ml-2 text-xs font-medium text-[var(--color-text-2)]">
                    {p.role}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-[var(--color-text-2)]">
                  <li>
                    <a
                      href={p.websiteHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-ignition-orange"
                    >
                      {p.website}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${p.email}`}
                      className="transition hover:text-ignition-orange"
                    >
                      {p.email}
                    </a>
                  </li>
                  {p.phone && (
                    <li>
                      <a
                        href={`tel:${p.phone.replace(/\s/g, "")}`}
                        className="transition hover:text-ignition-orange"
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
        <p className="mt-14 max-w-2xl text-sm leading-relaxed text-[var(--color-text-2)]">
          {footer.tagline}
        </p>

        <div className="mt-8 flex flex-col gap-4 border-t border-[var(--color-line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-[var(--color-text-2)]">
            © {brand.year} {footer.copyright}
          </div>
          <ul className="flex items-center gap-4">
            {footer.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-tomorrow text-xs font-medium uppercase tracking-[0.14em] text-[var(--color-text-2)] transition hover:text-ignition-orange"
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
