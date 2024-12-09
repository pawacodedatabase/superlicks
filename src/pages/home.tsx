import React from 'react';
import Hero from '../components/hero';
import CateringComponent from '../components/CatheringComponent';
import Gallery from '../components/gallery';
import RandomMenu from '../components/randomMeal';


const Home: React.FC = () => {
  return (
   <>
   <Hero/>
   <CateringComponent/>
   <hr className='border-2' /> <br />
   <Gallery/>

   <RandomMenu/>
   </>
  );
};

export default Home;
