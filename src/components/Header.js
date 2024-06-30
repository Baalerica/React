import React from 'react';
import './Header.css';

const Header = ({ currentPage }) => {
  return (
    <header className="header">
      <div className="logo">VideoPlatform</div>
      <nav>
        <a href="/" className={currentPage === 'home' ? 'active' : ''}>Home</a>
        <a href="/new" className={currentPage === 'new' ? 'active' : ''}>Nuevo Video</a>
      </nav>
    </header>
  );
};

export default Header;