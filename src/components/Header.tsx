'use client';
import React, { useState } from 'react';
import MobileMenu from './MobileMenu';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaChevronDown,
} from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Manage dropdown state

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo (Faiz Therapy) */}
        <div className="text-xl font-bold">Faiz Therapy</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 relative">
          {/* Call to Action Button (Phone Number) */}
          <a
            href="tel:9985173876"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Call: 9985173876
          </a>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900">
              About
            </a>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)} // Show on hover
              onMouseLeave={() => setIsServicesOpen(false)} // Hide on hover out
            >
              <button className="flex items-center text-gray-700 hover:text-gray-900">
                Services
                <FaChevronDown
                  className={`ml-1 transition-transform duration-300 ${
                    isServicesOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-md">
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

          {/* Social Media Icons */}
          <div className="flex space-x-4 ml-8">
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
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden ml-auto text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && <MobileMenu closeMenu={closeMenu} />}
    </header>
  );
};

export default Header;
