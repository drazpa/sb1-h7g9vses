import React from 'react';
import { ShoppingBag, MessageCircle, Gift, Package, Shirt } from 'lucide-react';
import { MenuItem } from './types';

export const shopMenuItems: MenuItem[] = [
  {
    id: 'card-packs',
    title: 'Buy MagicMint Card Packs',
    description: 'Purchase official card packs from our store',
    icon: <ShoppingBag className="w-12 h-12" />,
    link: 'https://www.ebay.com/itm/166983609154?itmmeta=01JFA66YTH2T3A3NY5DM6D1MQV&hash=item26e0ffab42:g:ECEAAOSwU8Rm7tBs'
  },
  {
    id: 'card-shop',
    title: 'MintMarket Ebay Shop',
    description: 'Official MagicMint marketplace',
    icon: <Package className="w-12 h-12" />,
    link: 'https://www.ebay.com/usr/mintmarketco'
  },
  {
    id: 'discord-shop',
    title: 'Discord MagicShop',
    description: 'Purchase items through Discord',
    icon: <MessageCircle className="w-12 h-12" />,
    link: 'https://discord.gg/bhQ6rZgSrs'
  },
  {
    id: 'merch-shop',
    title: 'MagicMint MerchShop',
    description: 'Official merchandise and apparel',
    icon: <Shirt className="w-12 h-12" />,
    isComingSoon: true
  },
  {
    id: 'battle-pads',
    title: 'MagicMint BattlePads',
    description: 'Premium gaming accessories',
    icon: <Gift className="w-12 h-12" />,
    isComingSoon: true
  }
];