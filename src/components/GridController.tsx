import React, { useEffect, useState } from 'react';
import { gridCols, activeFilter } from '../lib/stores';
import { useStore } from '@nanostores/react';

const labelStyle: React.CSSProperties = {
  fontSize: 12, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)'
};

export default function GridController(){
  const cols = useStore(gridCols);
  const filter = useStore(activeFilter);
  const [local, setLocal] = useState(cols);

  useEffect(() => {
    setLocal(cols);
    document.documentElement.style.setProperty('--grid-cols', String(cols));
  }, [cols]);

  const setCols = (val: number) => {
    gridCols.set(val);
    document.documentElement.style.setProperty('--grid-cols', String(val));
  };

  return (
    <div style={{display:'flex', alignItems:'center', gap: 16}}>
      <div style={{display:'flex', gap: 8}}>
        {(['all','fashion','portrait','body-swim'] as const).map(k => (
          <button
            key={k}
            onClick={() => activeFilter.set(k)}
            className={`tab ${filter === k ? 'active' : ''}`}
            aria-pressed={filter===k}
            title={`Filter: ${k}`}
          >
            {k.replace('-',' & ')}
          </button>
        ))}
      </div>
      <div style={{display:'flex', alignItems:'center', gap: 8}}>
        <span style={labelStyle}>Grid</span>
        <input
          type="range"
          min={1}
          max={6}
          value={local}
          onChange={(e) => { const v = Number(e.target.value); setLocal(v); setCols(v);}}
          aria-label="Grid columns"
        />
      </div>
    </div>
  );
}
