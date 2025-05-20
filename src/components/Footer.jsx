import React from 'react';
import { FaInstagramSquare, FaFacebookSquare, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white w-full md:mt-20 mt-4 p-10 text-center rounded space-y-10">
      
      {/* Navigation Links */}
      <div className="space-x-6 text-sm font-medium">
        <a className="link link-hover hover:text-yellow-200 transition">About us</a>
        <a className="link link-hover hover:text-yellow-200 transition">Contact</a>
        <Link to="/t&q" className="link link-hover hover:text-yellow-200 transition">Terms and Conditions</Link>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-2xl">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 transition">
          <FaTwitter />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 transition">
          <FaYoutube />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 transition">
          <FaFacebookSquare />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 transition">
          <FaInstagramSquare />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-sm">
        <p>© {new Date().getFullYear()} — All rights reserved by <span className="font-semibold">TaskLink Ltd.</span></p>
      </div>

    </footer>
  );
};

export default Footer;
