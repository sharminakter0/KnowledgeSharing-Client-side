import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Bookmark,BookOpenText } from "lucide-react";

const FeaturedArticles = ({ articles }) => {
  const featured = Array.isArray(articles) ? articles.slice(0, 8) : [];

  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-6"> Featured Articles</h2>
      <p className="text-center text-sm mb-10 text-gray-500">
        Explore our handpicked selection of insightful articles written by top contributors.
        These featured pieces highlight trending topics, expert advice, <br />
        and fresh perspectives to keep you informed and inspired.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featured.map((article) => (
          <motion.div
            key={article._id}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-base-100 card p-3 relative border-1 border-blue-100 overflow-hidden"
          >
            {article.thumbnail && (
              <div className="relative">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="h-40 w-full object-cover rounded-lg"
                />

                {/* ✅ Bookmark Icon */}
                <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-gray-100 transition">
                  <Bookmark size={18} className="text-gray-600" />
                </button>
              </div>
            )}

            <h3 className="font-semibold mt-3">
              {article.title?.slice(0, 25)}...
            </h3>
            <p className="text-sm mt-2 text-gray-600">
              {article.content?.slice(0, 60)}...
            </p>

            <Link to={`/article-details/${article._id}`}>
              <button className="btn btn-sm bg-blue-400 text-white  hover:bg-blue-400/95 mt-4">
                Read More
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
            {/* ✅ View All Button */}
     <div className="flex justify-center items-center min-h-[20vh]"> 
      <Link to="/all-articles">
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#3b82f6" }} // hover grow
          whileTap={{ scale: 0.95 }} // click shrink
          initial={{ opacity: 0, y: 30 }} // enter animation
          animate={{ opacity: 1, y: 0 }} // visible animation
          transition={{ duration: 0.6, type: "spring" }}
          className="flex items-center gap-2 bg-blue-400 text-white px-6 py-3 rounded-lg shadow-lg"
        >
          <BookOpenText size={22} />
          View All Articles
        </motion.button>
      </Link>
    </div>
    </div>
  );
};

export default FeaturedArticles;