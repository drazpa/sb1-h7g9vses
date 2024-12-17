import { useCallback, useEffect } from 'react';
import { useAudioContext } from '../../contexts/AudioContext';

export function useAudioInteraction() {
  const { audioRef, isPlaying, setIsPlaying } = useAudioContext();

  const playAudio = useCallback(() => {
    if (audioRef.current && !isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error('Audio playback failed:', error);
            setIsPlaying(false);
          });
      }
    }
  }, [audioRef, isPlaying, setIsPlaying]);

  // Add global click listener
  useEffect(() => {
    const handleGlobalClick = () => {
      if (!isPlaying) {
        playAudio();
      }
    };

    document.addEventListener('click', handleGlobalClick);

    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [isPlaying, playAudio]);

  return { playAudio };
}