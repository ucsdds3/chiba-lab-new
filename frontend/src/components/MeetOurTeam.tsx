import { useState } from "react";
import { isGraduateMember, teamMembers } from "../data/team";
import type { TeamMember } from "../data/team";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import TeamMemberModal from "./TeamMemberModal";

const cardClassName =
  "w-full max-w-xs rounded-2xl border border-slate-200 bg-white p-5 sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] flex flex-col items-center text-center";

export default function MeetOurTeam() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <Section id="meet-our-team" className="bg-slate-50">
      <SectionHeading align="center">Meet Our Team</SectionHeading>
      <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-8 text-slate-700 sm:text-lg">
        We are an interdisciplinary group combining neuroscience, computation,
        and quantitative methods.
      </p>
      <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600">
        Members tagged <span className="font-semibold">Graduate</span> open a
        short profile — placeholder text for now.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {teamMembers.map((member) => {
          const graduate = isGraduateMember(member);

          if (graduate) {
            return (
              <button
                key={member.id}
                type="button"
                className={`${cardClassName} cursor-pointer transition hover:border-slate-300 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2`}
                onClick={() => setSelectedMember(member)}
                aria-haspopup="dialog"
                aria-label={`Open profile for ${member.name}`}
              >
                <div className="mb-3 flex flex-wrap items-center justify-center gap-2">
                  {/* {member.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-900 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white"
                    >
                      {tag}
                    </span>
                  ))} */}
                </div>
                <div className="mb-4 h-20 w-20 shrink-0 rounded-full bg-slate-200" />
                <h3 className="text-lg font-semibold text-slate-900">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-slate-600">{member.role}</p>
                <span className="mt-3 text-xs font-medium text-slate-500 underline decoration-slate-300">
                  View profile
                </span>
              </button>
            );
          }

          return (
            <article key={member.id} className={`${cardClassName} justify-center`}>
              {member.tags && member.tags.length > 0 ? (
                <div className="mb-3 flex flex-wrap items-center justify-center gap-2">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-200 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
              <div className="mb-4 h-20 w-20 rounded-full bg-slate-200" />
              <h3 className="text-lg font-semibold text-slate-900">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-slate-600">{member.role}</p>
            </article>
          );
        })}
      </div>

      {selectedMember && isGraduateMember(selectedMember) ? (
        <TeamMemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      ) : null}
    </Section>
  );
}
