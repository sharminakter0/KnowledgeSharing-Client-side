import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import Marquee from "react-fast-marquee";
import { article } from 'framer-motion/client';


const ExtraSection1 = () => {
        

    
    const [topUsers, setTopUsers] = useState([]);
  const [latestArticles, setLatestArticles] = useState([]);


  // 🔹 Load all articles and compute Top Contributors
  useEffect(() => {
    fetch('http://localhost:3000/articles')
      .then(res => res.json())
      .then(data => {
        // ✅ Count articles by user
        const userMap = {};
        data.forEach(article => {
          const email = article.email;
          const name = article.userName;
          const tags = article.tags;
          const photoURL =article.userPhotoURL;
         
          
         

          if (!userMap[email]) {
            userMap[email] = { name,tags, email,photoURL, count: 1 };
          } else {
            userMap[email].count += 1;
          }
        });

        const contributors = Object.values(userMap)
          .sort((a, b) => b.count - a.count)
          .slice(0, 5); // Top 5

        setTopUsers(contributors);
        setLatestArticles(data.slice(-3).reverse()); // Last 5
      });
  }, []);


    return (
        <div className='w-11/12 mx-auto mt-10 '>
       {/* ✅ Top Contributors */}
      <div className='bg-base-200 py-10 px-4 rounded-2xl '
       
      >
        <h2 className="text-3xl   text-center font-bold   mb-6 " >Top Contributors</h2>
        <p className='text-sm text-gray-600 text-center mb-6'>Meet the students who go above and beyond in sharing knowledge and helping others grow. <br />Our top contributors regularly post valuable content, answer questions, and inspire the community with their dedication and expertise.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7 mb-8">
          {topUsers.map((user, index) => (
            <motion.div
            
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            key={index} className="border-green-400 border shadow-md rounded p-4 text-center">
                <img src={article.photoURL}></img>
             
              <h3 className="font-semibold text-blue-600">{user.name}</h3>
              <p className="text-sm text-gray-500">{user.count} Articles</p>
            </motion.div>
          ))}
        </div>
      </div>

     {/* ✅ Latest Articles */}
      <div className='mb-10'
      >
        <h2 className="text-3xl text-center font-bold mb-5">Latest Articles</h2>
        <p className='text-lg font-semibold mb-6 text-center'>Stay updated with the newest content from our community.</p>
        <Marquee><div className="grid grid-cols-3 lg:grid-cols-3 gap-8">
          {latestArticles.map(article => (

            
            <div key={article._id} className="card bg-base-100 shadow-sm"
            >

              
              <figure>
                <img src={article.thumbnail || 'https://via.placeholder.com/400x200'} alt="Article" className="h-48 w-full object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="text-lg font-bold">{article.title}</h3>
                <p className="text-sm text-gray-500">By {article.userName || 'Unknown'}</p>
                <Link to={`/article-details/${article._id}`} className="btn btn-sm btn-outline btn-info mt-2">Read More</Link>
              </div>
            </div>
          ))}
        </div></Marquee>
      </div>         
        </div>
    );
};

export default ExtraSection1;