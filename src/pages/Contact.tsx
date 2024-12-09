import React, { useEffect } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaAward, FaMedal, FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // import AOS CSS

const ContactPage: React.FC = () => {
  useEffect(() => {
    // Initialize AOS on component mount
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-out-back', // Easing effect
      once: true, // Trigger animation only once
    });
  }, []);

  return (
    <div className="bg-[#f8f8f8] text-gray-800 min-h-screen p-8">
      {/* CEO Section */}
      <section className="bg-white p-16 rounded-lg shadow-lg mb-16" data-aos="fade-up">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <img
            src="https://via.placeholder.com/150"
            alt="CEO"
            className="w-36 h-36 object-cover rounded-full shadow-lg"
          />
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-semibold text-gray-800">John Doe</h3>
            <p className="text-xl text-gray-600">CEO & Founder</p>
            <p className="mt-4 text-lg text-gray-500">
              "At our company, we're committed to delivering exceptional culinary experiences that leave lasting memories."
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="max-w-7xl mx-auto text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold text-[#ff904a] mb-8">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-12">We're always here to assist. Choose your preferred way to reach out:</p>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105" data-aos="fade-right">
            <FaPhoneAlt className="text-4xl text-[#ff904a] mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700">Phone Number</h3>
            <p className="text-lg text-gray-500">+123 456 7890</p>
          </div>

          {/* WhatsApp */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105" data-aos="fade-up">
            <FaWhatsapp className="text-4xl text-[#25D366] mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700">WhatsApp</h3>
            <p className="text-lg text-gray-500">+123 456 7890</p>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105" data-aos="fade-left">
            <FaEnvelope className="text-4xl text-[#6c757d] mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700">Email</h3>
            <p className="text-lg text-gray-500">contact@yourcompany.com</p>
          </div>
        </div>
      </section>

      {/* Culinary Achievements Section */}
      <section className="max-w-7xl mx-auto text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold text-[#ff904a] mb-8">Our Culinary Achievements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Award 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-2xl transform hover:scale-105" data-aos="fade-right">
            <FaAward className="text-4xl text-[#ff904a] mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Best Chef Award</h3>
            <p className="text-lg text-gray-500">Awarded for culinary excellence in 2023.</p>
          </div>

          {/* Award 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-2xl transform hover:scale-105" data-aos="fade-up">
            <FaMedal className="text-4xl text-[#f5a623] mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Top Culinary Innovation</h3>
            <p className="text-lg text-gray-500">Recognized for unique flavors and innovative recipes.</p>
          </div>

          {/* Award 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-all duration-300 hover:shadow-2xl transform hover:scale-105" data-aos="fade-left">
            <FaStar className="text-4xl text-[#f8e71c] mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">5-Star Customer Rating</h3>
            <p className="text-lg text-gray-500">Consistently rated 5-stars by our loyal customers.</p>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default ContactPage;
