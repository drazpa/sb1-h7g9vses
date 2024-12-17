import React from 'react';
import { MenuItem } from '../../../data/menu/types';
import { SocialCard } from './SocialCard';
import { useGridImages } from '../../../hooks/useGridImages';

interface SocialGridProps {
  items: MenuItem[];
}

export function SocialGrid({ items }: SocialGridProps) {
  const images = useGridImages(items.length);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
      {items.map((item, index) => (
        <SocialCard
          key={item.id}
          {...item}
          index={index}
          backgroundImage={images[index]}
        />
      ))}
    </div>
  );
}