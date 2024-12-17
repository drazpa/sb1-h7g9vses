import { useEffect, useCallback } from 'react';

interface KeyPressOptions {
  key: string;
  ctrl?: boolean;
  alt?: boolean;
  shift?: boolean;
}

export function useKeyPress(
  options: KeyPressOptions,
  handler: (event: KeyboardEvent) => void
) {
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    const matchesKey = event.key === options.key;
    const matchesCtrl = options.ctrl ? event.ctrlKey : true;
    const matchesAlt = options.alt ? event.altKey : true;
    const matchesShift = options.shift ? event.shiftKey : true;

    if (matchesKey && matchesCtrl && matchesAlt && matchesShift) {
      handler(event);
    }
  }, [options, handler]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);
}