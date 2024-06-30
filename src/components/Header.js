import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">VideoPlatform</div>
      <nav>
        <a href="#">Home</a>
        <a href="#new-video">Nuevo Video</a>
      </nav>
    </header>
  );
};

export default Header;
