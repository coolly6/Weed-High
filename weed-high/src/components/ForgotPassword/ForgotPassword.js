import React, { useRef, useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import "../SignUp/signUp.css";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset");
    }
    setLoading(false);
  }
  const { isLightTheme, dark, light } = useContext(ThemeContext);
  const themeMode = isLightTheme ? light : dark;

  const formStyle = {
    background: themeMode.formBackground,
    color: themeMode.formColor,
    boxShadow: themeMode.formBoxShadow,
  };
  const formH1 = {
    boxShadow: themeMode.formH1BoxShadow,
    textShadow: themeMode.formH1TextShadow,
  };
  const formInput = {
    borderBottom: themeMode.formInputBorderBottom,
    color: themeMode.formInputColor,
  };

  const formBtn = {
    background: themeMode.formBtnBackground,
    color: themeMode.formBtnColor,
  };

  return (
    <div>
      <form
        className="form-container"
        style={formStyle}
        onSubmit={handleSubmit}
      >
        <h1 style={formH1}>Reset Password</h1>
        {message && <h2 className="form-error">{message}</h2>}
        {error && <h2 className="form-error">{error}</h2>}
        <label>Email Address</label>
        <input
          style={formInput}
          id="email"
          ref={emailRef}
          type="email"
          required
        />
        <br />
        <br />

        <button className='btn' style={formBtn} disabled={loading}> Reset Password</button>
        <br/>
         <br/><br/><br/>
        <NavLink  style={{color:themeMode.formLinkColor, textAlign:'center',display:'block'}} to="/login">Login</NavLink>
        <br/><br/>
        <div  style={{ textAlign:'center'}}>
          Don't have an account? <br/> <NavLink  style={{color:themeMode.formLinkColor, textAlign:'center',display:'block'}} to="/signUp">Sign Up</NavLink>
        </div>
      </form>
    </div>
  );
}
