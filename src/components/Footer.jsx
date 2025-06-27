import React from 'react';
import { FaInstagramSquare, FaFacebookSquare, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';
import logo from '../assets/icons8-laptop-50.png';

const Footer = () => {
  return (
    <footer className="bg-base-200 px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo and About */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={logo} alt="logo" className="w-14 h-14 mb-3" />
          <h2 className="text-xl font-bold mb-1">TaskLink</h2>
          <p className="text-sm">
            Connecting task givers and project makers seamlessly. <br />
            Empowering reliable tech collaboration since 2025.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col text-center md:text-left space-y-2 text-sm font-medium">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <Link to="/" className="hover:text-yellow-200 transition">Home</Link>
          <Link to="/browseTask" className="hover:text-yellow-200 transition">Browse Tasks</Link>
          <Link to="/addTask" className="hover:text-yellow-200 transition">Post a Task</Link>
          <Link to="/freelancers" className="hover:text-yellow-200 transition">Find Freelancers</Link>
          <Link to="/contact" className="hover:text-yellow-200 transition">Contact Us</Link>
          <Link to="/t&q" className="hover:text-yellow-200 transition">Terms & Conditions</Link>
        </div>

        {/* Social Media + Copyright */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-5 text-2xl mb-3">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 hover:scale-110 transition-transform">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 hover:scale-110 transition-transform">
              <FaYoutube />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 hover:scale-110 transition-transform">
              <FaFacebookSquare />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-200 hover:scale-110 transition-transform">
              <FaInstagramSquare />
            </a>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} TaskLink. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
