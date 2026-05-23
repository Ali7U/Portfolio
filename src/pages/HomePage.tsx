import MagneticButton from "../components/MagneticButton";
import Footer from "../components/Footer";
import { Tooltip } from "react-tooltip";
import {
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiDotnet,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiSwagger,
  SiExpo,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { TbDatabase, TbComponents } from "react-icons/tb";

const TOOLS = [
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "PrimeNG", Icon: TbComponents },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "Docker", Icon: SiDocker },
  { name: "Postman", Icon: SiPostman },
  { name: "SwaggerUI", Icon: SiSwagger },
  { name: "Expo", Icon: SiExpo },
];

const STACK = [
  { id: "javascript", name: "JavaScript", bg: "#c9a800", Icon: SiJavascript },
  { id: "typescript", name: "Typescript", bg: "#3178c6", Icon: SiTypescript },
  { id: "angular", name: "Angular", bg: "#b6003f", Icon: SiAngular },
  { id: "react", name: "React", bg: "#20232a", Icon: SiReact },
  { id: "reactnative", name: "React Native", bg: "#1c3a5e", Icon: SiReact },
  { id: "nextjs", name: "Next.js", bg: "#111111", Icon: SiNextdotjs },
  { id: "express", name: "Express.js", bg: "#404040", Icon: SiExpress },
  { id: "nestjs", name: "NestJS", bg: "#e0234e", Icon: SiNestjs },
  { id: "dotnet", name: ".NET", bg: "#512bd4", Icon: SiDotnet },
  { id: "sql", name: "SQL", bg: "#2d6a9f", Icon: TbDatabase },
  { id: "mysql", name: "MySQL", bg: "#00758f", Icon: SiMysql },
  { id: "postgres", name: "PostgreSQL", bg: "#336791", Icon: SiPostgresql },
  { id: "mongodb", name: "MongoDB", bg: "#47a248", Icon: SiMongodb },
  { id: "supabase", name: "Supabase", bg: "#0d9668", Icon: SiSupabase },
] as const;

interface Props {
  navigate: (r: string) => void;
}

export default function HomePage({ navigate }: Props) {
  return (
    <div className="page max-w-300 mx-auto">
      <section className="relative pt-15 pb-20">
        <span className="eyebrow">Full-stack engineer · Riyadh, KSA</span>
        <div className="mt-6">
          <h1 className="text-[clamp(56px,10vw,148px)] leading-[0.92] tracking-[-0.045em] font-medium">
            Software engineered
            <br />
            for performance,
            <br />
            scale, and{" "}
            <span className="text-(--accent) italic font-normal">craft.</span>
          </h1>
        </div>
        <p className="mt-7 text-lg max-w-[44ch] leading-[1.55] text-(--fg-dim)">
          Hi, I'm <span className="font-medium text-(--fg)">Ali AlGuadeb </span>
          — a full-stack engineer specializing in Angular, React, Next.js and
          .NET.
        </p>
        <div className="flex gap-3 mt-9 flex-wrap">
          <MagneticButton
            className="btn-primary"
            onClick={() => navigate("Projects")}
          >
            See selected projects
            <svg
              className="arrow"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M3 13L13 3M13 3H5M13 3V11" strokeLinecap="round" />
            </svg>
          </MagneticButton>
          <MagneticButton
            className="btn-ghost"
            onClick={() => navigate("about")}
            strength={0.3}
          >
            About me
          </MagneticButton>
        </div>
        <div className="border-t border-(--line) grid grid-cols-[1.4fr_1fr_1fr] gap-8 mt-20 pt-7 max-[720px]:grid-cols-1">
          <div>
            <span className="eyebrow block mb-2.5">Who I am</span>
            <p className="text-[15px] leading-[1.55] max-w-[38ch] text-(--fg-dim)">
              Software engineer from{" "}
              <span className="font-medium text-(--fg) ">
                Riyadh, Saudi Arabia
              </span>
              , with a background in full-stack development and modern product
              engineering.
            </p>
          </div>
          <div>
            <span className="eyebrow block mb-2.5">Stack</span>
            <div className="mt-3 flex flex-wrap gap-2">
              {STACK.map((tech) => (
                <div
                  key={tech.id}
                  className="stack-chip cursor-default w-11 h-11 rounded-[10px] flex items-center justify-center text-white"
                  data-tooltip-id="stack-tooltip"
                  data-tooltip-tech={tech.id}
                  style={{
                    background: tech.bg,
                    transition:
                      "transform 0.2s var(--ease-out), box-shadow 0.2s var(--ease-out)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-4px) scale(1.12)";
                    e.currentTarget.style.boxShadow = `0 12px 28px -6px ${tech.bg.startsWith("var") ? "var(--accent-glow)" : tech.bg + "99"}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <tech.Icon size={22} />
                </div>
              ))}
            </div>
            <Tooltip
              id="stack-tooltip"
              place="top"
              render={({ activeAnchor }) => {
                const id = activeAnchor?.getAttribute("data-tooltip-tech");
                const tech = STACK.find((t) => t.id === id);
                if (!tech) return null;
                return (
                  <div
                    className="flex items-center gap-2 text-xs"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <tech.Icon size={14} />
                    {tech.name}
                  </div>
                );
              }}
              style={{
                background: "var(--bg-2)",
                color: "var(--fg)",
                border: "1px solid var(--glass-border)",
                borderRadius: 8,
                padding: "6px 12px",
                fontSize: 12,
                boxShadow: "var(--shadow)",
              }}
            />
          </div>
          <div>
            <span className="eyebrow block mb-2.5">What I focus on</span>
            <p className="text-[15px] leading-[1.55] max-w-[38ch] text-(--fg-dim)">
              Building products end-to-end — from database schema to UI polish.
              I care about architectures, real performance, and systems that
              hold up as they grow.
            </p>
          </div>
        </div>
      </section>

      <div className="mt-16 mb-16">
        <span className="eyebrow">Tools</span>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {TOOLS.map((tool) => (
            <div key={tool.name} className="tool-pill">
              <tool.Icon size={14} />
              {tool.name}
            </div>
          ))}
        </div>
      </div>

      {/* <div className="grid grid-cols-4 gap-px mt-20 overflow-hidden rounded-(--r-lg) max-[720px]:grid-cols-2 bg-(--line) border border-(--line)">
        <div className="bg-(--bg) px-6 py-7 flex flex-col gap-1.5">
          <div className="stat-num">
            2<span className="text-(--accent) italic">+</span>
          </div>
          <div className="stat-label">Years shipping</div>
        </div>
        <div className="bg-(--bg) px-6 py-7 flex flex-col gap-1.5">
          <div className="stat-num">12</div>
          <div className="stat-label">Projects shipped</div>
        </div>
        <div className="bg-(--bg) px-6 py-7 flex flex-col gap-1.5">
          <div className="stat-num">6</div>
          <div className="stat-label">Live apps</div>
        </div>
        <div className="bg-(--bg) px-6 py-7 flex flex-col gap-1.5">
          <div className="stat-num">847</div>
          <div className="stat-label">Commits 2026</div>
        </div>
      </div> */}

      {/* <div className="flex items-end justify-between gap-6 mt-25 mb-9 flex-wrap">
        <div>
          <span className="eyebrow">Featured projects</span>
          <h2 className="text-[clamp(36px,5vw,72px)] tracking-[-0.04em] leading-none mt-3">
            Things I'm proud of.
          </h2>
        </div>
        <a
          href="/projects"
          className="eyebrow"
          style={{ color: "var(--accent)" }}
          onClick={(e) => {
            e.preventDefault();
            navigate("projects");
          }}
        >
          View all {PROJECTS.length} →
        </a>
      </div>

      <div className="border-t border-(--line) flex flex-col">
        {featured.map((p, i) => (
          <projectsRow
            key={p.id}
            project={p}
            idx={i}
            onPeekEnter={() =>
              setPeek({ active: true, x: peek.x, y: peek.y, idx: i })
            }
            onPeekLeave={() => setPeek((s) => ({ ...s, active: false }))}
            onMove={(e) =>
              setPeek({ active: true, x: e.clientX, y: e.clientY, idx: i })
            }
            onClick={() => navigate("projects")}
          />
        ))}
      </div> */}

      <Footer navigate={navigate} />
    </div>
  );
}
