/** Extended copy shown in the graduate profile modal (placeholder until real bios exist). */
export interface TeamMemberModalContent {
  /** e.g. dissertation topic line */
  headline?: string;
  bio: string;
  interests?: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  /** Display tags on the card; `"Graduate"` enables the detail modal. */
  tags?: string[];
  /** Required for members tagged `Graduate` — opens the profile modal. */
  detail?: TeamMemberModalContent;
}

export const teamMembers: TeamMember[] = [
  {
    id: "andrea-chiba",
    name: "Andrea Chiba",
    role: "Principal Investigator",
  },
  {
    id: "alex-kim",
    name: "Alex Kim",
    role: "PhD Candidate",
    tags: ["Graduate"],
    detail: {
      headline: "Neural dynamics of context-dependent memory updating",
      bio: "Placeholder: Alex studies how hippocampal–cortical interactions support flexible memory retrieval when task demands change. Previously completed an MSc in computational neuroscience (placeholder institution).",
      interests: [
        "Hippocampal replay",
        "Task switching",
        "Recurrent network models",
      ],
    },
  },
  {
    id: "jordan-patel",
    name: "Jordan Patel",
    role: "PhD Candidate",
    tags: ["Graduate"],
    detail: {
      headline: "Attention and uncertainty in sequential decision-making",
      bio: "Placeholder: Jordan combines human behavior with pupillometry and modeling to probe how attention reallocates under volatile reward environments.",
      interests: [
        "Sequential sampling models",
        "Pupillometry",
        "Reinforcement learning",
      ],
    },
  },
  {
    id: "sam-rivera",
    name: "Sam Rivera",
    role: "PhD Student",
    tags: ["Graduate"],
    detail: {
      headline: "Affect-biased learning in cortico-limbic circuits",
      bio: "Placeholder: Sam uses calcium imaging and closed-loop perturbations in rodents to test how amygdala signals bias cortical plasticity during reinforcement learning.",
      interests: [
        "Two-photon imaging",
        "Amygdala–cortex coupling",
        "Plasticity",
      ],
    },
  },
  { id: "postdoc-1", name: "Placeholder", role: "Postdoctoral Researcher" },
  { id: "ra-1", name: "Placeholder", role: "Research Assistant" },
  { id: "ra-2", name: "Placeholder", role: "Research Assistant" },
  { id: "ra-3", name: "Placeholder", role: "Research Assistant" },
];

export function isGraduateMember(
  member: TeamMember
): member is TeamMember & { detail: TeamMemberModalContent } {
  return Boolean(member.tags?.includes("Graduate") && member.detail);
}
