import React from 'react';

interface AppCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  onClick: () => void;
}

export function AppCard({ title, icon, description, onClick }: AppCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative bg-black/20 backdrop-blur-sm rounded-xl p-8 transition-all duration-300 
        hover:scale-105 hover:bg-black/30 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 
        w-full aspect-video flex flex-col items-center justify-center text-white overflow-hidden"
    >
      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent 
        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="text-4xl mb-4 text-emerald-300 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h2 className="text-xl font-bold mb-2 group-hover:text-emerald-300 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-sm text-gray-300 text-center max-w-[80%]">
          {description}
        </p>
      </div>
    </button>
  );
}