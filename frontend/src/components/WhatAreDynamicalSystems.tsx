import Section from "./Section";
import SectionHeading from "./SectionHeading";

export default function WhatAreDynamicalSystems() {
  return (
    <Section id="what-are-dynamical-systems" className="bg-slate-50">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div>
          <SectionHeading>What Are Dynamical Systems?</SectionHeading>
        </div>

        <div className="space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
          <p>
            Dynamical systems describe how processes evolve over time. In the
            brain, activity patterns shift across moments, contexts, and
            internal states rather than staying fixed.
          </p>
          <p>
            Our work focuses on this changing structure: how networks organize,
            adapt, and stabilize as organisms learn, remember, and respond to
            the world.
          </p>
        </div>
      </div>
    </Section>
  );
}
