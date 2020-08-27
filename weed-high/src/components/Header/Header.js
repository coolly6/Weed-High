import React from 'react';
import './header.css';
import Logo from './Logo/Logo';
import MenuIcon from './MenuIcon/MenuIcon';

function Header() {
  return (
    <div className="header">
        <Logo/>
        <MenuIcon/>
    </div>
  );
}

export default Header;