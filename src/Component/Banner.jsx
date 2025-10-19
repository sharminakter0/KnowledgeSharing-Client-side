import React from 'react';
import { motion } from "motion/react";
import { Link } from 'react-router';

// ✅ Only one background image
import bg1 from '../../src/assets/books-with-brain-digital-art-style-education-day.jpg';
import banner1 from '../../src/assets/banner1.jpg';

const Banner = () => {
  return (
    <div 
      className="relative pb-16 hero mb-12  mx-auto rounded-2xl w-11/12 md:h-[380px] lg:h-[420px] mt-20 shadow-md shadow-[#275594] border border-[#5c97f1]  overflow-hidden"
      style={{ backgroundImage: `url(${bg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>

      <div className="hero-content flex-col lg:flex-row-reverse w-11/12 mx-auto relative z-10">

        {/* Right Side Image */}
        <div className='flex-1 relative'>
          <motion.img
            src={banner1}
            animate={{ y: [50, 0, 50] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="max-w-sm rounded-t-[40px] hidden lg:block rounded-br-[40px] border-2 border-green-300 shadow-2xl"
          />
        </div>

        {/* Left Side Text */}
        <div className='mt-6'>
          <h1 className="text-4xl font-bold text-white">
            Share Your{" "}
            <motion.span
              animate={{
                color: ['#65ff33', '#f633ff', '#334fff', '#bf33ff', '#33f4ff', '#ff3353'],
                transition: { duration: 7, repeat: Infinity },
              }}
            >
              Knowledge
            </motion.span>
          </h1>
          <p className="py-6 text-gray-200 font-sm">
            Empower fellow students by sharing what you know. From study tips to project ideas,
            your insights can help others learn, grow, and succeed. Start contributing today and be
            a part of a supportive learning community!
          </p>
          <Link to="/all-articles">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-soft btn-info px-16 font-semibold"
            >
              Explore Articles
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
