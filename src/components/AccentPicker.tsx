import { useState, useEffect, useRef } from 'react';
import { ACCENT_OPTIONS } from '../data/accents';

interface Props {
  accentId: string;
  setAccentId: (v: string) => void;
  theme: string;
}

export default function AccentPicker({ accentId, setAccentId, theme }: Props) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const t = theme as 'dark' | 'light';
  const triggerColor = (ACCENT_OPTIONS.find(o => o.id === accentId) ?? ACCENT_OPTIONS[0])[t];

  useEffect(() => {
    if (!open) return;
    const close = (e: Event) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    document.addEventListener('touchstart', close);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('touchstart', close);
    };
  }, [open]);

  return (
    <div className="accent-picker-wrap relative pointer-events-auto" ref={wrapRef}>
      <div className="accent-picker accent-picker-desktop" role="radiogroup">
        <span className="accent-label">Accent</span>
        {ACCENT_OPTIONS.map(opt => (
          <button key={opt.id} className={`accent-swatch ${accentId === opt.id ? 'active' : ''}`}
            style={{ background: opt[t] }} onClick={() => setAccentId(opt.id)}
            aria-label={opt.label} title={opt.label} />
        ))}
      </div>

      <button className="accent-mobile-trigger" onClick={() => setOpen(o => !o)}
        aria-label="Choose accent color" style={{ background: triggerColor }} />

      {open && (
        <div className="accent-dropdown">
          {ACCENT_OPTIONS.map(opt => (
            <button key={opt.id} className={`accent-dropdown-item ${accentId === opt.id ? 'active' : ''}`}
              onClick={() => { setAccentId(opt.id); setOpen(false); }}>
              <span className="accent-dropdown-swatch w-4.5 h-4.5 rounded-full shrink-0" style={{ background: opt[t] }} />
              <span className="accent-dropdown-label flex-1">{opt.label}</span>
              {accentId === opt.id && (
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l4 4 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
