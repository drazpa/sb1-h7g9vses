import { mainMenuItems } from './mainMenu';
import { gameMenuItems } from './gameMenu';
import { cardsMenuItems } from './cardsMenu';
import { shopMenuItems } from './shopMenu';
import { tradeMenuItems } from './tradeMenu';
import { rewardsMenuItems } from './rewardsMenu';
import { nftMenuItems } from './nftMenu';
import { socialMenuItems } from './socialMenu';
import { xrplMenuItems } from './blockchainMenu';
import { polygonMenuItems } from './polygonMenu';
import { appsMenuItems } from './appsMenu';
import { MenuItem } from './types';

const menuRegistry: Record<string, MenuItem[]> = {
  main: mainMenuItems,
  game: gameMenuItems,
  cards: cardsMenuItems,
  shop: shopMenuItems,
  trade: tradeMenuItems,
  rewards: rewardsMenuItems,
  nfts: nftMenuItems,
  social: socialMenuItems,
  xrpl: xrplMenuItems,
  polygon: polygonMenuItems,
  apps: appsMenuItems
};

export const getMenuItemsByTab = (tab: string): MenuItem[] => {
  return menuRegistry[tab] || [];
};