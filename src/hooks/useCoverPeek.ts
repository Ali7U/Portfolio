import { useState, useEffect, useCallback } from 'react';

export interface PeekState {
  active: boolean;
  x: number;
  y: number;
  idx: number;
}

export function useCoverPeek() {
  const [peek, setPeek] = useState<PeekState>({ active: false, x: 0, y: 0, idx: 0 });
  const onMove = useCallback((e: MouseEvent) => {
    setPeek(p => p.active ? { ...p, x: e.clientX, y: e.clientY } : p);
  }, []);
  useEffect(() => {
    if (!peek.active) return;
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [peek.active, onMove]);
  return { peek, setPeek };
}
