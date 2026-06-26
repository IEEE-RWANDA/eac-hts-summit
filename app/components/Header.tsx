"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS, SUMMIT } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-paper/92 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[64px] items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center bg-clay font-display text-lg font-semibold text-paper">
            H
          </span>
          <span className="label leading-none text-ink">
            EAC&middot;HTS <span className="text-clay">{SUMMIT.year}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="link-underline text-sm font-medium text-ink-soft hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={SUMMIT.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-clay sm:inline-block"
          >
            Register
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center text-ink md:hidden"
          >
            <div className="space-y-[5px]">
              <span
                className={`block h-0.5 w-6 bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span className={`block h-0.5 w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-0.5 w-6 bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-line bg-paper transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-transparent"
        }`}
      >
        <ul className="container-x flex flex-col py-3">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line-soft py-3 text-base font-medium text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href={SUMMIT.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block bg-ink px-5 py-3 text-center text-base font-semibold text-paper"
            >
              Register
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
