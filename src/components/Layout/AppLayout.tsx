import React, { PropsWithChildren, useEffect } from 'react';
import { Background } from './Background';
import { Header } from './Header';
import { Footer } from './Footer';
import { useAudioContext } from '../../contexts/AudioContext';

interface AppLayoutProps extends PropsWithChildren {
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
}

export function AppLayout({ children, viewMode, setViewMode }: AppLayoutProps) {
  const { audioRef, setIsPlaying } = useAudioContext();

  useEffect(() => {
    // Try to play audio immediately when AppLayout mounts
    if (audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // If autoplay is blocked, set up click handler
            const handleFirstInteraction = () => {
              if (audioRef.current) {
                audioRef.current.play()
                  .then(() => {
                    setIsPlaying(true);
                    document.removeEventListener('click', handleFirstInteraction);
                  });
              }
            };
            document.addEventListener('click', handleFirstInteraction);
          });
      }
    }
  }, []);

  return (
    <Background>
      <div className="min-h-screen w-full flex flex-col">
        <Header viewMode={viewMode} setViewMode={setViewMode} />
        <main className="w-full max-w-7xl mx-auto px-4 flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </Background>
  );
}