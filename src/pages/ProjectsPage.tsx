import { useState } from "react";
import ProjectsRow from "../components/ProjectsRow";
import Footer from "../components/Footer";
import ProjectModal from "../components/ProjectModal";
import { getCoverComponents } from "../components/Covers";
import { PORTFOLIO_PROJECTS as PROJECTS } from "../data/portfolioProjects";
import type { PortfolioProject } from "../data/portfolioProjects";
import type { PeekState } from "../hooks/useCoverPeek";

interface Props {
  navigate: (r: string) => void;
  peek: PeekState;
  setPeek: React.Dispatch<React.SetStateAction<PeekState>>;
  accent: string;
}

export default function ProjectsPage({ navigate, accent }: Props) {
  const [view, setView] = useState<"list" | "grid">("list");
  const [modal, setModal] = useState<PortfolioProject | null>(null);
  const covers = getCoverComponents();

  const handleCardClick = (p: PortfolioProject) => {
    if (p.url) setModal(p);
    else if (p.github) window.open(p.github, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="page max-w-300 mx-auto">
      <section className="pt-10">
        <span className="eyebrow">Projects · 2022 — 2026</span>
        <h2
          className="mt-4"
          style={{
            fontSize: "clamp(48px, 7vw, 112px)",
            letterSpacing: "-0.045em",
            lineHeight: 0.95,
          }}
        >
          Selected projects,
          <br />
          <span style={{ color: "var(--accent)", fontStyle: "italic", fontWeight: 400 }}>
            built with care.
          </span>
        </h2>
        <p className="mt-6 text-[17px] max-w-[52ch] leading-[1.55]" style={{ color: "var(--fg-dim)" }}>
          Modern applications focused on usability, performance, and scalable system design.
        </p>
        <div className="flex items-end justify-between gap-6 mt-14 mb-6 flex-wrap">
          <div className="count">{PROJECTS.length} projects · sorted recent</div>
          <div className="view-toggle">
            <button className={view === "list" ? "active" : ""} onClick={() => setView("list")}>List</button>
            <button className={view === "grid" ? "active" : ""} onClick={() => setView("grid")}>Grid</button>
          </div>
        </div>

        {view === "list" ? (
          <div className="border-t border-(--line) flex flex-col">
            {PROJECTS.map((p, i) => (
              <ProjectsRow
                key={p.id}
                project={p}
                idx={i}
                onClick={() => handleCardClick(p)}
              />
            ))}
          </div>
        ) : (
          <div className="Projects-grid grid grid-cols-2 gap-5 mt-6 max-[720px]:grid-cols-1">
            {PROJECTS.map((p, i) => {
              const Cover = covers[i % covers.length];
              return (
                <div
                  className="Projects-card relative cursor-pointer"
                  key={p.id}
                  onClick={() => handleCardClick(p)}
                  style={{ perspective: "800px" }}
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const { left, top, width, height } = card.getBoundingClientRect();
                    const x = (e.clientX - left) / width - 0.5;
                    const y = (e.clientY - top) / height - 0.5;
                    card.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale(1.02)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "";
                  }}
                >
                  <div className="cover aspect-16/10 relative overflow-hidden">
                    {p.image ? (
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                    ) : (
                      <Cover accent={accent} />
                    )}
                  </div>
                  <div className="body p-[20px_22px_24px] flex flex-col gap-2">
                    <div className="title text-[20px] font-medium tracking-[-0.02em]">{p.title}</div>
                    <div className="text-[13px] text-(--fg-dim) leading-normal">{p.desc}</div>
                    <div className="flex gap-1.5 flex-wrap mt-3">
                      {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                  {modal?.id === p.id && (
                    <ProjectModal project={p} onClose={() => setModal(null)} />
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      <Footer navigate={navigate} />
    </div>
  );
}
