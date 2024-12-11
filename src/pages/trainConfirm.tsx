import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import bg from '../assets/banner.jpeg';

const TrainingConfirmationPage: React.FC = () => {
  return (
    <div className="bg-cover bg-center min-h-screen p-8" style={{ backgroundImage: `url(${bg})` }}>
      <div className="bg-opacity-50 bg-black text-white min-h-screen py-16 px-4 flex items-center justify-center">
        <div className="max-w-3xl text-center bg-white text-gray-900 p-8 rounded-lg shadow-lg">
          <div className="flex justify-center mb-4">
            <FaCheckCircle className="text-green-500 text-6xl" />
          </div>
          <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Thank You for Registering!
          </h1>
          <p className="text-gray-700 mb-6">
            Your application for the culinary training program has been successfully submitted. We are thrilled to have
            you join us on this exciting journey to becoming a skilled chef.
          </p>
          <p className="text-gray-700 mb-6">
            Our team will review your application and contact you shortly with more details about the next steps.
          </p>
          <div className="text-center">
            <a
              href="/"
              className="bg-[#ff904a] text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingConfirmationPage;
