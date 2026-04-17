import Section from "./Section";
import SectionHeading from "./SectionHeading";

const PILLARS = [
  {
    title: "Learning",
    description:
      "Understanding how neural representations reorganize with experience."
  },
  {
    title: "Memory",
    description:
      "Tracking how stable and flexible memory traces are formed and maintained."
  },
  {
    title: "Attention",
    description:
      "Studying how brain networks prioritize relevant signals over noise."
  }
];

export default function WhyImportant() {
  return (
    <Section id="why-important" className="bg-white">
      <SectionHeading align="center">Why It Is Important</SectionHeading>
      <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-8 text-slate-700 sm:text-lg">
        A dynamics-centered view links behavior and mechanism, helping us build
        interpretable models of cognition and adaptive neural function.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map((pillar) => (
          <article
            key={pillar.title}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
          >
            <h3 className="text-xl font-semibold text-slate-900">
              {pillar.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              {pillar.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
