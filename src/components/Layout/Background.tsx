import React, { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { BACKGROUND_IMAGE } from '../../utils/constants/imageUrls';

export function Background({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BACKGROUND_IMAGE})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      
      {/* Animated Dark Overlay */}
      <motion.div 
        className="absolute inset-0 bg-black/35"
        animate={{
          backgroundColor: ['rgba(0,0,0,0.35)', 'rgba(0,0,0,0.60)', 'rgba(0,0,0,0.35)']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-start p-8">
        {children}
      </div>
    </div>
  );
}