import React, { useEffect, useState } from 'react';
import {  Navigate, useNavigate } from 'react-router';

const Categories = () => {
  const [categories, setCategories] = useState([]);
   const navigate = useNavigate()

  useEffect(() => {
    fetch('https://knowledege-project.vercel.app/categories/name')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error('Failed to fetch categories:', err));
  }, []);
  console.log (categories)
  const handleClick =(category)=>{
  navigate(`/categorys/${category}`)
   }

  return (
    <div className="w-11/12 mx-auto my-14 text-center bg-blue-50 py-18  rounded-2xl">
     <h2 className="text-3xl font-bold text-blue-900 mb-4">Browse by Category</h2>
     <p className='text-center text-gray-500 mb-8'>Easily find the content you're looking for by exploring our organized categories. <br /> Whether it's technology, education, lifestyle, or creativity — discover articles that match your interests and needs in just a few clicks.</p>

        <div className="flex flex-wrap justify-center gap-10">
        {categories.map((category, idx) => (
        //   <Link to={`/category/${category}`}
          
            <button onClick={()=>handleClick(category)}  key={idx} className="btn btn-outline btn-info capitalize">
                
                {category}</button>
        //   </Link>
        ))}
      </div> 
    </div>
  );
};

export default Categories;
