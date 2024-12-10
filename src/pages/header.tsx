import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/1.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // Prevent background scrolling when the menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 bg-white text-[#000000] z-50 shadow-md">
        <div className="flex justify-between items-center p-4">
          {/* Logo */}
          <div className="text-2xl font-serif text-[#ff904a]">
            <Link to="/" onClick={closeMenu}>
              <img src={logo} alt="Logo" width={120} />
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="relative font-semibold text-[#000000] hover:text-[#ff904a] transition duration-200 group"
            >
              Home
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#ff904a] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
            </Link>
            <Link
              to="/train"
              className="relative font-semibold text-[#000000] hover:text-[#ff904a] transition duration-200 group"
            >
              Train With Us
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#ff904a] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
            </Link>
            <Link
              to="/menu"
              className="relative font-semibold text-[#000000] hover:text-[#ff904a] transition duration-200 group"
            >
              Menu
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#ff904a] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className="relative font-semibold text-[#000000] hover:text-[#ff904a] transition duration-200 group"
            >
              Contact Us
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#ff904a] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
            </Link>
            <Link
              to="/booking"
              className="px-6 py-2 bg-[#ff904a] text-[#000000] font-semibold rounded-full hover:bg-orange-600 transition duration-200"
            >
              Book Now
            </Link>
          </nav>

          {/* Hamburger Icon and Book Button (on mobile) */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Book Now Button */}
            <Link
              to="/booking"
              className="px-6 py-2 bg-[#ff904a] text-[#fff] font-semibold text-sm hover:bg-orange-300 transition duration-200 border-2 border-black"
              onClick={closeMenu}
            >
              Book Now
            </Link>

            {/* Hamburger Menu */}
            <div className="flex flex-col space-y-2 cursor-pointer" onClick={toggleMenu}>
              <div
                className={`w-6 h-1 bg-[#ff904a] transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></div>
              <div
                className={`w-6 h-1 bg-[#ff904a] transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></div>
              <div
                className={`w-6 h-1 bg-[#ff904a] transition-transform duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <nav
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          ref={menuRef}
        >
          <div className="absolute top-16 right-4 bg-white text-[#000000] p-6 rounded-lg w-64 space-y-4 shadow-lg transform transition-all duration-500 ease-in-out">
            <Link
              to="/"
              className="block relative font-semibold text-[#000000] hover:text-orange-600 transition duration-300 group"
              onClick={closeMenu}
            >
              Home
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#ff904a] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
            </Link>
            <Link
              to="/"
              className="block relative font-semibold text-[#000000] hover:text-orange-600 transition duration-300 group"
              onClick={closeMenu}
            >
              Home
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#ff904a] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
            </Link>
            <Link
              to="/booking"
              className="block relative font-semibold text-[#000000] hover:text-orange-600 transition duration-300 group"
              onClick={closeMenu}
            >
              Booking
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#ff904a] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
            </Link>
            <Link
              to="/menu"
              className="block relative font-semibold text-[#000000] hover:text-orange-600 transition duration-300 group"
              onClick={closeMenu}
            >
              Menu
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#ff904a] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className="block relative font-semibold text-[#000000] hover:text-orange-600 transition duration-300 group"
              onClick={closeMenu}
            >
              Contact Us
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#ff904a] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
            </Link>
            <Link
              to="/train"
              className="block relative font-semibold text-[#000000] hover:text-orange-600 transition duration-300 group"
              onClick={closeMenu}
            >
             Training
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-[#ff904a] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
            </Link>
           
            {/* Close Icon */}
            <button
              className="mt-4 px-2 py-2 bg-[#ff904a] text-white font-semibold hover:bg-orange-600 transition duration-200 w-full border-2 border-black"
              onClick={closeMenu}
            >
              Close
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
