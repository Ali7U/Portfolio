interface Props {
  theme: string;
  setTheme: (t: string) => void;
}

export default function ThemeToggle({ theme, setTheme }: Props) {
  return (
    <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
      <svg className="sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="4" fill="currentColor" />
        <g strokeLinecap="round">
          <line x1="12" y1="2" x2="12" y2="5" /><line x1="12" y1="19" x2="12" y2="22" />
          <line x1="2" y1="12" x2="5" y2="12" /><line x1="19" y1="12" x2="22" y2="12" />
          <line x1="4.9" y1="4.9" x2="6.9" y2="6.9" /><line x1="17.1" y1="17.1" x2="19.1" y2="19.1" />
          <line x1="4.9" y1="19.1" x2="6.9" y2="17.1" /><line x1="17.1" y1="6.9" x2="19.1" y2="4.9" />
        </g>
      </svg>
      <svg className="moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" fill="currentColor" />
      </svg>
    </button>
  );
}
