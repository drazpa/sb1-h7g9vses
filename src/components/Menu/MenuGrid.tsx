import React from 'react';
import { AppCard } from './AppCard';
import { ListView } from './ListView';
import { SocialGrid } from './Social/SocialGrid';
import { useMenuNavigation } from '../../hooks/useMenuNavigation';
import { getMenuItemsByTab } from '../../data/menu/menuRegistry';
import { motion } from 'framer-motion';
import { getImageForItem } from '../../utils/imageUtils';

interface MenuGridProps {
  activeTab: string;
  viewMode: 'grid' | 'list';
}

export function MenuGrid({ activeTab, viewMode }: MenuGridProps) {
  const { handleCardClick } = useMenuNavigation();
  const menuItems = getMenuItemsByTab(activeTab);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  if (activeTab === 'social') {
    return <SocialGrid items={menuItems} />;
  }

  return (
    <motion.div 
      className="w-full max-w-[90rem] mx-auto px-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 justify-items-center">
          {menuItems.map((item, index) => (
            <div key={item.id} className="w-full">
              <AppCard
                {...item}
                onClick={() => handleCardClick(item.id, item.navigateTo)}
                imageSrc={getImageForItem(index)}
              />
            </div>
          ))}
        </div>
      ) : (
        <ListView items={menuItems} onItemClick={handleCardClick} />
      )}
    </motion.div>
  );
}