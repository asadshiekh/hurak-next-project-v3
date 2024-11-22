// components/ReviewsSection.js
"use client"

import ReviewCard from './ReviewCard';
import { useState } from 'react';
import ReviewModal from './ReviewModel';
import ButtonFill from '@/components/global/butttons/ButtonFill';
export default function ReviewsSection({ reviews }) {

    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => {
      setShowModal(true);
    };
  
    const handleModalClose = () => {
      setShowModal(false);
    };

  //   '@context': 'https://schema.org',
  //     '@type': 'Review',
  //      "name": "Reviews",
  //      "author": {
  //       "@type": "Person",
  //       "name": "{{ $review->fname}}",
  //      },
  //     "aggregateRating": {
  //     "@type": "AggregateRating",
  //      "ratingValue": "2",
  //      "reviewCount": "2",
  //     "datePublished": "11-05-2024",
  //     "reviewBody": "What is the purpose of the SIA Top-Up Training for Security Guard Licence"
  // },
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Review",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "2",
      "reviewCount": "3"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Review"
        },
        "datePublished": "abc",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "3"
        },
        "reviewBody": "What is the purpose of the SIA Top-Up Training"
      }
    ],

    mainEntity: [
      {
        "@type": "Question",
        name: 'What is the purpose of the SIA Top-Up Training for Security Guard Licence?',
        acceptedAnswer: {
          "@type": "Answer",
          text: 'The purpose of the SIA Top-Up Training for Security Guard Licence is to provide existing security guard licence holders with updated knowledge and skills required to meet the new licence renewal requirements set by the Security Industry Authority (SIA).',
        },
      },
      {
        "@type": "Question",
        name: 'Who is eligible to take the SIA Top-Up Training course?',
        acceptedAnswer: {
          "@type": "Answer",
          text: 'The course is for those who are renewing their SIA Security Guard licence and meet the SIA eligibility criteria.',
        },
      },
      {
        "@type": "Question",
        name: 'Will the SIA Top-Up Training course improve my job prospects and career advancement in the security industry?',
        acceptedAnswer: {
          "@type": "Answer",
          text: 'Yes, completing the course will enhance your knowledge and skills, increasing your chances for better job opportunities in the security industry.',
        },
      },
      {
        "@type": "Question",
        name: 'Can I request an exemption from the SIA Top-Up Training course if I have extensive experience in the security field?',
        acceptedAnswer: {
          "@type": "Answer",
          text: 'No, the course is mandatory for all SIA security guard licence holders regardless of their experience.',
        },
      },
      {
        "@type": "Question",
        name: 'How often do I need to retake the SIA Top-Up Training?',
        acceptedAnswer: {
          "@type": "Answer",
          text: 'You need to retake the course whenever you renew your SIA Security Guard licence, as per the new regulations.',
        },
      },
    ],

  };
   
    
  return (
    <section className="review-section bg-[#f8f9fa]">
      <div className="container mx-auto px-5 lg:px-20 py-8">
        <div className="text-2xl font-semibold mb-4">
          <span className="text-yellow-500">★ 4.8</span> course rating · 1136 ratings
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
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
          

          <div className='flex justify-center mt-10 text-center'>
       
          <div ><ButtonFill handelClick={handleModalOpen} color={"primary"} text={" See More Reviews"} /></div>

        </div>

        {/* Modal */}
        <ReviewModal show={showModal} onClose={handleModalClose} reviews={reviews} />

      </div>
   
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>

  );
}
