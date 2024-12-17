import React from 'react';
import { motion } from 'framer-motion';
import { AppCardProps } from './types';
import { Plus } from 'lucide-react';
import { addTokenToMetaMask, POLYGON_TOKENS } from '../../utils/metamask';

export function AppCard({ title, icon, description, onClick, imageSrc, link, isComingSoon, isMetamask }: AppCardProps) {
  const handleClick = async () => {
    if (isMetamask) {
      const tokenSymbol = title.split(' ')[0];
      if (tokenSymbol in POLYGON_TOKENS) {
        await addTokenToMetaMask(POLYGON_TOKENS[tokenSymbol as keyof typeof POLYGON_TOKENS]);
      }
    } else if (!isComingSoon && (link || onClick)) {
      if (link) {
        window.open(link, '_blank');
      } else {
        onClick?.();
      }
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`group relative w-full aspect-square rounded-xl overflow-hidden transform 
        transition-all duration-700 hover:scale-105 hover:z-10 card-glow card-hover-glow
        ${isComingSoon ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Card Background with Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform transition-transform 
          duration-1000 group-hover:scale-110 bg-black"
        style={{ 
          backgroundImage: `url(${imageSrc})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />

      {/* Dark Overlay */}
      <div className={`absolute inset-0 transition-all duration-700
        ${isComingSoon 
          ? 'bg-black/90 group-hover:bg-black/85' 
          : 'bg-black/70 group-hover:bg-black/50'}`} 
      />

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center p-6 gap-4">
        {/* Icon with Enhanced Glow */}
        <div className="relative">
          <div className="absolute inset-0 scale-150 blur-xl bg-green-500/40 animate-glow-pulse" />
          <div className={`relative z-10 transform transition-all duration-700 
            group-hover:scale-110 ${isComingSoon ? 'text-green-700' : 'text-green-400 group-hover:text-green-300'}`}>
            {icon}
          </div>
        </div>

        {/* Title */}
        <h2 className={`text-xl font-bold text-center transition-colors duration-700
          ${isComingSoon ? 'text-green-700' : 'text-white group-hover:text-white'} text-glow`}>
          {title}
        </h2>

        {/* Description */}
        <p className={`text-sm text-center transition-colors duration-700
          ${isComingSoon 
            ? 'text-green-800' 
            : isMetamask 
              ? 'text-green-400/80 text-xs font-mono break-all max-w-[90%] leading-relaxed'
              : 'text-green-100/90 group-hover:text-green-100'}`}>
          {isComingSoon ? 'Coming Soon' : description}
        </p>

        {/* MetaMask Button */}
        {isMetamask && !isComingSoon && (
          <div className="mt-2 flex items-center gap-2 bg-green-500/20 px-3 py-1.5 rounded-full
            text-green-300 text-sm font-medium hover:bg-green-500/30 transition-colors">
            <Plus className="w-4 h-4" />
            Add to MetaMask
          </div>
        )}
      </div>
    </motion.button>
  );
}