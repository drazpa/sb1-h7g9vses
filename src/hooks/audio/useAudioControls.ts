import { useCallback } from 'react';
import { playAudio, setAudioVolume, toggleAudioMute } from '../../utils/audio/audioUtils';

interface UseAudioControlsProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  setIsPlaying: (isPlaying: boolean) => void;
  setVolume: (volume: number) => void;
  setIsMuted: (isMuted: boolean) => void;
}

export function useAudioControls({
  audioRef,
  setIsPlaying,
  setVolume,
  setIsMuted
}: UseAudioControlsProps) {
  const handlePlay = useCallback(async () => {
    const success = await playAudio(audioRef.current);
    setIsPlaying(success);
  }, [audioRef, setIsPlaying]);

  const handlePause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [audioRef, setIsPlaying]);

  const handleVolumeChange = useCallback((newVolume: number) => {
    setAudioVolume(audioRef.current, newVolume);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  }, [audioRef, setVolume, setIsMuted]);

  const handleToggleMute = useCallback(() => {
    const isMuted = toggleAudioMute(audioRef.current);
    setIsMuted(isMuted);
  }, [audioRef, setIsMuted]);

  return {
    handlePlay,
    handlePause,
    handleVolumeChange,
    handleToggleMute
  };
}