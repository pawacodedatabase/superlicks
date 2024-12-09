import React, { useState, useEffect } from 'react';

import gallery_1 from "../assets/gallery_1.jpg"
import gallery_2 from "../assets/gallery_2.jpg"
import gallery_3 from "../assets/gallery_3.jpg"
import gallery_4 from "../assets/gallery_4.jpg"
import gallery_5 from "../assets/gallery_5.jpg"
import gallery_6 from "../assets/gallery_6.jpg"
import { Link } from 'react-router-dom';

// Example images (Replace with your actual image URLs)
const images = [
  gallery_1, gallery_2, gallery_3, gallery_4, gallery_5, gallery_6
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Automatically swipe to the next image every 2 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 2000); // 2000ms = 2 seconds

    return () => {
      clearInterval(interval); // Clean up the interval when the component is unmounted
    };
  }, []);

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
          src={images[currentIndex]}
          alt={`Gallery Image ${currentIndex}`}
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
          Gallery
        </h2>
        <p className="text-sm sm:text-xl text-[#4a4a4a] mb-6 leading-relaxed">
          Immerse yourself in the beauty of our culinary creations and services. From exquisite cakes to 
          <span className="text-[#ff904a] font-semibold"> delicious Nigerian and continental dishes, cakes, pastries, small chops, grills, and more</span>, we cater to your every need.
        </p>

        <div className="inline-block px-8 py-3 bg-[#ff904a] text-white font-semibold border-2 border-black shadow-lg hover:bg-orange-600 transition duration-300">
          <Link to='/menu'>
            View Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
