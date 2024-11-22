'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FiLayers } from "react-icons/fi";
import { HiBars3 } from "react-icons/hi2";
import { LuUser2 } from "react-icons/lu";
import { LiaBookOpenSolid, LiaCashRegisterSolid } from "react-icons/lia";
import { CgCloseR } from "react-icons/cg";


const BusinessSidebar = () => {
    const pathname = usePathname();
    // const [isOpenCourses, setIsOpenCourses] = useState(true);
    // const toggleContentCourses = () => setIsOpenCourses(!isOpenCourses);
    const [isOpenCourses, setIsOpenCourses] = useState(true);
    useEffect(() => {
        const updateIsOpenCourses = () => {
            // Set isOpenCourses to true for large screens (768px or above) and false for mobile screens
            setIsOpenCourses(window.innerWidth >= 768);
        };
        // Run the function once to set the initial state
        updateIsOpenCourses();
        // Add event listener to update state on resize
        window.addEventListener('resize', updateIsOpenCourses);
        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', updateIsOpenCourses);
    }, []);

    const toggleContentCourses = () => setIsOpenCourses(!isOpenCourses);

    return (
        <div className='relative'>

            {/* Sidebar with large screen */}
            <div className={`absolute  ${isOpenCourses ? 'left-[250px] top-[5px]' : 'left-[60px]'} `}>
                {isOpenCourses ? (
                    <span
                        className="ml-2 text-lg text-primary cursor-pointer mt-1 border px-[9px] pb-[2px] rounded border-primary"
                        onClick={toggleContentCourses}>
                        x
                    </span>
                ) : (
                    <HiBars3
                        className="ml-2 text-3xl text-primary cursor-pointer mt-1"
                        onClick={toggleContentCourses} />
                )}
                {/* <HiBars3 className="ml-2 text-3xl text-primary cursor-pointer mt-1" onClick={toggleContentCourses} /> */}
            </div>

            {/* <div className="flex  hidden md:block"> */}
            <div className="flex">
                <div className="">
                    <Link href="/business/dashboard ">
                        <div className={`flex items-center w-full text-left text-lg font-[400] px-4 pl-4 py-2 ${isOpenCourses ? 'pr-[130px]' : 'pr-0'
                            } ${pathname === '/business/dashboard' ? 'bg-primary text-white' : 'hover:text-primary'}`}>
                            <FiLayers className={`mr-2  ${isOpenCourses ? 'text-sm' : 'text-xl my-2'}`} />
                            {isOpenCourses && (
                                <button> Dashboard </button>
                            )}
                        </div>
                    </Link>

                    <Link href="/business/learners">
                        <div className={`flex items-center w-full text-left px-4 text-lg font-[400] py-2 ${pathname == '/business/learners' ? 'bg-primary text-white' : 'hover:text-primary'}`}>
                            <LuUser2 className={`mr-2  ${isOpenCourses ? 'text-sm' : 'text-xl my-2'}`} />
                            {isOpenCourses && (
                                <button>Learners</button>
                            )}
                        </div>
                    </Link>

                    <Link href="/business/cohorts">
                        <div
                            className={`flex items-center w-full text-left px-4 text-lg font-[400] py-2 
                        ${['/business/cohorts', '/business/cohort-details/course/classroom/5404'].includes(pathname) ? 'bg-primary text-white' : 'hover:text-primary'}`}>
                            <LiaBookOpenSolid className={`mr-2 ${isOpenCourses ? 'text-sm' : 'text-xl my-2'}`} />
                            {isOpenCourses && <button>Courses</button>}
                        </div>
                    </Link>

                    <Link href={"/business/purchase"}>
                        <div className={`flex items-center w-full text-left px-4 text-lg font-[400] py-2
                        ${['/business/purchase', '/business/receipt/135654782'].includes(pathname) ?
                                //  ${pathname == '/business/purchase' ? 
                                'bg-primary text-white' : 'hover:text-primary'}`}>
                            <LiaCashRegisterSolid className={`mr-2  ${isOpenCourses ? 'text-sm' : 'text-xl my-2'}`} />
                            {isOpenCourses && (
                                <button>Purchase history</button>
                            )}
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default BusinessSidebar;
