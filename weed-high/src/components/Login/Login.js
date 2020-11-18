import React, { useRef, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

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

  return (
    <div>
      <h1>Login</h1>
      {error && <h2>{error}</h2>}
      <form onSubmit={handleSubmit}>
        <label>Email Address</label>
        <input id="email" ref={emailRef} type="email" required />
        <label>Password</label>
        <input id="password" ref={passwordRef} type="password" required />
        <button disabled={loading} type="submit">
          Login
        </button>
      </form>
      <NavLink to="/forgotPassword">Forgot Password?</NavLink>
      <div>
        Don't have an account? Sign Up <NavLink to="/signUp">here</NavLink>
      </div>
    </div>
  );
}
