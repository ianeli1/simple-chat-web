import React, { useContext, useState } from 'react';
import Message from '../components/Message';
import { channelContext } from '../components/Providers/ChannelProvider';
import TextBox from '../components/TextBox';

export function ChatScreen() {
  const [text, setText] = useState('');
  const { channel } = useContext(channelContext);

  return (
    <div className="flex flex-col flex-grow h-full relative">
      <div id="messageContainer" className="flex-1 pb-16">
        {channel?.messages.map((message) => (
          <Message message={message} key={message.id} />
        ))}
      </div>
      <div
        id="inputbox"
        className="absolute left-0 bottom-0 w-full p-2 flex-grow-0 flex-shrink-0"
      >
        <TextBox value={text} onChange={(e) => setText(e)} />
      </div>
    </div>
  );
}
