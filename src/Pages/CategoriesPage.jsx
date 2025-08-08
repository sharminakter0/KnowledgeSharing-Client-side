import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import ArticleCard from '../Component/ArticleCard';
import FindCatCard from '../Component/FindCatCard';

const CategoriesPage = () => {
    const [ storeFindCat, setStoreFindCat] = useState([])
  const articles = useLoaderData();
  console.log(articles)
  const { category } = useParams();
  useEffect(()=>{
   
    const findCat = articles.filter((item)=> item.category == category)
  
  setStoreFindCat(findCat)
 

  },[articles,category])
   console.log(setStoreFindCat)

  return (
    <div className="w-10/12 mx-auto my-10  ">
      <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">
        Articles in "{category}" Category
      </h2>
      <div className="grid grid-cols-1  gap-9 ">
      {
        storeFindCat.map((item)=> <FindCatCard item = {item}></FindCatCard>
        )
      }
    
      </div>
    </div>
  );
};

export default CategoriesPage;
