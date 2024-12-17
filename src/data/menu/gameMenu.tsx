import React from 'react';
import { MessageCircle, Swords, Trophy, ShoppingBag, BookOpen } from 'lucide-react';
import { MenuItem } from './types';

export const gameMenuItems: MenuItem[] = [
  {
    id: 'discord-battle',
    title: 'Discord Battle Bot',
    description: 'Join the magical battle arena',
    icon: <MessageCircle className="w-12 h-12" />,
    link: 'https://discord.gg/C62dFgBApT'
  },
  {
    id: 'battle-royal',
    title: 'Discord Battle Royal',
    description: 'Compete in epic multiplayer battles',
    icon: <Swords className="w-12 h-12" />,
    link: 'https://discord.gg/De4dXUKYpa'
  },
  {
    id: 'tournament',
    title: 'BattleBot Champion Tournament',
    description: 'Sign up for competitive tournaments',
    icon: <Trophy className="w-12 h-12" />,
    link: 'https://discord.gg/4qh6D3vnGX'
  },
  {
    id: 'magic-shop',
    title: 'BattleBot MagicShop',
    description: 'Purchase magical items and upgrades',
    icon: <ShoppingBag className="w-12 h-12" />,
    link: 'https://discord.gg/bhQ6rZgSrs'
  },
  {
    id: 'how-to-play',
    title: 'How To Play BattleBot',
    description: 'Learn the basics of magical combat',
    icon: <BookOpen className="w-12 h-12" />,
    link: 'https://discord.gg/YKVF66gF9g'
  }
];