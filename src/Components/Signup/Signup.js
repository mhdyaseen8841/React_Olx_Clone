import React from 'react';
import {useState,useContext} from 'react'
import {  useNavigate } from "react-router-dom";
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/context';
import './Signup.css';
import LoadingSpinner from "../LoadingSpinner/spinner";



export default function Signup() {
let navigate = useNavigate()

const [errorMessage, setErrorMessage] = useState("");
  const [username,setUsername]= useState('')
  const [emailId,setemailId]= useState('')
  const [password,setpassword]= useState('')
  const [mobno,setmobno]= useState('')
  const [district,setdistrict]= useState('')
  const [street,setstreet]= useState('')
  const {firebase} = useContext(FirebaseContext)
  const [isLoading, setIsLoading] = useState(false);


 const handleSubmit =(e)=>{
   e.preventDefault();
   setIsLoading(true);
   firebase.auth().createUserWithEmailAndPassword(emailId, password).then((result)=>{
     result.user.updateProfile({displayName:username}).then(()=>{
 
    firebase.firestore().collection('users').add({
      id:result.user.uid,
      username:username,
      mobno:mobno,
      district:district,
      street:street
    }).then(()=>{
      setIsLoading(false)
      console.log('hloooo')
      navigate('/login')
    })
    .catch((res) => {
      console.log('hloooo'+res)
       setErrorMessage("Unable to fetch user list");
       setIsLoading(false);
       console.log(errorMessage)
    });

     
   }).catch((res) => {
    console.log('hloooo'+res)
     setErrorMessage("Unable to create account with the given credentials");
     setIsLoading(false);
     console.log(errorMessage)
  });

 }).catch((res) => {
  console.log('hloooo'+res)
   setErrorMessage("Unable to create");
   setIsLoading(false);
   console.log(errorMessage)
});
 }

 const renderSignup = (
<div>
      <div  className="signupParentDiv">
        <img width="230px" height="200px" className='logo' onClick={()=>navigate('/')} src={Logo} alt="logo" ></img>
        <form onSubmit={handleSubmit}>
          <label className='' htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label className='' htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={emailId}
            onChange={(e)=>setemailId(e.target.value)}
            id="email"
            name="email"
            defaultValue="John"
          />
          <br />
          <label className='' htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={mobno}
            onChange={(e)=>setmobno(e.target.value)}
            id="phone"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label className='' htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            id="password"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <label className='' htmlFor="fname">Street</label>
          <br />
          <input
            className="input"
            type="text"
            value={street}
            onChange={(e)=>setstreet(e.target.value)}
            id=""
            name="name"
            defaultValue="John"
          />
          <br />
          <label className='' htmlFor="fname">District</label>
          <br />
          <input
            className="input"
            type="text"
            value={district}
            onChange={(e)=>setdistrict(e.target.value)}
            id=""
            name="name"
            defaultValue="John"
          />
          <br />
          <br />
          <button disabled={isLoading}>Signup</button>
        </form>
        <a href='/login'>Login</a>
      </div>
    </div>

 )



  return (
    <div className="App">
      {isLoading ? <LoadingSpinner /> : renderSignup}
      {errorMessage && <div className="error">{errorMessage}</div>}
    </div>
  );
}





  