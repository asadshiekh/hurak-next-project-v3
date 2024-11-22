"use client";

import React, { useState } from 'react';
import { MdArrowForward } from "react-icons/md";

const TestPrepRelativeBlogsAndCourses = ({heading}) => {

    const [isResourcesOpen, setIsResourcesOpen] = useState(false);


    const resources = [
        { title: 'SMSTS Mock Test', url: 'test-prep/smsts-mock-test' },
        { title: 'SMSTS Mock Test 1', url: 'test-prep/smsts-mock-test' },
        { title: 'SMSTS Mock Test 2', url: 'test-prep/smsts-mock-test' },
        { title: 'SMSTS Mock Test 3', url: 'test-prep/smsts-mock-test' },
    ];

    

    const handleToggleResources = () => {
        setIsResourcesOpen(prev => !prev);
    }


    return (
        <>
            <div className='py-3 hidden lg:block'>
                <div className='flex' >
                    <h1 className='font-bold text-[20px] '>
                        <span className='border-b-2 pb-2'>{heading}</span>
                    </h1>
                </div>
                    <ul className='pt-3'>
                        {resources.map((item, index) => (
                            <li key={index} className="flex items-center mb-2 pl-2">
                                <a href={`/${item.url}`} className="hover:cursor-pointer text-[#2aa9c4] leading-relaxed">
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
            </div>
        </>
    );
};

export default TestPrepRelativeBlogsAndCourses;
