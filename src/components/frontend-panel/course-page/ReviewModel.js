// components/Modal.js
import { useState } from 'react';
import ReviewCard from './ReviewCard';

export default function ReviewModal({ show, onClose, reviews }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-full sm:w-11/12 lg:w-4/5 max-h-[500px] p-8 relative overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        
        {/* Rating Breakdown Section */}
        <div className="text-2xl font-semibold mb-4">
          <span className="text-yellow-500">★ 4.8</span> course rating · 1136 ratings
        </div>

        <div className="mb-8">
          <div className="flex items-center mb-2">
            <div className="text-yellow-500">★★★★★</div>
            <div className="flex-grow ml-2 bg-gray-300 rounded h-2">
              <div className="bg-primary h-2 rounded" style={{ width: '97%' }}></div>
            </div>
            <div className="ml-2 text-sm text-gray-700">97%</div>
          </div>
          <div className="flex items-center mb-2">
            <div className="text-yellow-500">★★★★☆</div>
            <div className="flex-grow ml-2 bg-gray-300 rounded h-2">
              <div className="bg-primary h-2 rounded" style={{ width: '70%' }}></div>
            </div>
            <div className="ml-2 text-sm text-gray-700">70%</div>
          </div>
          {/* Other rating bars */}
          <div className="flex items-center mb-2">
            <div className="text-yellow-500">★★★★☆</div>
            <div className="flex-grow ml-2 bg-gray-300 rounded h-2">
              <div className="bg-primary h-2 rounded" style={{ width: '10%' }}></div>
            </div>
            <div className="ml-2 text-sm text-gray-700">10%</div>
          </div>
          {/* Repeat for other stars if needed */}

          <div className="flex items-center mb-2">
            <div className="text-yellow-500">★☆☆☆☆</div>
            <div className="flex-grow ml-2 bg-gray-300 rounded h-2">
              <div className="bg-primary h-2 rounded" style={{ width: '2%' }}></div>
            </div>
            <div className="ml-2 text-sm text-gray-700">2%</div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="grid grid-cols-1 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              course={review.course}
              date={review.date}
              rating={review.rating}
              review={review.review}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
