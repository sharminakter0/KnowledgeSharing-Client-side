import React from 'react';
import { Link } from 'react-router'; // use 'react-router-dom' instead of 'react-router'

const ArticleCard = ({ article }) => {
  const { title, date, thumbnail, _id } = article;

  return (
    <div className="card bg-base-100  h-80 flex flex-col hover:border hover:border-blue-300 justify-between p-3">
      {/* Top Content */}
      <div>
        {thumbnail && (
          <img
            src={thumbnail}
            alt={title}
            className="h-32 w-full object-cover rounded-lg mb-3"
          />
        )}
        <h2 className="card-title font-semibold text-lg">
          {title?.length > 30 ? title.slice(0, 30) + '...' : title}
        </h2>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
      </div>

      {/* Bottom (Button) */}
      <div className="card-actions justify-center mt-auto">
        <Link to={`/article-details/${_id}`}>
          <button className="btn bg-blue-600 hover:bg-blue-700 px-5 py-2 text-white rounded-xl">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
