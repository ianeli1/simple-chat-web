import React from 'react';
import { createPortal } from 'react-dom';
import '../../assets/main.css';
import type { CSSProperties } from 'react';

export interface ModalProps {
  color?: CSSProperties['backgroundColor'];
  children: React.ReactNode;
  onDismiss?: () => void;
  show: boolean;
}

export default function Modal(props: ModalProps) {
  return createPortal(
    <div
      className="absolute z-50 h-screen w-screen top-0 left-0 flex items-center justify-center"
      style={{
        backgroundColor: props.color || 'rgba(0,0,0,0.2)',
        pointerEvents: props.show ? undefined : 'none',
        zIndex: 51,
      }}
      onClick={(e) => props.onDismiss}
    >
      {props.show && props.children}
    </div>,
    document.getElementById('modal')!,
  );
}
