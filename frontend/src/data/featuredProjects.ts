export interface FeaturedTheme {
  id: string;
  label: string;
  x?: number;
  y?: number;
}

export interface ProjectMember {
  name: string;
  image?: string;
  /** Matches a TeamMember.id — clicking the avatar navigates to that person on /team */
  memberId?: string;
}

export interface FeaturedProject {
  id: string;
  title: string;
  summary: string;
  themeIds: string[];
  members?: ProjectMember[];
}

export const themes: FeaturedTheme[] = [
  { id: "learning", label: "Learning" },
  { id: "memory", label: "Memory" },
  { id: "attention", label: "Attention" },
  { id: "affect", label: "Affect" },
  // { id: "plasticity", label: "Plasticity" },
  { id: "decision", label: "Decision Making" },
  { id: "systems", label: "Neural Systems" }
];

export const projects: FeaturedProject[] = [
  {
    id: "contextual-memory-switching",
    title: "Contextual Memory Switching in Neural Circuits",
    summary:
      "Examines how memory traces stabilize while remaining flexible under changing task contexts.",
    themeIds: ["memory", "plasticity", "learning"],
    members: [
      { name: "Alex Kim", memberId: "alex-kim" },
      { name: "Andrea Chiba", memberId: "andrea-chiba" }
    ]
  },
  {
    id: "attentional-state-transitions",
    title: "Attentional State Transitions in Dynamic Environments",
    summary:
      "Models rapid transitions between focused and exploratory attention during uncertain decision windows.",
    themeIds: ["attention", "decision", "learning"],
    members: [
      { name: "Jordan Patel", memberId: "jordan-patel" },
      { name: "Andrea Chiba", memberId: "andrea-chiba" },
      { name: "Postdoctoral Researcher", memberId: "postdoc-1" }
    ]
  },
  {
    id: "affect-driven-learning",
    title: "Affect-Driven Learning Dynamics",
    summary:
      "Studies how affective signals reshape learning rates and strategy updates over time.",
    themeIds: ["affect", "learning", "plasticity"],
    members: [
      { name: "Sam Rivera", memberId: "sam-rivera" },
      { name: "Andrea Chiba", memberId: "andrea-chiba" }
    ]
  },
  {
    id: "cross-scale-plasticity",
    title: "Cross-Scale Plasticity Mapping",
    summary:
      "Links cell-level adaptation signatures to system-level behavioral performance trajectories.",
    themeIds: ["plasticity", "systems", "memory"],
    members: [
      { name: "Sam Rivera", memberId: "sam-rivera" },
      { name: "Alex Kim", memberId: "alex-kim" },
      { name: "Postdoctoral Researcher", memberId: "postdoc-1" }
    ]
  },
  {
    id: "network-level-predictive-control",
    title: "Network-Level Predictive Control",
    summary:
      "Builds interpretable models of recurrent dynamics that support goal-directed behavior.",
    themeIds: ["systems", "decision", "attention"],
    members: [
      { name: "Jordan Patel", memberId: "jordan-patel" },
      { name: "Andrea Chiba", memberId: "andrea-chiba" }
    ]
  },
  {
    id: "learning-under-noise",
    title: "Learning Under Noisy Sensory Input",
    summary:
      "Characterizes robust adaptation strategies when neural systems are pushed by ambiguity and noise.",
    themeIds: ["learning", "attention", "systems"],
    members: [
      { name: "Alex Kim", memberId: "alex-kim" },
      { name: "Jordan Patel", memberId: "jordan-patel" },
      { name: "Sam Rivera", memberId: "sam-rivera" }
    ]
  }
];
