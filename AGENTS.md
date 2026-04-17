# Agent instructions — Chiba Lab frontend

This document guides implementation when building or updating the site, especially when translating a **Figma** design into code.

## Product context

- **Site**: Chiba Lab (research lab marketing / informational site).
- **Goal**: Match the Figma page template faithfully in layout, typography, spacing, and visual hierarchy while keeping the codebase maintainable and accessible.

## Planning before implementation

When implementing a new page or major section:

1. First create a short **implementation plan**.
2. List **components to create** (names and responsibilities).
3. Describe **layout structure** (flex/grid, breakpoints, major blocks).
4. **Then** implement components step by step.
5. **Do not** start coding without a plan.

This reduces inconsistent structure and rework.

## Page structure

The app shell lives in **`App.tsx`**: `Navbar`, **`Routes`** (`main`), then `Footer`.

### Home (`/` — `frontend/src/pages/HomePage.tsx`)

The landing page mirrors the [chiba-lab.org](https://www.chiba-lab.org/) structure:

1. `HomeHero` — full-width dark hero with headline, subtitle, CTAs, and image placeholder.
2. `WhatTakesPlace` — two-column: lab photo placeholder + description of the lab's purpose.
3. `Highlights` — two card grid: UNESCO / Global Science of Learning, and Timing in Learning.
4. `OurApproachHome` — centered mission statement with links to Science and GitHub.

### Science (`#/science` — `frontend/src/pages/SciencePage.tsx`)

The deep-dive science page (previously the home page):

1. `Hero`
2. `WhatAreDynamicalSystems`
3. `WhyImportant`
4. `HowWeTackle`
5. `FeaturedProjects`

Supports `scrollToId` state for cross-page scroll navigation (same pattern as original `HomePage`).

### Team (`#/team` — `frontend/src/pages/TeamPage.tsx`)

- Renders **`MeetOurTeam`** (full-page section content).

#### Graduate profiles (modal)

- Team roster data lives in **`frontend/src/data/team.ts`** (`TeamMember` + `teamMembers`).
- Anyone with a **`Graduate`** entry in **`tags`** and a populated **`detail`** object opens a **profile modal** (`TeamMemberModal.tsx`): extended placeholder bio, optional headline and interests list.
- Members **without** that combination stay as **static cards** (no modal).
- Modals must stay **accessible**: `role="dialog"`, `aria-modal`, labelled title, **Escape** and backdrop close, **focus** on open (close button) and **restore scroll** (`body` overflow) on unmount.

### News (`#/news` — `frontend/src/pages/NewsPage.tsx`)

- Renders **`NewsEvents`** (full-page section content).

**Navbar** links: **Science**, **People**, **News** as route `<Link>`s; **Contact** is `mailto:achiba@ucsd.edu`. Logo links to `/`. Active route is underlined.

## Implementation workflow for new sections

When implementing a **new section** from Figma:

1. Identify the section in the Figma frame.
2. Create a new component in `frontend/src/components/`.
3. Use the **`Section`** wrapper for layout and width.
4. Add a **`SectionHeading`** if the section has a title.
5. Build layout using Tailwind **flex/grid** utilities.
6. Match **spacing, typography, and colors** from Figma.
7. Add **responsive** behavior using Tailwind breakpoints.
8. **Import** the component into the correct **page** (`HomePage.tsx`, `TeamPage.tsx`, `NewsPage.tsx`, or `App.tsx` routes) in the position defined in [Page structure](#page-structure).
9. **Verify** layout visually against Figma.

## Component naming

- Use **PascalCase** for component names.
- **File name must match** the component name (e.g. `FeaturedProjects.tsx` exports `FeaturedProjects`).
- **One component per file.**
- Section components should be named after their **section purpose** (e.g. `FeaturedProjects.tsx`, `MeetOurTeam.tsx`), not generic names like `Section2.tsx`.

## Responsive design rules

- **Mobile-first** layout: default styles for small screens, then `sm:`, `md:`, `lg:` as needed.
- **Stack columns vertically** on small screens; switch to rows only at breakpoints that match Figma.
- Use **`max-w-*` containers** and **`mx-auto`** for centered content bands.
- **Section padding** should be **smaller on small screens** and relax at larger breakpoints (e.g. reduce horizontal padding on mobile vs desktop).
- **Font sizes** should **scale down** on small screens where the design specifies it.
- **Avoid fixed widths** unless the design requires them; prefer `max-w-*`, `w-full`, and flex/grid.

## Tailwind usage rules

- Prefer **Tailwind utility classes** over custom CSS.
- Use the **spacing scale consistently** (`p-4`, `p-8`, `gap-6`, etc.); align repeated values with Figma via theme extension when the same token appears often.
- Use **flex/grid** for layout instead of **absolute positioning**, except for deliberate overlays/decorative elements shown in Figma.
- Use **`max-w-6xl mx-auto`** (or the width from the design) for **centered main content** inside sections.
- Use **Tailwind theme extension** (or CSS variables in `index.css`) for **repeated colors and spacing** from the design system.

## Tech stack (do not change without explicit request)

- **App**: React 19, TypeScript, Vite 7.
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite` and `@import "tailwindcss"` in `frontend/src/styles/index.css`.
- **Routing**: `HashRouter` in `frontend/src/main.tsx` (required for GitHub Pages).
- **Deploy**: Static build to GitHub Pages with Vite `base` set to `chiba-lab-new/` in `frontend/vite.config.ts`.

## Repository layout

- **Source**: `frontend/src/`
- **Components**: `frontend/src/components/` — one component per file, default export matching filename (see [Component naming](#component-naming)).
- **Pages**: `frontend/src/pages/` — route-level compositions (`HomePage`, `TeamPage`, `NewsPage`, etc.).
- **Data**: `frontend/src/data/` — structured content (e.g. `featuredProjects.ts`, `team.ts`) consumed by section components.
- **Global styles**: `frontend/src/styles/index.css` only for Tailwind import and rare global tokens; prefer Tailwind utilities in components.

## Figma → implementation workflow

1. **Source of truth**  
   Implement from the agreed Figma file/frame. When Figma MCP or links are available, use the specified frame or component as the reference for measurements, copy, and structure.

2. **Tokens and variables**  
   Map Figma color, spacing, radius, and typography to the codebase consistently:
   - Prefer **Tailwind theme extension** or **CSS custom properties** in `index.css` when the design uses a defined system (variables / styles).
   - Avoid one-off magic numbers in many places; centralize repeated Figma values (e.g. brand colors, section padding).

3. **Layout fidelity**  
   Match breakpoints, max-widths, gaps, and alignment from the design. Use responsive Tailwind (`sm:`, `md:`, etc.) to mirror Figma’s responsive behavior when multiple layouts exist.

4. **Typography**  
   Align font sizes, weights, line heights, and letter-spacing with the design. Use Tailwind utilities; extend the theme if the scale is non-standard.

5. **Images and assets**  
   Export raster assets at appropriate resolution; use SVG where the design uses vectors.  
   For anything under `public/`, remember the **`base` path** (`chiba-lab-new/`): prefer Vite-handled imports from `src` when possible, or paths that respect the deployed base URL.

6. **Content**  
   Use exact headings and body copy from the design unless the user supplies different copy. Do not invent lab-specific claims.

## Reuse existing building blocks

Before adding new wrappers, use and extend:

- **`Section`** — page sections with consistent width/padding.
- **`SectionHeading`** — major section titles (`align` prop: `left` | `center` | `right`).
- **`Navbar`** — evolve to match Figma.
- Legacy placeholders (**`Background`**, **`Projects`**) — replace or reshape into the named sections from [Page structure](#page-structure) (`Hero`, `FeaturedProjects`, etc.) rather than duplicating patterns.

Compose new sections as components that use `Section` / `SectionHeading` when they represent full-width bands.

## Code quality expectations

- **TypeScript**: Explicit props interfaces for components; no `any` unless unavoidable.
- **Accessibility**: Semantic landmarks (`header`, `nav`, `main`, `section`), heading order, focus styles, `aria-*` on interactive controls (see `Navbar` for patterns).
- **React**: Prefer simple function components; `key` on lists; avoid unnecessary client state.
- **Consistency**: Match import style (e.g. `./components/...`), string quotes, and formatting used in nearby files.

## GitHub Pages constraints

- Do **not** switch to `BrowserRouter` without also solving hosting for client-side routes.
- After structural or asset-path changes, verify `npm run build` and that links/assets work with the `chiba-lab-new/` base.

## Definition of done

A section (or the full page template) is **complete** when:

- Layout **matches Figma** visually.
- **Typography** matches Figma.
- **Spacing** matches Figma.
- The section is **responsive** per [Responsive design rules](#responsive-design-rules).
- **No TypeScript errors**.
- Build succeeds with **`npm run build`** (from `frontend/`).

## What to avoid

- Drive-by refactors unrelated to the Figma implementation.
- Inline styles except where Tailwind cannot express the design without clutter (prefer rare `@layer` or utilities).
- Placeholder content where the design specifies real text or images (unless the user explicitly wants placeholders).
- Random page structure that ignores [Page structure](#page-structure) or [Implementation workflow for new sections](#implementation-workflow-for-new-sections).

When requirements conflict, follow the **Figma design** for visuals and this file for **stack, structure, and deployment** rules.
