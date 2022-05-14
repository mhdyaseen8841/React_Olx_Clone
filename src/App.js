import React,{useEffect,useContext} from 'react';
import './App.css';

import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from  './Pages/Create'
import View from './Pages/ViewPost'
import CategoryView from './Pages/CategoryView'
import  Post from './store/PostContext'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { AuthContext, FirebaseContext } from './store/context';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';

function App() {
  const {user,setUser} = useContext(AuthContext)
  const {firebase}= useContext(FirebaseContext)
  useEffect(()=>{
  firebase.auth().onAuthStateChanged((user)=>{
    setUser(user)
  })
  })
  return (
    <div>
 <Post>
      <Router>
     <Routes>
     <Route exact path="/" element={<Home/>} />
  
     <Route exact path="/signup" element={<Signup/>} />
     <Route exact path="/login" element={<Login/>} />
     <Route exact path="/create" element={<Create/>} />

     <Route exact path="/view" element={<View/>} />
     <Route exact path="/categoryposts" element={<CategoryView/>} />
     </Routes>
      </Router>
      </Post>
    </div>
  );
}

export default App;
