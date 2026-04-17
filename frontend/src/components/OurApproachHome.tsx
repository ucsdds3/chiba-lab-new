import { Link } from "react-router-dom";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function OurApproachHome() {
  return (
    <Section id="our-approach" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading align="center">Our Approach</SectionHeading>
        <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">
          Our team values multi-disciplinary collaboration and sharing science
          for the common good. We strive for a deeper understanding of the brain
          and body to solve societal challenges. We don&rsquo;t just seek
          answers, but better questions and approaches to thinking.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/science"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Explore the Science
          </Link>
          <a
            href="https://github.com/chiba-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500 hover:text-slate-900"
          >
            Visit our GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}
