import { useState } from 'react';

type ViewMode = 'grid' | 'list';

export function useViewMode(defaultMode: ViewMode = 'grid') {
  const [viewMode, setViewMode] = useState<ViewMode>(defaultMode);
  
  const toggleViewMode = () => {
    setViewMode(current => current === 'grid' ? 'list' : 'grid');
  };

  return { viewMode, setViewMode, toggleViewMode };
}