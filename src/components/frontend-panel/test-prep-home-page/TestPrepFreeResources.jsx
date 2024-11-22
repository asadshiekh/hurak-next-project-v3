"use client"
import React, { useState, useEffect } from 'react'
import { FiCheckCircle } from "react-icons/fi";
import Skeleton from '@/components/global/Skeletons/Skeleton';

const TestPrepFreeResources = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 100);
    }, []);

    const popularTest = [
        {
            title: 'Learn creative skills to achieve your personal and professional goals.',
            url: 'https://hurak.com/test-prep/smsts-mock-test'
        },
        {
            title: 'Tune in and level up at your own pace.',
            url: 'https://hurak.com/test-prep/smsts-mock-test'
        },
        {
            title: 'Free mock exams, handbooks and more',
            url: 'https://hurak.com/test-prep/smsts-mock-test'
        }
        
    ];

    return (
        <div className="w-full py-11 mb-24 bg-[#f9f9f9]">
            <div className="container mx-auto">
                <div className='md:flex px-3  lg:px-0'>
                    <div className=' min-w-[400px] md:max-w-[300px] lg:min-w-[540px] max-w-[540px]  flex  items-center'>
                        {loading?(
                            <div className='w-full flex justify-center md:justify-start items-center '>
                                <Skeleton style={'h-14 w-[80%] bg-neutral-200 mt-2 '}/>
                            </div>
                        ):(
                            <h1 className='text-3xl md:text-5xl md:pr-10 text-center md:text-start leading-10'>Revise with our free Test Prep Resources</h1>
                        )}
                    </div>
                    <div className="px-3 md:px-0 pt-3 md:pt-0 text-wrap w-full">
                            {popularTest.map((item, index) => (
                                <div key={index} className="">
                                    <h2 className="flex font-bold w-full">
                                        <p className='text-[#0f7c90] text-[20px] pt-1 pr-2'><FiCheckCircle /></p>
                                        {loading?(
                                            <div className='w-full'>
                                                <Skeleton style={'h-6 w-[70%] bg-neutral-200 mt-2'}/>
                                            </div>
                                        ):(
                                        <p  className=" pb-1 text-[22px]"> {item.title}</p>
                                    )}
                                    </h2>
                                </div>
                            ))}                        
                    </div> 
                </div>                
            </div>
        </div>
    );
}

export default TestPrepFreeResources;
