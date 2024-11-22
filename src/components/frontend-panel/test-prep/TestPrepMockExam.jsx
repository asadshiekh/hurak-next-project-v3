"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { LiaUserGraduateSolid, LiaClock, LiaPercentageSolid } from "react-icons/lia";
import Skeleton from '@/components/global/Skeletons/Skeleton';

const TestPrepMockExam = ({ params }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, []);

    const MockExam = [
        {
            title: 'SMSTS Mock Test 1',
            percentage: '80',
            duration: '00:40:00'
        },
        {
            title: 'SMSTS Mock Test 2',
            percentage: '80',
            duration: '00:40:00'
        },
        {
            title: 'SMSTS Mock Test 3',
            percentage: '80',
            duration: '00:40:00'
        },
        {
            title: 'SMSTS Mock Test 4',
            percentage: '80',
            duration: '00:40:00'
        },
        {
            title: 'SMSTS Mock Test 5',
            percentage: '80',
            duration: '00:40:00'
        },
    ]
    return (
        <>

            <div className='py-5' id='takeTest'>
                <div>
                    {loading ? (
                        <Skeleton style={'h-10 w-[70%] bg-neutral-200 mt-2'} />
                    ) : (
                        <h1 className='text-3xl'>2024 CSCS Green Card Mock Exam Test</h1>
                    )}
                </div>
                <div className='w-full grid gap-x-8 gap-y-4 grid-cols-1 lg:grid-cols-2  py-8'>
                    {MockExam.map((item, index) => (
                        loading ? (
                            <Skeleton style={'h-28 w-[100%] bg-neutral-200 mt-2'} />
                        ) : (
                            <>
                                <div key={index} className='group border shadow-lg px-2 py-3 hover:cursor-pointer overflow-hidden rounded relative '>
                                    <p className='text-2xl'>{item.title}</p>
                                    <div className='flex justify-start  items-center text-[#81807e]'>
                                        <LiaUserGraduateSolid />
                                        <p className='pl-2'>{item.title}</p>
                                    </div>
                                    <div className='flex justify-start  items-center text-[#81807e]'>
                                        <LiaPercentageSolid />
                                        <p className='pl-2'>{item.percentage}%</p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className='flex justify-center  items-center text-[#81807e]'>
                                            <LiaClock />
                                            <p className='pl-2'>{item.duration}</p>
                                        </div>
                                        <p className='bg-[#c0657d] px-2 rounded-md text-white text-`
                                '>Take test</p>
                                    </div>
                                    <Link href={`/mock-exams-test/${item.title.toLowerCase().replace(/\s+/g, '-')}`} className='text-[#dc3545] group-hover:flex hidden font-bold absolute w-full h-full top-0 left-0 justify-center items-center bg-[rgba(255,255,255,0.7)]'>
                                        <p className='text-[#dc3545] text-xl font-bold'>Take Test</p>
                                    </Link>
                                </div>
                            </>
                        )
                    ))}
                </div >
            </div >

        </>
    )
}

export default TestPrepMockExam