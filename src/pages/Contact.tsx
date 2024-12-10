import React, { useEffect } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMedal, FaStar, FaInstagram, FaFacebookF } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

import bgpic from '../assets/gallery_1.jpg'
import profile from '../assets/ceo.jpg'

const ContactPage: React.FC = () => {
  useEffect(() => {
    // Initialize AOS for animations
    AOS.init({
      duration: 1200, // Animation duration
      easing: 'ease-out-quart', // Easing effect
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Chef's Bio Section */}
      <section className="relative bg-cover bg-center h-[450px]" style={{ backgroundImage: `url(${bgpic})` }}>
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full">
          <img
            src={profile}
            alt="Adeola's Photo"
            className="rounded-full  shadow-lg w-40 h-40 mb-6"
            data-aos="fade-up"
          />
          <h1 className="text-4xl font-thin mb-4" data-aos="fade-up" style={{ fontFamily: "'Great Vibes', cursive" }}>Oderinu Adeola Ibukunolu </h1>
          <p className="text-sm mb-4 text-center " data-aos="fade-up"> <span className='text-sm font-thin text-[#ff904a]'>Chef</span> |  <span className='text-sm font-thin text-[#ff904a]'>Event Planner </span> | <span className='text-sm font-thin text-[#ff904a]'>Culinary Expert </span></p>
          
        
          <div>
            <Link to='/book'>
            <button className="w-full rounded-md py-1 px-7  border border-white  hover:bg-white hover:text-black  transition duration-300">
             Book
            </button>
            </Link>
          </div>

          <div>
          <div className="text-center md:text-left mt-5">
          
          <div className="flex justify-center md:justify-start space-x-6 text-xl">
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
          </div>
        </div>
          </div>
        </div>
      </section>
<div className='text-center mt-12'>
   <h2 className="text-4xl font-bold text-[#ff904a] mb-8" style={{ fontFamily: "'Great Vibes', cursive" }}>About Chef Adeola</h2>


      <div className="max-w-3xl mx-auto">
            <p className="text-sm text-gray-700 mb-4 p-4"> <span className='font-bold'>Oderinu Adeola Ibukunolu</span> is a skilled chef and event planner from Ibadan, Oyo State, with a passion for creating exquisite African and intercontinental dishes. She also specializes in making delightful desserts for events.  </p>
            <p className="text-sm text-gray-700 p-4"> With no formal culinary education, she developed her expertise through dedication and hands-on experience, including her time at the <span className='font-bold'>Golden Tulip Hotel Ibadan (now Owu Crown Hotel). </span> Her creative approach to food has made her a sought-after professional for catering memorable events with delicious cuisine and elegant presentation.</p>
          </div>
</div>
     


      {/* Contact Methods Section */}
      <section className="py-16 px-4 bg-white text-gray-800" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-[#ff904a] mb-8" style={{ fontFamily: "'Great Vibes', cursive" }}>How to Reach Us</h2>
          <p className="text-sm mb-12">Choose your preferred method of communication:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300">
              <FaPhoneAlt className="text-2xl text-[#ff904a] mb-4" />
              <h3 className="text-2xl font-semibold text-gray-700" style={{ fontFamily: "'Great Vibes', cursive" }}>Phone Number</h3>
              <p className="text-lg text-gray-500 font-semibold">+234 803 057 7707</p>
            </div>

            {/* WhatsApp */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300">
              <FaWhatsapp className="text-2xl text-[#25D366] mb-4" />
              <h3 className="text-2xl font-semibold text-gray-700" style={{ fontFamily: "'Great Vibes', cursive" }}>WhatsApp</h3>
              <p className="text-lg text-gray-500">+234 803 057 7707</p>
            </div>

            {/* Email */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300">
              <FaEnvelope className="text-2xl text-gray-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-700" style={{ fontFamily: "'Great Vibes', cursive" }}>Email</h3>
              <p className="text-sm text-gray-500">superlickscatheringservices@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chef's Bio Section */}
      <section className="py-16 bg-gray-100" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-[#ff904a] mb-8" style={{ fontFamily: "'Great Vibes', cursive" }}>About Superlicks</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-gray-700 mb-4 p-4">With  years of experience,Superlicks has transformed the art of cooking into a passion-driven journey. From creating exquisite African  delicacies to serving unforgettable culinary experiences, Superlicks strives for perfection in every event.</p>
            <p className="text-sm text-gray-700 p-4">Our creations blend traditional techniques with innovative flair, making each meal a masterpiece. We believe in sourcing only the finest ingredients to ensure every dish is a reflection of his dedication to excellence.</p>
          </div>
        </div>
      </section>

      {/* Culinary Achievements Section */}
      <section className="py-16 px-4 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-[#ff904a] mb-8" style={{ fontFamily: "'Great Vibes', cursive" }}>Our Culinary Achievements</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            

            {/* Award 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300">
              <FaMedal className="text-4xl text-[#f5a623] mb-4" />
              <h3 className="text-xl font-semibold text-gray-700" style={{ fontFamily: "'Great Vibes', cursive" }}>Top Culinary Innovation</h3>
              <p className="text-lg text-gray-500">Recognized for unique flavors and innovative recipes.</p>
            </div>

            {/* Award 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300">
              <FaStar className="text-4xl text-[#f8e71c] mb-4" />
              <h3 className="text-xl font-semibold text-gray-700" style={{ fontFamily: "'Great Vibes', cursive" }}>5-Star Customer Rating</h3>
              <p className="text-lg text-gray-500">Consistently rated 5-stars by our loyal customers.</p>
            </div>
          </div>
        </div>
      </section>

      
     
    </div>
  );
};

export default ContactPage;
