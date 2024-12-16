import React, { useState } from 'react';
import logo from '../assets/1.png'; // Replace with your actual logo image
import { FaWhatsapp, FaFacebookF, FaInstagram, FaEnvelope, FaTiktok } from 'react-icons/fa'; // Social media icons

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here (e.g., save email to database)
    alert(`Thank you for subscribing, ${email}!`);
    setEmail('');
  };

  return (
    <footer className="bg-[#1C1C1C] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 px-8">
        {/* Logo Section */}
        <div className="text-center md:text-left">
          <img src={logo} alt="Logo" className="w-32 mx-auto md:mx-0" />
          <p className="mt-4 text-lg font-semibold text-[#FF904A]" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Culinary & Event Planning Excellence
          </p>
        </div>

       

        {/* Contact Info Section */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4 text-[#FF904A]">Contact Us</h4>
          <p className="mb-2"> Email: <a href="mailto:superlickscatheringservices@gmail.com" className="text-white hover:text-[#FF904A]">superlickscatheringservices@gmail.com </a>  </p>
          <p className="mb-2">Phone: <a href="tel:+2348030577707" className="text-white hover:text-[#FF904A]">+234 803 057 7707</a></p>
          <p className="mb-2">Address: <span className="text-white hover:text-[#FF904A]">Ibadan , Oyo State</span> </p>
        </div>

        {/* Social Media Section */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold mb-4 text-[#FF904A]">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-6 text-3xl">
            <a href="https://wa.me/+2348030577707" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF904A] transition duration-300">
              <FaWhatsapp />
            </a>
            <a href="https://web.facebook.com/oderinu.adeolaibukunolu" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF904A] transition duration-300">
              <FaFacebookF />
            </a>
            <a href="mailto:superlickscatheringservices@gmail.com " className="text-white hover:text-[#FF904A] transition duration-300">
              <FaEnvelope />
            </a>
            <a href="https://instagram.com/superlicks_cathering_services" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF904A] transition duration-300">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com/oderinuadeola" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FF904A] transition duration-300">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

 <div className='mt-9'>
    <p className='text-center  text-lg  font-semibold mb-2'>Subscribe to Our Newsletter </p>
     <form onSubmit={handleNewsletterSubmit} className="flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-6 py-3 w-full sm:w-1/3 md:w-1/4 text-black rounded-l-lg focus:outline-none"
              required
            />
            <button type="submit" className="px-6 py-3 bg-[#FF904A] text-black  font-bold rounded-r-lg hover:bg-[#FF904A] transition duration-300">
              Subscribe
            </button>
          </form>
 </div>
  


      {/* Bottom Copyright Section */}
      <div className="text-center mt-12 text-sm">
        <p>&copy; 2024 SuperLicks. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
