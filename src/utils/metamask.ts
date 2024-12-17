import { ethers } from 'ethers';

interface TokenConfig {
  address: string;
  symbol: string;
  decimals: number;
  image?: string;
}

export async function addTokenToMetaMask(tokenConfig: TokenConfig) {
  try {
    if (!window.ethereum) {
      window.open('https://metamask.io', '_blank');
      return;
    }

    const wasAdded = await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: tokenConfig.address,
          symbol: tokenConfig.symbol,
          decimals: tokenConfig.decimals,
          image: tokenConfig.image,
        },
      },
    });

    if (wasAdded) {
      console.log('Token was added to MetaMask');
    }
  } catch (error) {
    console.error('Error adding token to MetaMask:', error);
  }
}

export const POLYGON_TOKENS = {
  USDM: {
    address: '0x42574b6f4741B932dACEf037827d0BFE92dbEeb0',
    symbol: 'USDM',
    decimals: 18,
  },
  MAGIC: {
    address: '0x457535b9A90ED7cbE26b6CeB88b192Ee64bc928c',
    symbol: 'MAGIC',
    decimals: 18,
  },
  MINT: {
    address: '0xAbfDC2A4adC15EB8Ee414BB3Cbb512A3ee11811E',
    symbol: 'MINT',
    decimals: 18,
  },
  MAGICIAN: {
    address: '0x1b812DD91f966154E351D1080b34D267435dEBe5',
    symbol: 'MAGICIAN',
    decimals: 18,
  },
  WIZARD: {
    address: '0x5Ad02a0eD7bB2E0A428D17aC67382D4cb98adE97',
    symbol: 'WIZARD',
    decimals: 18,
  },
  SHAMAN: {
    address: '0x8d7037aaDafDb18e09a2eAa5E4a1074FF9B2954a',
    symbol: 'SHAMAN',
    decimals: 18,
  },
  XRPX: {
    address: '0x57d42F6254189ac5E558daF4602aB74d7FeCbac1',
    symbol: 'XRPX',
    decimals: 18,
  },
};