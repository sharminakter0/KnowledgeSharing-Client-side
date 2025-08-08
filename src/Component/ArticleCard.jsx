
import React from 'react';
import { Link } from 'react-router';

const ArticleCard = ({article}) => {

    const {
title,
userName,date}=article
    return (
                 
       <div className="">
        <div className="card card-border bg-base-200 shadow h-50  ">
  <div className="card-body  ">
    <h2 className="card-title font-semibold">{title}</h2>
    <p>{
userName}</p>
<p>{date}</p>
    <div className="card-actions justify-end">
    <Link to={`/article-details/${article._id}`}>  <button className="btn btn-success ">Read More</button></Link>
    </div>
  </div>
</div>
       </div>
    );
};

export default ArticleCard;