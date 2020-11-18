import React,{useState} from "react";
import { NavLink} from "react-router-dom";
import {useAuth} from '../../context/AuthContext'

function Home() {
  const [error, setError]= useState('')
  const {currentUser} = useAuth()
  

  
  return (
    <div className="home">
      <h1>Home</h1>
      {error && <h2>{error}</h2>}
      {currentUser && currentUser.email}
      <br/>
      <NavLink to='/updateEmailOrPassword'>Update Email Or Password</NavLink>
      <br/>
    </div>
  );
}

export default Home;
