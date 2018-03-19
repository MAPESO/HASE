import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ handleClick, stopInput }) => (
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
      hr {
        margin-top: 6px;
        height: 1px;
        border: 0px;
        background-color: #333333;
      }
    `}</style>
    <nav className="titlebar" onDoubleClick={handleClick}>
      <form>
        <input className="url-box" type="text" onDoubleClick={stopInput} />
        <hr />
      </form>
    </nav>
  </header>
);

Header.propTypes = {
  handleClick: PropTypes.func.isRequired,
  stopInput: PropTypes.func.isRequired
};

export default Header;
