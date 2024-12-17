import { useMemo } from 'react';
import { getGridImages } from '../utils/imageUtils';

export function useGridImages(count: number) {
  return useMemo(() => getGridImages(count), [count]);
}