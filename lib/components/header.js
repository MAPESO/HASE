import React from 'react';
import View from './view';

export default function Header(props) {
  return (
    <header>
      <style jsx>{`
        .titlebar {
          -webkit-app-region: drag;
          height: 38px;
          position: fixed;
          top: 1px;
          left: 1px;
          right: 1px;
          z-index: 100;
        }
        .url-box {
          -webkit-app-region: no-drag;
          text-align: center;
          height: 25px;
          display: block;
          width: 25rem;
          margin: 0.5em auto;
          border: 1px solid #333333;
          border-radius: 4px;
          background: none;
          color: white;
          font-size: 0.8em;
        }
        .line {
          margin-top: 6px;
          height: 1px;
          border: 0px;
          background-color: #333333;
        }
      `}</style>
      <nav className="titlebar" onDoubleClick={props.handleMaximizeClick}>
        <input className="url-box" type="text" onDoubleClickCapture={props.stop} />
        <hr className="line" />
      </nav>
      <View />
    </header>
  );
}
