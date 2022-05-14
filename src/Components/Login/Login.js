import React from 'react';
import {useState,useContext} from 'react'
import Logo from '../../olx-logo.png';
import './Login.css';
import {FirebaseContext} from '../../store/context'

import {  useNavigate } from "react-router-dom";




function Login() {

  let navigate = useNavigate()
  
  const [emailId,setemailId]= useState('')
  const [password,setpassword]= useState('')
  const {firebase} = useContext(FirebaseContext)

  const handleLogin =(e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(emailId, password).then(()=>{
    navigate('/')
  }).catch((error)=>{
    alert(error.message)
  })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" onClick={()=>navigate('/')} className="logo" src={Logo} alt='image'></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={emailId}
            onChange={(e)=>setemailId(e.target.value)}
        
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            name="password"
        
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
