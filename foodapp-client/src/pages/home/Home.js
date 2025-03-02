import React from 'react'
import Banner from '../../components/Banner.js'
import Catagories from './Catagories.js'
import SpecialDishes from './SpecialDishes.js'
import Testimonials from './Testimonials.js'
import OurServices from './OurServices.js'

const Home = () => {
  return (
    <div>
       <Banner/>
       <Catagories/>
       <SpecialDishes/>
       <Testimonials/>
       <OurServices/>
    </div>
  )
}

export default Home;