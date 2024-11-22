'use client';
import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import './slider.css';
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import ButtonFill from '@/components/global/butttons/ButtonFill';

const CategoryCoursesSlider = () => {
    const courses = [
        { id: '1', name: 'CSCS', image: '/images/course-image2.webp', text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a  publishing and graphic design, Lorem ipsum is a placeholder  publishing and graphic design, Lorem ipsum is a placeholder', price: '£123.00' },
        { id: '2', name: 'Securityfdddddddd', image: '/images/course-image3.webp', text: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a', price: '£123.00' },
        { id: '3', name: 'Securitythree', image: '/images/course-image.webp', text: 'Description here', price: '£153.00' },
        { id: '4', name: 'Securityfour', image: '/images/course-image.webp', text: 'Description here', price: '£193.00' },
        { id: '5', name: 'Securityfour', image: '/images/course-image.webp', text: 'Description here', price: '£193.00' },
        { id: '6', name: 'Securityfour', image: '/images/course-image.webp', text: 'Description here', price: '£193.00' },
        { id: '7', name: 'Securityfour', image: '/images/course-image.webp', text: 'Description here', price: '£193.00' },
        // Add more courses as needed
    ];

    const [activeCourse, setActiveCourse] = useState(courses[0]); // Default to first course

    const [emblaRef, embla] = useEmblaCarousel({
        loop: true,
        align: 'start'
    })

    const handleCourseClick = (course, index) => {
        setActiveCourse(course);
        if (embla) {
            embla.scrollTo(index); // Show the clicked course as the first item
        }
    };

    const scrollPrev = useCallback(() => {
        if (embla) embla.scrollPrev();
    }, [embla]);

    const scrollNext = useCallback(() => {
        if (embla) embla.scrollNext();
    }, [embla]);

    const [emblaRefNew] = useEmblaCarousel({
        loop: true,
        align: 'start'
    })

    return (
        <div className="container m-auto md:order-1">
            <div className="embla" ref={emblaRefNew} >
                <div className="embla__container" >
                    {courses.map((course, index) => (
                        <div key={index} >
                            <div className={`embla__slide lg:mr-16 md:mr-10  ml-1 md:ml-0 rounded md:rounded-none md:px-6 px-2 md:border-b-2 md:border-t-0 md:border-l-0 md:border-r-0 border-l-2 border-r-2 border-t-2 border-b-2 text-center mb-10 flex justify-center ${activeCourse.id === course.id ? 'md:border-primary lg:text-primary md:bg-white bg-primary md:text-black text-white rounded md:rounded-none' : ''}`}>
                                <button
                                    onClick={() => handleCourseClick(course, index)}
                                    className={`btn mr-2 text-center py-2 md:py-0 whitespace-nowrap w-full ${activeCourse.id === course.id ? 'md:border-primary lg:text-primary md:bg-white bg-primary py-2 md:py-0 md:text-black text-white ' : ''}`}>
                                    {course.name}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative" >
                <div className="embla" ref={emblaRef} >
                    <div className="embla__container" >
                        {courses.map((course, index) => (
                            <div key={index} className={`embla__slide lg:h-[454px] md:h-[468px] h-[454px] lg:mr-8 md:mr-4 md:ml-0 ml-0  px-2 py-2 rounded-lg flex flex-col justify-between border-4 ${activeCourse.id === course.id ? 'border-primary' : ''}`}>
                                <div>
                                    <Image
                                        src={course.image}
                                        alt={course.name}
                                        className="w-full rounded h-[100px]"
                                        priority
                                        width="300"
                                        height="100"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <p className="my-3 pr-2 h-[180px] overflow-hidden text-[17px]">{course.text}</p>
                                </div>
                                <div>
                                    <p className="text-xl font-bold">From {course.price} <span className="font-normal text-sm text-gray-500">All inc</span></p>
                                    <p className="text-lg"><del>£99.99</del> <span>30% Off</span></p>
                                    <div className="flex flex-wrap items-end ">
                                    <div><ButtonFill color={"danger"} text={"See Dates"} /></div>
                                        {/* <button className="bg-danger py-3 px-5 rounded text-white text-xl font-bold mt-2 md:w-full lg:w-auto">See Dates</button> */}
                                        <p className="flex items-center md:ml-0 lg:ml-4 ml-2 font-[600] text-primary cursor-pointer mt-1">More Information <FaArrowRightLong className="ml-1 font-normal" /></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    className="embla__prev absolute md:left-[-20px] left-[-10px] top-[50%] transform -translate-y-1/2 bg-primary text-white p-2 rounded-full z-100"
                    onClick={scrollPrev}> <GrFormPrevious className='md:text-3xl' />
                </button>
                <button className="embla__next absolute md:right-[-20px] right-[-10px] top-[50%] transform -translate-y-1/2 bg-primary text-white p-2 rounded-full z-10" onClick={scrollNext}>
                    <MdNavigateNext className='md:text-3xl' />
                </button>
            </div>
        </div>
    );
};

export default CategoryCoursesSlider;