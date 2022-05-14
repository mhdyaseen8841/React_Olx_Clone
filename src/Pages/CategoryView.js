import React from 'react'

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import CategoryPost from '../Components/categoryPost/CategoryPost'
import Banner from '../Components/inpageBanner/Banner';
function CategoryView() {
  return (
    <div>
   <Header/>
   <Banner/>
    <CategoryPost/>
      <Footer/>
    </div>
  )
}

export default CategoryView