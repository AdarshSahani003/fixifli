import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiMapPin } from 'react-icons/fi';
import LocationDropdown from './LocationDropDown';

const Navbar = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [isLocationExpanded, setIsLocationExpanded] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 py-1 mb-2">
      <div className="max-w-screen-lg mx-auto min-w-screen-sm flex justify-between p-4">
        {/* Logo and Location Selector */}
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-3">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Fixifli Logo" />
            <span className="text-2xl font-semibold whitespace-nowrap">Fixifli</span>
          </Link>
          {/* Location Button */}
          <div className="relative">
            <button
              onClick={() => setIsLocationExpanded(!isLocationExpanded)}
              className="text-sm text-gray-600 hover:text-black flex items-center"
            >
              <FiMapPin className="w-5 h-5 mr-2" />
            </button>
            {isLocationExpanded && (<LocationDropdown/>)}
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative flex-grow flex justify-center mx-4">
          <input
            type="text"
            className="max-w-md w-full p-2 text-sm text-gray-900 border rounded-lg   focus:border-[#00ACFF] focus:outline-none"
            // style={{border: "1px solid #00ACFF"}}
            placeholder="Search..."
          />
        </div>

        {/* User and Cart Icons */}
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 hover:text-black">
            <FiShoppingCart className="w-6 h-6" />
          </button>
          {isUserLoggedIn ? (
            <button className="text-gray-600 hover:text-black">
              <FiUser className="w-6 h-6" />
            </button>
          ) : (
            <Link to="/login" className="text-sm text-gray-600 hover:text-black">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
