import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '../../data/menu/types';
import { getImageForItem } from '../../utils/imageUtils';

interface ListViewProps {
  items: MenuItem[];
  onItemClick: (id: string) => void;
}

export function ListView({ items, onItemClick }: ListViewProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {items.map((item, index) => (
        <motion.button
          key={item.id}
          className="w-full group bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden
            hover:bg-black/60 transition-all duration-500 flex items-stretch"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={() => onItemClick(item.id)}
        >
          {/* Image Section */}
          <div className="w-32 h-24 relative overflow-hidden flex-shrink-0">
            <div 
              className="absolute inset-0 bg-cover bg-center transform transition-transform 
                duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url(${getImageForItem(index)})`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </div>

          {/* Content Section */}
          <div className="flex-grow p-4 flex items-center">
            <div className="mr-6 text-emerald-400 transform transition-transform duration-500 
              group-hover:scale-110 group-hover:text-emerald-300">
              {item.icon}
            </div>
            <div className="text-left flex-grow">
              <h3 className="text-xl font-bold text-emerald-300 mb-2 group-hover:text-emerald-200">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 group-hover:text-emerald-100/90">
                {item.description}
              </p>
            </div>
          </div>

          {/* Glowing Border */}
          <div className="absolute inset-0 rounded-xl border border-emerald-500/20 
            group-hover:border-emerald-500/40 transition-colors duration-500">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/10 
              via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 
              transition-opacity duration-500 blur-xl" />
          </div>
        </motion.button>
      ))}
    </div>
  );
}