import Avatar from '../Avatar';
import React from 'react';
import '../../assets/main.css';

export interface ANProps {
  /**Name to be displayed */
  title: string;
  /**URL of the image */
  icon?: string;

  /**bg color for the avatar, hex code, defaults to white */
  color?: string;
}

export default function AvatarName(props: ANProps) {
  return (
    <div className="flex items-center">
      <Avatar icon={props.icon} alt={props.title} color={props.color} />
      <span
        className="mr-2 ml-2"
        style={{ width: 1, height: '3rem', backgroundColor: 'white' }}
      />
      <h1
        className="text-3xl text-white truncate"
        style={{ maxWidth: '15rem' }}
      >
        {props.title}
      </h1>
    </div>
  );
}
