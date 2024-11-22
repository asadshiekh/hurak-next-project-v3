"use client"
import React, { useState, useEffect } from 'react'
import { GrNext, GrPrevious } from "react-icons/gr";
import Skeleton from '@/components/global/Skeletons/Skeleton';
// import { loadEmoji } from 'next/dist/compiled/@vercel/og/emoji';


const TestPrepAllTest = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 100);
    }, []);

    const popularTest = [
        {
            title: 'SMSTS Mock Test',
            url: 'test-prep/smsts-mock-test'
        },
        {
            title: 'SMSTS Mock Test 1',
            url: 'test-prep/smsts-mock-test'
        },
        {
            title: 'SMSTS Mock Test 2',
            url: 'test-prep/smsts-mock-test'
        },
        {
            title: 'SMSTS Mock Test 3',
            url: 'test-prep/smsts-mock-test'
        },
        {
            title: 'SMSTS Mock Test 3',
            url: 'test-prep/smsts-mock-test'
        },
    ];

    return (
        <div className="w-full pb-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 px-3 lg:px-0 md:grid-cols-3  gap-6">
                    {loading?(
                        popularTest.map((item, index) => (
                            <Skeleton key={index} style={'min-h-[100px] w-[100%] shadow p-4 bg-neutral-200 mt-2'}/>
                        ))
                    ):(
                    popularTest.map((item, index) => (
                        <a href={item.url} key={index} className="border shadow p-4 min-h-[100px] hover:cursor-pointer">
                            <h2 className="font-bold text-lg">
                                <p className="">{item.title}</p>
                            </h2>
                        </a>
                    )) 
                )}
                </div>
                <div className="pt-5">
                    <ul className='flex items-center justify-center text-[#0f7c90] font-bold ' >
                        <li className="h-8 w-8 flex justify-center items-center border rounded-full border-[#0f7c90]"><a href=""><GrPrevious /></a></li>
                        <li className="px-4 py-2 border-[#0f7c90]"><a href="">1</a></li>
                        <li className="px-4 py-2 text-[#000]"><a href="">2</a></li>
                        <li className="px-4 py-2 text-[#000]"><a href="">3</a></li>
                        <li className="h-8 w-8 flex justify-center items-center border rounded-full border-[#0f7c90]"><a href=""><GrNext /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default TestPrepAllTest;
