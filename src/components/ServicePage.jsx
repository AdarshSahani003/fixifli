import { useState, useEffect } from "react";
import useLocation from '../utils/useLocation';
import NotificationBar from './NotificationBar'; // Ensure this import exists
import HowItWorks from "./HowItWorks";
import HowToUse from "./HowToUse";
import { useParams } from "react-router-dom";
import ProductBar from "./ProductBar";

const ServicePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    mobile: '',
    city: '',
    serviceTime: ''
  });

  const serviceName = useParams();

  const [isBooked, setIsBooked] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  const { checkLocation, setCurrentLocation } = useLocation();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const showNotification = (message) => {
    setNotificationMessage(message);
    setTimeout(() => {
      setNotificationMessage('');
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.city) {
      const isServiceable = await checkLocation(formData.city);
      if (isServiceable) {
        setCurrentLocation(formData.city); // Update globally
        showNotification('Thanks, Our team will contact you soon.');
        setIsBooked(true);
      } else {
        showNotification('This location is not serviceable.');
      }
    } else {
      showNotification('Please fill in the city.');
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-sky-500"></div>
      </div>
    )
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8 md:w-4/5">
      {/* Notification Bar - Always Render */}
      {notificationMessage && <NotificationBar message={notificationMessage} />}

      {/* Main flex container */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Available Rooms Cards */}
        <div className="md:w-2/3 w-full bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-bold mb-6">{serviceName.category_slug}</h3>

          <ProductBar data={products}/>

          {/* Align HowItWorks and HowToUse below the rooms */}
          <div className="mt-8">
            <HowItWorks />
            <HowToUse />
          </div>
        </div>

        {/* Booking Form */}
        <div className="md:w-1/4 rounded-lg bg-gray-100 p-4 md:sticky md:top-20 max-h-min">
          <h2 className="text-lg font-bold mb-6">Book this Service</h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label htmlFor="serviceTime" className="block text-sm font-medium text-gray-700">
                Time for Service
              </label>
              <input
                type="datetime-local"
                name="serviceTime"
                id="serviceTime"
                value={formData.serviceTime}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-md"
            >
              Book Service
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;