import { useEffect, useId, useRef } from "react";
import type { TeamMember, TeamMemberModalContent } from "../data/team";

interface TeamMemberModalProps {
  member: TeamMember & { detail: TeamMemberModalContent };
  onClose: () => void;
}

export default function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  const titleId = useId();
  const descId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  const detail = member.detail;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-[1px]"
        aria-label="Close profile dialog"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="relative z-10 max-h-[min(90vh,640px)] w-full max-w-lg overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Graduate researcher
            </p>
            <h2 id={titleId} className="mt-1 text-xl font-semibold text-slate-900 sm:text-2xl">
              {member.name}
            </h2>
            <p className="mt-1 text-sm text-slate-600">{member.role}</p>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="shrink-0 rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
            aria-label="Close"
            onClick={onClose}
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {detail.headline ? (
          <p className="mt-4 text-sm font-medium leading-snug text-slate-800 sm:text-base">
            {detail.headline}
          </p>
        ) : null}

        <div id={descId} className="mt-4 space-y-4 text-sm leading-7 text-slate-700 sm:text-base">
          <p>{detail.bio}</p>
          {detail.interests && detail.interests.length > 0 ? (
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Research interests
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {detail.interests.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        <p className="mt-6 text-xs text-slate-500">
          Placeholder profile — replace with approved lab copy and links when available.
        </p>
      </div>
    </div>
  );
}
