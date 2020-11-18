import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
        setMessage('')
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset");
    }
    setLoading(false);
  }

  return (
    <div>
      <h1>Reset Password</h1>
      {message && <h2>{message}</h2>}
      {error && <h2>{error}</h2>}
      <form onSubmit={handleSubmit}>
        <label>Email Address</label>
        <input id="email" ref={emailRef} type="email" required />
        <label>Password</label>
        <button disabled={loading}> Reset Password</button>
      </form>
      <NavLink to="/login">Login</NavLink>
      <div>
        Don't have an account? Sign Up <NavLink to="/signUp">here</NavLink>
      </div>
    </div>
  );
}
