import '../assets/main.css';
import TopBar from '../components/TopBar';
import Sidebar, { SidebarProps } from '../components/Sidebar';
import React, { useContext } from 'react';
import { Chat } from '@material-ui/icons';
import AvatarScroller from '../components/AvatarScroller';
import RectangleScroller from '../components/RectangleScroller';
import Button from '../components/Button';
import { DialogContext } from '../components/Providers/DialogProvider';
import { userContext } from '../components/Providers/UserProvider';
import { serverContext } from '../components/Providers/ServerProvider';
import { channelContext } from '../components/Providers/ChannelProvider';

export default function Main() {
  const { login } = useContext(DialogContext);
  const { user } = useContext(userContext);
  const { currentServer, setCurrentServer } = useContext(serverContext);
  const { currentChannel, setCurrentChannel } = useContext(channelContext);

  const ChannelMenu: SidebarProps['screens'][0] = {
    element: (
      <div>
        <AvatarScroller
          orientation="v"
          elements={
            user?.servers.map(({ name, id, icon }) => ({
              alt: name,
              icon: icon ?? undefined,
              key: id,
            })) ?? []
          }
          selected={currentServer ?? undefined}
          onAvatarClick={(id) => setCurrentServer(id)}
        />
        <RectangleScroller
          elements={
            user?.servers
              .find(({ id }) => currentServer === id)
              ?.channels.map(({ id, name }) => ({
                title: name,
                key: id,
              })) ?? []
          }
          onClick={(key) => setCurrentChannel(key)}
          selected={currentChannel ?? undefined}
        />
      </div>
    ),
    menu: {
      alt: 'Chat',
      icon: <Chat />,
    },
  };

  async function handleLogin() {
    const result = await login();
    if (result) {
      console.log('logged in ak7');
    } else {
      console.log('oops');
    }
  }

  return (
    <main className="h-screen w-screen">
      <TopBar
        title="Simple Chat Web"
        right={<Button onClick={handleLogin}>Login</Button>}
      />
      <div className="flex pt-12 h-full w-full box-border grid-cols-2">
        <Sidebar screens={[ChannelMenu]} />
        <section className="flex-grow bg-pink-700 h-full"></section>
      </div>
    </main>
  );
}
