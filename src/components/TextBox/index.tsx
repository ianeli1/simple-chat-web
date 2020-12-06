import React, { useRef } from 'react';
import '../../assets/main.css';
import ContentEditable from 'react-contenteditable';

export interface TextBoxProps {
  value: string;
  onChange: (value: string) => void;
  replace?: {
    regex: RegExp;
    with: React.ReactNode;
  }[];
  left?: React.ReactNode;
  right?: React.ReactNode;
}

//TODO: make this a little bit less ugly

export default function TextBox(props: TextBoxProps) {
  const text = useRef(props.value);
  return (
    <div className="flex h-12 w-full bg-teal-800 rounded p-1 overflow-x-hidden items-center">
      {props.left && <div>{props.left}</div>}
      <ContentEditable
        html={text.current}
        onChange={(e) => {
          text.current = e.target.value;
          props.onChange(text.current);
        }}
        className="flex-grow break-words m-1 bg-teal-700 rounded"
      />
      {props.right && <div>{props.right}</div>}
    </div>
  );
}
