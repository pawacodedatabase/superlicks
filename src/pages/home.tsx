import React from 'react';
import Hero from '../components/hero';
import CateringComponent from '../components/CatheringComponent';
import Gallery from '../components/gallery';


const Home: React.FC = () => {
  return (
   <>
   <Hero/>
   <CateringComponent/>
   <hr className='border-2' /> <br />
   <Gallery/>
   </>
  );
};

export default Home;
