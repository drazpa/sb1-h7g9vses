import { useMemo } from 'react';
import { getMenuItemsByTab } from '../../../data/menu/menuRegistry';
import { MenuItem } from '../../../data/menu/types';

export function useMenuItems(activeTab: string): MenuItem[] {
  return useMemo(() => getMenuItemsByTab(activeTab), [activeTab]);
}