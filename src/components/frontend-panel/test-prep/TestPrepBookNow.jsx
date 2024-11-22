import ButtonFill from '@/components/global/butttons/ButtonFill'
import Link from 'next/link'
import React from 'react'
const TestPrepBookNowCourse = () => {

    return (
        <>
            <div className=" w-full bg-[#f1f1f1] max-h-96 py-5 sm:py-0" id='bookCourse'>
                <div className="flex justify-start sm:justify-center   max-w-[1150px] mx-auto pt-2 px-6 lg:px-0">
                    <div className='w-12/12 sm:w-6/12 flex flex-col justify-center'>
                        <h1 className='font-bold text-4xl pb-4 md:text-5xl text-[#0f7c90]'>Ready to book your course ?</h1>
                        <p>Book your course now with one of our trusted providers and have the flexibility to choose between in-class, Zoom, or self-paced online learning options.</p>
                        <div className='my-6 flex justify-start'>
                            <div>
                                <Link href={"/course/cscs-green-card-labourers-card-course"}><ButtonFill color={"danger"} text={"Book Now"} /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-6/12 text-center hidden sm:block">
                        <img className="h-[370px] inline" src="/images/booknow-section-img.webp" alt="" />
                    </div>

                </div>
            </div>
        </>
    )
}

export default TestPrepBookNowCourse