import { getCoverComponents } from './Covers';
import type { PeekState } from '../hooks/useCoverPeek';

interface Props {
  peek: PeekState;
  accent: string;
}

export default function CoverPeek({ peek, accent }: Props) {
  const covers = getCoverComponents();
  const Cover = covers[peek.idx % covers.length];
  return (
    <div className={`cover-peek ${peek.active ? 'active' : ''}`} style={{ left: peek.x, top: peek.y }}>
      <Cover accent={accent} />
    </div>
  );
}
