import React from 'react';
import {motion} from "motion/react"

import banner1 from '../../src/assets/banner1.jpg'
import { Link } from 'react-router';


// import bannerAnimation from "../../src/assets/lottie/Animation - 1750100996979.json"
const Banner = () => {
    return (
        <div className="bg-blue-200  pb-16 hero mb-12 py-10">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className='flex-1 relative'>
    <motion.img
      src={banner1}
      animate={{
        y:[40, 0, 40],
        
      }}
      transition={{duration:7, repeat: Infinity}}
      className="max-w-sm rounded-t-[40px]  rounded-br-[40px] border-2 border-green-300 shadow-2xl  "
    />
    {/* <motion.img src={banner2} 
    animate={{
        x:[100, 150, 100],
        
      }}
      transition={{duration:10, delay:6, repeat: Infinity}}
     className="max-w-sm rounded-t-[40px]  rounded-br-[40px] shadow-2xl "/> */}

 {/* Lottie */}
     {/* <div className='absolute top-0 left-0 w-full h-full pointer-events-none opacity-60'>
      <Lottie animationData={bannerAnimation} loop={true}></Lottie>

     </div> */}
    </div>
    <div className='mt-6'>
      <h1 className="text-4xl font-bold">Share Your <motion.span 
      animate={
        {
            color:['#65ff33','#f633ff','#334fff','#bf33ff','#33f4ff','#ff3353'],
       transition:{duration:7,repeat:Infinity} 

      }}
    >Knowledge</motion.span></h1>
      <p className="py-6 text-gray-600">
      Empower fellow students by sharing what you know. From study tips to project ideas,your insights can  <br />  help others learn, grow, and succeed. Start contributing today and be a part of a supportive  <br /> learning community!
      </p>
      <Link to="/all-articles"><motion.button 
      whileHover={{scale:1.1}}
      whileTap={{scale: 0.95}}
      className="btn btn-soft btn-info px-16 font-semibold">Explore Articles</motion.button></Link>
    </div>
  </div>
</div>
    );
};

export default Banner;