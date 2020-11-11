import '../../assets/main.css';
import React from 'react';

export interface TopBarProps {
  title: string;

  /**React Element to be drawn at the left of the title */
  left?: React.ReactNode;

  /**React Element to be drawn at the end of the nav */
  right: React.ReactNode;
}

export default function TopBar(props: TopBarProps) {
  return (
    <nav className="fixed top-0 left-0 w-full h-12 bg-teal-600 flex items-center justify-start px-3 box-border text-white">
      <div>{props.left}</div>
      <h1 className="font-medium text-3xl flex-grow flex-shrink px-3">
        {props.title}
      </h1>
      <div>{props.right}</div>
    </nav>
  );
}
