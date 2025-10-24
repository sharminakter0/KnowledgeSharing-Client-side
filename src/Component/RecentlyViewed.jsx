
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearHistory } from "../redux/features/historySlice";
import { Link } from "react-router";


const HistoryPage = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state) => state.history);

  const handleClearHistory = () => {
    dispatch(clearHistory());
  };

  return (
    <div className="min-h-screen to-blue-100 dark:from-gray-900 dark:to-gray-800 pb-10 pt-15 px-6 mt-10">
      <div className="max-w-5xl mx-auto bg-base-100 dark:bg-gray-900 rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Recently Viewed Articles
        </h1>

        {articles.length === 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">
            You haven’t viewed any articles yet.
          </p>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  to={article.url}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 hover:shadow-md transition-all duration-200"
                >
                  {article.thumbnail && (
                    <img
                      src={article.thumbnail}
                      alt={article.title}
                      className="w-full h-40 object-cover rounded-lg mb-3"
                    />
                  )}
                  <h2 className="font-semibold text-lg text-gray-800 dark:text-white line-clamp-2">
                    {article.title}
                  </h2>
                </Link>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={handleClearHistory}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-all"
              >
                Clear History
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
