import React from 'react';
import logo from '../../../logo.svg';
import './logo.css'

function Logo() {
  return (
    <div className="logo">
        <img src={logo} className="logo-img" alt="logo" width="100%" />
       <h1 className="logo-title">Weed#High</h1>
    </div>
  );
}

export default Logo;
