/** In-page scroll that preserves HashRouter (`#/`) and respects reduced motion. */
export function scrollToSection(hash: string) {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  const el = document.getElementById(id);
  if (!el) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const headerEl = () => document.querySelector<HTMLElement>("[data-site-header]");

  /** Document scroll Y so the target’s top edge sits just under the sticky header. */
  const targetScrollY = (element: HTMLElement) => {
    const header = headerEl();
    const headerBottom = header
      ? Math.ceil(header.getBoundingClientRect().bottom)
      : 0;
    const gapPx = 4;
    return (
      element.getBoundingClientRect().top +
      window.scrollY -
      headerBottom -
      gapPx
    );
  };

  /** Snap to exact position under sticky header (subpixel / layout correction). */
  const snapUnderHeader = (element: HTMLElement) => {
    const header = headerEl();
    if (!header) return;
    const headerBottom = Math.ceil(header.getBoundingClientRect().bottom);
    const gapPx = 4;
    const top = element.getBoundingClientRect().top;
    const drift = top - headerBottom - gapPx;
    if (Math.abs(drift) > 0.5) {
      window.scrollBy({ top: drift, behavior: "auto" });
    }
  };

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const DURATION_MS = 1100;

  const animateScrollTo = (targetY: number, element: HTMLElement) => {
    const startY = window.scrollY;
    const delta = targetY - startY;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, Math.max(0, elapsed / DURATION_MS));
      const eased = easeInOutCubic(t);
      window.scrollTo({ top: startY + delta * eased, behavior: "auto" });

      if (t < 1) {
        requestAnimationFrame(step);
      } else {
        requestAnimationFrame(() => snapUnderHeader(element));
      }
    };

    requestAnimationFrame(step);
  };

  requestAnimationFrame(() => {
    const y = Math.max(0, targetScrollY(el));

    if (prefersReducedMotion) {
      window.scrollTo({ top: y, behavior: "auto" });
      requestAnimationFrame(() => snapUnderHeader(el));
      return;
    }

    animateScrollTo(y, el);
  });
}
