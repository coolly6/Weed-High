<<<<<<< Updated upstream
import React from 'react';

function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
=======

import React, { useRef, useState,useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import '../SignUp/signUp.css'

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setLoading(false);

      history.push("/");
    } catch {
      setError("Failed to login");
    }
  }

  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const themeMode = isLightTheme ? light : dark;


  const formStyle = {
    background: themeMode.formBackground,
    color: themeMode.formColor,
    boxShadow: themeMode.formBoxShadow
  };
  const formH1={
    boxShadow: themeMode.formH1BoxShadow,
    textShadow: themeMode.formH1TextShadow
  }
  const formInput={
     borderBottom: themeMode.formInputBorderBottom,
    color: themeMode.formInputColor
  }

  const formBtn = {
    background: themeMode.formBtnBackground,
    color: themeMode.formBtnColor
  };

  return (
    <div style={{position: 'relative'}}>
      <form onSubmit={handleSubmit} className="form-container"  style={formStyle}>
      <h1 style={formH1}>Login</h1>
      {error && <h2 className="form-error">{error}</h2>}
        <label>Email Address</label>
        <br/>
        <input style={formInput} id="email" ref={emailRef} type="email" required />
        <br/><br/>
        <label>Password</label>
        <br/>
        <input style={formInput}  id="password" ref={passwordRef} type="password" required />
        <br/><br/>
        <button className='btn' style={formBtn} disabled={loading} type="submit">
          Login
        </button>
        <br/>
        <br/><br/>
      <NavLink  style={{color:themeMode.formLinkColor, textAlign:'center',display:'block'}} to="/forgotPassword">Forgot Password?</NavLink>
       <br/>
      <div style={{textAlign:'center'}}>
        Don't have an account?<br/> <NavLink className="form-link" style={{color:themeMode.formLinkColor}} to="/signUp">Sign Up</NavLink>
      </div>
      </form>

>>>>>>> Stashed changes
    </div>
  );
}

export default Login;