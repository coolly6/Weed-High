import React from 'react';
import './header.css';
import Logo from './Logo/Logo';
import MenuIcon from './MenuIcon/MenuIcon';
import SmokeEffect from './SmokeEffect/SmokeEffect';

function Header() {
  return (
    <div className="header">
        <SmokeEffect/>
        <Logo/>
        <MenuIcon/>
    </div>
  );
}

export default Header;