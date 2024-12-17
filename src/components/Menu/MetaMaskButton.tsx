import React from 'react';
import { Plus } from 'lucide-react';
import { addTokenToMetaMask } from '../../utils/metamask';
import { POLYGON_TOKENS } from '../../utils/metamask';

interface MetaMaskButtonProps {
  tokenSymbol: keyof typeof POLYGON_TOKENS;
}

export function MetaMaskButton({ tokenSymbol }: MetaMaskButtonProps) {
  const handleClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    await addTokenToMetaMask(POLYGON_TOKENS[tokenSymbol]);
  };

  return (
    <button
      onClick={handleClick}
      className="mt-2 flex items-center gap-2 bg-green-500/20 px-3 py-1.5 rounded-full
        text-green-300 text-sm font-medium hover:bg-green-500/30 transition-colors
        focus:outline-none focus:ring-2 focus:ring-green-500/50"
    >
      <Plus className="w-4 h-4" />
      Add to MetaMask
    </button>
  );
}