
'use client';
import React, { useState, useEffect, useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import '../global/featureBoxCarousel.css'
import Image from 'next/image';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import Skeleton from '@/components/global/Skeletons/Skeleton';


const images = [
  { id: '1', src: '/images/course-image3.webp', alt: 'Course Image 1', title: 'Course Feature', text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. ', price: '£900.00' },
  { id: '2', src: '/images/course-image.webp', alt: 'Course Image 1', title: 'Course Feature', text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.', price: '£330.00' },
  { id: '3', src: '/images/course-image3.webp', alt: 'Course Image 1', title: 'Course Feature', text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.', price: '£220.00' },
];

const FeatureBox = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (embla) embla.scrollPrev();
  }, [embla]);

  const scrollNext = useCallback(() => {
    if (embla) embla.scrollNext();
  }, [embla]);

  const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, []);

  return (
    <>
      {loading ? (
          <div>
              <Skeleton style={'h-40 w-[100%] bg-neutral-200 mt-2'}/>

        </div>
      ) : (
        <div className="relative  w-full md:w-[100%] md:order-2 mb-6 md:mb-0  course_image_slider">
          <div className="feature_box_embla" ref={emblaRef}>
            <div className="feature_box_embla__container ">
              {images.map((image, index) => (
                <div key={index} className="feature_box_embla__slide ">
                  <div className='flex md:flex-nowrap flex-wrap overflow-hidden'>
                    <div className='md:w-[40%]  h-auto md:mr-4 lg:mr-10'>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        className="w-full border-5 object-cover lg:h-[250px] h-[190px]"
                        priority
                        width="400"
                        height="300"
                      />
                    </div>
                    <div className='md:w-[60%] md:pr-4 lg:pr-16 flex flex-col justify-between'>
                      <div>
                        <p className='text-2xl font-[500] md:mt-[-5px] mt-4'>{image.title}</p>
                        <p className='text-[17px] mt-2'>{image.text}</p>
                        <p className='text-sm'>Course provider : Sbc Solution Ltd</p>
                        <p className='text-sm mb-6'>Updated : <span className='font-[500] text-xs'>January 11, 2024</span></p>
                      </div>
                      <div>
                        <p className='text-xl font-[500] '>{image.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* button */}
          <button
            className="course_finder_embla__prev absolute md:left-[-30px] left-[-40px] top-[50%] transform -translate-y-1/2 text-white  bg-black hover:text-primary p-2 rounded-full z-100"
            onClick={scrollPrev}> <GrFormPrevious className='text-3xl' /> </button>
          <button className="course_finder_embla__next absolute md:right-[-30px] right-[-30px] top-[50%] transform -translate-y-1/2 text-white  bg-black hover:text-primary p-2 rounded-full z-10" onClick={scrollNext}>
            <MdNavigateNext className='text-3xl' />
          </button>
        </div>
      )}
    </>

  );
};

export default FeatureBox;
