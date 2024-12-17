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
    if (!hasInitialized.current && audioRef.current) {
      hasInitialized.current = true;
      
      // Configure audio element
      audioRef.current.volume = volume;
      
      if (autoplay) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              onInitSuccess?.();
            })
            .catch(() => {
              // If autoplay fails, wait for user interaction
              const handleInteraction = () => {
                if (audioRef.current) {
                  audioRef.current.play()
                    .then(() => {
                      onInitSuccess?.();
                      document.removeEventListener('click', handleInteraction);
                    })
                    .catch(onInitError);
                }
              };
              document.addEventListener('click', handleInteraction);
            });
        }
      }
    }
  }, [audioRef, volume, autoplay, onInitSuccess, onInitError]);
}