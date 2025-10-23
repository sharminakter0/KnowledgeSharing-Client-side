import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from "framer-motion";
import { GraduationCap, HeartPulse, Monitor, Palette } from "lucide-react"; // import icons
import image1 from "../../src/assets/female-nurse-taking-care-elderly-person.jpg";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // Map category name to icons
  const categoryIcons = {
    education: <GraduationCap size={20} className="text-blue-500" />,
    health: <HeartPulse size={20} className="text-blue-500" />,
    lifestyle: <Palette size={20} className="text-blue-500" />,
    tech: <Monitor size={20} className="text-blue-500" />,
  };

  useEffect(() => {
    fetch('http://localhost:5000/categories/name')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error('Failed to fetch categories:', err));
  }, []);

  const handleClick = (category) => {
    navigate(`/categorys/${category}`);
  };

  return (
    <div className="w-11/12 mx-auto mt-10 text-center mb-18  ">
      <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
      <p className="text-center text-gray-500 mb-6">
        Easily find the content you're looking for by exploring our organized categories. <br />
        Whether it's technology, education, lifestyle, or creativity — discover articles that match your interests and needs in just a few clicks.
      </p>

      <div className="flex flex-col lg:flex-row justify-between gap-11 items-center">
        {/* Left: Category Buttons */}
        <div className="flex flex-wrap justify-center gap-6">
          {categories.map((category, idx) => {
            const icon = categoryIcons[category.toLowerCase()] || null; // get icon by name
            return (
             <motion.button
               whileHover={{ scale: 1.08, backgroundColor: "#e0f2fe" }}  // grows & light blue hover
                whileTap={{ scale: 0.95 }}                                 // slight press-in effect
               transition={{ type: "spring", stiffness: 300 }}
              onClick={() => handleClick(category)}
              key={idx}
              className="flex items-center gap-2 px-6 py-3 border border-blue-400 rounded-md bg-base-100 capitalize  hover:shadow-md"
              >{icon}{category}
             </motion.button>
            );
          })}
        </div>

        {/* Right: Animated Image */}
        <div>
          <motion.img
            src={image1}
            alt="categories image"
            animate={{ y: [40, 0, 50] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-95 rounded-lg h-66 rounded-tl-[40px] border-blue-400 border-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
