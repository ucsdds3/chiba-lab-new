import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function WhatTakesPlace() {
  return (
    <Section id="what-takes-place" className="bg-white">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Image placeholder: Replace with lab photo */}
        <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
          <div className="flex h-full w-full items-center justify-center text-sm text-slate-500">
            Lab photo placeholder
          </div>
        </div>

        <div>
          <SectionHeading>What Takes Place</SectionHeading>
          <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">
            In the Chiba Lab, we are pursuing an understanding of the neural
            systems and principles underlying aspects of learning, memory,
            affect, and attention, with an emphasis on neuromodulation.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-700 sm:text-lg">
            In this pursuit, the Lab takes a highly interdisciplinary variety of
            neurobiological, neurochemical, neurophysiology, computational,
            robotic, and behavioral techniques.
          </p>
        </div>
      </div>
    </Section>
  );
}
