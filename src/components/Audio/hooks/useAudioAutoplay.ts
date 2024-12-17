import { useEffect } from 'react';
import { useAudioContext } from '../../../contexts/AudioContext';

export function useAudioAutoplay() {
  const { audioRef, setIsPlaying } = useAudioContext();

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              // Remove event listeners after successful play
              cleanup();
            })
            .catch(console.error);
        }
      }
    };

    const cleanup = () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };

    // Add event listeners for user interaction
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);

    return cleanup;
  }, [audioRef, setIsPlaying]);
}