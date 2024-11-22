import React, { useState, useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import '../course-finder/courseFinder.css';
import Image from 'next/image';
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import Link from 'next/link';

import Skeleton from '@/components/global/Skeletons/Skeleton';

const CourseFinderSlider = ({ courses }) => {
    const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: 'start' });
    const scrollPrev = useCallback(() => { if (embla) embla.scrollPrev(); }, [embla]);
    const scrollNext = useCallback(() => { if (embla) embla.scrollNext(); }, [embla]);

    const [hoverBlog, setHoverBlog] = useState(null);
    const [isRightPosition, setIsRightPosition] = useState(true);

    const handleMouseEnter = (index, event) => {


        setHoverBlog(index);

        // Calculate available space to the left
        const itemRect = event.currentTarget.getBoundingClientRect();
        const availableSpaceRight = window.innerWidth - itemRect.right;
        const requiredSpace = 320; // Width of the absolute div

        // Set position based on available space
        setIsRightPosition(availableSpaceRight > requiredSpace);
    };

    const handleMouseLeave = () => {
        setHoverBlog(null);
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, []);

    // const courses = [
    //     {
    //         id: '1',
    //         name: 'CSCS',
    //         image: '/images/course-image2.webp',
    //         title: 'In publishing and graphic design',
    //         price: '£123.00',
    //         heading: 'NVQ Level 1 Diploma in Plastering',
    //         updated: 'Updated January 10, 2024',
    //         provider: 'Course Provider Sbc Solutions Ltd',
    //         description: 'This certification is designed to provide a comprehensive learning experience.'
    //     },
    //     {
    //         id: '2',
    //         name: 'Security',
    //         image: '/images/course-image3.webp',
    //         title: 'In publishing and graphic',
    //         price: '£123.00',
    //         heading: 'NVQ Level 2 Diploma in Plastering',
    //         updated: 'Updated January 10, 2024',
    //         provider: 'Course Provider Sbc Solutions Ltd',
    //         description: 'This certification is designed to provide a comprehensive learning experience.'
    //     },
    //     {
    //         id: '3',
    //         name: 'Security three',
    //         image: '/images/course-image.webp',
    //         title: 'Level 6 NVQ Diploma in Construction',
    //         price: '£153.00',
    //         heading: 'NVQ Level 3 Diploma in Plastering',
    //         updated: 'Updated January 10, 2024',
    //         provider: 'Course Provider Sbc Solutions Ltd',
    //         description: 'This certification is designed to provide a comprehensive learning experience.'
    //     },
    //     {
    //         id: '4',
    //         name: 'Security three',
    //         image: '/images/course-image2.webp',
    //         title: 'Level 6 NVQ Diploma in Construction',
    //         price: '£153.00',
    //         heading: 'NVQ Level 3 Diploma in Plastering',
    //         updated: 'Updated January 10, 2024',
    //         provider: 'Course Provider Sbc Solutions Ltd',
    //         description: 'This certification is designed to provide a comprehensive learning experience.'
    //     },
    //     {
    //         id: '5',
    //         name: 'Security',
    //         image: '/images/course-image3.webp',
    //         title: 'In publishing and graphic',
    //         price: '£123.00',
    //         heading: 'NVQ Level 2 Diploma in Plastering',
    //         updated: 'Updated January 10, 2024',
    //         provider: 'Course Provider Sbc Solutions Ltd',
    //         description: 'This certification is designed to provide a comprehensive learning experience.'
    //     },
    //     {
    //         id: '6',
    //         name: 'Security',
    //         image: '/images/course-image3.webp',
    //         title: 'In publishing and graphic',
    //         price: '£123.00',
    //         heading: 'NVQ Level 2 Diploma in Plastering',
    //         updated: 'Updated January 10, 2024',
    //         provider: 'Course Provider Sbc Solutions Ltd',
    //         description: 'This certification is designed to provide a comprehensive learning experience.'
    //     },

    // ];

    return (
        <>
            <div className="w-[92%] m-auto md:order-1 min-h-80  ">
                <div className="relative">
                    <div className="course_finder_embla" ref={emblaRef}>
                        <div className="course_finder_embla__container relative">
                            {courses.map((course, index) => (
                                <div key={course.course_id}
                                    className={`course_finder_embla__slide ${hoverBlog === index ? 'z-10' : '-z-10'}  relative group px-2 py-2 rounded-lg flex flex-col justify-between`}
                                    onMouseEnter={(e) => handleMouseEnter(index, e)} onMouseLeave={handleMouseLeave} >
                                    <div>
                                        {loading ? (
                                            <>
                                                <div className='lg:flex justify-between w-full hidden gap-5'>
                                                    <div className='w-full'>
                                                        <Skeleton style={'h-40 w-[100%] bg-neutral-200 mt-2'} />
                                                        <Skeleton style={'h-4 w-[100%] bg-neutral-200 mt-2'} />
                                                        <Skeleton style={'h-4 w-[35%] bg-neutral-200 mt-2'} />
                                                    </div>
                                                </div>
                                                <div className='md:flex lg:hidden justify-between w-full hidden gap-5'>
                                                    <div className='w-full'>
                                                        <Skeleton style={'h-40 w-[100%] bg-neutral-200 mt-2'} />
                                                        <Skeleton style={'h-4 w-[80%] bg-neutral-200 mt-2'} />
                                                        <Skeleton style={'h-4 w-[35%] bg-neutral-200 mt-2'} />
                                                    </div>
                                                </div>
                                                <div className='w-full md:hidden'>
                                                    <Skeleton style={'h-40 w-[100%] bg-neutral-200 mt-2'} />
                                                    <Skeleton style={'h-4 w-[100%] bg-neutral-200 mt-2'} />
                                                    <Skeleton style={'h-4 w-[35%] bg-neutral-200 mt-2'} />
                                                </div>
                                            </>

                                        ) : (
                                            <>
                                                <Image
                                                    src={`${process.env.NEXT_PUBLIC_S3_BASE_STORAGE}courses-images/${course.course_image}`}
                                                    alt={course.course_title}
                                                    className="w-full rounded h-[160px]"
                                                    width={200}
                                                    height={100}
                                                    style={{ objectFit: "cover" }}
                                                />
                                                <p className="my-1 pr-2 text-[19px] font-semibold line-clamp-3">{course.course_title}</p>
                                                <p className="my-1 pr-2 font-[500]">{course.tp_name}</p>
                                                {course.base_course_type === 'session' ? (
                                                    <p className="text-lg font-bold">
                                                        <span className="font-[200] text-sm">From</span> {course.session_price}
                                                        <span className="font-normal text-sm text-gray-500"> All inc</span>
                                                    </p>
                                                ) : (
                                                    <p className="text-lg font-bold">
                                                        <span className="font-[200] text-sm">From</span> {course.enquire_price}
                                                    </p>
                                                )}
                                            </>
                                        )}
                                    </div>

                                    <div
                                        className={`group-hover:block ${isRightPosition ? 'left-full' : '-left-[320px]'} hidden z-50 absolute h-auto w-[320px] top-0 left-0 bg-white border px-4 py-5 rounded-lg shadow-lg`}
                                    >
                                        <p className="text-lg font-bold">{course.course_title}</p>
                                        <div className="flex justify-start">
                                            {/* <Image src={`${process.env.NEXT_PUBLIC_S3_BASE_STORAGE}provider-images/${course.tp_comp_logo}`} 
                                                alt="..." width={20} height={20} className="w-10 mr-1" /> */}
                                            <div>
                                                <p className="text-sm">Course provider <strong>{course.tp_name}</strong></p>
                                                {course.tp_total_students != "null" && <p className="text-sm">{course.tp_total_students} Learner trained</p>}
                                            </div>
                                        </div>
                                        <p className="text-sm pt-3 pb-5">{course.course_short_des}</p>
                                        <Link
                                            href={`course/${course.course_url}`}
                                        // href={`course/${course.title.toLowerCase().replace(/\s+/g, '-')}`}
                                        >
                                            <p className="bg-[#e25d15] w-full text-center rounded py-2 text-white text-lg font-bold">
                                                View Details
                                            </p>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Carousel Navigation Buttons */}
                    <button
                        aria-label="Previous"
                        className="course_finder_embla__prev absolute md:left-[-20px] left-[-10px] 
                         top-[50%] transform -translate-y-1/2 text-white bg-black hover:text-primary 
                         p-2 rounded-full z-[9999]"
                        onClick={scrollPrev}
                    >
                        <GrFormPrevious className="text-3xl" />
                    </button>

                    <button
                        aria-label="Next"
                        className="course_finder_embla__next absolute md:right-[-20px] right-[-10px] 
                         top-[50%] transform -translate-y-1/2 text-white bg-black hover:text-primary 
                         p-2 rounded-full z-[9999]"
                        onClick={scrollNext}
                    >
                        <MdNavigateNext className="text-3xl" />
                    </button>
                </div>
            </div>
        </>
    );


};

export default CourseFinderSlider;
