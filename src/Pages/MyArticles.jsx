import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import UpdateArticleModel from '../Component/UpdateArticleModel';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserArticles, clearUserArticles } from '../redux/features/userArticlesSlice';

const MyArticles = () => {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();

  // Select state from Redux
  const { articles: myArticles = [], loading, error } = useSelector(
    (state) => state.userArticles || {}
  );

  const [selectedArticle, setSelectedArticle] = useState(null);

  // Fetch only the current user's articles
  useEffect(() => {
    if (user?.email) {
      dispatch(fetchUserArticles(user.email));
    }

    // Clear articles on component unmount
    return () => {
      dispatch(clearUserArticles());
    };
  }, [user, dispatch]);

  // Handle delete
  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this article?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/articles/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user?.token}` // If you use JWT auth
          }
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire('Deleted!', 'Your article has been deleted.', 'success');
            if (user?.email) {
              dispatch(fetchUserArticles(user.email));
            }
          })
          .catch((err) => {
            console.error('Failed to delete article:', err);
            Swal.fire('Error!', 'Failed to delete article.', 'error');
          });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <h2 className="text-3xl font-bold mb-4 text-center">My Articles</h2>

      {/* Loading / Error States */}
      {loading && <p className="text-center">Loading articles...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      {!loading && !error && myArticles.length === 0 && (
        <p className="text-center text-gray-500">You haven't posted any articles yet.</p>
      )}

      {/* Table Section */}
      {!loading && !error && myArticles.length > 0 && (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-base-300">
              <tr>
                <th>Thumbnail</th>
                <th>Title</th>
                <th>Category</th>
                <th>Tags</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myArticles.map((article) => (
                <tr key={article._id}>
                  <td>
                    <img
                      src={article.thumbnail || 'https://via.placeholder.com/80'}
                      alt="thumbnail"
                      className="w-20 h-14 object-cover rounded"
                    />
                  </td>
                  <td>{article.title}</td>
                  <td>{article.category}</td>
                  <td>{Array.isArray(article.tags) ? article.tags.join(', ') : article.tags || '—'}</td>
                  <td>
                    <div className="flex gap-2">
                      <button
                        className="btn btn-sm btn-info"
                        onClick={() => setSelectedArticle(article)}
                      >
                        Update
                      </button>
                      <button
                        className="btn btn-sm btn-error"
                        onClick={() => handleDelete(article._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Update Modal */}
      {selectedArticle && (
        <UpdateArticleModel
          article={selectedArticle}
          setSelectedArticle={setSelectedArticle}
          onArticleUpdated={() => {
            if (user?.email) {
              dispatch(fetchUserArticles(user.email));
            }
          }}
        />
      )}
    </div>
  );
};

export default MyArticles;
