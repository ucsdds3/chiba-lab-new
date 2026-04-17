import { useMemo, useState } from "react";
import { projects, themes } from "../data/featuredProjects";
import type { FeaturedTheme } from "../data/featuredProjects";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

interface ThemeEdge {
  from: string;
  to: string;
}

type PositionedTheme = FeaturedTheme & {
  x: number;
  y: number;
};

export default function FeaturedProjects() {
  const [selectedThemeId, setSelectedThemeId] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const positionedThemes = useMemo<PositionedTheme[]>(() => {
    const totalThemes = themes.length;
    const horizontalRadius = totalThemes <= 4 ? 32 : 42;
    const verticalRadius = totalThemes <= 4 ? 32 : 39;

    return themes.map((theme, index) => {
      if (typeof theme.x === "number" && typeof theme.y === "number") {
        return {
          ...theme,
          x: theme.x,
          y: theme.y
        };
      }

      const angle = (-90 + (index * 360) / totalThemes) * (Math.PI / 180);
      return {
        ...theme,
        x: 50 + horizontalRadius * Math.cos(angle),
        y: 50 + verticalRadius * Math.sin(angle)
      };
    });
  }, []);

  const themeEdges: ThemeEdge[] = useMemo(
    () =>
      positionedThemes.flatMap((theme, index) =>
        positionedThemes.slice(index + 1).map((nextTheme) => ({
          from: theme.id,
          to: nextTheme.id
        }))
      ),
    [positionedThemes]
  );

  const selectedTheme = useMemo(
    () => positionedThemes.find((theme) => theme.id === selectedThemeId) ?? null,
    [positionedThemes, selectedThemeId]
  );

  const selectedProject = useMemo(
    () => projects.find((project) => project.id === selectedProjectId) ?? null,
    [selectedProjectId]
  );

  const visibleThemeIds = useMemo(() => {
    if (!selectedProject) {
      return new Set(positionedThemes.map((theme) => theme.id));
    }

    return new Set(selectedProject.themeIds);
  }, [positionedThemes, selectedProject]);

  const filteredProjects = useMemo(() => {
    if (!selectedThemeId) {
      return projects;
    }

    return projects.filter((project) => project.themeIds.includes(selectedThemeId));
  }, [selectedThemeId]);

  return (
    <Section
      id="featured-projects"
      className="scroll-mt-24 bg-[#f4f2f6] px-2 py-8 sm:px-4 sm:py-10 md:scroll-mt-28 md:py-12"
      containerClassName="max-w-[90rem]"
    >
      <div className="grid border border-slate-300/80 bg-[#fcfbfd] md:min-h-[640px] md:grid-cols-[0.9fr_1.1fr] md:[height:calc(100vh-12rem)] md:max-h-[860px] lg:min-h-[700px]">
        <div className="border-b border-slate-300/80 bg-[#cfb8df] p-4 sm:p-5 md:border-b-0 md:border-r md:p-5">
          <div className="flex h-full items-center">
            <div className="relative mx-auto w-full max-w-[680px]">
              <div className="mx-auto aspect-square w-full max-w-[520px] sm:max-w-[620px] md:max-w-none">
            <svg
              className="h-full w-full overflow-visible"
              viewBox="0 0 100 100"
              role="img"
              aria-label="Interactive research theme network graph"
            >
              {themeEdges.map((edge) => {
                const fromTheme = positionedThemes.find((theme) => theme.id === edge.from);
                const toTheme = positionedThemes.find((theme) => theme.id === edge.to);

                if (!fromTheme || !toTheme) {
                  return null;
                }

                const isInProjectFocus =
                  visibleThemeIds.has(edge.from) && visibleThemeIds.has(edge.to);
                const isRelatedEdge =
                  selectedThemeId === null ||
                  edge.from === selectedThemeId ||
                  edge.to === selectedThemeId;

                return (
                  <line
                    key={`${edge.from}-${edge.to}`}
                    x1={fromTheme.x}
                    y1={fromTheme.y}
                    x2={toTheme.x}
                    y2={toTheme.y}
                    stroke={isRelatedEdge ? "#250037" : "#4e2f61"}
                    strokeOpacity={isInProjectFocus ? (isRelatedEdge ? 0.95 : 0.4) : 0.14}
                    strokeWidth={0.55}
                  />
                );
              })}
              {positionedThemes.map((theme) => {
                const isActive = selectedThemeId === theme.id;
                const isInProjectFocus = visibleThemeIds.has(theme.id);
                return (
                  <circle
                    key={theme.id}
                    cx={theme.x}
                    cy={theme.y}
                    r={isActive ? 2.8 : 2.4}
                    fill={isActive ? "#14001f" : "#300046"}
                    fillOpacity={isInProjectFocus ? 1 : 0.3}
                  />
                );
              })}
              {positionedThemes.map((theme) => {
                const cx = 50;
                const cy = 50;
                const dx = theme.x - cx;
                const dy = theme.y - cy;
                const len = Math.hypot(dx, dy) || 1;
                const ux = dx / len;
                const uy = dy / len;
                const labelGap = 5.4;
                const rawTx = theme.x - ux * labelGap;
                const rawTy = theme.y - uy * labelGap;
                const tx = Math.max(8, Math.min(92, rawTx));
                const ty = Math.max(8, Math.min(92, rawTy));
                const isInProjectFocus = visibleThemeIds.has(theme.id);

                return (
                  <text
                    key={`theme-label-${theme.id}`}
                    x={tx}
                    y={ty}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={selectedThemeId === theme.id ? "#14001f" : "#250037"}
                    fillOpacity={isInProjectFocus ? 1 : 0.45}
                    fontSize={theme.label.length > 14 ? 1.95 : 2.2}
                    fontWeight={600}
                    fontFamily="ui-sans-serif, system-ui, sans-serif"
                    pointerEvents="none"
                    className="select-none"
                    aria-hidden={true}
                  >
                    {theme.label}
                  </text>
                );
              })}
            </svg>

            {positionedThemes.map((theme) => {
              const isActive = selectedThemeId === theme.id;
              const isInProjectFocus = visibleThemeIds.has(theme.id);

              return (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() =>
                    setSelectedThemeId((currentTheme) =>
                      currentTheme === theme.id ? null : theme.id
                    )
                  }
                  aria-pressed={isActive}
                  aria-label={`${isActive ? "Clear filter for" : "Filter projects by"} ${theme.label}`}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#e6dcab] focus-visible:ring-offset-2 focus-visible:ring-offset-[#cfb8df] ${
                    isInProjectFocus ? "opacity-100" : "opacity-45"
                  }`}
                  style={{
                    left: `${theme.x}%`,
                    top: `${theme.y}%`,
                    width: "2.25rem",
                    height: "2.25rem"
                  }}
                >
                  <span className="sr-only">{theme.label}</span>
                </button>
              );
            })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-h-0 flex-col overflow-hidden p-5 sm:p-6 md:p-7">
          <SectionHeading className="mb-4 text-[2.1rem] font-medium leading-none text-slate-900 sm:text-[2.8rem]">
            Featured Projects
          </SectionHeading>
          <p className="text-base leading-7 text-slate-800 sm:text-lg">
            The Chiba Laboratory explores how projects cluster across learning,
            memory, affect, and attention with an emphasis on neural plasticity.
          </p>
          <p className="mt-3 text-base leading-7 text-slate-800 sm:text-lg">
            Select a theme node to filter related projects. Select it again, or
            use All Projects, to clear the filter.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setSelectedThemeId(null);
                setSelectedProjectId(null);
              }}
              className="min-h-10 rounded-full bg-[#c8c993] px-6 py-2 text-2xl leading-none text-slate-900 transition hover:bg-[#b8b980] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-600 focus-visible:ring-offset-2"
            >
              All Projects
            </button>
            <p className="w-full break-words text-sm font-medium text-slate-700">
              {selectedTheme
                ? `Showing theme: ${selectedTheme.label}`
                : selectedProject
                  ? `Graph focus: ${selectedProject.title}`
                  : "Showing: all themes"}
            </p>
          </div>

          <div className="mt-4 grid max-h-[min(340px,46vh)] gap-3 overflow-x-hidden overflow-y-auto overscroll-contain pb-1 md:max-h-none md:min-h-0 md:flex-1 md:overflow-y-auto md:pr-1">
            {filteredProjects.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => {
                  setSelectedProjectId((currentProjectId) => {
                    const nextProjectId =
                      currentProjectId === project.id ? null : project.id;

                    if (!nextProjectId) {
                      return null;
                    }

                    if (selectedThemeId && !project.themeIds.includes(selectedThemeId)) {
                      setSelectedThemeId(null);
                    }

                    return nextProjectId;
                  });
                }}
                aria-pressed={selectedProjectId === project.id}
                aria-label={`${
                  selectedProjectId === project.id
                    ? "Clear graph focus for project"
                    : "Focus graph on project"
                } ${project.title}`}
                className={`w-full rounded-2xl border bg-white p-4 text-left transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-500 focus-visible:ring-offset-2 sm:p-5 ${
                  selectedProjectId === project.id
                    ? "border-slate-600 shadow-sm"
                    : "border-slate-300 hover:border-slate-500"
                }`}
              >
                <h3 className="text-lg font-semibold leading-snug text-slate-900 sm:text-xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
                  {project.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.themeIds.map((themeId) => {
                    const tagTheme = positionedThemes.find((theme) => theme.id === themeId);
                    if (!tagTheme) {
                      return null;
                    }

                    return (
                      <li
                        key={`${project.id}-${themeId}`}
                        className="max-w-full break-words rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700"
                      >
                        {tagTheme.label}
                      </li>
                    );
                  })}
                </ul>
              </button>
            ))}
            {filteredProjects.length === 0 && (
              <p className="rounded-2xl border border-slate-300 bg-white p-4 text-sm text-slate-700">
                No projects found for this theme yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
