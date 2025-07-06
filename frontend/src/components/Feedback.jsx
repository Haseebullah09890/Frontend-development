import React, { useState } from 'react';

// Sample reviews data
const reviews = [
  {
    rating: 5,
    text: "This app changed the way I connect with people. Love it!",
    name: "John Doe",
    country: "United States",
    image: "/path-to-image.jpg",
  },
  {
    rating: 5,
    text: "Simple, powerful, and effective. Highly recommend!",
    name: "Jane Smith",
    country: "Canada",
    image: "/path-to-image.jpg",
  },
  {
    rating: 5,
    text: "A brilliant platform with great user experience.",
    name: "Carlos Reyes",
    country: "Mexico",
    image: "/path-to-image.jpg",
  },
  {
    rating: 5,
    text: "Keeps me updated with all my interests in one place.",
    name: "Amara Nwosu",
    country: "Nigeria",
    image: "/path-to-image.jpg",
  },
  {
    rating: 5,
    text: "Friendly interface and excellent features!",
    name: "Lena Müller",
    country: "Germany",
    image: "/path-to-image.jpg",
  },
  {
    rating: 5,
    text: "Efficient and fun to use. What more can you ask?",
    name: "Haruki Yamamoto",
    country: "Japan",
    image: "/path-to-image.jpg",
  },
  {
    rating: 5,
    text: "Efficient and fun to use. What more can you ask?",
    name: "Haruki Yamamoto",
    country: "Japan",
    image: "/path-to-image.jpg",
  },
  {
    rating: 5,
    text: "Efficient and fun to use. What more can you ask?",
    name: "Haruki Yamamoto",
    country: "Japan",
    image: "/path-to-image.jpg",
  },
  // Add more reviews as needed
];

const Feedback = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="w-full bg-gray-100 pb-10 opacity-0 animate-fade-in">
      <div className="w-[90%] m-auto">
        <h1 className="text-5xl font-bold py-20 text-gray-800 text-center">
          What Our Users Say
        </h1>
      </div>

      {/* Reviews Grid */}
      <div className="w-[90%] m-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.slice(0, visibleCount).map((review, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-2xl border border-gray-200 shadow-md"
          >
            <span className="block text-yellow-500 font-semibold mb-2">
              {'⭐️'.repeat(review.rating)}
            </span>
            <p className="text-gray-700 mb-4">{review.text}</p>
            <div className="flex items-center gap-4 mt-4">
              <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-800">{review.name}</p>
                <p className="text-sm text-gray-500">{review.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      {visibleCount < reviews.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSeeMore}
            className="bg-gray-100 px-6 py-4 rounded-lg border border-gray-300 text-red-500 font-bold shadow-md capitalize cursor-pointer"
          >
            See more
          </button>
        </div>
      )}
    </div>
  );
};

export default Feedback;
