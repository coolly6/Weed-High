import React, { useContext, useState } from "react";
import "./navbar.css";
import { NavLink, useHistory } from "react-router-dom";
import { MenuContext } from "../../context/MenuContext";
import { ThemeContext } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const [error, setError] = useState("");
  const history = useHistory();

  const { isMenuOpen, nav, noNav, toggleMenu } = useContext(MenuContext);
  const menuTheme = isMenuOpen ? nav : noNav;

  const { isLightTheme, dark, light, toggleTheme } = useContext(ThemeContext);
  const themeMode = isLightTheme ? light : dark;

  const { currentUser, logout } = useAuth();

  const toggleMenuStyles = {
    display: menuTheme.display,
    left: menuTheme.left,
    animationName: menuTheme.animationName,
  };
  const toggleNavStyles = {
    themeText: themeMode.themeText,
    background: themeMode.navLiBackground,
    color: themeMode.logoColor,
    textShadow: themeMode.logoTextShadow,
    modeIcon: themeMode.modeIcon,
    iconColor: themeMode.iconColor,
    homeIcon: themeMode.homeIcon,
    loginIcon: themeMode.loginIcon,
    logoutIcon: themeMode.logoutIcon,
    position: "relative",
  };
  const activeStyles = isLightTheme
    ? {
        background: "linear-gradient(to top, rgb(73, 99, 68), rgb(2, 2, 2))",
        color: "rgb(96, 182 ,105)",
        textShadow: "1px  1px  1px rgb(89, 250, 89)"
      }
    : {
      background: "linear-gradient(to bottom, rgb(7, 247, 3,0.9) , rgb(135, 241, 134,0.9), rgb(201, 248, 182,0.9))",
        color: "rgb(14, 114, 64)",
        textShadow: "1px  1px 1px black"
    };

  const {
    themeText,
    iconColor,
    modeIcon,
    homeIcon,
    loginIcon,
    logoutIcon,
  } = toggleNavStyles;

  async function handleLogout() {
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed  to Logout");
    }
  }

  return (
    <nav onClick={toggleMenu} style={toggleMenuStyles}>
      <ul>
        <li>
          <NavLink to="/" exact className="nav-list" style={toggleNavStyles} activeStyle={activeStyles}>
            Home <span className="navIcons">{homeIcon}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="nav-list" style={toggleNavStyles} activeStyle={activeStyles}>
            {currentUser ? (
              <div onClick={handleLogout}>
                Logout <span className="navIcons">{logoutIcon}</span>
              </div>
            ) : (
              <div>
                Login <span className="navIcons">{loginIcon}</span>
              </div>
            )}
          </NavLink>
        </li>
        <li>
          <div
            className="nav-list toggle-theme"
            style={toggleNavStyles}
            onClick={toggleTheme}
          >
            {themeText}
            <span className="navIcons" style={{ color: iconColor }}>
              {modeIcon}
            </span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
