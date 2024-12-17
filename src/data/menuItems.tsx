import React from 'react';
import { 
  PlayCircle, 
  Trophy, 
  Swords,
  BookOpen,
  Settings,
  Wallet,
  Users,
  ShoppingCart,
  Gift,
  Gem,
  MessageCircle,
  Share2,
  Network,
  Hexagon,
  LayoutGrid
} from 'lucide-react';

const menuItemsMap = {
  main: [
    {
      id: 'play',
      title: 'Quick Play',
      description: 'Jump into a magical card battle',
      icon: <PlayCircle className="w-12 h-12" />,
    },
    {
      id: 'tutorial',
      title: 'Learn to Play',
      description: 'Master the basics of MagicMint',
      icon: <BookOpen className="w-12 h-12" />,
    },
    {
      id: 'settings',
      title: 'Settings',
      description: 'Customize your experience',
      icon: <Settings className="w-12 h-12" />,
    },
  ],
  // ... other menu sections remain the same ...
  apps: [
    {
      id: 'app-store',
      title: 'App Store',
      description: 'Discover new applications',
      icon: <LayoutGrid className="w-12 h-12" />,
    },
    {
      id: 'my-apps',
      title: 'My Apps',
      description: 'Manage installed apps',
      icon: <Settings className="w-12 h-12" />,
    },
    {
      id: 'updates',
      title: 'Updates',
      description: 'Check for app updates',
      icon: <Share2 className="w-12 h-12" />,
    },
  ],
};

export function getMenuItemsByTab(tab: string) {
  return menuItemsMap[tab as keyof typeof menuItemsMap] || [];
}