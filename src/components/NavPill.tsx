import { useRef, useState, useEffect } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
];

interface Props {
  route: string;
  navigate: (r: string) => void;
}

export default function NavPill({ route, navigate }: Props) {
  const pillRef = useRef<HTMLElement>(null);
  const [indicator, setIndicator] = useState({ left: 6, width: 0 });

  useEffect(() => {
    const pill = pillRef.current;
    if (!pill) return;
    const active = pill.querySelector<HTMLElement>("a.active");
    if (active) {
      const pillRect = pill.getBoundingClientRect();
      const r = active.getBoundingClientRect();
      setIndicator({ left: r.left - pillRect.left, width: r.width });
    }
  }, [route]);

  return (
    <nav className="nav-pill" ref={pillRef}>
      <span
        className="nav-indicator"
        style={{ left: indicator.left, width: indicator.width }}
      />
      {NAV_ITEMS.map((it) => (
        <a
          key={it.id}
          href={`/${it.id}`}
          className={route === it.id ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            navigate(it.id);
          }}
        >
          {it.label}
        </a>
      ))}
    </nav>
  );
}
