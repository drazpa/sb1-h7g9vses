import { useState, useEffect, useRef } from 'react';
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
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [volume, setVolume] = useState(defaultVolume);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useAudioInitialization({
    audioRef,
    volume: defaultVolume,
    onInitSuccess: () => setIsPlaying(true),
    onInitError: () => setIsPlaying(false)
  });

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            setIsPlaying(false);
          });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const newMutedState = !isMuted;
      audioRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  return {
    audioRef,
    isPlaying,
    volume,
    isMuted,
    togglePlay,
    handleVolumeChange,
    toggleMute
  };
}