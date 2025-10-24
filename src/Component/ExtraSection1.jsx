import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Marquee from "react-fast-marquee";




const ExtraSection1 = () => {
  const [topUsers, setTopUsers] = useState([]);

  const [latestArticles, setLatestArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/articles")
      .then((res) => res.json())
      .then((data) => {
        // Count articles (likes removed)
        const userMap = {};
        data.forEach((article) => {
          const { email, userName, userPhotoURL } = article;
          if (!userMap[email]) {
            userMap[email] = {
              name: userName,
              email,
              photoURL: userPhotoURL,
              count: 1,
            };
          } else {
            userMap[email].count += 1;
          }
        });

        const contributors = Object.values(userMap)
          .sort((a, b) => b.count - a.count)
          .slice(0, 3);

        setTopUsers(contributors);
        setLatestArticles(data.slice(-3).reverse());
      })
      .catch((err) => console.error("Error fetching articles:", err));
  }, []);

  return (
    <div className="w-11/12 mx-auto mt-10">
      {/* Top Contributors */}
      <div className="bg-base-200 py-10 px-4 rounded-2xl text-center">
        <h2 className="text-3xl font-bold mb-3">Top Contributors</h2>
        <p className="text-gray-600 mb-8">
          Meet our most active community members — the ones who make learning
          and sharing possible every day.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {topUsers.map((user, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-base-100 p-6 rounded-xl shadow-sm w-64"
            >
              <div className="flex flex-col items-center">
                <div className="bg-blue-500 p-4 rounded-full mb-4">
                  <Users size={32} color="white" />
                </div>
                <h3 className="text-lg font-bold">{user.name}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {user.count} articles
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Latest Articles */}
      <div className="mt-6 mb-10">
        <h2 className="text-3xl text-center font-bold mb-3">
          Latest Articles
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Stay updated with the newest posts from our passionate community.
        </p>

        <Marquee speed={50} pauseOnHover>
          <div className="flex gap-6 px-4">
            {latestArticles.map((article) => (
              <div
                key={article._id}
                className="bg-base-100 rounded-lg shadow-md w-80 overflow-hidden"
              >
                <img
                  src={
                    article.thumbnail ||
                    "https://via.placeholder.com/400x200?text=Article"
                  }
                  alt="Article"
                  className="h-44 w-full object-cover"
                />
                <div className="p-4 text-left">
                  <h3 className="text-lg font-semibold">
                    {article.title.slice(0, 50)}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    By {article.userName || "Unknown"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ExtraSection1;
