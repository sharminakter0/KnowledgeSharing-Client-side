import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addNotification } from '../redux/features/notificationSlice';
import { addArticleToHistory } from '../redux/features/historySlice'; // Add this import

const ArticleCardDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [alreadyLiked, setAlreadyLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const dispatch = useDispatch();
 


  // Fetch article info
  useEffect(() => {
    fetch(`http://localhost:5000/articles/${id}`)
      .then(res => res.json())
      .then(data => {
        setArticle(data);
        // Dispatch action to add article to history
        dispatch(addArticleToHistory({
          id: data._id, // Assuming _id is the unique identifier for the article
          title: data.title,
          url: `/article/${data._id}`, // Construct the URL for the article
          thumbnail: data.thumbnail // Include thumbnail if available
        }));
      });
  }, [id, dispatch]); // Add dispatch to dependency array

  // Fetch comments
  useEffect(() => {
    fetch(`http://localhost:5000/comments/${id}`)
      .then(res => res.json())
      .then(data => setComments(data));
  }, [id]);

  // Fetch like status

useEffect(() => {
  if (user?.email) {
    fetch(`http://localhost:5000/likes/${id}?userEmail=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setAlreadyLiked(data.userLiked);
        setLikes(data.totalLikes);
      });
  } else {
    // If user not logged in, just fetch total likes
    fetch(`http://localhost:5000/likes/${id}`)
      .then(res => res.json())
      .then(data => setLikes(data.totalLikes));
  }
}, [user, id]);

   useEffect(() => {
  if (user?.email) {
    fetch(`http://localhost:5000/bookmarks`, {
      headers: { authorization: `Bearer ${user.token}` } // your Firebase token
    })
      .then(res => res.json())
      .then(data => {
        const isBookmarked = data.some(article => article._id === id);
        setBookmarked(isBookmarked);
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

    fetch(`http://localhost:5000/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComment),
    })
      .then(res => res.json())
      .then(() => {
        setComments(prev => [newComment, ...prev]);
        e.target.reset();
        // Dispatch notification
        dispatch(addNotification({
          id: Date.now(), // Unique ID for the notification
          message: `New comment on "${article.title}" by ${user.displayName}`,
          read: false,
          timestamp: new Date().toISOString(),
          articleId: id,
        }));
      });
  };

    const handleLike = () => {
     if (!alreadyLiked) {
    // Add like
    fetch(`http://localhost:5000/likes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        articleId: id,
        userEmail: user.email,
      }),
    })
      .then(res => {
        if (res.ok) {
          setLikes(prev => prev + 1);
          setAlreadyLiked(true);
        } else {
          alert("You already liked this article");
        }
      });
  } else {
    // Remove like
    fetch(`http://localhost:5000/likes`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        articleId: id,
        userEmail: user.email,
      }),
    })
      .then(res => res.json())
      .then(() => {
        setLikes(prev => prev - 1);
        setAlreadyLiked(false);
      })
      .catch(err => console.error("Failed to unlike:", err));
  }
};

const handleBookmark = () => {
  if (!bookmarked) {
    // Save bookmark
    fetch("http://localhost:5000/bookmarks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ articleId: id }),
    })
      .then(res => res.json())
      .then(() => {
        setBookmarked(true);
        toast.success("🔖 Article bookmarked!");
      })
      .catch(err => {
        console.error(err);
        toast.error("Failed to bookmark article");
      });
  } else {
    // Remove bookmark
    fetch(`http://localhost:5000/bookmarks/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    })
      .then(() => {
        setBookmarked(false);
        toast("Bookmark removed", { icon: "🗑️" });
      })
      .catch(err => {
        console.error(err);
        toast.error("Failed to remove bookmark");
      });
  }
};



  return (
    <div className="w-11/12 mx-auto my-15  grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* LEFT SIDE - ARTICLE DETAILS */}
      <div className="lg:col-span-2 mt-10  bg-base-100 px-6 py-6   rounded-lg shadow-md">
        <h1 className='text-center mb-5 text-4xl font-bold text-blue-500'>
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
  className={`btn btn-outline ${alreadyLiked ? "btn-error" : "btn-success"}`}
>
  {alreadyLiked ? `❤️liked (${likes})` : ` Like (${likes})`}
</button>
          <span className="border px-2 py-2 border-blue-500 rounded">
            💬 Comments ({comments.length})
          </span>

       <button
  onClick={handleBookmark}
  className={`btn btn-outline ${bookmarked ? "btn-warning" : "btn-info"}`}
>
  {bookmarked ? "🔖 Bookmarked" : "📑 Save"}
</button>   
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
            <button type="submit" className="btn bg-blue-500 px-4 py-3 rounded-2xl mt-2 w-full">
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