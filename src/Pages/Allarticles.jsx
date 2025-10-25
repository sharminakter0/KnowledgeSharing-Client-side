import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router';
import { FaPlusCircle, FaFilter } from 'react-icons/fa';
import { BiBookAlt } from 'react-icons/bi';
import ArticleCard from '../Component/ArticleCard';
import SearchBar from '../Component/SearchBar';

const Allarticles = () => {
  const articlesData = useLoaderData();

  const articles = Array.isArray(articlesData)
    ? articlesData
    : articlesData?.data || [];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles =
    selectedCategory === 'All'
      ? articles
      : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="bg-base-200 min-h-screen">
      <div className="w-11/12 mx-auto mb-10 pt-24">
        {/* --- Header Section --- */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center justify-center gap-2">
            <BiBookAlt className="text-blue-600" /> All Articles
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            Explore diverse articles on technology, health, education, and lifestyle.
          </p>
        </div>

        {/* --- Search and Post Button Section --- */}
        <div className="  justify-between items-center gap-4 mb-8 bg-base-100 p-4 rounded-lg text-center">
          {/* <SearchBar /> */}
          <Link
            to="/post-articles"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow transition-all"
          >
            <FaPlusCircle className="text-lg" />
            <span>Post Article</span>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* --- Filter Section --- */}
          <div className="w-full lg:w-1/4 p-5 bg-base-100 rounded-lg shadow-sm">
            <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
              <FaFilter className="text-blue-600" /> Filter by Category
            </h2>
            <ul className="space-y-3">
              {['All', 'Tech', 'Education', 'Health', 'Lifestyle'].map(category => (
                <li key={category}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white font-semibold shadow'
                        : 'bg-base-100 hover:bg-gray-100 text-gray-500'
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Articles Grid --- */}
          <div className="flex-1">
            {filteredArticles.length === 0 ? (
              <p className="text-center text-gray-500 mt-10">No Articles Found</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredArticles.map(article => (
                  <ArticleCard key={article._id} article={article} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allarticles;
