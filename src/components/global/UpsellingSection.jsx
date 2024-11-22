'use client'; // Make sure to add this at the top of your component file

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import '../../../public/css/global/relatedProductsSlider.css';
import { GrNext, GrPrevious } from "react-icons/gr";


const relatedProducts = [
  {
    id: 1,
    image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/courses-images/642d5c4f4e72d_Asbestos1.webp',
    title: 'Level 3 Health and Safety Training',
    provider: 'Hurak Learning',
    price: '£50',
  },
  {
    id: 2,
    image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/courses-images/644fcf1abc7ab_62c2cd7d09337_istockphoto-619263856-612x612.webp',
    title: 'Asbestos Awareness (Category A)',
    provider: 'Hurak Learning',
    price: 'From £14.99',
  },
  {
    id: 3,
    image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/courses-images/64834cd4e147d_istockphoto-1358194313-612x612.jpg',
    title: 'Emergency First Aid At Work Course',
    provider: '16 Course Providers',
    price: 'From £65',
  },
  {
    id: 4,
    image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/courses-images/66a3b1afda751_Health%20and%20Safety%20Training%20for%20Managers%20Level-3.webp',
    title: 'Manual Handling Training Course 1',
    provider: 'Hurak Learning',
    price: 'From £14.99',
  },

  {
    id: 5,
    image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/courses-images/66a3b1afda751_Health%20and%20Safety%20Training%20for%20Managers%20Level-3.webp',
    title: 'Manual Handling Training Course 2',
    provider: 'Hurak Learning',
    price: 'From £14.99',
  },

  {
    id: 6,
    image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/courses-images/66a3b1afda751_Health%20and%20Safety%20Training%20for%20Managers%20Level-3.webp',
    title: 'Manual Handling Training Course 3',
    provider: 'Hurak Learning',
    price: 'From £14.99',
  },

  {
    id: 7,
    image: 'https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/courses-images/66a3b1afda751_Health%20and%20Safety%20Training%20for%20Managers%20Level-3.webp',
    title: 'Manual Handling Training Course 4',
    provider: 'Hurak Learning',
    price: 'From £14.99',
  },
];

const UpsellingSection = () => {

  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: 'start' });


  const scrollPrev = useCallback(() => {
    if (embla) embla.scrollPrev();
  }, [embla]);

  const scrollNext = useCallback(() => {
    if (embla) embla.scrollNext();
  }, [embla]);

  return (
    <div className="container mx-auto px-10 md:px-0 py-10">
      <h2 className="text-xl font-semibold mb-6">You might also like</h2>

      <div className="relative">
        {/* Left Arrow */}
        <div className="absolute -left-5 top-[50%] transform -translate-y-1/2 z-10">
          <button className="bg-white h-12 w-12 flex justify-center items-center rounded-full shadow-lg shadow-gray-500" onClick={scrollPrev}>
            <GrPrevious />
          </button>
        </div>

        {/* Right Arrow */}
        <div className="absolute -right-5 top-[50%] transform -translate-y-1/2 z-10">
          <button className="bg-white h-12 w-12 flex justify-center items-center rounded-full shadow-lg shadow-gray-500" onClick={scrollNext}>
            <GrNext />
          </button>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {relatedProducts.map((product) => (
              <div key={product.id} className="embla__slide bg-white shadow-lg rounded-lg overflow-hidden"> {/* Add margin for large screens only */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p className="text-sm text-gray-500">{product.provider}</p>
                  <p className="mt-2 font-bold">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default UpsellingSection;
