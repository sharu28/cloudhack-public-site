import { site } from "@/content/site";

export function Footer() {
  const { footer, brand } = site;

  return (
    <footer className="relative border-t border-[var(--color-line)] bg-[var(--color-paper-2)] px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="wordmark text-3xl text-[var(--color-text)]">
            {brand.wordmark}
            <span className="bg-gradient-to-r from-teal to-violet bg-clip-text text-transparent">
              {" "}
              {brand.year}
            </span>
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
                      className="transition hover:text-[#0071e3]"
                    >
                      {p.website}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${p.email}`}
                      className="transition hover:text-[#0071e3]"
                    >
                      {p.email}
                    </a>
                  </li>
                  {p.phone && (
                    <li>
                      <a
                        href={`tel:${p.phone.replace(/\s/g, "")}`}
                        className="transition hover:text-[#0071e3]"
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

        <div className="mt-14 border-t border-[var(--color-line)] pt-6 text-xs text-[var(--color-text-2)]">
          © {brand.year} {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
