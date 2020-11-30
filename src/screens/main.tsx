import '../assets/main.css';
import TopBar from '../components/TopBar';
import Sidebar, { SidebarProps } from '../components/Sidebar';
import React from 'react';
import { Chat } from '@material-ui/icons';
import AvatarScroller from '../components/AvatarScroller';
import RectangleScroller from '../components/RectangleScroller';

const ChannelMenu: SidebarProps['screens'][0] = {
  element: (
    <div>
      <AvatarScroller orientation="v" elements={[]} />
      <RectangleScroller elements={[]} />
    </div>
  ),
  menu: {
    alt: 'Chat',
    icon: <Chat />,
  },
};

export default function Main() {
  return (
    <main className="h-screen w-screen">
      <TopBar title="Simple Chat Web" />
      <div className="flex pt-12 h-full w-full box-border grid-cols-2">
        <Sidebar screens={[ChannelMenu]} />
        <section className="flex-grow bg-pink-700 h-full"></section>
      </div>
    </main>
  );
}
