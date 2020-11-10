import React from 'react';
import Avatar from '../Avatar';

export interface AvatarScrollerProps {
  orientation?: 'v' | 'h';
  selected?: AvatarScrollerProps['elements'][0]['key'];
  elements: {
    key: string;
    icon?: string;
    alt: string;
  }[];
  onAvatarClick?: (key: AvatarScrollerProps['elements'][0]['key']) => void;
}

export default function AvatarScroller(props: AvatarScrollerProps) {
  const { orientation = 'v' } = props;
  return (
    <div
      className={
        orientation === 'v'
          ? 'flex flex-col overflow-y-auto overflow-x-hidden h-full'
          : 'flex flex-row overflow-y-hidden overflow-x-auto w-full'
      }
      style={{ width: 'min-content' }}
    >
      {props.elements?.map(({ key, icon, alt }) => (
        <div
          className={`relative p-1 ${orientation === 'v' ? 'mb-1' : 'mr-1'} ${
            props.selected === key ? 'rounded-full bg-blue-400' : ''
          }`}
          key={key}
        >
          <Avatar
            icon={icon}
            alt={alt}
            onClick={() => props.onAvatarClick && props.onAvatarClick(key)}
          />
        </div>
      ))}
    </div>
  );
}
