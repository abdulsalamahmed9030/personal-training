import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Address */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">The Faiz Therapy</h1>
            <p className="text-gray-400 mt-2">Banjarahills, Hyderabad</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-center">
            <a href="#home" className="text-gray-400 hover:text-white">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-white">
              About
            </a>
            <a href="#services" className="text-gray-400 hover:text-white">
              Services
            </a>
            <a href="#blogs" className="text-gray-400 hover:text-white">
              Blogs
            </a>
            <a href="#contact" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/yourpage"
              className="text-blue-500 hover:text-blue-700"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              className="text-pink-500 hover:text-pink-700"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/9985173876"
              className="text-green-500 hover:text-green-700"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Faiz Therapy. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
