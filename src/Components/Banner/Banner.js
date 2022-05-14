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
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div className="otherQuickOptions">
            <span onClick={()=>{setPostDetails('Cars') 
            navigate('/categoryposts')}}>Cars</span>
            <span onClick={()=>{
             
             setPostDetails('Motorcycles')
           navigate('/categoryposts')
          }}>Motorcycles</span>
            <span onClick={()=>{setPostDetails('Mobiles')
           navigate('/categoryposts')
          }}>Mobile Phones</span>
            <span onClick={()=>{setPostDetails('HouseForsale')
           navigate('/categoryposts')
          }}>For Sale:Houses & Apartment</span>
            <span onClick={()=>{setPostDetails('Scooter')
           navigate('/categoryposts')
          }}>Scooter</span>
            <span onClick={()=>{setPostDetails('Laptops')
           navigate('/categoryposts')
          }}>Laptops</span>
            <span onClick={()=>{setPostDetails('CommercialVehicles')
           navigate('/categoryposts')
          }}>Commercial & Other Vehicles</span>
            <span onClick={()=>{setPostDetails('HouseForsale')
           navigate('/categoryposts')
          }}>For Rent: House & Apartment</span>
          </div>
        </div>
        <div className="banner">
          <img
            src="../../../Images/banner copy.png"
            alt=""
            
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
