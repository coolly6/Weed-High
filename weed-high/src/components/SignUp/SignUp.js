import React, { useRef, useState } from "react";
import { NavLink , useHistory} from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signUp} = useAuth();
  const [error, setError] = useState("");
  const[loading, setLoading]= useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
        setError('')
        setLoading(true)
      await signUp(emailRef.current.value, passwordRef.current.value);
      setLoading(false)
      history.push('/')
    }
    catch{
      setError('Failed to  create  an account')
    }
  }

  return (
    <div>
      <h1>Sign Up</h1>
       {error && <h2>{error}</h2>}
      <form onSubmit={handleSubmit}>
        <label>Email Address</label>
        <input id="email" ref={emailRef} type="email" required />
        <label>Password</label>
        <input id="password" ref={passwordRef} type="password" required />
        <label>Confirm Password</label>
        <input
          id="confirmPassword"
          ref={confirmPasswordRef}
          type="password"
          required
        />
        <button disabled={loading} type="submit">Sign Up</button>
      </form>
      <div>Already have an account?<NavLink to='/login'>Login</NavLink> </div>
    </div>
  );
}
