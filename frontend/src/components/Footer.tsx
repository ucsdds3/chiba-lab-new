import { Link } from "react-router-dom";
import Section from "./Section";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="scroll-mt-22 bg-slate-900 text-slate-100 sm:scroll-mt-28 md:scroll-mt-32"
    >
      <Section className="py-10 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <h2 className="text-2xl font-semibold">Chiba Lab</h2>
            <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
              Understanding the brain and body to solve societal challenges.
            </p>
            <a
              href="mailto:achiba@ucsd.edu"
              className="mt-4 inline-block text-sm text-slate-300 transition hover:text-white"
            >
              achiba@ucsd.edu
            </a>
          </div>

          <nav
            className="grid gap-2 text-sm text-slate-300"
            aria-label="Footer navigation"
          >
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <Link to="/science" className="transition hover:text-white">
              Science
            </Link>
            <Link to="/team" className="transition hover:text-white">
              People
            </Link>
            <Link to="/news" className="transition hover:text-white">
              News
            </Link>
            <a
              href="https://github.com/ucsdds3/chiba-lab-new"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>
          </nav>
        </div>
      </Section>
    </footer>
  );
}
