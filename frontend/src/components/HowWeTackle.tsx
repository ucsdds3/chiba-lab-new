import Section from "./Section";
import SectionHeading from "./SectionHeading";

const APPROACH = [
  {
    step: "01",
    title: "Observe",
    detail:
      "Capture behavior and neural activity across learning and attention tasks."
  },
  {
    step: "02",
    title: "Model",
    detail:
      "Build computational models that explain trajectories, transitions, and adaptation."
  },
  {
    step: "03",
    title: "Test",
    detail:
      "Evaluate predictions and refine mechanisms through iterative experiments."
  }
];

export default function HowWeTackle() {
  return (
    <Section id="how-we-tackle" className="bg-slate-900 text-white">
      <SectionHeading className="text-white">Our Approach</SectionHeading>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {APPROACH.map((item) => (
          <article
            key={item.step}
            className="rounded-2xl border border-white/20 bg-white/5 p-6"
          >
            <p className="text-sm font-medium tracking-[0.16em] text-slate-300">
              {item.step}
            </p>
            <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-200 sm:text-base">
              {item.detail}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
