import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import useCategories from '../utils/useCategories';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const suggestionsRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetching categories using the custom hook
  const data = useCategories();

  const categories = data?.main_cat_array?.flatMap((mainCat) =>
    mainCat?.sub_cat_array?.map((subCat) => ({
      name: subCat?.cat_name,
      slug: subCat?.category_slug, 
    }))
  );

  const onInputChange = (e) => {
    const query = e.target.value;
    setInput(query);

    // Filter categories based on the query
    const filteredSuggestions = categories
      .filter((category) =>
        category.name.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 3); // Limit suggestions to 3

    // Update the suggestions state
    setSuggestions(filteredSuggestions);
  };

  const onKeyDown = (e) => {
    // Handle arrow navigation and Enter selection
    if (e.key === 'ArrowDown') {
      setActiveSuggestionIndex((prevIndex) =>
        Math.min(prevIndex + 1, suggestions.length - 1)
      );
    } else if (e.key === 'ArrowUp') {
      setActiveSuggestionIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    } else if (e.key === 'Enter') {
      // Navigate to the page of the active suggestion on Enter
      const selectedSuggestion = suggestions[activeSuggestionIndex];
      if (selectedSuggestion) {
        navigate(`/service/${selectedSuggestion.slug}`); // Navigate using the slug
        setInput(selectedSuggestion.name);
        setSuggestions([]);
      }
    }
  };

  const handleClickOutside = (event) => {
    if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
      setSuggestions([]);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex-grow flex justify-center mx-4 mt-2">
      <input
        type="text"
        value={input}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        className="max-w-md w-full p-2 text-sm text-gray-900 border rounded-lg focus:border-[#00ACFF] focus:outline-none"
        placeholder="Search categories..."
      />

      {suggestions.length > 0 && (
        <ul
          ref={suggestionsRef}
          className="absolute max-w-md w-full mt-10 border border-gray-300 bg-white rounded-lg list-none p-0"
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className={`p-2.5 cursor-pointer border-b border-gray-300 ${
                index === activeSuggestionIndex ? 'bg-gray-100' : 'bg-white'
              }`}
              onClick={() => {
                navigate(`/service/${suggestion.slug}`); // Navigate on click
                setInput(suggestion.name);
                setSuggestions([]);
              }}
            >
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
