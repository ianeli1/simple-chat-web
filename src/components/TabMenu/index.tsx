import '../../assets/main.css';
import React from 'react';
import Button from '../Button';

export interface TabMenuProps {
  elements: {
    /**SvgIcon to use */
    icon?: JSX.Element;
    alt: string;

    onClick?: () => void;
  }[];
}

export default function TabMenu(props: TabMenuProps) {
  return (
    <div className="h-12 w-full flex justify-around items-center bg-teal-600">
      {props.elements.map(({ icon, alt, onClick }, i) => (
        <Button key={i} onClick={onClick}>
          {icon ?? alt}
        </Button>
      ))}
    </div>
  );
}
