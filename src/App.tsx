import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Header from './pages/header';
import Home from './pages/home';
import Menu from './Menu/Foodmenu';
import MenuItemDetail from './Menu/MenuItemDetail';
import BookingPage from './pages/booking';
import ConfirmationPage from './pages/confirmation';
import ContactPage from './pages/Contact';
import CulinaryTrainingPage from './pages/train';
import Footer from './pages/footer';


const App: React.FC = () => {
  // Initialize AOS once the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only trigger animation once
    });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/train" element={<CulinaryTrainingPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/menu/:id" element={<MenuItemDetail/>} />
       
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
