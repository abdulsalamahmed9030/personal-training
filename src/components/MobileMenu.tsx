'use client';
import React, { useState } from 'react';
import {
  FaTimes,
  FaChevronDown,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa';

interface MobileMenuProps {
  closeMenu: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ closeMenu }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div>
      {/* Mobile Menu Overlay and Slide-In */}
      <div
        className="fixed inset-0 z-40 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeMenu}
      ></div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-4/5 h-full bg-white z-50 transform transition-transform duration-300`}
      >
        <div className="relative flex flex-col items-center space-y-4 py-4">
          {/* Close Button (X) */}
          <button
            className="absolute top-4 right-4 text-gray-700"
            onClick={closeMenu}
          >
            <FaTimes className="w-6 h-6" />
          </button>

          {/* Logo */}
          <div className="text-xl font-bold">Faiz Therapy</div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center space-y-4">
            <a href="#home" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900">
              About
            </a>

            {/* Services Dropdown for Mobile */}
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                Services <FaChevronDown className="ml-1" />
              </button>
              {isServicesOpen && (
                <div className="mt-2 w-48 bg-white shadow-lg rounded-md">
                  <a
                    href="#personal-training"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Personal Training
                  </a>
                  <a
                    href="#diet"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Diet
                  </a>
                  <a
                    href="#physiotherapy"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Physiotherapy
                  </a>
                  <a
                    href="#assisted-stretching"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                  >
                    Assisted Stretching
                  </a>
                </div>
              )}
            </div>

            <a href="#blogs" className="text-gray-700 hover:text-gray-900">
              Blogs
            </a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </div>

          {/* Call to Action Button (Phone Number) */}
          <a
            href="tel:9985173876"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Call: 9985173876
          </a>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.facebook.com/yourpage"
              className="text-blue-600 hover:text-blue-800"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              className="text-pink-600 hover:text-pink-800"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/9985173876"
              className="text-green-600 hover:text-green-800"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
          </div>

          {/* Address */}
          <div className="text-gray-700 mt-4">Banjarahills, Hyderabad</div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
