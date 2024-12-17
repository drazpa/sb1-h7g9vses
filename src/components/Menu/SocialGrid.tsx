import React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from '../../data/menu/types';
import { getImageForItem } from '../../utils/imageUtils';

interface SocialGridProps {
  items: MenuItem[];
}

export function SocialGrid({ items }: SocialGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <motion.a
          key={item.id}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-black/40 backdrop-blur-sm rounded-xl overflow-hidden
            hover:bg-black/60 transition-all duration-500 aspect-video"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transform transition-transform 
              duration-700 group-hover:scale-110"
            style={{
              backgroundImage: `url(${getImageForItem(index)})`
            }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center p-6">
            <div className="text-emerald-400 transform transition-transform duration-500 
              group-hover:scale-110 group-hover:text-emerald-300 mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-emerald-300 mb-2 text-center group-hover:text-emerald-200">
              {item.title}
            </h3>
            <p className="text-sm text-gray-300 text-center group-hover:text-emerald-100/90">
              {item.description}
            </p>
          </div>

          {/* Hover Effects */}
          <div className="absolute inset-0 rounded-xl border border-emerald-500/20 
            group-hover:border-emerald-500/40 transition-colors duration-500">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/10 
              via-transparent to-emerald-500/10 opacity-0 group-hover:opacity-100 
              transition-opacity duration-500 blur-xl" />
          </div>
        </motion.a>
      ))}
    </div>
  );
}