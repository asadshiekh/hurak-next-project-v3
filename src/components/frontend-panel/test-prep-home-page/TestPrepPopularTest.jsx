"use client"
import React, { useState, useEffect } from 'react'
import Skeleton from '@/components/global/Skeletons/Skeleton';
import ButtonFill from '@/components/global/butttons/ButtonFill';
import Link from 'next/link';

const TestPrepPopularTest = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, []);

    const TestPrepTags = [
        {
            title: 'CSCS Mock Test',
            url: 'test-prep/cscs-mock-test',
        },
        {
            title: 'CSCS',
            url: 'test-prep/cscs-mock-test-1',
        },
        {
            title: 'CSCS',
            url: 'test-prep/cscs-mock-test-1',
        },
        {
            title: 'CSCS Mock Test 2',
            url: 'test-prep/cscs-mock-test-2',
        },
        {
            title: 'CSCS Mock Test 3 CSCS Mock Test 3',
            url: 'test-prep/cscs-mock-test-3',
        },
        {
            title: 'CSCS Mock Test 4',
            url: 'test-prep/cscs-mock-test-4',
        },
        {
            title: 'CSCS Mock Test 5',
            url: 'test-prep/cscs-mock-test-5',
        },
        {
            title: 'CSCS Mock Test 6',
            url: 'test-prep/cscs-mock-test-6',
        },
        {
            title: 'CSCS Mock Test 7',
            url: 'test-prep/cscs-mock-test-7',
        },
    ];

    return (
        <div className="w-full my-12">
            <div className="container mx-auto">
                <div className="flex md:justify-center">
                    <div className='w-full px-3 lg:px-0'>
                        {loading ? (
                            <div className='flex justify-center items-center mb-5'>
                                <Skeleton style={'h-12 w-[80%] lg:w-[50%] bg-neutral-200 mt-2'} />
                            </div>
                        ) : (
                            <h3 className='text-[1.75rem] mb-7 text-center'>Explore Popular Tests on Hurak</h3>

                        )}
                        <div className='flex md:justify-center flex-wrap'>
                            {loading ? (
                                <div className='flex md:justify-center flex-wrap mb-5 w-full '>
                                    {TestPrepTags.map((item, index) => (
                                        <Skeleton key={index} style={'h-10 w-[30%] md:w-[20%] lg:w-[15%] bg-neutral-200 mt-2 rounded-2xl py-2 px-4 mr-2 mb-4'} />
                                    ))}
                                </div>
                            ) : (
                                TestPrepTags.map((item, index) => (
                                    // <a
                                    //     key={index}
                                    //     href={item.url}
                                    //     className='rounded-[50px] bg-[#0f7c90] text-white hover:text-black py-2 px-4 mr-2 mb-4'
                                    // >
                                    //     {item.title}
                                    // </a>

                                    <div className='mr-2 mb-4'>
                                        <Link href={item.url} key={index}>
                                            <ButtonFill color={"primary"} Rounded={"full"} text={"Send Request"} />
                                        </Link>
                                    </div>

                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestPrepPopularTest;
