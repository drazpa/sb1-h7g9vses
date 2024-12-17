import { useCallback } from 'react';
import { useAudioContext } from '../../../contexts/AudioContext';

export function useAudioVolume() {
  const { audioRef, setVolume, setIsMuted } = useAudioContext();

  const handleVolumeChange = useCallback((newVolume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = Math.max(0, Math.min(1, newVolume));
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  }, [audioRef, setVolume, setIsMuted]);

  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      const newMutedState = !audioRef.current.muted;
      audioRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  }, [audioRef, setIsMuted]);

  return { handleVolumeChange, toggleMute };
}