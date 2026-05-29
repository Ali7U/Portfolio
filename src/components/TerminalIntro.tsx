import { useEffect, useState } from "react";

const SEQUENCE = [
  { cmd: true,  text: "whoami" },
  { cmd: false, text: "Ali AlGuadeb · Full-stack Engineer" },
  { cmd: true,  text: "cat location.txt" },
  { cmd: false, text: "Riyadh, Saudi Arabia" },
  { cmd: true,  text: "ls stack/" },
  { cmd: false, text: "Angular  React  Next.js  .NET  React Native" },
  { cmd: true,  text: "cat philosophy.txt" },
  { cmd: false, text: "Build end-to-end · ship fast · craft matters" },
];

const SPEED = { cmd: 55, out: 16 };
const PAUSE = { cmd: 280, out: 60 };

export default function TerminalIntro() {
  const [done, setDone] = useState<{ cmd: boolean; text: string }[]>([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (lineIdx >= SEQUENCE.length) { setFinished(true); return; }
    const line = SEQUENCE[lineIdx];
    if (charIdx < line.text.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), SPEED[line.cmd ? "cmd" : "out"]);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setDone((d) => [...d, line]);
      setLineIdx((i) => i + 1);
      setCharIdx(0);
    }, PAUSE[line.cmd ? "cmd" : "out"]);
    return () => clearTimeout(t);
  }, [lineIdx, charIdx]);

  const current = lineIdx < SEQUENCE.length ? SEQUENCE[lineIdx] : null;

  return (
    <div className="terminal-window">
      <div className="terminal-bar">
        <span className="terminal-dot" style={{ background: "#ff5f57" }} />
        <span className="terminal-dot" style={{ background: "#febc2e" }} />
        <span className="terminal-dot" style={{ background: "#28c840" }} />
        <span className="terminal-title">bash</span>
      </div>
      <div className="terminal-body">
        {done.map((line, i) => (
          <div key={i} className="terminal-line">
            {line.cmd
              ? <><span className="terminal-prompt">~</span><span className="terminal-cmd">{line.text}</span></>
              : <span className="terminal-out">{line.text}</span>
            }
          </div>
        ))}
        {current && (
          <div className="terminal-line">
            {current.cmd
              ? <><span className="terminal-prompt">~</span><span className="terminal-cmd">{current.text.slice(0, charIdx)}</span></>
              : <span className="terminal-out">{current.text.slice(0, charIdx)}</span>
            }
            <span className="terminal-cursor" />
          </div>
        )}
        {finished && (
          <div className="terminal-line">
            <span className="terminal-prompt">~</span>
            <span className="terminal-cursor" />
          </div>
        )}
      </div>
    </div>
  );
}
