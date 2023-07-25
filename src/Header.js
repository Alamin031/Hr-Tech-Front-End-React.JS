// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        {/* My logo image */}
        <img src="/img/logo.png" alt="Logo" />
        {/* <span>Logo</span> */}
      </div>
      <nav className="navigation">
        <ul>
        <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/offer">Offer</a>
          </li>
          <li>
            <a href="/desktop-deal">Desktop Deal</a>
          </li>
          <li>
            <a href="/account">Account</a>
          </li>
        </ul>
      </nav>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <button className="search-button">Search</button>
      </div>
      <button className="pc-builder-button">PC Builder</button>
    </header>
  );
};

export default Header;
