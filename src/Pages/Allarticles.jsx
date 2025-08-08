import React, {  useState } from 'react';
import { useLoaderData } from 'react-router';
import ArticleCard from '../Component/ArticleCard';



const Allarticles = () => {

    const articles = useLoaderData()
    const [selectedCategory,setSelectedCategory]=useState('All');

    // Filter articles by selected category
  const filteredArticles =
    selectedCategory === 'All'
      ? articles
      : articles.filter(article => article.category === selectedCategory);
    return (
        <div className='justify-center mx-auto w-11/12 text-center my-10'>
           <h1 className='text-3xl font-bold text-blue-900 mb-6'>All Articles</h1> 
   {/* Category Filter Dropdown */}
      <div className="mb-6">
        <label className="font-medium mr-2">Filter by Category:</label>
        <select
          className="select select-bordered"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Education">Education</option>
          <option value="Health">Health</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
      </div>   

     {/* Articles Grid */}       
           {filteredArticles.length===0?(
        <p>No Articles Found</p>
           ):(

  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
    {filteredArticles.map(article => (
        <ArticleCard key={article._id}  article={article}></ArticleCard>
   ) )}
  </div>
           )}
        </div>
    );
};

export default Allarticles;