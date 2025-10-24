import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-hot-toast"; // optional for notifications

const ManageArticles = () => {
  const { token } = useContext(AuthContext);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all articles
  const fetchArticles = async () => {
    try {
      const res = await axios.get("http://localhost:5000/articles", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setArticles(res.data);
    } catch (err) {
      console.error("Failed to fetch articles:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // Delete article
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this article?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/articles/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Article deleted successfully");
      setArticles(articles.filter((a) => a._id !== id));
    } catch (err) {
      console.error("Failed to delete article:", err);
      toast.error("Failed to delete article");
    }
  };

  // Optional: Edit article (redirect to your edit page)
  const handleEdit = (id) => {
    window.location.href = `/dashboard/edit-article/${id}`;
  };

  if (loading) return <p>Loading articles...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Articles</h2>

      {articles.length === 0 ? (
        <p>No articles found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border border-gray-300">
            <thead className="bg-blue-950 text-white">
              <tr>
                <th className="px-4 py-2 border">Title</th>
                <th className="px-4 py-2 border">Author</th>
                <th className="px-4 py-2 border">Category</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article._id} className="text-center border">
                  <td className="px-4 py-2 border">{article.title}</td>
                  <td className="px-4 py-2 border">{article.userName}</td>
                  <td className="px-4 py-2 border">{article.category}</td>
                  <td className="px-4 py-2 border space-x-2">
                    <button
                      onClick={() => handleEdit(article._id)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(article._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageArticles;