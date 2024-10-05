import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
//   console.error(error); // Optional for debugging

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-700">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-gray-800 dark:text-white mb-4">
          {error.status || 404}
        </h1>
        <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-2">
          {error.statusText || 'Page Not Found'}
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          {error.message || 'The page you are looking for might have been removed or is temporarily unavailable.'}
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 text-white text-lg font-medium rounded hover:bg-blue-600 transition ease-in-out duration-200"
        >
          Go to Home Page
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
