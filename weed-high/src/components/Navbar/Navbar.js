import React, { useContext } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import  { MenuContext } from '../../context/MenuContext';

const Navbar = () => {
  const { isMenuOpen, nav, noNav, toggleMenu } = useContext(MenuContext)
        const menuTheme = isMenuOpen ? nav : noNav
        console.log(MenuContext)
  return (
    <nav style={{
                  display: menuTheme.display,
                  left: menuTheme.left,
                   animationName: menuTheme.animationName
              }}>
      <ul>
        <li>
          <NavLink to="/" className='nav-list' onClick={toggleMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/login" className='nav-list' onClick={toggleMenu}>Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
