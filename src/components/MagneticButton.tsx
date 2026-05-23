import { useRef } from 'react';
import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  strength?: number;
  [key: string]: unknown;
}

export default function MagneticButton({ children, className = '', onClick, strength = 0.4, ...rest }: Props) {
  const ref = useRef<HTMLButtonElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    if (innerRef.current)
      innerRef.current.style.transform = `translate(${x * (strength as number) * 0.4}px, ${y * (strength as number) * 0.4}px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate(0,0)';
    if (innerRef.current) innerRef.current.style.transform = 'translate(0,0)';
  };

  return (
    <button ref={ref} className={`btn ${className}`} onMouseMove={onMove} onMouseLeave={onLeave} onClick={onClick} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      <span ref={innerRef} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)' }}>
        {children}
      </span>
    </button>
  );
}
