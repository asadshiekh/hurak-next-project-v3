"use client"
import React, { useState, useEffect } from 'react'
import Skeleton from '@/components/global/Skeletons/Skeleton';

const TestPrepResources = ({ params }) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, []);

    const resources = [
        {
            title: 'SMSTS Mock Test',
            url: '/smsts-mock-test'
        },
        {
            title: 'SMSTS Mock Test 1',
            url: '/smsts-mock-test'
        },
        {
            title: 'SMSTS Mock Test 2',
            url: '/smsts-mock-test'
        },
        {
            title: 'SMSTS Mock Test 3',
            url: '/smsts-mock-test'
        },
        {
            title: 'SMSTS Mock Test 3',
            url: '/smsts-mock-test'
        },
    ]
    return (
        <>

            <div className='py-3'>
                <div className='border rounded-md bg-[#fbfbf8] px-3 py-6' >
                    <div>
                        {loading ? (
                            <Skeleton style={'h-10 w-[80%] md:w-[50%] bg-neutral-200 mt-2'} />
                        ) : (
                            <h1 className=' text-3xl'>More Tests & Resources</h1>
                        )}
                    </div>
                    <ul className="list-none  py-3">
                        {resources.map((item, index) => (
                            <li key={index} className="flex items-center mb-2 pl-2">
                                <span className="w-2 h-2 bg-black rounded-full mr-2 flex items-center justify-center"></span>
                                {loading ? (
                                    <Skeleton style={'h-4 w-[50%] bg-neutral-200'} />
                                ) : (
                                    <a href={item.url} className="hover:cursor-pointer text-[#007bff]   leading-relaxed">
                                        {item.title}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    )
}

export default TestPrepResources