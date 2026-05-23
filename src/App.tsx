import { useState, useEffect } from "react";
import "./index.css";

import { useRoute } from "./hooks/useRoute";
import { useCoverPeek } from "./hooks/useCoverPeek";
import { ACCENT_OPTIONS } from "./data/accents";

import NavPill from "./components/NavPill";
import ThemeToggle from "./components/ThemeToggle";
import AccentPicker from "./components/AccentPicker";
import CoverPeek from "./components/CoverPeek";

import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  const [route, navigate] = useRoute();
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );
  const [accentId, setAccentId] = useState<string>(() => {
    const stored = localStorage.getItem("accentId");
    if (stored) {
      try {
        const id = JSON.parse(stored);
        if (ACCENT_OPTIONS.some((o) => o.id === id)) return id;
      } catch {
        /* ignore */
      }
    }
    return "indigo";
  });

  const accentOption =
    ACCENT_OPTIONS.find((o) => o.id === accentId) ?? ACCENT_OPTIONS[0];
  const accentColor = accentOption[theme as "dark" | "light"];
  const { peek, setPeek } = useCoverPeek();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const option =
      ACCENT_OPTIONS.find((o) => o.id === accentId) ?? ACCENT_OPTIONS[0];
    document.documentElement.style.setProperty(
      "--accent",
      option[theme as "dark" | "light"],
    );
    localStorage.setItem("accentId", accentId);
  }, [accentId, theme]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    setPeek((s) => ({ ...s, active: false }));
  }, [route, setPeek]);

  let Page: React.FC<any>;
  if (route === "Projects") Page = ProjectsPage;
  else if (route === "about") Page = AboutPage;
  else Page = HomePage;

  return (
    <>
      <div className="ambient fixed inset-0 pointer-events-none overflow-hidden z-0" />
      <div className="grain" />
      <header className="topbar fixed top-6 left-0 right-0 flex items-center justify-between sm:justify-center z-50 pointer-events-none px-6">
        <a
          href="/home"
          className="brand hidden sm:flex align-center"
          onClick={(e) => {
            e.preventDefault();
            navigate("home");
          }}
        >
          <span className="dot" />
          <span>ali_alguadeb</span>
        </a>
        <AccentPicker
          accentId={accentId}
          setAccentId={setAccentId}
          theme={theme}
        />
        <NavPill route={route} navigate={navigate} />
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </header>
      <main className="app relative z-[2] min-h-screen">
        <div key={route}>
          <Page
            navigate={navigate}
            peek={peek}
            setPeek={setPeek}
            accent={accentColor}
          />
        </div>
      </main>
      <CoverPeek peek={peek} accent={accentColor} />
    </>
  );
}
