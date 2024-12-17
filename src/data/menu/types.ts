import { ReactNode } from 'react';

export interface MenuItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  navigateTo?: string;
  imageSrc?: string;
  link?: string;
  isComingSoon?: boolean;
  isMetamask?: boolean;
}