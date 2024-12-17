import { useEffect } from 'react';
import { tabs } from '../data/navigationData';

export function useKeyboardNavigation(
  activeTab: string,
  setActiveTab: (tab: string) => void,
  handleCardClick: (id: string) => void
) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      const currentTabIndex = tabs.findIndex(tab => tab.id === activeTab);

      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          if (currentTabIndex > 0) {
            setActiveTab(tabs[currentTabIndex - 1].id);
          }
          break;
        case 'ArrowRight':
          event.preventDefault();
          if (currentTabIndex < tabs.length - 1) {
            setActiveTab(tabs[currentTabIndex + 1].id);
          }
          break;
        case 'Enter':
          // Handle Enter key for selecting items
          const focusedElement = document.activeElement;
          if (focusedElement?.tagName === 'BUTTON') {
            focusedElement.click();
          }
          break;
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeTab, setActiveTab, handleCardClick]);
}