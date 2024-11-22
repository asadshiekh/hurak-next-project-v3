


'use client';

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import '@/../public/css/global/courseSlider.css';


const images = [
  { src: '/images/course-image2.webp', alt: 'Course Image 1' },
  { src: '/images/course-image2.webp', alt: 'Course Image 2' },
  { src: '/images/course-image2.webp', alt: 'Course Image 3' },
];

const CourseSlider = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Update selected index when the carousel scrolls
  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect); // Listen for scroll event
    onSelect(); // Set initial index
  }, [embla, onSelect]);

  return (
    <div className="relative w-full md:w-[40%] md:order-2 mb-6 md:mb-0 overflow-hidden course_image_slider rounded-lg">
      <div className="course_embla" ref={emblaRef}>
        <div className="course_embla__container">
          {images.map((image, index) => (
            <div key={index} className="course_embla__slide">
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full border-5"
                priority
                width="400"
                height="300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="course_embla__dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`course_embla__dot ${index === selectedIndex ? 'is-active' : ''}`}
            onClick={() => embla && embla.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseSlider;
