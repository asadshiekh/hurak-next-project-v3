"use client";
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const images = [
  '/images/brand1.webp', // Replace with your actual image paths
  '/images/brand2.webp',
  '/images/brand3.webp',
];

const PackagesCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1, // Show only 1 slide at a time
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1024, // For medium/desktop devices
        settings: 'unslick', // Disable slick slider, showing all images in one row
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Slider {...settings} className="mobile-slider">
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-64 object-cover rounded-lg" />
          </div>
        ))}
      </Slider>
      <div className="desktop-slider hidden md:flex justify-between gap-4">
        {images.map((src, index) => (
          <div key={index} className="w-full">
            <img src={src} alt={`Slide ${index + 1}`} className="w-full h-64 object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesCarousel;
