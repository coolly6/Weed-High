import React, { useRef, useState, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./signUp.css";
import { ThemeContext } from "../../context/ThemeContext";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      history.push("/");
    } catch {
      setError("Failed to  create  an account");
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
    <div style={{ position: "relative" }}>
      <form onSubmit={handleSubmit} className="form-container" style={formStyle}>
        <h1 style={formH1}>Sign Up</h1>
        {error && <h2 className="form-error">{error}</h2>}
        <label>Email Address</label>
        <br />
        <input id="email" ref={emailRef} type="email" required style={formInput}/>
        <br />
        <br />
        <label>Password</label>
        <br />
        <input id="password" ref={passwordRef} type="password" required  style={formInput}/>
        <br />
        <br />
        <label>Confirm Password</label>
        <br />
        <input
          id="confirmPassword"
          ref={confirmPasswordRef}
          type="password"
          style={formInput}
          required
        />
        <br />
        <br />
        <button style={formBtn} disabled={loading} type="submit" className="btn">
          Sign Up
        </button>
        <br />
        <br />
        <br />
        <div className="other-option">
          Already have an account?
          <br />
          <NavLink className="form-link" style={{color:themeMode.formLinkColor}} to="/login">
            Login
          </NavLink>
        </div>
      </form>
    </div>
  );
}
