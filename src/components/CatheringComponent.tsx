import React from 'react';
import nigerianDishImage from '../assets/jollof.jpg'; // Replace with an actual image of Nigerian dishes
import { Link } from 'react-router-dom';

const CateringComponent: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-gradient-to-r from-[#f7f7f7] to-[#fff] relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#ff904a]/10 to-[#ff904a]/30 rounded-full blur-3xl opacity-30"></div>

      {/* Image Section */}
      <div
        className="w-full md:w-1/2 mb-8 md:mb-0 transform transition-transform duration-1000 ease-in-out hover:scale-105"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <img
          src={nigerianDishImage}
          alt="Nigerian Dishes"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Text Section */}
      <div
        className="w-full md:w-1/2 px-4 md:px-8 text-center md:text-left"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins text-[#4a4a4a] font-semibold mb-6 leading-snug" style={{ fontFamily: "'Great Vibes', cursive" }}>
          Catering Beyond Expectations
        </h2>
        <p className="text-sm sm:text-xl text-[#4a4a4a] mb-6 leading-relaxed" >
          We specialize in crafting a wide variety of delicious treats and meals, including
          <span className="text-[#ff904a] font-semibold"> cakes, pastries, snacks, small chops, cocktails, mocktails, parfaits, desserts, African dishes, continental dishes, native soups, sauces, grills, fries </span>. 
          Our expertise extends beyond food, offering elegant
          <span className="text-[#ff904a] font-semibold"> table settings, meticulous event arrangements, and comprehensive event planning and management </span> 
          to make your occasions truly unforgettable.
        </p>
        
        <div className="inline-block px-8 py-3 bg-[#ff904a] text-white font-semibold  border-2 border-black shadow-lg hover:bg-orange-600 transition duration-300">


        
        <Link to='/booking'>
        Book Our Services
        </Link>
        </div>
          
      
      </div>
    </div>
  );
};

export default CateringComponent;
