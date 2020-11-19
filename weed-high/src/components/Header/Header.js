import React from 'react';
import './header.css';
import Logo from './Logo/Logo';
import MenuIcon from './MenuIcon/MenuIcon';
import SmokeEffect from './SmokeEffect/SmokeEffect';

function Header() {
<<<<<<< Updated upstream
=======
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const themeMode = isLightTheme ? light : dark;

  const headerStyles = {
    background: themeMode.headerBackground,
    color: themeMode.logoColor,
    textShadow: themeMode.logoTextShadow,
    boxShadow:themeMode.headerBoxShadow
   
  };
>>>>>>> Stashed changes
  return (
    <div className="header">
        <SmokeEffect/>
        <Logo/>
        <MenuIcon/>
    </div>
  );
}

export default Header;