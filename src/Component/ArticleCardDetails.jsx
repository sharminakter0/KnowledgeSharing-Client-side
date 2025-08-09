import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';


const ArticleCardDetails = () => {
    const {id} = useParams();
    const{user}=useContext(AuthContext);


    const [article,setArticle]=useState({});
    const [comments,setComments]=useState([]);
    const[likes,setLikes]=useState(0);
    const[alreadyLiked,setAlreadyLiked]= useState(false);

    // fetch articles info
    useEffect(()=>{
        fetch(`http://localhost:3000/articles/${id}`)
        .then(res=>res.json())
        .then(data =>
         setArticle(data));
    },[id]);

    // fetch comments collection
    useEffect(() => {
        fetch(`http://localhost:3000/comments/${id}`)
        .then(res => res.json())
        .then(data => setComments(data));
    }, [id]);  
  //  fetch liked

    useEffect(() => {
      if (user?.email) {
        fetch(`http://localhost:3000/likes/${id}`)
         .then(res => res.json())
         .then(data => {
           setAlreadyLiked(data?.users?.includes(user.email));
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
     timestamp:new Date(),
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
      headers:{'content-type':'application/json'},
      body: JSON.stringify({
      articleId: id,
      userEmail: user.email,
    }),
  })
      .then(res =>{
        if (res.ok){
          setLikes(prev => prev + 1);
          setAlreadyLiked(true);
        } else{
          alert ("You already liked this article")
        }
      });
  };


    return (
    <div className="w-8/12 mx-auto my-10">
        <h1 className='text-center my-5 text-4xl font-bold text-blue-900'>Article Card Details</h1>
      <img src={article.thumbnail} alt="thumbnail" className="w-full max-h-96 rounded-lg border-2 " />
      <h1 className="text-4xl font-bold mt-8 ">{article.title}</h1>
      <div className="text-sm text-gray-500 mt-2">
        <span className=''>By <span className='bg-amber-300 px-2 py-1 rounded-2xl'> {article.userName}</span></span> • <span>{article.date}</span>
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
        onClick={handleLike} className="btn btn-outline btn-success"
        disabled={alreadyLiked}>❤️ Like ({likes})</button>
        <span className="border px-2 py-2 border-green-500 rounded">💬 Comments ({comments.length})</span>
      </div>

      {user ? (
        <form onSubmit={handleComment} className="mb-6">
          <textarea name="comment" className="textarea textarea-bordered w-full" required placeholder="Write a comment..."></textarea>
          <button type="submit" className="btn btn-success mt-2">Post Comment</button>
        </form>
      ) : (
        <p className="text-gray-600">Login to like or comment.</p>
      )}

      <div className="space-y-4">
        {comments.map((c, index) => (
          <div key={index} className="border p-3 rounded bg-base-100">
            <div className="flex items-center gap-2">
              <img src={c.userPhoto} alt="user" className="w-8 h-8 rounded-full" />
              <span className="font-medium">{c.user}</span>
              <span className="text-xs text-gray-400 ml-2">{c.date}</span>
            </div>
            <p className="mt-2">{c.text}</p>
          </div>
        ))}
      </div>
    </div>       
    );
};

export default ArticleCardDetails;