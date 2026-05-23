interface CoverProps { accent: string; }

export function getCoverComponents(): React.FC<CoverProps>[] {
  return [Cover01, Cover02, Cover03, Cover04, Cover05, Cover06];
}

export function Cover01({ accent }: CoverProps) {
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="250" fill="#0c0e16" />
      {Array.from({ length: 9 }).flatMap((_, i) =>
        Array.from({ length: 14 }).map((__, j) => {
          const x = j * 28 + 14;
          const y = i * 28 + 14;
          const r = Math.max(1, 6 - Math.hypot(x - 200, y - 125) / 30);
          return <circle key={`${i}-${j}`} cx={x} cy={y} r={r} fill={accent} opacity={0.6 + r / 15} />;
        })
      )}
      <circle cx="200" cy="125" r="38" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.8" />
    </svg>
  );
}

export function Cover02({ accent }: CoverProps) {
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="250" fill="#0a0d14" />
      {Array.from({ length: 24 }).map((_, i) => {
        const h = 6 + Math.sin(i * 0.5) * 30 + 30;
        return (
          <rect key={i} x={i * 17} y={(250 - h) / 2} width="10" height={h} rx="5"
            fill={i % 3 === 0 ? accent : '#fff'} opacity={i % 3 === 0 ? 1 : 0.18} />
        );
      })}
    </svg>
  );
}

export function Cover03({ accent }: CoverProps) {
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="250" fill="#0a0d14" />
      <rect width="400" height="250" fill={`url(#c3-a-${accent.replace('#', '')})`} />
      {Array.from({ length: 5 }).map((_, i) => (
        <path key={i} d={`M 0 ${50 + i * 40} Q 200 ${20 + i * 40} 400 ${60 + i * 40}`}
          fill="none" stroke="white" strokeWidth="1" opacity="0.15" />
      ))}
    </svg>
  );
}

export function Cover04({ accent }: CoverProps) {
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="250" fill="#10131c" />
      {Array.from({ length: 14 }).map((_, i) => (
        <circle key={i} cx="200" cy="125" r={10 + i * 14} fill="none" stroke={accent}
          strokeWidth="1" opacity={1 - i * 0.06} strokeDasharray={i % 2 === 0 ? '0' : '3 4'} />
      ))}
      <rect x="170" y="95" width="60" height="60" fill={accent} opacity="0.9" />
    </svg>
  );
}

export function Cover05({ accent }: CoverProps) {
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="250" fill="#0d1018" />
      {Array.from({ length: 18 }).map((_, i) => (
        <line key={i} x1={-50 + i * 30} y1="-20" x2={50 + i * 30} y2="270"
          stroke={i % 4 === 0 ? accent : '#fff'}
          strokeWidth={i % 4 === 0 ? 2 : 0.5}
          opacity={i % 4 === 0 ? 0.9 : 0.12} />
      ))}
      <circle cx="320" cy="60" r="42" fill={accent} opacity="0.85" />
    </svg>
  );
}

export function Cover06({ accent }: CoverProps) {
  return (
    <svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="250" fill="#0a0d14" />
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse key={i} cx={150 + i * 12} cy={125 + i * 6}
          rx={60 + i * 22} ry={30 + i * 12}
          fill="none" stroke={accent} strokeWidth="1" opacity={0.6 - i * 0.05} />
      ))}
      <ellipse cx="150" cy="125" rx="38" ry="22" fill={accent} opacity="0.6" />
    </svg>
  );
}
