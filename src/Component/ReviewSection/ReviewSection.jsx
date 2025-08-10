import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'Sharmin Akter',
    rating: 5,
    comment: 'Amazing platform! The articles are very helpful and the community is supportive.',
  },
  {
    id: 2,
    name: 'Mim Akter',
    rating: 4,
    comment: 'Great content and easy to navigate. Looking forward to more updates.',
  },
  {
    id: 3,
    name: 'Safa Sezoti',
    rating: 5,
    comment: 'I love how diverse the topics are. Highly recommend to everyone!',
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  for(let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={i <= rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    );
  }
  return <div className="text-xl">{stars}</div>;
};

const ReviewSection = () => {
  return (
    <section className="w-11/12 mx-auto my-12 px-6 pb-9 pt-5 bg-base-100 rounded-lg shadow-md   ">
      <h2 className="text-3xl font-bold mb-6 text-center">What Our Users Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map(({ id, name, rating, comment }) => (
          <div key={id} className="p-5 border rounded-lg shadow-sm bg-base-300">
            <StarRating rating={rating} />
            <h3 className="mt-3 font-semibold text-lg">{name}</h3>
            <p className="mt-2 text-gray-500 italic">"{comment}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
