import { useLayoutEffect, useRef, useState, useCallback } from "react";
import { Tooltip } from "react-tooltip";
import {
  SiAngular, SiReact, SiNextdotjs, SiDotnet, SiExpress, SiNestjs,
  SiPostgresql, SiMysql, SiMongodb, SiSupabase, SiTypescript, SiJavascript,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";

const STACK = [
  { id: "javascript",  name: "JavaScript",  bg: "#c9a800", Icon: SiJavascript },
  { id: "typescript",  name: "TypeScript",  bg: "#3178c6", Icon: SiTypescript },
  { id: "angular",     name: "Angular",     bg: "#b6003f", Icon: SiAngular },
  { id: "react",       name: "React",       bg: "#20232a", Icon: SiReact },
  { id: "reactnative", name: "React Native",bg: "#1c3a5e", Icon: SiReact },
  { id: "nextjs",      name: "Next.js",     bg: "#111111", Icon: SiNextdotjs },
  { id: "express",     name: "Express.js",  bg: "#404040", Icon: SiExpress },
  { id: "nestjs",      name: "NestJS",      bg: "#e0234e", Icon: SiNestjs },
  { id: "dotnet",      name: ".NET",        bg: "#512bd4", Icon: SiDotnet },
  { id: "sql",         name: "SQL",         bg: "#2d6a9f", Icon: TbDatabase },
  { id: "mysql",       name: "MySQL",       bg: "#00758f", Icon: SiMysql },
  { id: "postgres",    name: "PostgreSQL",  bg: "#336791", Icon: SiPostgresql },
  { id: "mongodb",     name: "MongoDB",     bg: "#47a248", Icon: SiMongodb },
  { id: "supabase",    name: "Supabase",    bg: "#0d9668", Icon: SiSupabase },
] as const;

const CONNECTIONS: [string, string][] = [
  ["javascript", "typescript"], ["javascript", "react"],   ["javascript", "express"],
  ["typescript", "angular"],    ["typescript", "react"],   ["typescript", "nextjs"],
  ["typescript", "nestjs"],     ["react",       "nextjs"],  ["react", "reactnative"],
  ["express",    "nestjs"],     ["nestjs",      "postgres"],["dotnet", "postgres"],
  ["dotnet",     "mysql"],      ["postgres",    "supabase"],["sql",    "mysql"],
  ["sql",        "postgres"],   ["sql",         "mongodb"],
];

interface Pt { x: number; y: number }

export default function StackConstellation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [lines, setLines] = useState<Array<{ id: string; p1: Pt; p2: Pt }>>([]);
  const [hovered, setHovered] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const [tooltipPlace, setTooltipPlace] = useState<"top" | "bottom" | "left" | "right">("top");

  const active = hovered ?? pinned;

  useLayoutEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setPinned(null);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const resolvePlace = (id: string): "top" | "bottom" | "left" | "right" => {
    const el = chipRefs.current.get(id);
    if (!el) return "top";
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const step = rect.height + 8;

    const blocked = (dx: number, dy: number) => {
      for (const [oid, oel] of chipRefs.current) {
        if (oid === id) continue;
        const r = oel.getBoundingClientRect();
        const ocx = r.left + r.width / 2;
        const ocy = r.top + r.height / 2;
        if (
          Math.abs(ocx - (cx + dx)) < rect.width * 0.8 &&
          Math.abs(ocy - (cy + dy)) < rect.height * 0.8
        ) return true;
      }
      return false;
    };

    if (!blocked(0, -step)) return "top";
    if (!blocked(-step, 0)) return "left";
    if (!blocked(0, step))  return "bottom";
    return "right";
  };

  const compute = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const cr = container.getBoundingClientRect();
    const center = (id: string): Pt | null => {
      const el = chipRefs.current.get(id);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { x: r.left - cr.left + r.width / 2, y: r.top - cr.top + r.height / 2 };
    };
    setLines(
      CONNECTIONS.flatMap(([a, b]) => {
        const p1 = center(a), p2 = center(b);
        if (!p1 || !p2) return [];
        return [{ id: `${a}-${b}`, p1, p2 }];
      })
    );
  }, []);

  useLayoutEffect(() => {
    compute();
    const obs = new ResizeObserver(compute);
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [compute]);

  const connectedTo = (id: string) =>
    CONNECTIONS.flatMap(([a, b]) => (a === id ? [b] : b === id ? [a] : []));

  return (
    <div ref={containerRef} className="relative">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        {lines.map(({ id, p1, p2 }) => {
          const [a, b] = id.split("-");
          const lit = active && (active === a || active === b);
          return (
            <line
              key={id}
              x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
              stroke={lit ? "var(--accent)" : "var(--line-strong)"}
              strokeWidth={lit ? 1.5 : 0.75}
              strokeOpacity={lit ? 0.7 : 0.35}
              style={{ transition: "stroke 0.25s, stroke-opacity 0.25s, stroke-width 0.25s" }}
            />
          );
        })}
      </svg>

      <div className="relative flex flex-wrap gap-2" style={{ zIndex: 1 }}>
        {STACK.map((tech) => {
          const isActive = active === tech.id;
          const isConnected = active ? connectedTo(active).includes(tech.id) : false;
          return (
            <div
              key={tech.id}
              ref={(el) => { if (el) chipRefs.current.set(tech.id, el); }}
              className="stack-chip cursor-pointer w-11 h-11 rounded-[10px] flex items-center justify-center text-white"
              data-tooltip-id="constellation-tooltip"
              data-tooltip-tech={tech.id}
              style={{
                background: tech.bg,
                transition: "transform 0.2s var(--ease-out), box-shadow 0.2s var(--ease-out), opacity 0.2s",
                opacity: active && !isActive && !isConnected ? 0.35 : 1,
                transform: isActive ? "translateY(-4px) scale(1.12)" : "none",
                boxShadow: isActive ? `0 12px 28px -6px ${tech.bg}99` : "none",
                zIndex: isActive ? 10 : 1,
              }}
              onMouseEnter={() => { setTooltipPlace(resolvePlace(tech.id)); setHovered(tech.id); }}
              onMouseLeave={() => setHovered(null)}
              onClick={() => { setTooltipPlace(resolvePlace(tech.id)); setPinned((prev) => (prev === tech.id ? null : tech.id)); }}
            >
              <tech.Icon size={22} />
            </div>
          );
        })}
      </div>

      <Tooltip
        id="constellation-tooltip"
        place={tooltipPlace}
        render={({ activeAnchor }) => {
          const id = activeAnchor?.getAttribute("data-tooltip-tech");
          const tech = STACK.find((t) => t.id === id);
          if (!tech) return null;
          return (
            <div className="flex items-center gap-2 text-xs" style={{ fontFamily: "var(--font-mono)" }}>
              <tech.Icon size={14} />
              {tech.name}
            </div>
          );
        }}
        style={{
          background: "var(--bg-2)", color: "var(--fg)",
          border: "1px solid var(--glass-border)", borderRadius: 8,
          padding: "6px 12px", fontSize: 12, boxShadow: "var(--shadow)",
          zIndex: 9999,
        }}
      />
    </div>
  );
}
