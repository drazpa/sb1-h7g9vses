import React, { useState } from 'react';
import { AppLayout } from './components/Layout/AppLayout';
import { MenuGrid } from './components/Menu/MenuGrid';
import { Tabs } from './components/Navigation/Tabs';
import { MusicPlayer } from './components/Audio/MusicPlayer';
import { WelcomePage } from './components/Welcome/WelcomePage';
import { useKeyboardNavigation } from './hooks/useKeyboardNavigation';
import { useMenuNavigation } from './hooks/useMenuNavigation';
import { AudioProvider } from './contexts/AudioContext';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeTab, setActiveTab] = useState('main');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { handleCardClick } = useMenuNavigation();

  useKeyboardNavigation(activeTab, setActiveTab, handleCardClick);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <AudioProvider>
      {showWelcome ? (
        <WelcomePage onComplete={handleWelcomeComplete} />
      ) : (
        <AppLayout viewMode={viewMode} setViewMode={setViewMode}>
          <MusicPlayer />
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <MenuGrid activeTab={activeTab} viewMode={viewMode} />
        </AppLayout>
      )}
    </AudioProvider>
  );
}