import '../../assets/main.css';
import React, { useState, useRef } from 'react';
import TabMenu, { TabMenuProps } from '../TabMenu';

export interface SidebarProps {
  screens: {
    menu: TabMenuProps['elements'][0];
    element: React.ReactNode;
  }[];
}

export default function Sidebar(props: SidebarProps) {
  const coolRef = useRef<HTMLDivElement[]>([]);

  return (
    <nav className="h-full w-64 bg-teal-900 flex flex-col">
      <main className="flex-grow w-full">
        <div className="block h-full overflow-hidden">
          {props.screens.map(({ element }, i) => (
            <div
              key={i}
              ref={(el) => (coolRef.current[i] = el!)}
              className="w-64 h-full overflow-auto"
            >
              {element}
            </div>
          ))}
        </div>
      </main>
      <TabMenu
        elements={props.screens.map(({ menu }, i) => ({
          ...menu,
          onClick: () => {
            menu.onClick && menu.onClick();
            coolRef.current[i]?.scrollIntoView({ behavior: 'smooth' });
          },
        }))}
      />
    </nav>
  );
}
