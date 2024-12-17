import React from 'react';
import { BarChart3, ArrowLeftRight, Repeat, Wallet, Coins } from 'lucide-react';
import { MenuItem } from './types';

export const tradeMenuItems: MenuItem[] = [
  {
    id: 'sologenic-trading',
    title: 'Sologenic Trading',
    description: 'Trade on the Sologenic DEX',
    icon: <BarChart3 className="w-12 h-12" />,
    link: 'https://sologenic.org/trade?network=mainnet&market=4D41474943000000000000000000000000000000%2BrwCsCz93A1svS6Yv8hFqUeKLdTLhBpvqGD%2FXRP'
  },
  {
    id: 'magnetic-trading',
    title: 'Magnetic Trading',
    description: 'Trade on the Magnetic DEX',
    icon: <ArrowLeftRight className="w-12 h-12" />,
    link: 'https://xmagnetic.org/dex/MINT%2BrwCsCz93A1svS6Yv8hFqUeKLdTLhBpvqGD_XRP%2BXRP?network=mainnet'
  },
  {
    id: 'sologenic-swap',
    title: 'Sologenic Swap',
    description: 'Quick swap on Sologenic',
    icon: <Repeat className="w-12 h-12" />,
    link: 'https://sologenic.org/amm/quick-swap'
  },
  {
    id: 'magnetic-swap',
    title: 'Magnetic Swap',
    description: 'Quick swap on Magnetic',
    icon: <Repeat className="w-12 h-12" />,
    link: 'https://xmagnetic.org/swap/MAG+rXmagwMmnFtVet3uL26Q2iwk287SRvVMJ_XRP+XRP?network=mainnet'
  },
  {
    id: 'pathfinding-swap',
    title: 'Pathfinding Swap',
    description: 'Advanced pathfinding swap',
    icon: <Wallet className="w-12 h-12" />,
    link: 'https://xumm.app/detect/xapp:xumm.pathfinding'
  },
  {
    id: 'amm-pools',
    title: 'AMM Pools',
    description: 'Liquidity pools and farming',
    icon: <Coins className="w-12 h-12" />,
    isComingSoon: true
  }
];