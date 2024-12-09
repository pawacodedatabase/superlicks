import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import menu, { MenuItem } from '../Menu/menu'; // Import your menu data

const RandomMenu: React.FC = () => {
  const [likedItems, setLikedItems] = useState<Record<number, boolean>>({});

  // Function to shuffle the array and return a subset of 3 random items
  const getRandomItems = (array: MenuItem[], numberOfItems: number) => {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, numberOfItems);
  };

  const randomMeals = getRandomItems(menu, 3);

  const toggleLike = (id: number) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const truncateDescription = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    return words.length > wordLimit
      ? `${words.slice(0, wordLimit).join(' ')}...`
      : text;
  };

  return (
    <div className="p-8 bg-[#f7f7f7] mt-10">
      {/* Featured Meals Title */}
      <h2 className="text-3xl font-bold text-[#ff904a] text-center mb-8">
        Featured Meals
      </h2>

      {/* Random Meals */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {randomMeals.map((item: MenuItem) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-md relative transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out"
          >
            <Link to={`/menu/${item.id}`}>
              <img
                src={item.images[0]} // Accessing only the first image in the array
                alt={item.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold text-[#ff904a] mb-2">{item.name}</h4>
              <p className="text-gray-600 mb-4">
                {truncateDescription(item.description, 10)}
              </p>
            </Link>
            <div className="flex justify-between items-center">
              <Link
                to={`/menu/${item.id}`}
                className="px-4 py-2 bg-[#ff904a] text-white font-semibold rounded-md hover:bg-orange-600 transition duration-200"
              >
                View More
              </Link>
              <button
                onClick={() => toggleLike(item.id)}
                className="text-2xl text-[#ff904a] hover:text-red-500 transition duration-300"
              >
                {likedItems[item.id] ? <AiFillHeart /> : <AiOutlineHeart />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomMenu;
