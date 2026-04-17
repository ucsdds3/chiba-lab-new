import { Link } from "react-router-dom";
import Section from "./Section";

export default function HomeHero() {
  return (
    <Section
      id="home-hero"
      className="relative overflow-hidden bg-slate-900 text-white"
    >
      {/* Placeholder for hero background image */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-white/[0.03]" />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Understanding the Brain &amp; Body to Solve Societal Challenges.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          The Chiba Lab pursues an understanding of the neural systems and
          principles underlying aspects of learning, memory, affect, and
          attention, with an emphasis on neuromodulation.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to="/science"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Explore Our Science
          </Link>
          <Link
            to="/team"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60"
          >
            Meet the Team
          </Link>
        </div>
      </div>

      {/* Image placeholder: Replace with actual hero image from chiba-lab.org */}
      <div className="relative z-10 mx-auto mt-12 aspect-[16/7] w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-slate-800 sm:mt-16">
        <div className="flex h-full w-full items-center justify-center text-sm text-slate-500">
          Hero image placeholder
        </div>
      </div>
    </Section>
  );
}
