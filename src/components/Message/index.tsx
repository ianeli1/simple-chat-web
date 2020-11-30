import React, { useMemo } from 'react';
import '../../assets/main.css';
import type { GetChannelQuery } from '../../generated/graphql';
import Avatar from '../Avatar';

export interface MessageProps {
  message: NonNullable<GetChannelQuery['channel']['channel']>['messages'][0];
}

export default function Message(props: MessageProps) {
  const { message } = props;
  const { author } = message;

  return useMemo(
    () => (
      <div className="flex items-center max-w-full overflow-x-hidden">
        <Avatar alt={author.name} icon={author.icon ?? undefined} />
        <div
          className="flex flex-col items-start ml-2 rounded p-2 bg-teal-600 box-border"
          style={{ maxWidth: 'calc(100% - 5rem)' }}
        >
          <h1 className="truncate w-full">{author.name}</h1>
          <div className="w-full overflow-x-hidden">
            <p className="font-normal text-white break-words max-w-full">
              {message.content}
            </p>
          </div>
          {message.image && (
            <img src={message.image} className="max-w-full h-auto" />
          )}
        </div>
      </div>
    ),
    [message.content, author.name, author.icon],
  );
}
