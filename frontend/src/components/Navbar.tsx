import { useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#" },
  { label: "People", href: "#" },
  { label: "Publications", href: "#" },
  { label: "News", href: "#" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b bg-white ">
      <nav className="flex w-full items-center justify-between px-6 py-4 md:py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-xs font-bold text-white">
            CL
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold leading-tight md:text-lg">
              Chiba Lab
            </span>
            <span className="text-xs text-slate-500 md:text-sm">
              Computational biology & AI
            </span>
          </div>
        </div>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-slate-900"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#"
            className="rounded-full border border-slate-200 bg-slate-900 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-slate-800"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
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
      {isOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-2 text-sm font-medium text-slate-700">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-md px-2 py-2 hover:bg-slate-100"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#"
              className="mt-2 rounded-full border border-slate-200 bg-slate-900 px-3 py-2 text-center text-xs font-semibold text-white hover:bg-slate-800"
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
