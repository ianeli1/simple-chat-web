import '../../assets/main.css';
import React from 'react';

export interface RectangleScrollerProps<T extends string | number> {
  elements: (Omit<RectangleProps, "onClick"> & { key: T })[];
  onClick?: (key: T) => void;
  selected?: T;
}

export default function RectangleScroller<T extends string | number>(
  props: RectangleScrollerProps<T>,
) {
  return (
    <div className="h-full w-full overflow-y-auto overflow-x-hidden p-2">
      {props.elements?.map((i, index) => (
        <Rectangle
          onClick={() => props.onClick && props.onClick(i.key)}
          selected={i.key === props.selected}
          {...i}
        />
      ))}
    </div>
  );
}

export interface RectangleProps {
  title: string;
  subtitle?: string;

  /**Element to be drawn on the left side, ie a button/icon/avatar */
  left?: React.ReactNode;

  /**Element to be drawn on the right side, ie a button/icon/avatar */
  right?: React.ReactNode;

  selected?: boolean;

  disabled?: boolean;

  onClick?: () => void;
}

export function Rectangle(props: RectangleProps) {
  return (
    <div
      className={`w-full m-2 p-2 rounded h-20 flex items-center ${
        props.selected ? 'bg-teal-600' : 'bg-transparent'
      }`}
      onClick={props.onClick}
    >
      {props.left && <div>{props.left}</div>}
      <div className="flex-grow">
        <h1 className="ml-1 mr-1 text-xl">{props.title}</h1>
        {props.subtitle && <h6>{props.subtitle}</h6>}
      </div>
      {props.right && <div>{props.right}</div>}
    </div>
  );
}
