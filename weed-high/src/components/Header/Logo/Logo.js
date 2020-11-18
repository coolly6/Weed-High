import React,{useContext} from "react";
import logo from "../../../logo.svg";
import "./logo.css";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../../context/ThemeContext";


function Logo() {
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const themeMode = isLightTheme ? light : dark;

  const headerStyles = {
    background: themeMode.headerBackground,
    color: themeMode.logoColor,
    textShadow: themeMode.logoTextShadow
   
  };
  return (
      <NavLink to="/" className="logo"  style={headerStyles}>
        <img src={logo} className="logo-img" alt="logo" width="100%" />
        <h1 className="logo-title">Weed#High</h1>
      </NavLink>
  );
}

export default Logo;
