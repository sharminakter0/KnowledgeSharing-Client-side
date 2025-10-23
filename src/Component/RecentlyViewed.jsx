import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearHistory } from '../redux/features/historySlice';
import { Link } from 'react-router'; // Assuming you use react-router-dom for navigation

const RecentlyViewed = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.history);
  const [isOpen, setIsOpen] = useState(false);

  const handleClearHistory = () => {
    dispatch(clearHistory());
    setIsOpen(false); // Close the dropdown after clearing
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0116 0V3a1 1 0 112 0v2.101a9.002 9 0 00-18 0V3a1 1 0 011-1zm6 13a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg> */}
        <span>History</span>
        {articles.length > 0 && (
          <span className="ml-1 px-2 py-0.5 text-xs font-semibold bg-blue-500 text-white rounded-full">
            {articles.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10">
          <div className="py-1">
            {articles.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400 px-4 py-2">No recently viewed articles.</p>
            ) : (
              <>
                {articles.map((article) => (
                  <Link
                    key={article.id}
                    to={article.url}
                    onClick={() => setIsOpen(false)} // Close dropdown on click
                    className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {article.thumbnail && (
                      <img src={article.thumbnail} alt={article.title} className="w-8 h-8 object-cover rounded mr-2" />
                    )}
                    <span className="truncate">{article.title}</span>
                  </Link>
                ))}
                <button
                  onClick={handleClearHistory}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-700 border-t border-gray-200 dark:border-gray-700"
                >
                  Clear History
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentlyViewed;