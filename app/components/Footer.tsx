import { NAV_LINKS, SUMMIT } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-paper/15 bg-ink text-paper">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center bg-clay font-display text-lg font-semibold text-paper">
              H
            </span>
            <span className="label text-paper">
              EAC&middot;HTS <span className="text-ochre">{SUMMIT.year}</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/60">
            The {SUMMIT.organizer} {SUMMIT.name} — a regional flagship platform
            uniting humanitarian, development, engineering, academic, and
            innovation communities across East Africa.
          </p>
        </div>

        <nav>
          <h3 className="label text-ochre">Explore</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="link-underline text-paper/80 hover:text-paper">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="label text-ochre">Get involved</h3>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li>
              <a
                href={SUMMIT.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-paper/80 hover:text-paper"
              >
                Register to attend
              </a>
            </li>
            <li>
              <a href={`mailto:${SUMMIT.contactEmail}`} className="link-underline text-paper/80 hover:text-paper">
                Become a partner
              </a>
            </li>
            <li>
              <a href={`mailto:${SUMMIT.contactEmail}`} className="link-underline text-paper/80 hover:text-paper">
                Enter the Startup Challenge
              </a>
            </li>
            <li className="pt-2 font-mono text-xs text-paper/50">{SUMMIT.contactEmail}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <div className="container-x flex flex-col items-start justify-between gap-2 py-6 sm:flex-row sm:items-center">
          <p className="label text-paper/45">
            © {SUMMIT.year} {SUMMIT.organizer}
          </p>
          <p className="label text-paper/45">
            {SUMMIT.location} &middot; {SUMMIT.dates}
          </p>
        </div>
      </div>
    </footer>
  );
}
