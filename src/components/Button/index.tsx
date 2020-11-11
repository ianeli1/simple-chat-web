import React from 'react';
import '../../assets/main.css';

export interface ButtonProps {
  children: string | React.ReactNode;
  onClick?: () => void;
  circle?: boolean;
}

export default function Button(props: ButtonProps) {
  const { circle = false } = props;
  return (
    <button
      className={`rounded-md bg-teal-600 transition-colors duration-200 focus:bg-teal-400 p-2 m-0 font-medium text-white focus:border-white focus:border-2 ${
        circle ? 'rounded-full' : ''
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
