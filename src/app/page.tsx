import React from 'react'
import HeroSection from './hero'
import MainPage from './mainpage'

import FoodExperienceSection from './mainpage2'
import RestaurantLandingPage from './mainpage3'

function Homepage() {
  return (
    <div>
      <HeroSection/>
      <MainPage/>
      <FoodExperienceSection/>
      <RestaurantLandingPage/>
    </div>
  )
}

export default Homepage
