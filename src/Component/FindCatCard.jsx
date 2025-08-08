
import React from 'react';

const FindCatCard = ({item}) => {
    return (
      <div className="card  bg-base-200 shadow-sm px-4 py-5">
  <figure>
    <img className='h-80 w-100  lg:w-200 border-blue-900 border-2 lg:h-100 rounded-2xl  '
      src={item.thumbnail}
      alt="thumbnail" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-bold">{item.title}</h2>
    <h4 ><span className='font-medium'>Author Name:</span> <span className='bg-amber-100 px-2 py-1 rounded-2xl'>{item.userName}</span></h4>
    <h3><span className='font-medium'>Category:</span><span className='text-green-500'> {item.category}</span></h3>
    <p><span className='font-medium '>Content:</span> <span className='font-sans'>{item.content}</span></p>
    <p><span className='font-medium'>Tags:</span> "{item.tags}"</p>

    <h3><span className='font-medium'>Published Date: </span> <span className='text-gray-600'>{item.date}</span></h3>
   
  </div>
</div>
    );
};

export default FindCatCard;