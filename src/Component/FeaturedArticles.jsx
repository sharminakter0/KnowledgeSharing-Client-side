import React from 'react';
import { Link } from 'react-router';



const FeaturedArticles = ({articles}) => {
    const featured =articles.slice(0,6)

    
    return (
   <div className="w-11/12 mx-auto my-10">
   <h2 className="text-3xl font-bold text-center text-blue-900 mb-6"> Featured Articles</h2>
   <p className="text-center text-sm mb-10 text-gray-500">Explore our handpicked selection of insightful articles written by top contributors. These featured pieces highlight trending topics, expert advice, <br /> and fresh perspectives to keep you informed and inspired. Whether you're here to learn, grow, or share, our featured content is the perfect place to start.</p>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     {featured.map(article => (
          <div key={article._id} className="card bg-blue-50 shadow-md p-5">
            <h3 className="text-xl font-bold text-blue-800  ">{article.title}</h3>
            <p className="text-sm mt-2 text-gray-600">
              {article.content?.slice(0, 100)}...
            </p>
            <div className="text-xs text-gray-500 mt-3">
              <span>By {article.userName}</span> • <span>{article.date}</span>
            </div>
            <Link to={`/article-details/${article._id}`}>
              <button className="btn btn-sm btn-outline btn-info mt-4">Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    );
};

export default FeaturedArticles;