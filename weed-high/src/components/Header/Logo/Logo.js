import React from "react";
import logo from "../../../logo.svg";
import "./logo.css";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
      <NavLink to="/" className="logo">
        <img src={logo} className="logo-img" alt="logo" width="100%" />
        <h1 className="logo-title">Weed#High</h1>
      </NavLink>
  );
}

export default Logo;
