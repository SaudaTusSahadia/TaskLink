import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/icons8-laptop-50.png";
import { AuthContext } from "../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const { user } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="hover:text-blue-500">Home</NavLink>
      </li>
      <li>
        <NavLink to="/browseTask" className="hover:text-blue-500">All Tasks</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard" className="hover:text-blue-500">Dashboard</NavLink>
        </li>
      )}
      <li>
        <NavLink to="/aboutUs" className="hover:text-blue-500">About</NavLink>
      </li>
      <li>
        <NavLink to="/support" className="hover:text-blue-500">Support</NavLink>
      </li>
    </>
  );

  return (
    <header className="bg-base-200 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="TaskLink Logo" className="h-8 sm:h-10 ml-4" />
            <span className="text-xl font-bold hidden sm:block">
              Task<span className="text-blue-600">Link</span>
            </span>
          </div>

          {/* Desktop Links */}
          <ul className="hidden lg:flex space-x-6 font-semibold items-center">
            {navLinks}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <label className="swap swap-rotate">
              <input type="checkbox" className="theme-controller" value="light"/>
              <BsMoonStarsFill className="swap-on fill-current text-xl" />
              <BsSunFill className="swap-off fill-current text-xl" />
            </label>

            {/* Auth Buttons */}
            {!user && (
              <>
                <Link
                  to="/auth/login"
                  className="btn btn-sm btn-outline text-blue-600 hover:text-white hover:bg-blue-500"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="btn btn-sm text-white bg-blue-600 hover:bg-white hover:text-blue-600 border border-blue-600"
                >
                  Register
                </Link>
              </>
            )}

            {/* User Profile */}
            {user && (
              <div className="relative group">
                <div className="tooltip tooltip-left" data-tip={user.displayName}>
                  <img
                    className="h-10 w-10 rounded-full ring-2 ring-blue-400 hover:scale-105 transition-transform duration-300"
                    src={user.photoURL || "/default-avatar.png"}
                    alt="user"
                  />
                </div>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden text-2xl" onClick={toggleMenu}>
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="lg:hidden px-4 pt-2 pb-4 space-y-2 bg-base-100 shadow-md border-t">
          {navLinks}
        </ul>
      )}
    </header>
  );
};

export default Header;
