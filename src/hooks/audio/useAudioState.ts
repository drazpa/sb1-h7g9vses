import { useState } from 'react';

interface AudioState {
  isPlaying: boolean;
  volume: number;
  isMuted: boolean;
}

export function useAudioState(defaultVolume: number = 0.5) {
  const [state, setState] = useState<AudioState>({
    isPlaying: false,
    volume: defaultVolume,
    isMuted: false
  });

  const setIsPlaying = (isPlaying: boolean) => {
    setState(prev => ({ ...prev, isPlaying }));
  };

  const setVolume = (volume: number) => {
    setState(prev => ({ ...prev, volume }));
  };

  const setIsMuted = (isMuted: boolean) => {
    setState(prev => ({ ...prev, isMuted }));
  };

  return {
    ...state,
    setIsPlaying,
    setVolume,
    setIsMuted
  };
}