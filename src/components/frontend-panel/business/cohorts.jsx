"use client";
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import BusinessSidebar from "./sidebar";
import { RiExternalLinkLine } from "react-icons/ri";
import Skeleton from '@/components/global/Skeletons/Skeleton';

const Cohort = () => {
    const courses = [
        {
            id: "1", date: "02", month: "Sep", courseName: "APLH Personal Licence Training Course", plan: "saver", location: "London - (East) (Canary Wharf)", status: "Classroom",
        },
        {
            id: "2", date: "24", month: "Sep", courseName: "Security Courses", plan: "saver", location: "London - (East) (Canary Wharf)", status: "Classroom",
        },
        {
            id: "3", date: "12", month: "Aug", courseName: "SMSTS", plan: "saver", location: "London - (East) (Canary Wharf)", status: "Live",
        },
        {
            id: "4", date: "30", month: "Aug", courseName: "lEVEL 2 Personal Licence Holders", plan: "saver", location: "London - (East) (Canary Wharf)", status: "Live",
        },
        {
            id: "5", date: "12", month: "Jan", courseName: "Traffic Banksman (Traffic Marshal) Training Course ", plan: "saver", location: "London - (East) (Canary Wharf)", status: "Self-placed",
        },
        {
            id: "6", date: "02", month: "Sep", courseName: "Fire Marshal (Fire Warden) Course", plan: "saver", location: "London - (East) (Canary Wharf)", status: "Self-placed",
        },
        {
            id: "7", date: "02", month: "Feb", courseName: "Level 2 Health and Safety in the Workplace", plan: "saver", location: "London - (East) (Canary Wharf)", status: "Self-placed",
        },

    ]
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, []);

    return (
        <div>
            <div className="flex mb-[150px]">
                <div className="w-auto border border-r ">
                    <BusinessSidebar />
                </div>
                <div className="w-full overflow-x-auto">
                    <div className=" px-3 mt-5">
                        <div className="text-center">
                            <p className="text-3xl font-[700]"> Courses</p>
                        </div>
                        <div className="md:w-[22%] mt-4">
                            <select name="" id="" className="w-full border border-black font-[400] outline-none p-2 rounded text-gray-700">
                                <option>All Courses</option>
                                <option>Classroom course</option>
                                <option>Online (live) courses</option>
                                <option>Online (self-placed) courses</option>
                                <option>All Tests</option>
                            </select>
                        </div>
                        {/* All Courses Start*/}
                        <div className="flex justify-between items-center pb-3 text-lg font-[500] mt-8 px-3 border-b-2">
                            <p className="">All Courses</p>
                            <p>Actions</p>
                        </div>
                        {loading ? (
                            [1, 2, 3, 4, 5].map((item, index) => (
                                <>
                                    <div key={index} className="flex justify-between items-start pt-4 pb-6 px-3 border-b-2">
                                        <div className="flex items-center w-full">
                                            <div className="mr-5 w-[5%]">
                                                <Skeleton style={'h-20 w-[100%] bg-neutral-200'} />
                                            </div>
                                            <div className="w-[90%]">
                                                <Skeleton style={'h-6 w-[80%] bg-neutral-200'} />
                                                <Skeleton style={'h-4 w-[5%] bg-neutral-200 mt-2'} />
                                                <Skeleton style={'h-4 w-[60%] bg-neutral-200 mt-2'} />
                                            </div>
                                            <div>
                                                <Link href={'/business/cohort-details/course/classroom/5404'}>
                                                    <RiExternalLinkLine className="text-primary text-[18px] cursor-pointer" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))
                        ) : (
                            courses.map((course, index) => (
                                <div key={index} className="flex justify-between items-start pt-4 pb-6 px-3 border-b-2">
                                    <div className="flex items-center">
                                        <div className="mr-5">
                                            <p className="text-lg text-danger">{course.month}</p>
                                            <p className="font-[500] text-xl">{course.date}</p>
                                        </div>
                                        <div className="relative">
                                            <p className="text-xl text-gray-700">{course.courseName} <span className="text-sm">
                                                {course.status === 'Classroom' ? (
                                                    <button className="bg-gray-500  font-[500] text-white rounded px-1 py-0">{course.status}</button>
                                                ) : course.status === 'Live' ? (
                                                    <button className="bg-black  font-[500] text-white rounded px-1 py-0">{course.status}</button>
                                                ) : course.status === 'Self-placed' ? (
                                                    <button className="bg-[#17a2b8]  font-[500] text-white rounded px-1 py-0">{course.status}</button>
                                                ) : null}
                                            </span>
                                            </p>
                                            <p className="text-md text-gray-700">{course.location}</p>
                                            <p className="text-md text-gray-700">Mon 02nd Sep 2024 - Mon 02nd Sep 2024 from 10:45 AM to 3:45 PM</p>
                                        </div>
                                    </div>
                                    <div>
                                        <Link href={'/business/cohort-details/course/classroom/5404'}>
                                            <RiExternalLinkLine className="text-primary text-[18px] cursor-pointer" />
                                        </Link>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cohort;