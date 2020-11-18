import React,{useContext} from 'react';
import './header.css';
import Logo from './Logo/Logo';
import MenuIcon from './MenuIcon/MenuIcon';
import SmokeEffect from './SmokeEffect/SmokeEffect';
import { ThemeContext } from "../../context/ThemeContext";

function Header() {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const themeMode = isLightTheme ? light : dark;

  const headerStyles = {
    background: themeMode.headerBackground,
    color: themeMode.logoColor,
    textShadow: themeMode.logoTextShadow
   
  };
  return (
    <div className='header' style={headerStyles}>
        <SmokeEffect/>
        <Logo/>
        <MenuIcon/>
    </div>
  );
}

export default Header;