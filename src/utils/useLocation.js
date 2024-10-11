import { useState, useEffect, useRef } from 'react';

const useLocation = () => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [latLng, setLatLng] = useState({ lat: null, lng: null });
  const [isLocationServiceable, setIsLocationServiceable] = useState(true);
  const [showDropdown, setShowDropdown] = useState(true);
  const dropdownRef = useRef(null);

  // Fetch city using OpenWeatherMap API
  const fetchCityFromCoordinates = async (latitude, longitude) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=830138d34242e1237bf9de46a35a7715`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const city = data.name;
      setCurrentLocation(city);
      return city;
    } catch (error) {
      console.error('Error fetching city:', error);
      return null;
    }
  };

  // Fetch current location using Geolocation API
  const fetchCurrentLocation = async () => {
    if (navigator.geolocation) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            setLatLng({ lat: latitude, lng: longitude });
            const city = await fetchCityFromCoordinates(latitude, longitude);
            resolve(validateLocation(city));
          },
          (error) => reject(error)
        );
      });
    } else {
      alert('Geolocation is not supported by this browser.');
      return false;
    }
  };

  // Check if the location is serviceable
  const validateLocation = (location) => {
    const serviceableLocations = ['Delhi', 'Noida', 'Gorakhpur', 'Gurugram', 'Bangalore', 'Pune', 'Greater Noida', 'New Delhi'];

    const isServiceable = serviceableLocations.some((list) =>
      list.toLowerCase().includes(location.toLowerCase())
    );

    setIsLocationServiceable(isServiceable);
    if (isServiceable) {
      setCurrentLocation(location); // Update globally
    }
    return isServiceable;
  };

  // Simplified function for checking location
  const checkLocation = async (manualLocation = null) => {
    if (manualLocation) {
      return validateLocation(manualLocation);
    } else {
      return await fetchCurrentLocation();
    }
  };

  return {
    checkLocation,
    currentLocation,
    latLng,
    isLocationServiceable,
    showDropdown,
    dropdownRef,
    setCurrentLocation, // Expose this to set location from other components
  };
};

export default useLocation;
