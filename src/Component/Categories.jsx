import React, { useEffect, useState } from 'react';
import {  Navigate, useNavigate } from 'react-router';
import image1 from "../../src/assets/female-nurse-taking-care-elderly-person.jpg";
import image2 from "../../src/assets/front-view-stacked-books-ladders-with-copy-space-education-day.jpg"
import {motion} from "motion/react"
const Categories = () => {
  const [categories, setCategories] = useState([]);
   const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:5000/categories/name')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error('Failed to fetch categories:', err));
  }, []);
  console.log (categories)
  const handleClick =(category)=>{
  navigate(`/categorys/${category}`)
   }

  return (
    <div className="w-11/12 mx-auto mt-16 text-center bg-base-100 py-18  rounded-2xl px-10">
      <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
     <p className='text-center text-gray-500 mb-8'>Easily find the content you're looking for by exploring our organized categories. <br /> Whether it's technology, education, lifestyle, or creativity — discover articles that match your interests and needs in just a few clicks.</p>
     <div className="flex flex-col lg:flex-row justify-between   gap-11 items-center" >
     

        <div className="flex flex-wrap justify-center gap-6">
        {categories.map((category, idx) => (
        //   <Link to={`/category/${category}`}
          
            <button onClick={()=>handleClick(category)}  key={idx} className="btn btn-outline btn-info capitalize">
                
                {category}</button>
        //   </Link>
        ))}
      </div> 
      {/* Right side */}
      <div className='lg:w-2/3 flex flex-cols gap-4'>
        <motion.img src={image1} alt="categories image"
          animate={{
        y:[50, 0, 50],
        
      }}
      transition={{duration:7, repeat: Infinity}}
        className='w-80  rounded-lg h-60  rounded-tl-[40px] border-green-300 border' />
        <motion.img src={image2} alt="categories  image"  animate={{
        x:[-100, 0, -100],
        
      }}
      transition={{duration:10, delay:0, repeat: Infinity}}
        className='w-80 h-60 rounded-lg  rounded-bl-[40px] border-green-300  border' />
      </div>
      </div> 
    </div>
  );
};

export default Categories;