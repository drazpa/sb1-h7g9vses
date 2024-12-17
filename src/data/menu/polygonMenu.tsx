import React from 'react';
import { Wallet, Database, Plus } from 'lucide-react';
import { MenuItem } from './types';

export const polygonMenuItems: MenuItem[] = [
  {
    id: 'liquidity-vaults',
    title: 'Liquidity Vaults (LP Pools)',
    description: 'Access liquidity pools on Polygon',
    icon: <Database className="w-12 h-12" />,
    link: 'https://www.magicmint.co/usdm-polygon'
  },
  {
    id: 'token-minting',
    title: 'Polygon MagicMinting Tokens',
    description: 'Mint tokens using POL',
    icon: <Plus className="w-12 h-12" />,
    link: 'https://www.magicmint.co/token-claims-polygon'
  },
  {
    id: 'usdm-token',
    title: 'USDM Token',
    description: '0x42574b6f4741B932dACEf037827d0BFE92dbEeb0',
    icon: <Wallet className="w-12 h-12" />,
    isMetamask: true
  },
  {
    id: 'magic-token',
    title: 'MAGIC Token',
    description: '0x457535b9A90ED7cbE26b6CeB88b192Ee64bc928c',
    icon: <Wallet className="w-12 h-12" />,
    isMetamask: true
  },
  {
    id: 'mint-token',
    title: 'MINT Token',
    description: '0xAbfDC2A4adC15EB8Ee414BB3Cbb512A3ee11811E',
    icon: <Wallet className="w-12 h-12" />,
    isMetamask: true
  },
  {
    id: 'magician-token',
    title: 'MAGICIAN Token',
    description: '0x1b812DD91f966154E351D1080b34D267435dEBe5',
    icon: <Wallet className="w-12 h-12" />,
    isMetamask: true
  },
  {
    id: 'wizard-token',
    title: 'WIZARD Token',
    description: '0x5Ad02a0eD7bB2E0A428D17aC67382D4cb98adE97',
    icon: <Wallet className="w-12 h-12" />,
    isMetamask: true
  },
  {
    id: 'shaman-token',
    title: 'SHAMAN Token',
    description: '0x8d7037aaDafDb18e09a2eAa5E4a1074FF9B2954a',
    icon: <Wallet className="w-12 h-12" />,
    isMetamask: true
  },
  {
    id: 'xrpx-token',
    title: 'XRPX Token',
    description: '0x57d42F6254189ac5E558daF4602aB74d7FeCbac1',
    icon: <Wallet className="w-12 h-12" />,
    isMetamask: true
  }
];