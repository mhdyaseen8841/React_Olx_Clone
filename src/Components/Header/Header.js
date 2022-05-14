import React,{useContext} from 'react';
import {  useNavigate } from "react-router-dom";
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../store/context';
import { FirebaseContext } from '../../store/context';
var items = ["Cars","Motorcycles","Mobiles","HouseForsale","Scooter","CommercialVehicles","Laptops","PC Peripharls","FoodItems","Hardware"];
function Header() {
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  let navigate = useNavigate()
  
  return (
    
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName" onClick={()=>{
          navigate('/')
        }} >
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch autocomplete">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
             
            />

            
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
        <select id="lang" className='select'  >
                  <option   value="select" >ENGLISH</option>
                  <option   value="Cars" >HINDI</option>
                  
               </select> 
               
          
        </div>
        <div className="loginPage">
          <span className='login-btn' onClick={()=>{
            {user ? navigate('/') : navigate('/login')}
          }}>{user? `Welcome ${user.displayName}` : 'Login'}</span>
          
          <span></span>
          <hr />
          
        </div>
      { user && <span onClick={()=>{
        firebase.auth().signOut()
        navigate('/login')
      }}>  Logout</span> }
        <div className="sellMenu" onClick={()=>{
            navigate('/create')
        }} >
          <SellButton></SellButton>
          <div className="sellMenuContent" >
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;



