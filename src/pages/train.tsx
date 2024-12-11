import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa';
import bg from '../assets/banner.jpeg';

const CulinaryTrainingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    middleName: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const payload = {
        ...formData,
        access_key: '4b336a78-a4b1-4bda-9ea1-0009c8c93da1', // Your Web3Forms access key
        subject: 'Culinary Training Application',
        from_name: 'Culinary Training Website',
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        navigate('/trainconfirmation', { state: formData }); // Redirect to confirmation page
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

  return (
    <div className="bg-cover bg-center min-h-screen p-8" style={{ backgroundImage: `url(${bg})` }}>
      <div className="bg-opacity-50 bg-black text-white min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6 fade-in" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Become a Chef: Culinary Training
          </h2>
          <p className="text-sm mb-12">
            Unlock your passion for cooking and take the first step towards becoming a skilled chef.
            <span className="text-[#ff904a]">
              <br />
              <br /> Our training program offers hands-on experience, expert guidance, and industry-relevant skills.
              Enroll today to begin your culinary journey!
            </span>
          </p>

          {/* Training Form */}
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-500 mb-8 text-center">
              Register for Culinary Training
            </h3>

            {/* First Name, Last Name, and Middle Name */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
              <div className="relative">
                <FaUser className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600" />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#ff904a] text-gray-800 pl-10 py-2"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="relative">
                <FaUser className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600" />
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#ff904a] text-gray-800 pl-10 py-2"
                  placeholder="Middle Name"
                />
              </div>
              <div className="relative">
                <FaUser className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600" />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#ff904a] text-gray-800 pl-10 py-2"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative mb-6">
              <FaEnvelope className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#ff904a] text-gray-800 pl-10 py-2"
                placeholder="Email Address"
                required
              />
            </div>

            {/* Phone */}
            <div className="relative mb-6">
              <FaPhoneAlt className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600" />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#ff904a] text-gray-800 pl-10 py-2"
                placeholder="Phone Number"
                required
              />
            </div>

            {/* Address */}
            <div className="relative mb-6">
              <FaMapMarkerAlt className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600" />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#ff904a] text-gray-800 pl-10 py-2"
                placeholder="Address"
                required
              />
            </div>

            {/* Date of Birth */}
            <div className="relative mb-6">
              <FaBirthdayCake className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-600" />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#ff904a] text-gray-800 pl-10 py-2"
                required
              />
            </div>

            {/* Message */}
            <div className="relative mb-6">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full border-b-2 border-gray-300 focus:outline-none focus:border-[#ff904a] text-gray-800 pl-10 py-2"
                rows={4}
                placeholder="Why do you want to become a chef?"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#ff904a] text-white font-semibold px-6 py-3 rounded-lg transition duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-600'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CulinaryTrainingPage;
