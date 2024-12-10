import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import menu, { MenuItem } from './menu'; // Import your menu data
import all from '../assets/all.webp';
import img1 from './african.jpg';
import img2 from './continental.jpg';
import img3 from './pastries.jpg';
import img4 from './beverage.jpg';
import img5 from './deserts.jpg';
import img6 from './grill.jpg';

const categoryImages: Record<string, string> = {
  All: all,
  'African Dishes': img1,
  'Continental Dishes': img2,
  Snacks: img3,
  Beverages: img4,
  Desserts: img5,
  Grills: img6,
};

const categories = [
  'All',
  'African Dishes',
  'Continental Dishes',
  'Snacks',
  'Beverages',
  'Desserts',
  'Grills',
];

const ITEMS_PER_PAGE = 10;

const Menu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [likedItems, setLikedItems] = useState<Record<number, boolean>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMenu = selectedCategory === 'All'
    ? menu.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : menu.filter((item) =>
        item.category === selectedCategory &&
        (item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );

  const totalPages = Math.ceil(filteredMenu.length / ITEMS_PER_PAGE);
  
  const paginateMenu = filteredMenu.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const toggleLike = (id: number) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const truncateDescription = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    return words.length > wordLimit
      ? `${words.slice(0, wordLimit).join(' ')}...`
      : text;
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-8 bg-[#f7f7f7] mt-10">
      {/* Search Bar */}
      <div className="mb-6 text-center relative">
        <input
          type="text"
          placeholder="Search for meals..."
          className="px-4 py-2 w-full sm:w-1/2 lg:w-1/3 mx-auto rounded-lg shadow-md border-2 border-[#ff904a] focus:outline-none focus:ring-2 focus:ring-[#ff904a] transition duration-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute top-2/4 right-12 transform -translate-y-1/2 text-[#ff904a] text-2xl">
          <AiOutlineSearch />
        </div>
      </div>

      {/* Categories - Centered Scrollable Line */}
      <div className="mb-8">
        <div className="flex justify-start items-center space-x-6 py-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <div
              key={category}
              className={`relative cursor-pointer w-36 h-36 flex-shrink-0 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg rounded-lg ${
                category === selectedCategory
                  ? 'border-4 border-[#ff904a] shadow-2xl'
                  : 'border-2 border-transparent'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              <div
                className={`absolute inset-0 bg-cover bg-center rounded-lg transition-all duration-300 ${
                  category === selectedCategory ? 'scale-105' : 'scale-100'
                }`}
                style={{
                  backgroundImage: `url(${categoryImages[category]})`,
                }}
              ></div>

              {/* Full Coverage Opacity Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
                <p className="text-gray-300 font-semibold text-lg text-center">{category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginateMenu.map((item: MenuItem) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-md relative">
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

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 space-x-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-4 py-2 bg-[#ff904a] text-white font-semibold rounded-md hover:bg-orange-600 transition duration-200"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="flex items-center text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 bg-[#ff904a] text-white font-semibold rounded-md hover:bg-orange-600 transition duration-200"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Menu;
