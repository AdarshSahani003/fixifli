import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiUser, FiMapPin } from 'react-icons/fi';
import LocationDropdown from './LocationDropDown';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);
  const [isLocationExpanded, setIsLocationExpanded] = useState(false);
  const [location, setLocation] = useState('');
  const dropdownRef = useRef(null); // Create a ref for the dropdown

  const getLocation = (data) => {
    setLocation(data);
    setIsLocationExpanded(false); // Close dropdown after selecting location
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLocationExpanded(false); // Close dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

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
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLocationExpanded(!isLocationExpanded)}
              className="text-sm text-gray-600 hover:text-black flex items-center"
            >
              <FiMapPin className="w-5 h-5 mr-2" />
              {location && <span className="ml-1 text-gray-800">{location}</span>} {/* Display selected location */}
            </button>
            {isLocationExpanded && (
              <LocationDropdown onGetLocation={getLocation} />
            )}
          </div>
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* User and Cart Icons */}
        <div className="flex items-center space-x-6">
          <Link to="/cart">
          <button className="text-gray-600 hover:text-black">
            <FiShoppingCart className="w-6 h-6" />
          </button>
          </Link>
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
