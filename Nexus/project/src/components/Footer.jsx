import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full text-white py-8 px-4 mt-10">
      {/* Navigation Links */}
      <nav className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-8 mb-5 text-base">
        <Link to="/" className="hover:text-blue-500 hover:scale-105 transition duration-300 cursor-pointer">Home</Link>
        <Link to="/about" className="hover:text-blue-500 hover:scale-105 transition duration-300">About</Link>
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center flex-wrap gap-3 mb-5">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/24/000000/facebook-new.png" alt="Facebook" className="hover:scale-110 transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/24/000000/linkedin-2.png" alt="LinkedIn" className="hover:scale-110 transition" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/24/000000/instagram-new.png" alt="Instagram" className="hover:scale-110 transition" />
        </a>
        <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/24/000000/facebook-messenger--v2.png" alt="Messenger" className="hover:scale-110 transition" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/fluent/24/000000/twitter.png" alt="Twitter" className="hover:scale-110 transition" />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-center text-xs md:text-sm font-medium">
        &copy; {new Date().getFullYear()} Company Ltd. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
