import React, { useRef, useState , useContext} from "react";
import { NavLink , useHistory} from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import '../SignUp/signUp.css'

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
       <form style={formStyle} className="form-container" onSubmit={handleSubmit}>
      <h1 style={formH1}>Update Email or Password</h1>
       {error && <h2 className="form-error">{error}</h2>}
        <label>Email Address</label>
        <input style={formInput} id="email" ref={emailRef} type="email" required defaultValue={currentUser.email} />
        <br/><br/>
        <label>Password</label>
        <input id="password"  style={formInput}  ref={passwordRef} type="password"  placeholder='Leave black to keep the same'/>
       <br/><br/>
        <label>Confirm Password</label>
        <input
          placeholder='Leave black to keep the same'
          id="confirmPassword"
          ref={confirmPasswordRef}
          type="password"
          style={formInput} 
        />
        <br/><br/>
        <button className='btn'  style={formBtn} type="submit">Update</button>
   <br/><br/>
      <div><NavLink className="form-link" style={{color:themeMode.formLinkColor,textAlign:'center',display:'block'}}  to='/'>Cancel</NavLink> </div>
      </form>
    </div>
  );
}