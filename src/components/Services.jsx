import React, { useState, useEffect } from 'react';
import useCategories from '../utils/useCategories';
import { Link } from 'react-router-dom';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const Categories = useCategories();

  // Set the first accordion to open by default
  useEffect(() => {
    if (Categories && Categories.main_cat_array.length > 0) {
      setActiveCategory(0);
    }
  }, [Categories]);

  const toggleCategory = (index) => {
    setActiveCategory(index);
  };

  return (
    <div className="flex flex-col md:flex-row mx-auto py-8 px-4">
      {/* Sidebar/Accordion for categories */}
      <div className=" md:w-1/4 bg-gray-100 p-4 md:sticky md:top-20 max-h-min">
        <h2 className="text-lg font-bold mb-4">Services</h2>
        
        {/* Responsive accordion for mobile view */}
        <div className=" md:hidden">
          {Categories?.main_cat_array.map((category, index) => (
            <div key={category.main_cat_id} className="border-b">
              <button
                className={`w-full text-left p-2 rounded-lg transition-all duration-200 ${
                  activeCategory === index ? 'bg-blue-500 text-white' : 'bg-white'
                } hover:bg-blue-500 hover:text-white`}
                onClick={() => toggleCategory(index)}
              >
                {category.main_cat_name}
              </button>
              {/* Show items only in mobile view when accordion is active */}
              {activeCategory === index && (
                <div className="pl-4 py-2 bg-white">
                  {Categories?.main_cat_array[activeCategory]?.sub_cat_array?.map((item) => (
                    <Link to={`/service/${item.category_slug}`}>
                    <div key={item.cat_id} className="border rounded-lg p-2 shadow-sm mb-2">
                      <div className="flex items-center gap-4">
                        {/* Image */}
                        <img src={item.cat_icon || 'https://via.placeholder.com/64'}
                         className="h-16 w-16 object-cover rounded-lg" alt={item.cat_name} />
                        {/* Category Name */}
                        <div className="text-center font-semibold">
                          {item?.cat_name}
                        </div>
                      </div>
                    </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sidebar for larger screens */}
        <ul className="hidden md:block space-y-2">
          {Categories?.main_cat_array.map((category, index) => (
            <li key={category.main_cat_id}>
              <button
                className={`w-full text-left p-2 rounded-lg transition-all duration-200 ${
                  activeCategory === index ? 'bg-blue-500 text-white' : 'bg-white'
                } hover:bg-blue-500 hover:text-white`}
                onClick={() => toggleCategory(index)}
              >
                {category.main_cat_name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Main content area for larger screens, hide on small screens */}
      <div className="hidden md:block bg-white p-4">
        {activeCategory !== null && (
          <div>
            <h3 className="text-lg font-bold mb-4">
              {Categories?.main_cat_array[activeCategory]?.main_cat_name}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {Categories?.main_cat_array[activeCategory]?.sub_cat_array?.map((item) => (
                <Link to={`/service/${item.category_slug}`}>
                <div key={item.cat_id} className="border rounded-lg p-2 shadow-sm">
                  <div className="flex items-center gap-4">
                    {/* Image */}
                    <img src={item.cat_icon || 'https://via.placeholder.com/64'} 
                    className="h-16 w-16 object-cover rounded-lg" alt={item.cat_name} />
                    {/* Category Name */}
                    <div className="text-center font-semibold">
                      {item?.cat_name}
                    </div>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;