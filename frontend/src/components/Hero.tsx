import Section from "./Section";
import { scrollToSection } from "../utils/scrollToSection";

export default function Hero() {
  return (
    <Section id="hero" className="bg-white pt-12 sm:pt-16 md:pt-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Chiba Lab
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
            Decoding learning, memory, and attention through neural dynamics
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
            We study the neural systems and principles behind learning, memory,
            affect, and attention, with an emphasis on neural plasticity.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#featured-projects"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#featured-projects");
              }}
            >
              Explore Projects
            </a>
            <a
              href="#news-events"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-500 hover:text-slate-900"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#news-events");
              }}
            >
              Read Latest Updates
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-sky-100 blur-2xl sm:h-36 sm:w-36" />
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-teal-100 blur-2xl sm:h-44 sm:w-44" />
          <article className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
            <div className="space-y-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Research Focus
                </p>
                <p className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">
                  Placeholder
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
                    Methods
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-800">
                    Behavioral modeling, imaging, and computational analysis
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
                    Mission
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-800">
                    Build principled models of cognition from circuit dynamics
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </Section>
  );
}
