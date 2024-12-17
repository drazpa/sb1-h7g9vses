import { useCallback } from 'react';

export function useMenuNavigation() {
  const handleCardClick = useCallback((section: string, navigateTo?: string) => {
    if (navigateTo) {
      // Handle navigation to different tabs
      const tabElement = document.querySelector(`[data-tab="${navigateTo}"]`);
      if (tabElement) {
        (tabElement as HTMLElement).click();
      }
    } else {
      console.log(`Handling section: ${section}`);
      // Handle regular section clicks
    }
  }, []);

  return { handleCardClick };
}