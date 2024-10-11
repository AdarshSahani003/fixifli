import { useState, useEffect, useRef } from "react";
import useLocation from "../utils/useLocation";
import NotificationBar from "./NotificationBar";

const LocationDropDown = ({ onGetLocation }) => {
  const [manualLocation, setManualLocation] = useState('');
  const [notificationMessage, setNotificationMessage] = useState('');
  const dropdownRef = useRef(null); // Create a ref for the dropdown

  const {
    checkLocation,
    currentLocation,
    showDropdown,
  } = useLocation();

  const showNotification = (message) => {
    setNotificationMessage(message);
    setTimeout(() => {
      setNotificationMessage('');
    }, 3000);
  };

  const handleManualLocationSubmit = async (e) => {
    e.preventDefault();
    const isValid = await checkLocation(manualLocation);
    if (!isValid) {
      showNotification(`We are not in ${manualLocation} yet.`);
    } else {
      onGetLocation(manualLocation);
    }
  };

  const handleUseCurrentLocation = async () => {
    const isValid = await checkLocation();
    if (!isValid) {
      showNotification(`Service is not available in ${currentLocation} yet.`);
    } else {
      onGetLocation(currentLocation);
    }
  };

  // Close dropdown on clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Call a function to close the dropdown (you might need to add a state or callback for that)
        // For example, if you have a function to update showDropdown in the parent:
        // setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div>
      <NotificationBar message={notificationMessage} />

      {showDropdown && (
        <div ref={dropdownRef} className="absolute top-10 left-0 bg-white border rounded-lg shadow-lg p-4 w-52">
          <form onSubmit={handleManualLocationSubmit}>
            <input
              type="text"
              placeholder="Enter location..."
              value={manualLocation}
              onChange={(e) => setManualLocation(e.target.value)}
              className="border mt-2 p-2 w-full rounded"
            />
          </form>
          <button
            onClick={handleUseCurrentLocation}
            className="bg-blue-500 text-white mt-4 p-2 w-full rounded"
          >
            Use Current Location
          </button>
        </div>
      )}
    </div>
  );
};

export default LocationDropDown;
