import React, { useRef, useState } from "react";
import { NavLink , useHistory} from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function UpdateEmailOrPassword() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { currentUser, updateEmail, updatePassword} = useAuth();
  const [error, setError] = useState("");
  const history = useHistory()

   function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setError("")
      })
    
  }
  

  return (
    <div>
      <h1>Update Email or Password</h1>
       {error && <h2>{error}</h2>}
      <form onSubmit={handleSubmit}>
        <label>Email Address</label>
        <input id="email" ref={emailRef} type="email" required defaultValue={currentUser.email} />
        <label>Password</label>
        <input id="password" ref={passwordRef} type="password"  placeholder='Leave black to keep the same'/>
        <label>Confirm Password</label>
        <input
          placeholder='Leave black to keep the same'
          id="confirmPassword"
          ref={confirmPasswordRef}
          type="password"
          
        />
        <button  type="submit">Update</button>
      </form>
      <div><NavLink to='/'>Cancel</NavLink> </div>
    </div>
  );
}
