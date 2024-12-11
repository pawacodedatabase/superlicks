import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPhoneAlt, FaUserAlt, FaEnvelope, FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa'; // Importing icons

import bg from '../assets/form-BG.jpg';

const BookingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    date: '',
    time: '',
    guests: 1,
  });


  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  // Get current date in YYYY-MM-DD format
  const currentDate = new Date().toISOString().split('T')[0];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Generate a simple booking ID based on timestamp
    const bookingID = `SL-${Date.now()}`;

    // Include booking ID in the formData
    const payload = {
      ...formData,
      bookingID,
      access_key: '4b336a78-a4b1-4bda-9ea1-0009c8c93da1', // Replace with your Web3Forms access key
    };

    try {
      setIsSubmitting(true);

      // Send data to Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        // Navigate to confirmation page
        navigate('/confirmation', { state: payload });
      } else {
        console.error('Error submitting form:', response.statusText);
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  
 

  // Get current date in YYYY-MM-DD format
 

  return (
    <div
      className="min-h-screen bg-cover bg-center py-16 px-8"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div>

      <div className="relative z-10 p-8 rounded-xl max-w-lg mx-auto animate__animated animate__fadeIn">
        {/* Booking Instructions */}
        <div className="text-center mb-8 text-white">
          

          <h1 className="text-xl font-extrabold text-[#ff904a] text-center mb-6" style={{ fontFamily: "'Great Vibes', cursive" }}>How to Book Your Experience</h1>


          <p className="text-sm">
            Follow the steps below to book your event with us:
            <ul className="list-disc list-inside">
              <li>Fill out your personal details</li>
              <li>Select the event location, date, and time</li>
              <li>Specify the number of guests attending</li>
              <li>Click "Confirm Booking" to finalize your reservation</li>
            </ul>
          </p>
        </div>

<hr /> <br /> <br />
        <h1 className="text-3xl font-extrabold text-[#ff904a] text-center mb-6" style={{ fontFamily: "'Great Vibes', cursive" }}>Book Your Experience</h1>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 ">
          {/* Name */}
          <div className="relative">
            <label htmlFor="name" className="text-lg font-semibold text-white">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-3 mt-2 border-b-2 border-gray-300 bg-transparent text-white focus:outline-none focus:border-[#ff904a] placeholder-gray-500"
            />
            <FaUserAlt className="absolute right-4 top-8 text-white text-lg" />
          </div>

          {/* Email */}
          <div className="relative">
            <label htmlFor="email" className="text-lg font-semibold text-white">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 mt-2 border-b-2 border-gray-300 bg-transparent text-white focus:outline-none focus:border-[#ff904a] placeholder-gray-500"
            />
            <FaEnvelope className="absolute right-4 top-8 text-white text-lg" />
          </div>

          {/* Phone Number */}
          <div className="relative">
            <label htmlFor="phone" className="text-lg font-semibold text-white">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 mt-2 border-b-2 border-gray-300 bg-transparent text-white focus:outline-none focus:border-[#ff904a] placeholder-gray-500"
            />
            <FaPhoneAlt className="absolute right-4 top-8 text-white text-lg" />
          </div>

          {/* Event Location */}
          <div className="relative">
            <label htmlFor="location" className="text-lg font-semibold text-white">Event Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
              placeholder="Enter the event location"
              className="w-full px-4 py-3 mt-2 border-b-2 border-gray-300 bg-transparent text-white focus:outline-none focus:border-[#ff904a] placeholder-gray-500"
            />
            <FaMapMarkerAlt className="absolute right-4 top-8 text-white text-lg" />
          </div>

          {/* Date */}
          <div className="relative">
            <label htmlFor="date" className="text-lg font-semibold text-white">Preferred Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              min={currentDate} // Restrict to current date or future
              className="w-full px-4 py-3 mt-2 border-b-2 border-gray-300 bg-transparent text-white focus:outline-none focus:border-[#ff904a]"
            />
            <FaCalendarAlt className="absolute right-4 top-8 text-white text-lg" />
          </div>

          {/* Time */}
          <div className="relative">
            <label htmlFor="time" className="text-lg font-semibold text-white">Preferred Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 mt-2 border-b-2 border-gray-300 bg-transparent text-white focus:outline-none focus:border-[#ff904a]"
            />
            <FaClock className="absolute right-4 top-8 text-white text-lg" />
          </div>

          {/* Number of Guests */}
          <div className="relative">
            <label htmlFor="guests" className="text-lg font-semibold text-white">Number of Guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
              required
              min="1"
              placeholder="Enter number of guests"
              className="w-full px-4 py-3 mt-2 border-b-2 border-gray-300 bg-transparent text-white focus:outline-none focus:border-[#ff904a] placeholder-gray-500"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 bg-[#ff904a] text-white text-xl font-bold shadow-lg transition duration-300 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#e77e45] hover:shadow-xl'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
