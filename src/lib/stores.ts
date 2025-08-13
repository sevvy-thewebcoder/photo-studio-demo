import { atom } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';

export const gridCols = persistentAtom<number>('grid-cols', 4, {
  encode: JSON.stringify,
  decode: JSON.parse
});

export const activeFilter = atom<'all' | 'fashion' | 'portrait' | 'body-swim'>('all');
