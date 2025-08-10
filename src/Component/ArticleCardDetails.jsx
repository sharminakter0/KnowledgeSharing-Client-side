import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const ArticleCardDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [alreadyLiked, setAlreadyLiked] = useState(false);

  // Fetch article info
  useEffect(() => {
    fetch(`http://localhost:3000/articles/${id}`)
      .then(res => res.json())
      .then(data => setArticle(data));
  }, [id]);

  // Fetch comments
  useEffect(() => {
    fetch(`http://localhost:3000/comments/${id}`)
      .then(res => res.json())
      .then(data => setComments(data));
  }, [id]);

  // Fetch like status
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/likes/${id}`)
        .then(res => res.json())
        .then(data => {
          setAlreadyLiked(data?.users?.includes(user.email));
          setLikes(data?.count || 0);
        });
    }
  }, [user, id]);

  const handleComment = e => {
    e.preventDefault();
    const commentText = e.target.comment.value;

    const newComment = {
      articleId: id,
      user: user.displayName,
      userPhoto: user.photoURL,
      text: commentText,
      timestamp: new Date(),
    };

    fetch(`http://localhost:3000/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComment),
    })
      .then(res => res.json())
      .then(() => {
        setComments(prev => [newComment, ...prev]);
        e.target.reset();
      });
  };

  const handleLike = () => {
    fetch(`http://localhost:3000/likes`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        articleId: id,
        userEmail: user.email,
      }),
    }).then(res => {
      if (res.ok) {
        setLikes(prev => prev + 1);
        setAlreadyLiked(true);
      } else {
        alert("You already liked this article");
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto my-15  grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* LEFT SIDE - ARTICLE DETAILS */}
      <div className="lg:col-span-2 mt-10  bg-base-100 px-6 py-6   rounded-lg shadow-md">
        <h1 className='text-center mb-5 text-4xl font-bold text-blue-900'>
          {article.title || "Article Card Details"}
        </h1>
        {article.thumbnail && (
          <img src={article.thumbnail} alt="thumbnail" className="w-full max-h-96 rounded-lg border-2" />
        )}
        <div className="text-sm text-gray-500 mt-4">
          <span>By <span className='bg-amber-300 px-2 py-1 rounded-2xl'> {article.userName}</span></span> • <span>{article.date}</span>
        </div>
        <p className="my-6">{article.content}</p>

        <div className="mb-4">
          <span className="font-semibold">Category:</span> <span className="text-red-700 bg-blue-200 px-4 py-1 rounded-3xl">{article.category}</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold">Tags:</span> ❝ {article.tags} ❞
        </div>

        <div className="flex gap-4 my-4">
          <button
            onClick={handleLike}
            className="btn btn-outline btn-success"
            disabled={alreadyLiked}
          >
            ❤️ Like ({likes})
          </button>
          <span className="border px-2 py-2 border-green-500 rounded">
            💬 Comments ({comments.length})
          </span>
        </div>
      </div>

      {/* RIGHT SIDE - COMMENTS / REVIEWS */}
      <div className="bg-base-100 p-6 rounded-lg shadow-md mt-10">
        <h2 className="text-2xl font-bold mb-4">Reviews & Comments</h2>

        {user ? (
          <form onSubmit={handleComment} className="mb-6">
            <textarea
              name="comment"
              className="textarea textarea-bordered w-full"
              required
              placeholder="Write a comment..."
            ></textarea>
            <button type="submit" className="btn btn-success mt-2 w-full">
              Post Comment
            </button>
          </form>
        ) : (
          <p className="text-gray-600 mb-4">Login to like or comment.</p>
        )}

        <div className="space-y-4 max-h-[500px] overflow-y-auto">
          {comments.map((c, index) => (
            <div key={index} className="border p-3 rounded bg-white">
              <div className="flex items-center gap-2">
                <img
                  src={c.userPhoto}
                  alt="user"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium">{c.user}</span>
                <span className="text-xs text-gray-400 ml-2">
                  {c.date || new Date(c.timestamp).toLocaleString()}
                </span>
              </div>
              <p className="mt-2">{c.text}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ArticleCardDetails;
