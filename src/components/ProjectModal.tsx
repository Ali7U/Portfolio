import { useEffect, useState } from "react";
import type { PortfolioProject } from "../data/portfolioProjects";

interface Props {
  project: PortfolioProject;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  const [closing, setClosing] = useState(false);

  const close = () => {
    setClosing(true);
    setTimeout(onClose, 220);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* full-screen backdrop */}
      <div
        className="fixed inset-0 z-200 bg-black/50 backdrop-blur-sm"
        style={{ animation: `${closing ? "modal-backdrop-out" : "modal-backdrop-in"} 0.22s var(--ease-out) forwards` }}
        onClick={close}
      />
      {/* panel anchored inside the card */}
      <div
        className="absolute inset-0 z-201 flex items-center justify-center p-4"
        onClick={close}
        style={{ animation: `${closing ? "modal-card-out" : "modal-card-in"} 0.22s var(--ease-out) forwards` }}
      >
        <div
          className="w-full rounded-(--r-lg) border border-(--glass-border) bg-(--bg-2) p-5 shadow-(--shadow)"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-4">
            <p className="text-[10px] uppercase tracking-[0.16em] text-(--fg-mute)" style={{ fontFamily: "var(--font-mono)" }}>Open project</p>
            <h3 className="mt-1 text-[18px] font-medium tracking-[-0.02em]">{project.title}</h3>
          </div>

          <div className="flex flex-col gap-2">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-(--r-md) border border-(--line-strong) bg-(--glass) px-4 py-3 text-sm font-medium transition-colors hover:border-(--accent) hover:text-(--accent)"
                onClick={close}
              >
                <span>Visit live app</span>
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 13L13 3M13 3H5M13 3V11" strokeLinecap="round" />
                </svg>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-(--r-md) border border-(--line-strong) bg-(--glass) px-4 py-3 text-sm font-medium transition-colors hover:border-(--accent) hover:text-(--accent)"
                onClick={close}
              >
                <span>View on GitHub</span>
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M3 13L13 3M13 3H5M13 3V11" strokeLinecap="round" />
                </svg>
              </a>
            )}
          </div>

          <button
            className="mt-3 w-full text-center text-[11px] text-(--fg-mute) hover:text-(--fg) transition-colors"
            onClick={close}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
