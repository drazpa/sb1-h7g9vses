import React from 'react';
import { ScrollText, ShoppingBag, Award, BookOpen, Layers, Code } from 'lucide-react';
import { MenuItem } from './types';

export const cardsMenuItems: MenuItem[] = [
  {
    id: 'card-packs',
    title: 'Buy MagicMint Card Packs',
    description: 'Purchase official card packs from our store',
    icon: <ShoppingBag className="w-12 h-12" />,
    link: 'https://www.ebay.com/itm/166983609154?itmmeta=01JFA66YTH2T3A3NY5DM6D1MQV&hash=item26e0ffab42:g:ECEAAOSwU8Rm7tBs'
  },
  {
    id: 'graded-cards',
    title: 'MagicMint PSA Graded Cards',
    description: 'Browse professionally graded cards',
    icon: <Award className="w-12 h-12" />,
    isComingSoon: true
  },
  {
    id: 'metal-cards',
    title: 'MagicMint Individual Metal Cards',
    description: 'Exclusive metal card collection',
    icon: <Layers className="w-12 h-12" />,
    isComingSoon: true
  },
  {
    id: 'single-cards',
    title: 'MagicMint Individual Single Cards',
    description: 'Browse individual cards for sale',
    icon: <ScrollText className="w-12 h-12" />,
    isComingSoon: true
  },
  {
    id: 'collection-list',
    title: 'Master Collection List',
    description: 'Complete card catalog and guide',
    icon: <BookOpen className="w-12 h-12" />,
    isComingSoon: true
  },
  {
    id: 'deck-builder',
    title: 'Deck Builder Application',
    description: 'Create and manage your decks',
    icon: <Code className="w-12 h-12" />,
    isComingSoon: true
  },
  {
    id: 'card-shop',
    title: 'MintMarket Ebay Card Shop',
    description: 'Official MagicMint marketplace',
    icon: <ShoppingBag className="w-12 h-12" />,
    link: 'https://www.ebay.com/usr/mintmarketco'
  }
];