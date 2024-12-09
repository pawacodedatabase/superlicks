import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaStar, FaThumbsUp, FaRegThumbsUp } from 'react-icons/fa'; // Import for stars and like icons
import menu from './menu'; // Import your menu data

const MenuItemDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get ID from URL parameters
  const menuItem = menu.find((item) => item.id === Number(id)); // Find the menu item by ID

  if (!menuItem) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Menu item not found</p>
      </div>
    );
  }

  const [currentImage, setCurrentImage] = useState(0); // For handling image carousel
  const [rating, setRating] = useState(0); // Store the rating locally
  const [liked, setLiked] = useState(false); // Store the like status

  const handleRating = (index: number) => {
    setRating(index + 1); // Set the rating value (index starts from 0, so +1)
  };

  const toggleLike = () => {
    setLiked((prev) => !prev); // Toggle the like status
  };

  return (
    <div className="min-h-screen bg-white py-16 px-8">
      <h1 className="text-2xl font-bold text-[#ff904a] mb-6 leading-tight text-center" style={{ fontFamily: "'Great Vibes', cursive" }}>
        {menuItem.name}
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Image Display */}
        <div className="md:w-1/2">
          <div className="relative w-full h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={menuItem.images[currentImage]}
              alt={menuItem.name}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
            />
          </div>
          {/* Thumbnail Images (Scrollable) */}
          <div className="flex overflow-x-auto space-x-3 mt-4 pb-4">
            {menuItem.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={menuItem.name}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer transition-all duration-300 ${
                  currentImage === index ? 'ring-4 ring-[#ff904a]' : 'ring-2 ring-gray-300'
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            {/* Updated Description with Enhanced First Letter Styling */}
            <p className="text-gray-700 text-sm text-center leading-relaxed mb-8 first-letter:text-2xl first-letter:font-semibold first-letter:text-[#ff904a]">
              {menuItem.description}
            </p>

            {/* Additional Descriptive Text */}
            <p className="text-gray-700 text-sm font-bold text-center leading-relaxed mb-8" style={{ fontFamily: "'Great Vibes', cursive" }}>
              Enjoy a unique blend of flavors with our carefully crafted dish, perfect for all occasions. Each ingredient is sourced locally, ensuring freshness and authenticity in every bite. Whether you're hosting a family gathering or an event, this dish will surely leave a lasting impression.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-[#ff904a] mb-2" style={{ fontFamily: "'Great Vibes', cursive" }}>Category</h3>
                <p className="text-lsm font-thin text-gray-700">{menuItem.category}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#ff904a] mb-2" style={{ fontFamily: "'Great Vibes', cursive" }}>Features</h3>
                <ul className="list-disc ml-5 text-gray-700 text-lg">
                  <li>Freshly prepared with high-quality ingredients</li>
                  <li>Customizable to suit your preferences</li>
                  <li>Perfect for any event or occasion</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-[#ff904a] mb-2 " style={{ fontFamily: "'Great Vibes', cursive" }} >Customer Rating</h3>
            <div className="flex justify-center">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  color={index < rating ? '#ff904a' : '#e4e5e9'}
                  size={24}
                  className="mr-1 cursor-pointer"
                  onClick={() => handleRating(index)}
                />
              ))}
            </div>
          </div>

          {/* Like Button with Icon */}
          <div className="mt-4 text-center">
            <button onClick={toggleLike} className="text-3xl">
              {liked ? (
                <FaThumbsUp color="#ff904a" />
              ) : (
                <FaRegThumbsUp color="#e4e5e9" />
              )}
            </button>
          </div>

          {/* Call to Action (Book Us Now Button) */}
          <div className='flex m-auto mt-9'>
            <Link to="/booking">
              <button className="px-4 py-2  bg-[#ff904a] text-white text-xl font-bold  shadow-lg hover:bg-[#e77e45] hover:shadow-xl transition duration-300 transform hover:scale-105 animate-pulse">
                Book Us Now
              </button>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default MenuItemDetail;
