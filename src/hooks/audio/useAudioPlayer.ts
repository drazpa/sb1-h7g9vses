import { useRef } from 'react';
import { useAudioState } from './useAudioState';
import { useAudioControls } from './useAudioControls';
import { useAudioInitialization } from './useAudioInitialization';

interface UseAudioPlayerProps {
  src: string;
  defaultVolume?: number;
  autoplay?: boolean;
}

export function useAudioPlayer({
  src,
  defaultVolume = 0.5,
  autoplay = true
}: UseAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const {
    isPlaying,
    volume,
    isMuted,
    setIsPlaying,
    setVolume,
    setIsMuted
  } = useAudioState(defaultVolume);

  const {
    handlePlay,
    handlePause,
    handleVolumeChange,
    handleToggleMute
  } = useAudioControls({
    audioRef,
    setIsPlaying,
    setVolume,
    setIsMuted
  });

  useAudioInitialization({
    audioRef,
    volume: defaultVolume,
    autoplay,
    onInitSuccess: () => setIsPlaying(true),
    onInitError: () => setIsPlaying(false)
  });

  const togglePlay = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  return {
    audioRef,
    isPlaying,
    volume,
    isMuted,
    togglePlay,
    handleVolumeChange,
    toggleMute: handleToggleMute
  };
}