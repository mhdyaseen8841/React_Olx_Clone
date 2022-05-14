import React, {useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../store/context';
import { PostContext } from '../../store/PostContext';
import {useNavigate} from 'react-router-dom'
import './categoryPost.css';
import Heart from '../../assets/Heart';

function CategoryPost() {

  let navigate = useNavigate()
  const{firebase}= useContext(FirebaseContext)
  const [mobiles,setMobiles]= useState([])
  const {postDetails,setPostDetails}= useContext(PostContext)

let postCat=postDetails

  useEffect(()=>{
    sessionStorage.setItem("post", postCat);
    firebase.firestore().collection('products').where('category','==',postCat).get().then((snapshot)=>{
      const allmobiles= snapshot.docs.map((product)=>{
        return {
          ...product.data(),
          id:product.id
        }
    })
    setMobiles(allmobiles)
    
  })
  })

  const renderPost =(
    <div className="recommendations">
    <div className="heading">
     
      <span>{postDetails}</span>
    </div>
    <div className="cards">
    
    {mobiles.map(products=>{

  
    return   <div
        className="card"
        onClick={()=>{
          setPostDetails(products)
          navigate('/view')
        }}
      >
        <div className="favorite">
          <Heart></Heart>
        </div>
        <div className="image">
          <img src={products.url} alt="" />
        </div>
        <div className="content">
          <p className="rate">&#x20B9; {products.price}</p>
          <span className="kilometer">{products.category}</span>
          <p className="name">{products.name}</p>
        </div>
        <div className="date" >
          <span>{products.createdAt}</span>
        </div>
      </div>

})
}

    </div>
   



  </div>
  )


  return(
    <div >
       {postDetails ?   renderPost : Alert()}
    
     
    </div>
  )

function Alert(){
  postCat= sessionStorage.getItem("post");
  useEffect(()=>{
    
    firebase.firestore().collection('products').where('category','==',postCat).get().then((snapshot)=>{
      const allmobiles= snapshot.docs.map((product)=>{
        return {
          ...product.data(),
          id:product.id
        }
    })
    setMobiles(allmobiles)
    
  })
  },[])
 
}






}









export default CategoryPost