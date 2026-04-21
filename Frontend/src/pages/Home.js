// src/components/Home.js
import React from 'react';
import Carouselmain from '../components/Carouselmain';
import Feature from '../components/Feature';
import Services from '../components/Services'
import Partners from '../components/Partners';
import Carousel from '../components/Carousel';
import NavigationLandingMain from '../components/NavigationLandingMain';
function Home() {
  return (
    <div>
      <NavigationLandingMain />
      <Partners />
      <Carousel />
      <Feature />
      
      {/* Add other sections or components here as needed */}
    </div>
  );
}

export default Home;