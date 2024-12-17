import React from 'react';

interface CardImageProps {
  imageSrc?: string;
}

export function CardImage({ imageSrc }: CardImageProps) {
  return (
    <div className="relative w-full h-48">
      <div 
        className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
        style={{
          backgroundImage: imageSrc ? `url(${imageSrc})` : 'linear-gradient(to bottom, rgba(255, 200, 100, 0.2), transparent)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
    </div>
  );
}