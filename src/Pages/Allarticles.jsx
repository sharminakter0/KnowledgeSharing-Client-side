import React, { useState,  } from 'react';
import { useLoaderData } from 'react-router';

import ArticleCard from '../Component/ArticleCard';
import SearchBar from '../Component/SearchBar';

const Allarticles = () => {
  let articlesData = useLoaderData();

  const articles = Array.isArray(articlesData)
    ? articlesData
    : articlesData?.data || [];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles =
    selectedCategory === 'All'
      ? articles
      : articles.filter(article => article.category === selectedCategory);

  return (
    <div className="bg-base-200">
      <div className="w-11/12 mx-auto mb-10 pt-24">
        <h1 className=" text-2xl md:text-3xl font-bold mb-3 text-center">All Articles</h1>
        <p className="text-center text-gray-400 mb-6 max-w-2xl mx-auto text-sm">
        Explore diverse articles on technology, health, education, and lifestyle.
        
        </p>
        <SearchBar />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Section */}
          <div className="w-full lg:w-1/4 p-5 bg-base-100 rounded-lg ">
            <h2 className="font-bold text-lg mb-4">Filter by Category</h2>
            <ul className="space-y-3">
              {['All', 'Tech', 'Education', 'Health', 'Lifestyle'].map(category => (
                <li key={category}>
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 rounded-lg ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white font-semibold'
                        : 'bg-base-100 hover:bg-gray-100 hover:text-black'
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Articles Grid */}
          <div className="flex-1">
            {filteredArticles.length === 0 ? (
              <p>No Articles Found</p>
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