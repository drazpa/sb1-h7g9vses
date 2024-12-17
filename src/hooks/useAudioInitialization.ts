import { useEffect, useRef } from 'react';

interface UseAudioInitializationProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  onInitSuccess?: () => void;
  onInitError?: () => void;
  volume?: number;
  autoplay?: boolean;
}

export function useAudioInitialization({
  audioRef,
  onInitSuccess,
  onInitError,
  volume = 0.5,
  autoplay = true
}: UseAudioInitializationProps) {
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!hasInitialized.current && audioRef.current && autoplay) {
      hasInitialized.current = true;
      
      // Configure audio element
      audioRef.current.volume = volume;
      
      // Wait for user interaction
      const handleUserInteraction = () => {
        if (audioRef.current) {
          const playPromise = audioRef.current.play();
          
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                onInitSuccess?.();
                // Remove event listeners after successful play
                cleanup();
              })
              .catch((error) => {
                console.log('Audio initialization failed:', error);
                onInitError?.();
              });
          }
        }
      };

      // Add event listeners for user interaction
      document.addEventListener('click', handleUserInteraction, { once: true });
      document.addEventListener('touchstart', handleUserInteraction, { once: true });
      document.addEventListener('keydown', handleUserInteraction, { once: true });

      const cleanup = () => {
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
      };

      return cleanup;
    }
  }, [audioRef, volume, onInitSuccess, onInitError, autoplay]);
}