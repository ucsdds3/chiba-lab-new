import Section from "./Section";
import SectionHeading from "./SectionHeading";

const ITEMS = [
  {
    date: "April 2026",
    title: "Lab seminar on adaptive neural dynamics",
    type: "Event"
  },
  {
    date: "March 2026",
    title: "New preprint on memory-state transitions",
    type: "Publication"
  },
  {
    date: "February 2026",
    title: "Chiba Lab welcomes new graduate researchers",
    type: "News"
  }
];

export default function NewsEvents() {
  return (
    <Section id="news-events" className="bg-white">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading className="mb-0">News & Events</SectionHeading>
        <a
          href="#"
          className="text-sm font-semibold text-slate-700 underline-offset-4 transition hover:text-slate-900 hover:underline"
        >
          View all updates
        </a>
      </div>

      <div className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-slate-50">
        {ITEMS.map((item) => (
          <article key={item.title} className="p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              {item.type} · {item.date}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-slate-900 sm:text-xl">
              {item.title}
            </h3>
          </article>
        ))}
      </div>
    </Section>
  );
}
