import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/banner.jpeg'; // Replace with your actual image

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-white">
        {/* Welcome Text */}
        <p className="text-sm md:text-xl mb-6 animate__animated animate__fadeIn animate__delay-1s font-semibold">
          Welcome to
        </p>

        {/* Business Name */}
        <h1 className="text-3xl md:text-5xl font-serif font-semibold text-[#ff904a] mb-6 animate__animated animate__fadeIn animate__delay-2s">
          SuperLicks
        </h1>

        {/* Subheading */}
        <h2 className="text-3xl md:text-5xl font-serif italic mb-6 animate__animated animate__fadeIn animate__delay-3s" style={{ fontFamily: "'Great Vibes', cursive" }}>
          Hospitality & Catering Services
        </h2>

        {/* Subheading Text */}
        <p className="text-sm md:text-xl mb-6 animate__animated animate__fadeIn animate__delay-4s">
          Exceptional food for every occasion.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          {/* Enquiry Button */}
          <Link
            to="/contact"
            className="px-8 py-3 bg-transparent border-2 border-[#ff904a] text-white text-lg font-semibold  shadow-xl hover:bg-orange-600 hover:scale-105 transform transition duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-5s"
          >
            Enquiry
          </Link>

          {/* Catering Menu Button */}
          <Link
            to="/menu"
            className="px-8 py-3 bg-transparent border-2 text-white text-lg font-semibold  shadow-xl hover:bg-orange-600 hover:scale-105 transform transition duration-300 ease-in-out animate__animated animate__fadeIn animate__delay-5s"
          >
            Catering Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
