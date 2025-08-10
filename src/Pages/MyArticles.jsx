import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import UpdateArticleModel from '../Component/UpdateArticleModel';

const MyArticles = () => {

    const {user} =useContext(AuthContext);
    const [myArticles,setMyArticles]=useState([]);
    const [selectedArticle,setSelectedArticle]=useState(null);

    useEffect(()=>{
        fetch(`http://localhost:3000/articles?email=${user.email}`)
        .then(res =>res.json()
    .then(data =>setMyArticles(data)
))
    },[user]);

   const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this article?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/articles/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(() => {
            setMyArticles(myArticles.filter(article => article._id !== id));
            Swal.fire('Deleted!', 'Your article has been deleted.', 'success');
          });
      }
    });
  }; 
    return (
     <div className="w-11/12 mx-auto my-10">
      <h2 className="text-3xl font-bold mb-4 text-center">My Articles</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-base-300  ">
            <tr>
              <th>Thumbnail</th>
              <th>Title</th>
              <th>Category</th>
              <th>Tags</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myArticles.map(article => (
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
                <td>
                   {Array.isArray(article.tags) ? article.tags.join(', ') : (article.tags || '—')}
                </td>
                <td className="flex gap-2">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedArticle && (
        <UpdateArticleModel
          article={selectedArticle}
          setSelectedArticle={setSelectedArticle}
          setMyArticles={setMyArticles}
          myArticles={myArticles}
        />
      )}
    </div>     
    );
};

export default MyArticles;