import React from 'react';
import './loading.css';

export default function Loading() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h6 className="loading_h6">SimpleChatWeb</h6>
      <div className="loading" />
      <p className="loading_p">loading...</p>
    </div>
  );
}
