import React, { useState } from 'react';
import Swal from 'sweetalert2';

const UpdateArticleModel = ({article,setSelectedArticle,setMyArticles,myArticles}) => {

    const [formData,setFormData]= useState({
        title: article.title,
        category:article.category,
        content:article.content
    });

    const handleUpdate =(e)=>{
        e.preventDefault();
        
        fetch(`http://localhost:5000/articles/${article._id}`,{
            method: 'PUT',
            headers:{'content-type':'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res=>res.json())
        .then(()=>{
            const updateList =myArticles.map(item =>
                item._id === article._id ?{...item,...formData}:item
            );
            setMyArticles(updateList);
            setSelectedArticle(null);
        
          Swal.fire({
            icon:'success',
            title:'Article Updated',
            text:'✅ Your article was updated successfully!',
            confirmButtonColor:'#22c55e'
          });

           
        });
    };
    return (
         <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-base-100 p-6 rounded w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Update Article</h2>
        <form onSubmit={handleUpdate} className="space-y-4">
          <input
            type="text"
            className="input input-bordered w-full"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Title"
            required
          />
          <input
            type="text"
            className="input input-bordered w-full"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            placeholder="Category"
            required
          />
          <textarea
            className="textarea textarea-bordered w-full"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            placeholder="Content"
            required
          />
          <div className="flex justify-end gap-2">
            <button type="submit" className="btn btn-success">Update</button>
            <button type="button" onClick={() => setSelectedArticle(null)} className="btn btn-secondary">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default UpdateArticleModel;