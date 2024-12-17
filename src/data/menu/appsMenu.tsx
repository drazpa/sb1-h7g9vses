import React from 'react';
import { BarChart3, Code, Wallet, Gamepad, Terminal, Database, Eye } from 'lucide-react';
import { MenuItem } from './types';

export const appsMenuItems: MenuItem[] = [
  {
    id: 'trading-dashboard',
    title: 'MagicMint Trading Dashboard',
    description: 'Access real-time trading analytics',
    icon: <BarChart3 className="w-12 h-12" />,
    link: 'https://sweet-narwhal-04de49.netlify.app/'
  },
  {
    id: 'magicminter',
    title: 'MagicMinter',
    description: 'Advanced minting platform',
    icon: <Terminal className="w-12 h-12" />,
    link: 'https://meek-puppy-ae7115.netlify.app/'
  },
  // ... rest of the items remain the same
];