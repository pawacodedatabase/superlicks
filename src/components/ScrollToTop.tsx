import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ScrollToTop Component
const ScrollToTop: React.FC = () => {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location]); // Trigger this effect whenever the location changes

  return null; // This component does not render anything to the DOM
};

export default ScrollToTop;
