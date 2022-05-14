import React, {useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../store/context';
import { PostContext } from '../../store/PostContext';

import './View.css';
function View() {



const [userDetails,setUserDetails]= useState()

const {postDetails} = useContext(PostContext)
const {firebase} = useContext(FirebaseContext)

useEffect(()=>{
 const {userId} =  postDetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc =>{
        setUserDetails(doc.data())
   
      })
    })
},[])




  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv ">
        <img
          src={postDetails.url}
          alt="Image"
        />
      </div>
      
      <div className="rightSection ">
     
        <div  className="productDetails">
       
          <p>&#x20B9; {postDetails.price}  </p>
          <span >Product Name: {postDetails.name}</span>
          <p>Product description: {postDetails.category}</p>
          <p>{postDetails.description}</p>
          <span>Posted Date: {postDetails.createdAt}</span>
        </div>
       {userDetails && <div className="contactDetails">
          <h1>Seller details</h1>
          <p>Name: {userDetails.username}</p>
          <p>Phone No: {userDetails.mobno}</p>
          <p>Place: {userDetails.street}</p>
          <p>District: {userDetails.district}</p>
          
           <a href={"tel:+"+userDetails.mobno}>  <p className='icons' ><img src="https://img.icons8.com/windows/32/000000/phone.png"/> Click Me For Call</p> </a> 
         <a href={"https://wa.me/+91"+userDetails.mobno+"?text=Hi!%20I%20want%20Your%20Product%20."}>  <p className='icons' ><img src="https://img.icons8.com/material-outlined/30/000000/whatsapp--v1.png"/> Click Me For Whatsapp</p> </a>

        </div>
}
      </div>
    </div>
  );
}
export default View;


