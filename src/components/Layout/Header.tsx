import React from 'react';
import { motion } from 'framer-motion';
import magicMintLogo from '../../components/images/Populate/MAGICMINT TOKEN (1).png';
import { LayoutGrid, List } from 'lucide-react';

interface HeaderProps {
  viewMode: 'grid' | 'list';
  setViewMode: (mode: 'grid' | 'list') => void;
}

export function Header({ viewMode, setViewMode }: HeaderProps) {
  return (
    <header className="text-center mb-8 relative">
      {/* Logo Container with Enhanced Animation */}
      <motion.div 
        className="w-32 h-32 mx-auto mb-4 relative"
        animate={{ 
          rotate: 360 
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Outer Pulsating Glow */}
        <div className="absolute inset-0 rounded-full bg-emerald-500/30 blur-[50px] animate-glow-pulse" />
        
        {/* Middle Glow Layer */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/40 to-emerald-300/40 blur-3xl animate-pulse" />
        
        {/* Inner Glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/30 to-emerald-200/30 blur-xl" />
        
        {/* Logo Image */}
        <img 
          src={magicMintLogo}
          alt="MagicMint Logo" 
          className="relative z-10 w-full h-full object-contain"
        />
      </motion.div>

      {/* Title */}
      <h1 className="text-6xl font-bold mb-4 tracking-tight relative">
        <div className="absolute inset-0 blur-3xl bg-emerald-500/20 scale-150" />
        <span className="text-white relative z-10">Magic</span>
        <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-300 text-transparent bg-clip-text relative z-10">
          Mint
        </span>
      </h1>
      
      <div className="flex flex-col items-center gap-2">
        <p className="text-xl text-emerald-100/80 mb-2">
          A Hybrid Trading Card Game of Value
        </p>

        {/* View Mode Toggle */}
        <div className="flex gap-2 bg-black/30 backdrop-blur-sm rounded-lg p-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
              viewMode === 'grid' 
                ? 'bg-emerald-500/20 text-emerald-300' 
                : 'text-gray-400 hover:text-emerald-300'
            }`}
          >
            <LayoutGrid className="w-5 h-5" />
            <span>Grid</span>
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-all duration-300 flex items-center gap-2 ${
              viewMode === 'list' 
                ? 'bg-emerald-500/20 text-emerald-300' 
                : 'text-gray-400 hover:text-emerald-300'
            }`}
          >
            <List className="w-5 h-5" />
            <span>List</span>
          </button>
        </div>
      </div>
    </header>
  );
}