import React from 'react';
import { PlayCircle, Settings, Trophy, Users, Info } from 'lucide-react';

export const AppIcons = {
  Play: () => <PlayCircle className="w-12 h-12" />,
  Leaderboard: () => <Trophy className="w-12 h-12" />,
  Multiplayer: () => <Users className="w-12 h-12" />,
  Settings: () => <Settings className="w-12 h-12" />,
  Tutorial: () => <Info className="w-12 h-12" />,
};