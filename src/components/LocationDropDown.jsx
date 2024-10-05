import React, { useState, useEffect } from 'react';

const LocationDropdown = () => {
  const [manualLocation, setManualLocation] = useState('');
  const [currentLocation, setCurrentLocation] = useState('');
  const [latLng, setLatLng] = useState({ lat: null, lng: null });
  const [isLocationServiceable, setIsLocationServiceable] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  // Fetch city using the OpenWeatherMap API based on latitude and longitude
  const fetchCityFromCoordinates = async (latitude, longitude) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=830138d34242e1237bf9de46a35a7715`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const city = data.name;
      setCurrentLocation(city);
      validateLocation(city);
    } catch (error) {
      console.error('Error fetching city:', error);
    }
  };

  // Fetch user's current location using Geolocation API
  const fetchCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLatLng({ lat: latitude, lng: longitude });
        fetchCityFromCoordinates(latitude, longitude);
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

 // Check if the location is serviceable (mock serviceable locations)
    const validateLocation = (location) => {
        const serviceableLocations = ['Delhi', 'Noida', 'Gorakhpur', 'Gurugram', 'Bangalore', 'Pune', 'Greater Noida', 'New Delhi'];
        
        const isServiceable = serviceableLocations.some((list) =>
        list.toLowerCase().includes(location.toLowerCase())
        );
    
        if (isServiceable) {
        setIsLocationServiceable(true);
        alert(`${location} is serviceable!`);
        } else {
        setIsLocationServiceable(false);
        alert(`${location} is not serviceable!`);
        }
    };
  

  // Handle manual location submission
  const handleManualLocationSubmit = (e) => {
    e.preventDefault();
    validateLocation(manualLocation);
  };

  return (
    <div className="absolute top-10 left-0 bg-white border rounded-lg shadow-lg p-4 w-52">
      
      {/* Input for manually entering location */}
      <form onSubmit={handleManualLocationSubmit}>
        <input
          type="text"
          placeholder="Enter location..."
          value={manualLocation}
          onChange={(e) => setManualLocation(e.target.value)}
          className="border mt-2 p-2 w-full rounded"
        />
        
      </form>

      {/* Button to use current location */}
      <button
        onClick={fetchCurrentLocation}
        className="bg-white text-blue-500 mt-4 p-2 w-full rounded"
      >
        Use Current Location
      </button>

      {/* Display current location */}
      {currentLocation && <p className="mt-4">Your current location: {currentLocation}</p>}

      {/* Conditionally show serviceable status */}
      {!isLocationServiceable && (
        <div className="mt-4">
          <p>Location not serviceable!</p>
          <a href="/not-available" className="text-red-500 underline">
            We are not here yet
          </a>
        </div>
      )}
    </div>
  );
};

export default LocationDropdown;