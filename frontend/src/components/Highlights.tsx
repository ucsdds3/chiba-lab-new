import Section from "./Section";

interface HighlightCardProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const HIGHLIGHTS: HighlightCardProps[] = [
  {
    title: "Brainstorming a Developmental Map of AI",
    description:
      "UNESCO & The Global Science of Learning Network (GSoLEN) presented workshops connecting scientists, educators, policymakers, and EdTech leaders to share breakthroughs and practical solutions.",
    linkText: "Learn more",
    linkHref: "#",
  },
  {
    title: "Time and Timing are Integral for Learning",
    description:
      "Timing in the brain can determine what we hear, see, and remember. You can imagine how important that is for education.",
    linkText: "Explore the Temporal Dynamics of Learning Center",
    linkHref: "#",
  },
];

export default function Highlights() {
  return (
    <Section id="highlights" className="bg-slate-50">
      <div className="grid gap-6 md:grid-cols-2">
        {HIGHLIGHTS.map((card) => (
          <article
            key={card.title}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
          >
            {/* Image placeholder */}
            <div className="mb-6 aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
              <div className="flex h-full w-full items-center justify-center text-sm text-slate-500">
                Image placeholder
              </div>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
              &ldquo;{card.title}&rdquo;
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
              {card.description}
            </p>
            <a
              href={card.linkHref}
              className="mt-4 inline-flex text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-900"
            >
              {card.linkText} &rarr;
            </a>
          </article>
        ))}
      </div>
    </Section>
  );
}
