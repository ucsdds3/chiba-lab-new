import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { scrollToSection } from "../utils/scrollToSection";

interface NavLink {
  label: string;
  to: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Science", to: "/science" },
  { label: "People", to: "/team" },
  { label: "News", to: "/news" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header
      data-site-header
      className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/95 backdrop-blur"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <nav className="flex w-full items-center justify-between gap-3 py-2.5 md:py-3">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-2.5 sm:gap-3"
            aria-label="Go to home"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                scrollToSection("#home-hero");
              }
            }}
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-[10px] font-bold text-white sm:h-9 sm:w-9 sm:text-xs">
              CL
            </div>
            <div className="min-w-0 flex flex-col">
              <span className="truncate text-sm font-semibold leading-tight sm:text-base md:text-lg">
                Chiba Lab
              </span>
              <span className="hidden text-[11px] leading-tight text-slate-500 sm:block sm:text-xs md:text-sm">
                Learning, Memory, and Attention
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition hover:text-slate-900 ${
                  location.pathname === link.to
                    ? "text-slate-900 underline decoration-slate-400 underline-offset-4"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:achiba@ucsd.edu"
              className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-800"
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
            >
              {isOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-4 py-2 sm:px-6 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 text-sm font-medium text-slate-700">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-md px-2 py-2 transition hover:bg-slate-100 ${
                  location.pathname === link.to ? "bg-slate-100 font-semibold" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="mailto:achiba@ucsd.edu"
              className="mt-2 rounded-full bg-slate-900 px-3 py-2 text-center text-xs font-semibold text-white transition hover:bg-slate-800"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
