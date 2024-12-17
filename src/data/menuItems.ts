interface MenuItem {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof import('../components/icons').AppIcons;
}

export const menuItems: MenuItem[] = [
  {
    id: 'play',
    title: 'Play Now',
    description: 'Begin your magical card journey',
    icon: 'Play',
  },
  {
    id: 'leaderboard',
    title: 'Hall of Fame',
    description: 'Discover top mages and their achievements',
    icon: 'Leaderboard',
  },
  {
    id: 'multiplayer',
    title: 'Magical Duels',
    description: 'Challenge other players in real-time matches',
    icon: 'Multiplayer',
  },
  {
    id: 'settings',
    title: 'Enchantments',
    description: 'Customize your magical experience',
    icon: 'Settings',
  },
  {
    id: 'tutorial',
    title: 'Spellbook',
    description: 'Master the arts of card magic',
    icon: 'Tutorial',
  },
];