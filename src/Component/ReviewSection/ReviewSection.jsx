import React from "react";

const reviews = [
  {
    id: 1,
    name: "Sharmin Akter",
    role: "Content Creator",
    rating: 5,
    comment:
      "ThinkTrove has transformed how I share my knowledge. The community is incredibly supportive!",
  },
  {
    id: 2,
    name: "Mim Akter",
    role: "Software Engineer",
    rating: 4,
    comment:
      "Best platform for learning new technologies. The articles are well-written and practical.",
  },
  {
    id: 3,
    name: "Safa Sezoti",
    role: "Student",
    rating: 5,
    comment:
      "I love the quiz feature! It helps me test my understanding after reading articles.",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex justify-center mb-3 text-yellow-400">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ))}
  </div>
);

const ReviewSection = () => {
  return (
    <section className="w-11/12 mx-auto my-16 text-center">
      <h2 className="text-3xl font-bold mb-2 ">
        What Our Users Say
      </h2>
      <p className="text-gray-500 mb-10">
        Real reviews from our community
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map(({ id, name, role, rating, comment }) => (
          <div
            key={id}
            className="bg-base-100 border border-gray-500 rounded-2xl  p-8 text-left flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <StarRating rating={rating} />
            <p className="text-gray-500 italic mb-6">"{comment}"</p>

            <div className="flex items-center mt-auto">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-lg font-semibold">
                {name.charAt(0)}
              </div>
              <div className="ml-4">
                <h3 className="font-semibold ">{name}</h3>
                <p className="text-gray-500 text-sm">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;
