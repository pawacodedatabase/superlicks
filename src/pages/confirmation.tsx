import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon
import bg from '../assets/form-BG.jpg'; // Ensure the correct path to the image

const ConfirmationPage: React.FC = () => {
  const location = useLocation();

  // Extracting the form data passed through navigate
  const { name, email, phone, location: eventLocation, date, time, guests, bookingID } = location.state || {};

  const handleContactWhatsApp = () => {
    const whatsappNumber = '+2348030577707'; 
    const message = `Hello, I'm ${name} I just made a booking for an event in ${location} on ${date}. ${guests} Guests and my Booking ID is ${bookingID}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div
      className="min-h-screen py-16 px-8 relative"
      style={{
        backgroundImage: `url(${bg})`,  // Corrected background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay on Background */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <div className="bg-black bg-opacity-60 p-8 rounded-xl max-w-2xl mx-auto text-white z-10 relative">
        <h1 className="text-3xl font-extrabold text-[#ff904a] text-center mb-6" style={{ fontFamily: "'Great Vibes', cursive" }}>
          Booking Confirmed!
        </h1>
        <p className="text-lg text-center mb-6">Thank you <span className='text-[#ff904a]' style={{ fontFamily: "'Great Vibes', cursive" }}>
            {name} </span>, for booking with us. Below are your booking details:</p>

            <hr className='text-[#ff904a]'/>
            <br />

        {/* Displaying booking details */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <strong className='text-[#ff904a]' >Booking ID:</strong>
            <span className="text-sm">{bookingID}</span>
          </div>
          <hr />
          <div className="flex justify-between">
            <strong className='text-[#ff904a]' >Full Name:</strong>
            <span className="text-lg">{name}</span>
          </div>
          <hr />
          <div className="flex justify-between">
            <strong className='text-[#ff904a]' >Email:</strong>
            <span className="text-lg">{email}</span>
          </div>
          <hr />
          <div className="flex justify-between">
            <strong className='text-[#ff904a]' >Phone:</strong>
            <span className="text-lg">{phone}</span>
          </div>
          <hr />
          <div className="flex justify-between">
            <strong className='text-[#ff904a]' >Location:</strong>
            <span className="text-lg">{eventLocation}</span>
          </div>
          <hr />
          <div className="flex justify-between">
            <strong className='text-[#ff904a]' >Date:</strong>
            <span className="text-lg">{date}</span>
          </div>
          <hr />
          <div className="flex justify-between">
            <strong className='text-[#ff904a]' >Time:</strong>
            <span className="text-lg">{time}</span>
          </div>
          <hr />
          <div className="flex justify-between">
            <strong className='text-[#ff904a]' >Guests:</strong>
            <span className="text-lg">{guests}</span>
          </div>
          <hr />

          <div className="text-center flex justify-center mt-8 z-10 relative">
        <button
          onClick={handleContactWhatsApp}
          className="flex items-center justify-center px-8 py-2 bg-green-500 text-white text-sm   shadow-lg hover:bg-green-600 hover:shadow-xl transition duration-300"
        >
          <FaWhatsapp className="mr-3 text-sm font-thin" /> {/* WhatsApp Icon */}
        WhatsApp
        </button>
      </div>

        </div>

      </div>

      {/* Our Services Section */}
      <div className="bg-black  p-8 rounded-xl max-w-2xl mx-auto text-white mt-16 z-10 relative">
        <h2 className="text-2xl font-semibold mb-4 text-center text-[#ff904a]"  style={{ fontFamily: "'Great Vibes', cursive" }}>Our Services</h2>
        <p className="text-lg text-center">
          We specialize in providing exquisite catering services for weddings, parties, corporate events, and private gatherings. 
          <br /> <br />

          <hr />
          
          <br />
          Our team is dedicated to delivering high-quality food and a memorable experience for you and your guests.
        </p>

        <br /> <br />

<hr />

<br />

        <p className="text-lg mt-4 text-center">
          Whether you're hosting an intimate dinner or a large celebration, we offer tailored menus to suit your needs, ensuring that every detail is perfect.
        </p>
      </div>

      {/* Contact Us on WhatsApp Button */}
     
    </div>
  );
};

export default ConfirmationPage;
