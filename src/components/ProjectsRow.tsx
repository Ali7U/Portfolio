import type { PortfolioProject } from "../data/portfolioProjects";

interface Props {
  project: PortfolioProject;
  idx: number;
  onClick?: () => void;
}

export default function ProjectsRow({ project, idx, onClick }: Props) {
  const handleClick = () => {
    if (project.github) {
      window.open(project.github, "_blank", "noopener,noreferrer");
    }
    onClick?.();
  };

  return (
    <div
      className="Projects-row group py-7 px-2 hover:pl-6 hover:pr-6 hover:bg-(--glass) cursor-pointer"
      onClick={handleClick}
    >
      <span className="idx text-xs">{String(idx + 1).padStart(2, "0")}</span>
      <div>
        <div className="title group-hover:text-(--accent)">{project.title}</div>
        <div className="text-sm mt-1" style={{ color: "var(--fg-dim)" }}>
          {project.tagline}
        </div>
      </div>
      <div className="tags flex gap-1.5 flex-wrap">
        {project.tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
      <span className="open-arrow w-9.5 h-9.5 rounded-full grid place-items-center border border-(--line-strong) group-hover:bg-(--accent) group-hover:border-(--accent) group-hover:rotate-45 group-hover:text-white">
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <path d="M3 13L13 3M13 3H5M13 3V11" strokeLinecap="round" />
        </svg>
      </span>
    </div>
  );
}
