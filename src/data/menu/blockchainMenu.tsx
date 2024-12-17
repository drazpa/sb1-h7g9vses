import React from 'react';
import { Network, Link } from 'lucide-react';
import { MenuItem } from './types';

export const xrplMenuItems: MenuItem[] = [
  {
    id: 'magic-trustline',
    title: 'Magic Trustline',
    description: 'Set up your MAGIC token trustline',
    icon: <Network className="w-12 h-12" />,
    link: 'https://xrpl.services/?issuer=rwCsCz93A1svS6Yv8hFqUeKLdTLhBpvqGD&currency=4D41474943000000000000000000000000000000&limit=49999984.52966059'
  },
  {
    id: 'mint-trustline',
    title: 'Mint Trustline',
    description: 'Set up your MINT token trustline',
    icon: <Network className="w-12 h-12" />,
    link: 'https://xrpl.services/?issuer=rwCsCz93A1svS6Yv8hFqUeKLdTLhBpvqGD&currency=4D494E5400000000000000000000000000000000&limit=499990248.62962264'
  },
  {
    id: 'magician-trustline',
    title: 'Magician Trustline',
    description: 'Set up your MAGICIAN token trustline',
    icon: <Network className="w-12 h-12" />,
    link: 'https://xrpl.services/?issuer=rPmSrav91WZYRaPYjsDndvBfTWNrmSqqXv&currency=4D4147494349414E000000000000000000000000&limit=97100479.91821633'
  },
  {
    id: 'wizard-trustline',
    title: 'Wizard Trustline', 
    description: 'Set up your WIZARD token trustline',
    icon: <Network className="w-12 h-12" />,
    link: 'https://xrpl.services/?issuer=rMJszVPMxcUP9j3oU6M88jcyYajBmHJTB3&currency=57495A4152440000000000000000000000000000&limit=49500000.00000008'
  },
  {
    id: 'shaman-trustline',
    title: 'Shaman Trustline',
    description: 'Set up your SHAMAN token trustline',
    icon: <Network className="w-12 h-12" />,
    link: 'https://xrpl.services/?issuer=rLaG4CMBnechoGkhhc6RApvytdeHCv67av&currency=5348414D414E0000000000000000000000000000&limit=25000000'
  },
  {
    id: 'usdm-trustline',
    title: 'USDM Trustline',
    description: 'Set up your USDM token trustline',
    icon: <Network className="w-12 h-12" />,
    link: 'https://xrpl.services/?issuer=rpa92tGWP4bEAC8NPDMQxTydwn8Nshvdtd&currency=5553444D00000000000000000000000000000000&limit=99999865.32849497'
  }
];

export const polygonMenuItems: MenuItem[] = [
  {
    id: 'magicminter',
    title: 'MagicMinter',
    description: 'Advanced minting platform on Polygon',
    icon: <Network className="w-12 h-12" />,
    link: 'www.magicminter.com'
  }
];