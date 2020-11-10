import React, { FC } from 'react';
import '../../assets/main.css';

export interface AvatarProps {
  /**The URL of the image */
  icon?: string;
  /**Alt text, only the first letter is shown */
  alt: string;
  onClick?: () => void;

  /**Hex code (#RRGGBB) for the bg color, defaults to white */
  color?: string;
}

export const Avatar: FC<AvatarProps> = (props: AvatarProps) => {
  return (
    <div
      onClick={props.onClick}
      className="rounded-full h-16 w-16 flex items-center justify-center overflow-hidden bg-white"
      style={{ backgroundColor: props.color ?? 'white' }}
    >
      {props.icon ? (
        <img src={props.icon} alt={props.alt} />
      ) : (
        <h1 className="font-medium leading-9 text-4xl">
          {(props.alt?.slice(0, 1) ?? ' ').toUpperCase()}
        </h1>
      )}
    </div>
  );
};

export default Avatar;
