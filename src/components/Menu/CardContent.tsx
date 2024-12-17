import React from 'react';

interface CardContentProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

export function CardContent({ title, icon, description }: CardContentProps) {
  return (
    <div className="p-6 relative z-10 h-full flex flex-col items-center justify-center">
      {/* Icon with glow effect */}
      <div className="text-4xl mb-4 text-emerald-300 transform transition-all duration-700 
        group-hover:scale-110 group-hover:text-emerald-400 relative">
        <div className="absolute inset-0 blur-xl bg-emerald-500/30 scale-150 opacity-0 
          group-hover:opacity-100 transition-opacity duration-700" />
        {icon}
      </div>

      {/* Title with gradient effect */}
      <h2 className="text-xl font-bold mb-2 bg-gradient-to-r from-emerald-300 to-green-300 
        bg-clip-text text-transparent transform transition-all duration-700 
        group-hover:scale-105">
        {title}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-300 text-center max-w-[80%] transition-colors 
        duration-700 group-hover:text-emerald-200">
        {description}
      </p>
    </div>
  );
}