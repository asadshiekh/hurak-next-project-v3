// components/ReviewCard.js

import React from 'react';

const ReviewCard = ({ name, course, date, rating, review }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
      <div className="flex items-center mb-4">
        {/* Profile image */}
        <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-white text-xl">
          {name.charAt(0)}
        </div>

        <div className="ml-4">
          <div className="font-bold">{name}</div>
          <div className="text-sm text-gray-600">{course}</div>
        </div>
      </div>

      <div className="flex items-center mb-2">
        {/* Star rating */}
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-500">★</span>
        ))}
      </div>

      <p className="text-gray-700 mb-4">{review}</p>

      <div className="text-sm text-gray-500">{date}</div>
    </div>
  );
};

export default ReviewCard;
