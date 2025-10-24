import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router";

const BookmarkPage = () => {
  const { user } = useContext(AuthContext);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    if (user?.token) {
      fetch("http://localhost:5000/bookmarks", {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      })
        .then(res => res.json())
        .then(data => setBookmarks(data))
        .catch(err => console.error(err));
    }
  }, [user]);

  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-3xl font-bold mb-6">My Bookmarked Articles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookmarks.map(article => (
          <div key={article._id} className="border rounded-lg p-4 shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600 mb-4">{article.content?.slice(0, 100)}...</p>
            <Link
              to={`/articles/${article._id}`}
              className="btn btn-sm btn-primary"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookmarkPage;