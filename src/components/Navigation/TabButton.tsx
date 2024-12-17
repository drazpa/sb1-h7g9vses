import React from 'react';
import { Tab } from './types';

interface TabButtonProps extends Tab {
  isActive: boolean;
  onClick: () => void;
}

export function TabButton({ id, label, icon, isActive, onClick }: TabButtonProps) {
  return (
    <button
      data-tab={id}
      onClick={onClick}
      className={`
        flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-700
        whitespace-nowrap font-medium relative overflow-hidden
        ${isActive 
          ? 'bg-green-500/20 text-green-300' 
          : 'text-gray-300 hover:bg-black/40 hover:text-green-300'}
      `}
      style={{
        boxShadow: isActive ? '0 0 20px rgba(34, 197, 94, 0.2)' : 'none'
      }}
    >
      {/* Background glow effect */}
      {isActive && (
        <div className="absolute inset-0 bg-green-500/10 blur-xl transform scale-150" />
      )}

      {/* Content */}
      <div className="relative z-10 flex items-center gap-2">
        <span className="text-xl transition-transform duration-700 group-hover:scale-110">
          {icon}
        </span>
        <span className="font-semibold">{label}</span>
      </div>

      {/* Bottom border glow */}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-400/50 
          shadow-lg shadow-green-500/50" />
      )}
    </button>
  );
}