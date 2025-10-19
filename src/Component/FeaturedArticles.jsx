import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Bookmark } from "lucide-react";

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
            className="bg-base-100 card shadow-md p-3 relative overflow-hidden"
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
              <button className="btn btn-sm btn-outline btn-info mt-4">
                Read More
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
            {/* ✅ View All Button */}
      <div className="text-center mt-6">
        <button className="btn btn-outline btn-info">View All Articles</button>
      </div>
    </div>
  );
};

export default FeaturedArticles;
