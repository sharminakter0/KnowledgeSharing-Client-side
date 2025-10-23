import React from 'react';
import { Link } from 'react-router';

const ArticleCard = ({article}) => {

    const {
title,
date}=article
    return (
                 
       <div className="">
        <div className="card  shadow-md p-3 h-72 bg-base-100 
         ">
  <div className="  ">
     {article.thumbnail && (
              <img
                src={article.thumbnail}
                alt={article.title}
                className="h-30 w-full object-cover rounded-lg mb-3"
              />
            )}
    <h2 className="card-title font-semibold">{title?.slice(0,30)}...</h2>
    
<p className='mb-1'>{date}</p>
    <div className="card-actions justify-center">
    <Link to={`/article-details/${article._id}`}>  <button className="btn btn-outline btn-info ">Read More</button></Link>
    </div>
  </div>
</div>
       </div>
    );
};

export default ArticleCard;