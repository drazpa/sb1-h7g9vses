import React from 'react';
import { Twitter, Cloud, Youtube, Instagram, MessageCircle, Discord } from 'lucide-react';
import { MenuItem } from './types';

export const socialMenuItems: MenuItem[] = [
  {
    id: 'discord',
    title: 'Discord Community',
    description: 'Join our magical Discord community',
    icon: <Discord className="w-12 h-12" />,
    link: 'https://discord.gg/cCwPhR7E'
  },
  {
    id: 'twitter',
    title: 'X (Blue Check Verified)',
    description: 'Follow us on X (Twitter)',
    icon: <Twitter className="w-12 h-12" />,
    link: 'https://x.com/MagicMintXRPL'
  },
  {
    id: 'bluesky',
    title: 'BlueSky',
    description: 'Join our BlueSky community',
    icon: <Cloud className="w-12 h-12" />,
    link: 'https://bsky.app/profile/magicmint.bsky.social'
  },
  {
    id: 'youtube',
    title: 'Youtube',
    description: 'Watch our latest content',
    icon: <Youtube className="w-12 h-12" />,
    link: 'https://www.youtube.com/@MAGICMINTXRPL'
  },
  {
    id: 'instagram',
    title: 'Instagram',
    description: 'Follow our Instagram page',
    icon: <Instagram className="w-12 h-12" />,
    link: 'https://www.instagram.com/mintmarketcollectibles'
  },
  {
    id: 'tiktok',
    title: 'TikTok',
    description: 'Follow us on TikTok',
    icon: <MessageCircle className="w-12 h-12" />,
    link: 'https://www.tiktok.com/@magicmintxrp'
  }
];