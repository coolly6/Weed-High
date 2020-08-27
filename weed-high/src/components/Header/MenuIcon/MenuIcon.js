import React from 'react';
import {HiOutlineMenu,HiOutlineSearch} from 'react-icons/hi'
import './menuIcon.css';

function MenuIcon() {
  return (
    <div className="menuIcon">
      <HiOutlineSearch/>
        <HiOutlineMenu/>
        
    </div>
  );
}

export default MenuIcon;