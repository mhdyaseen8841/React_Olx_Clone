import React, {useEffect,useContext,useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {PostContext} from '../../store/PostContext'
import './Banner.css';
import Arrow from '../../assets/Arrow'
function Banner() {
  const {setPostDetails}= useContext(PostContext)
  let navigate = useNavigate()
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        
        <div className="banner">
          <img
            src=""
            alt=""
            
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
