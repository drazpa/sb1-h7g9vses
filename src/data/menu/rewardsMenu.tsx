import React from 'react';
import { Trophy, Gift, Coins, Settings, DollarSign } from 'lucide-react';
import { MenuItem } from './types';

export const rewardsMenuItems: MenuItem[] = [
  {
    id: 'token-rewards',
    title: 'Token Rewards',
    description: 'Earn magical tokens and rewards',
    icon: <Trophy className="w-12 h-12" />,
    link: 'https://discord.gg/wrSXfMbdSa'
  },
  {
    id: 'nft-rewards',
    title: 'NFT Rewards',
    description: 'Collect unique NFT rewards',
    icon: <Gift className="w-12 h-12" />,
    link: 'https://discord.gg/yEZPNfk34T'
  },
  {
    id: 'token-setup',
    title: 'Token Rewards Setup',
    description: 'Configure your token rewards',
    icon: <Settings className="w-12 h-12" />,
    link: 'https://discord.gg/7W7nNtny8b'
  },
  {
    id: 'nft-setup',
    title: 'NFT Rewards Setup',
    description: 'Configure your NFT rewards',
    icon: <Coins className="w-12 h-12" />,
    link: 'https://discord.gg/yEZPNfk34T'
  },
  {
    id: 'stable-rewards',
    title: 'Stable Coin Rewards',
    description: 'USDM and RLUSD rewards',
    icon: <DollarSign className="w-12 h-12" />,
    link: 'https://discord.gg/wrSXfMbdSa'
  }
];