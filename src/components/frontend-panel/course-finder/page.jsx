'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { IoMdClose } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import HorizontalCourseCards from '@/components/global/HorizontalCourseCards';
import Filters from './Filters';
import FinderFAQs from './FinderFAQs';
import FeatureBox from '@/components/global/FeatureBox';
import CourseFinderSlider from './courseFinderCrousel';
import Pagination from '../../global/pagination/pagination';
import Skeleton from '@/components/global/Skeletons/Skeleton';


const CourseFinder = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, []);

    return (
        <div className='container mx-auto px-5 md:px-0'>
            {/* banner area */}
            <div className='banner py-10'>
                <div>
                    {loading ? (
                        <>
                            <Skeleton style={"h-8 md:h-12 w-[70%] md:w-[30%] bg-neutral-200"} />
                            <Skeleton style={"h-4 md:h-6 w-[30%] md:w-[20%] bg-neutral-200 mt-5"} />
                        </>
                    ) : (
                        <>
                            <h4 className='text-xl md:text-3xl font-semibold mb-5'>Accounting & Finance Training Courses - Hurak</h4>
                            <ul>
                                <li>
                                    <Link href="#" className='px-4 py-2 rounded-full bg-gray-100 hover:line-through'>Accounting and finance <IoMdClose className='inline-block ml-1' /> </Link>
                                </li>
                            </ul>
                        </>
                    )}

                </div>
                <div className='mt-5'>
                    <h4 className='text-xl md:text-3xl font-semibold mb-5'>Find the Right</h4>
                    <div className='relative'>
                        <CiLocationOn className='absolute top-3 left-3 text-lg' />
                        <input type='text' className='w-full border border-gray-300 p-2 shadow-md px-10 rounded-md' placeholder='Address or placeholder' />
                    </div>
                </div>
            </div>
            {/* popular courses */}
            <div className='mb-10'>
                <h4 className='text-2xl font-semibold mb-5'>Popular Courses</h4>
                {/* <CourseFinderSlider /> */}
                {/* <div className='border-t mt-5 pt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 md:gap-5'>
                <VerticleCourseCards idx={0} image="/images/sia-card.webp" title="SIA Door Supervisor Training Course" provider="Tutorak" price="99.99"/>
                <VerticleCourseCards idx={1} image="/images/sia-card.webp" title="SIA Door Supervisor Training Course" provider="Tutorak" price="99.99"/>
                <VerticleCourseCards idx={2} image="/images/sia-card.webp" title="SIA Door Supervisor Training Course" provider="Tutorak" price="99.99"/>
                <VerticleCourseCards idx={3} image="/images/sia-card.webp" title="SIA Door Supervisor Training Course" provider="Tutorak" price="99.99"/>
                <VerticleCourseCards idx={4} image="/images/sia-card.webp" title="SIA Door Supervisor Training Course" provider="Tutorak" price="99.99"/>
            </div> */}
            </div>
            {/* featured courses */}
            <div className='py-5'>
                <h4 className='font-semibold text-2xl mb-5'>Featured Courses</h4>
                <div className='border p-5 bg-[#F8F9FA]'>
                    <FeatureBox />
                </div>
            </div>
            {/* sorting filters */}
            <div className='filters relative'>
                <label className='absolute left-3 top-2 text-sm font-semibold'>Sort by</label>
                <select className='w-auto md:w-60 border border-gray-300 shadow-md p-2 pt-8 rounded-md'>
                    <option value="Most popular">Most popular</option>
                    <option value="Recently added">Recently added</option>
                    <option value="Lowest price">Lowest price</option>
                    <option value="Higest price">Higest price</option>
                </select>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 py-10">
                <div className="col-span-1 border-t">
                    {/* <FilterBar /> */}
                    <Filters />
                </div>
                <div className="col-span-3">
                    <HorizontalCourseCards />
                    {/* <HorizontalCourseCards />
                    <HorizontalCourseCards /> */}

                    <div className=' text-center flex justify-center'>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 py-10 border-t'>
                <div>
                </div>
                <div className='col-span-3'>
                    <h4 className='font-semibold text-2xl mb-5'>General FAQ's</h4>
                    <FinderFAQs />
                </div>
            </div>
        </div>
    )
}

export default CourseFinder;