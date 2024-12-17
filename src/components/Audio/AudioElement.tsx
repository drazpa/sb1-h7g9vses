import React from 'react';

interface AudioElementProps {
  src: string;
  audioRef: React.RefObject<HTMLAudioElement>;
  loop?: boolean;
  preload?: 'none' | 'metadata' | 'auto';
}

export function AudioElement({ 
  src, 
  audioRef, 
  loop = true,
  preload = 'auto'
}: AudioElementProps) {
  return (
    <audio
      ref={audioRef}
      src={src}
      loop={loop}
      preload={preload}
      className="hidden"
    />
  );
}