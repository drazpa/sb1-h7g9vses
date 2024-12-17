import React from 'react';
import { 
  GamepadIcon, 
  ScrollText,
  ShoppingBag,
  ArrowLeftRight, 
  Trophy, 
  Wallet2, 
  Users2, 
  Network,
  LayoutGrid,
  Hexagon
} from 'lucide-react';
import { MenuItem } from './types';

export const mainMenuItems: MenuItem[] = [
  {
    id: 'game',
    title: 'Game Arena',
    description: 'Enter the magical battlefield',
    icon: <GamepadIcon className="w-12 h-12" />,
    navigateTo: 'game'
  },
  {
    id: 'cards',
    title: 'Card Collection',
    description: 'Browse and manage your cards',
    icon: <ScrollText className="w-12 h-12" />,
    navigateTo: 'cards'
  },
  {
    id: 'shop',
    title: 'Magic Shop',
    description: 'Purchase new cards and items',
    icon: <ShoppingBag className="w-12 h-12" />,
    navigateTo: 'shop'
  },
  {
    id: 'trade',
    title: 'Trading Hall',
    description: 'Trade cards with other players',
    icon: <ArrowLeftRight className="w-12 h-12" />,
    navigateTo: 'trade'
  },
  {
    id: 'rewards',
    title: 'Rewards Chamber',
    description: 'Claim your magical rewards',
    icon: <Trophy className="w-12 h-12" />,
    navigateTo: 'rewards'
  },
  {
    id: 'nfts',
    title: 'NFT Vault',
    description: 'Manage your NFT collection',
    icon: <Wallet2 className="w-12 h-12" />,
    navigateTo: 'nfts'
  },
  {
    id: 'social',
    title: 'Social Tavern',
    description: 'Connect with other mages',
    icon: <Users2 className="w-12 h-12" />,
    navigateTo: 'social'
  },
  {
    id: 'xrpl',
    title: 'XRPL Bridge',
    description: 'Access XRPL blockchain features',
    icon: <Network className="w-12 h-12" />,
    navigateTo: 'xrpl'
  },
  {
    id: 'polygon',
    title: 'Polygon Network',
    description: 'Access Polygon blockchain features',
    icon: <Hexagon className="w-12 h-12" />,
    navigateTo: 'polygon'
  },
  {
    id: 'apps',
    title: 'Magic Apps',
    description: 'Access magical applications',
    icon: <LayoutGrid className="w-12 h-12" />,
    navigateTo: 'apps'
  }
];