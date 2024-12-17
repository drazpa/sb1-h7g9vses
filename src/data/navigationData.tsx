import React from 'react';
import { 
  Home, 
  GamepadIcon, 
  ArrowLeftRight, 
  Trophy, 
  Wallet2, 
  Users2, 
  Network, 
  ScrollText,
  ShoppingBag,
  LayoutGrid,
  Hexagon
} from 'lucide-react';

export const tabs = [
  { id: 'main', label: 'Main', icon: <Home className="w-5 h-5" /> },
  { id: 'game', label: 'Game', icon: <GamepadIcon className="w-5 h-5" /> },
  { id: 'cards', label: 'Cards', icon: <ScrollText className="w-5 h-5" /> },
  { id: 'shop', label: 'Shop', icon: <ShoppingBag className="w-5 h-5" /> },
  { id: 'trade', label: 'Trade', icon: <ArrowLeftRight className="w-5 h-5" /> },
  { id: 'rewards', label: 'Rewards', icon: <Trophy className="w-5 h-5" /> },
  { id: 'nfts', label: 'NFTs', icon: <Wallet2 className="w-5 h-5" /> },
  { id: 'social', label: 'Social', icon: <Users2 className="w-5 h-5" /> },
  { id: 'xrpl', label: 'XRPL', icon: <Network className="w-5 h-5" /> },
  { id: 'polygon', label: 'Polygon', icon: <Hexagon className="w-5 h-5" /> },
  { id: 'apps', label: 'Apps', icon: <LayoutGrid className="w-5 h-5" /> }
];