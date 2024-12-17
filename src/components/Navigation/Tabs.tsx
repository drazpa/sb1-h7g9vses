import React from 'react';
import { tabs } from '../../data/navigationData';
import { TabButton } from './TabButton';

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <div className="w-full max-w-7xl mx-auto mb-6">
      <div className="flex justify-center">
        <div className="flex overflow-x-auto hide-scrollbar gap-2 bg-black/30 backdrop-blur-sm rounded-xl p-1">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              {...tab}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}