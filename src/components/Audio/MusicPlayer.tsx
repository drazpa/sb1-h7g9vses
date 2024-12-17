import React from 'react';
import { Play, Pause, Volume2, VolumeX, Volume1 } from 'lucide-react';
import { useAudioPlayer } from '../../hooks/audio/useAudioPlayer';
import { AUDIO_TRACKS } from '../../utils/constants/audioUrls';
import { AudioElement } from './AudioElement';

export function MusicPlayer() {
  const {
    audioRef,
    isPlaying,
    volume,
    isMuted,
    togglePlay,
    handleVolumeChange,
    toggleMute
  } = useAudioPlayer({
    src: AUDIO_TRACKS.MAIN_THEME,
    defaultVolume: 0.5,
    autoplay: true // Enable autoplay
  });

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return <VolumeX />;
    if (volume < 0.5) return <Volume1 />;
    return <Volume2 />;
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-black/60 backdrop-blur-sm rounded-full p-2 flex items-center gap-2">
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center
            hover:bg-emerald-500/30 transition-all duration-300 group"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-emerald-300 group-hover:text-emerald-200" />
          ) : (
            <Play className="w-6 h-6 text-emerald-300 group-hover:text-emerald-200" />
          )}
        </button>

        <div className="flex items-center gap-2 bg-emerald-500/10 rounded-full px-3 py-1">
          <button
            onClick={toggleMute}
            className="w-8 h-8 rounded-full flex items-center justify-center
              hover:bg-emerald-500/20 transition-all duration-300 group"
          >
            <div className="w-5 h-5 text-emerald-300 group-hover:text-emerald-200">
              {getVolumeIcon()}
            </div>
          </button>
          
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
            className="w-24 h-2 bg-emerald-900/50 rounded-full appearance-none cursor-pointer
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
              [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full 
              [&::-webkit-slider-thumb]:bg-emerald-300 [&::-webkit-slider-thumb]:hover:bg-emerald-200
              [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-300"
          />
        </div>
      </div>

      <AudioElement 
        src={AUDIO_TRACKS.MAIN_THEME} 
        audioRef={audioRef}
        preload="auto"
      />
    </div>
  );
}