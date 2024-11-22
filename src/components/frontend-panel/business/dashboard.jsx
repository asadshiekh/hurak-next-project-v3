"use client";

import React, { useEffect, useState } from 'react';
import BusinessSidebar from "./sidebar";
import { LiaBookReaderSolid, LiaBookOpenSolid, LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { IoCalendarOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { LuBookMinus } from "react-icons/lu";
import Skeleton from '@/components/global/Skeletons/Skeleton';

const DashboardBusiness = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, []);

    const courses = [
        {
            id: "1",
            name: " APLH Personal Licence Training Course",
            type: "classroom",
        },
        {
            id: "2",
            name: "  Level 2 Personal Licence Holders",
            type: "classroom",
        },
        {
            id: "3",
            name: " SMSTS",
            type: "Live",
        },
        {
            id: "4",
            name: " Traffic Banksman (Traffic Marshal) Training Course	",
            type: "Live",
        },
        {
            id: "5",
            name: "  Level 2 Health and Safety in the Workplace	",
            type: "self-placed",
        },
        {
            id: "6",
            name: "  Fire Marshal (Fire Warden) Course	",
            type: "self-placed",
        },
        {
            id: "7",
            name: " Security Course",
            type: "self-placed",
        }
    ]

    const results = [
        {
            id: "1",
            name: "Haseeb Maqsood",
            email: "haseeb.maqsood@collaborak.com",
            result: 'Pass',
        },
        {
            id: "2",
            name: "Haseeb Maqsood",
            email: "haseeb.maqsood@collaborak.com",
            result: 'Fail',
        },
        {
            id: "2",
            name: "Haseeb Maqsood",
            email: "haseeb.maqsood@collaborak.com",
            result: 'Pass',
        },
        {
            id: "2",
            name: "Haseeb Maqsood",
            email: "haseeb.maqsood@collaborak.com",
            result: 'Pass',
        }
    ]
    return (
        <>
            <div className="flex mb-[100px] ">
                <div className="w-auto border border-r ">
                    <BusinessSidebar />
                </div>
                <div className="w-full overflow-x-auto">
                    <div className="px-3 mt-5">
                        <div className="text-center">
                            <p className="text-3xl font-[700]"> Dashboard</p>
                        </div>

                        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 my-6">
                            <div className="border rounded text-[#004085] bg-[#cce5ff]">
                                <div className="flex items-start p-4">
                                    <div className="text-[30px] mr-2 mt-1">
                                        <LiaBookReaderSolid />
                                    </div>
                                    <div>
                                        <p className="text-2xl">Total Learners</p>
                                        <p className="text-lg">10</p>
                                    </div>
                                </div>
                            </div>
                            <div className="border rounded text-[#0c5460] bg-[#d1ecf1]">
                                <div className="flex items-start p-4">
                                    <div className="text-[30px] mr-2 mt-1">
                                        <IoCalendarOutline />
                                    </div>
                                    <div>
                                        <p className="text-2xl">Total Cohorts</p>
                                        <p className="text-lg">7</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border rounded text-[#856404] bg-[#fff3cd]">
                                <div className="flex items-start p-4">
                                    <div className="text-[30px] mr-2 mt-1">
                                        <LiaBookOpenSolid />
                                    </div>
                                    <div>
                                        <p className="text-2xl">Total Courses</p>
                                        <p className="text-lg">7</p>
                                    </div>
                                </div>
                            </div>

                            <div className="border rounded text-[#155724] bg-[#d4edda]">
                                <div className="flex items-start p-4">
                                    <div className="text-[30px] mr-2 mt-1">
                                        <LiaFileInvoiceDollarSolid />
                                    </div>
                                    <div>
                                        <p className="text-2xl">Total Licences</p>
                                        <p className="text-lg">0</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 my-4">
                            <div className="border rounded  p-3 pb-8 overflow-x-auto">
                                <table className="min-w-full ">
                                    <thead>
                                        <tr className="bg-[#ECECEC] text-sm font-[500] ">
                                            <th className="font-[600] text-start text-[14px] px-6 py-4">Recently Unassigned Licences</th>
                                            <th className="text-primary text-end font-[600] text-[14px] px-3 py-4 hover:text-black">View all</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-gray-700">

                                        {loading == true ? (
                                            [1, 2, 3, 4].map((item, index) => (

                                                <tr key={index} className="border-t odd:bg-white even:bg-[#ECECEC] hover:bg-[#ECECEC] cursor-pointer">
                                                    <td className="px-3 py-4">
                                                        <Skeleton style={'h-4 w-full bg-neutral-200'} />
                                                    </td>
                                                    <td className="px-3 py-4">
                                                        <Skeleton style={'h-4 w-full bg-neutral-200 '} />
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (

                                            [1, 2, 3, 4].map((item, index) => (

                                                <tr key={index} className="border-t odd:bg-white even:bg-[#ECECEC] hover:bg-[#ECECEC] cursor-pointer">
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-start space-x-2">
                                                            <span className="text-md"><LuBookMinus /></span>
                                                            <div>
                                                                <p>Haseeb Maqsood</p>
                                                            </div>
                                                        </div>

                                                    </td>
                                                    <td className="px-6 py-4 text-center">Premium</td>
                                                </tr>
                                            ))
                                        )
                                        }

                                    </tbody>

                                </table>
                            </div>
                            <div className="border rounded  p-3 pb-8 overflow-x-auto">
                                <table className="min-w-full ">
                                    <thead>
                                        <tr className="bg-[#ECECEC] text-left text-sm font-[500] ">
                                            <th className="px-6 py-4">Recent Certificates</th>
                                            <th className="px-6 py-4">Issue Date</th>
                                            <th className="px-6 py-4">Expiry Date</th>
                                        </tr>
                                    </thead>

                                    <tbody className="text-sm text-gray-700">

                                        {loading == true ? (
                                            [1, 2, 3, 4].map((item, index) => (

                                                <tr key={index} className="border-t odd:bg-white even:bg-[#ECECEC] hover:bg-[#ECECEC] cursor-pointer">
                                                    <td className="px-6 py-4">
                                                        <Skeleton style={'h-2 w-full bg-neutral-200'} />
                                                        <Skeleton style={'h-2 w-full bg-neutral-200 mt-1'} />
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <Skeleton style={'h-2 w-full bg-neutral-200 '} />
                                                        <Skeleton style={'h-2 w-full bg-neutral-200 mt-1'} />
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <Skeleton style={'h-2 w-full bg-neutral-200 '} />
                                                        <Skeleton style={'h-2 w-full bg-neutral-200 mt-1'} />
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (

                                            [1, 2, 3, 4].map((item, index) => (

                                                <tr key={index} className="border-t odd:bg-white even:bg-[#ECECEC] hover:bg-[#ECECEC] cursor-pointer">
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-start space-x-2">
                                                            <span className="text-md"><FiUser /></span>
                                                            <div>
                                                                <p>Haseeb Maqsood</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start space-x-2">
                                                            <span className="text-md"><MdOutlineMail /> </span>
                                                            <div>
                                                                <p className="text-gray-500">haseeb.maqsood@collaborak.com</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">September 20, 2024</td>
                                                    <td className="px-6 py-4">September 20, 2027</td>
                                                </tr>
                                            ))
                                        )
                                        }

                                    </tbody>

                                </table>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-between my-4">

                            <div className="lg:w-[65%] w-full border rounded  pb-8 p-3 overflow-x-auto">
                                <table className="min-w-full ">
                                    <thead>
                                        <tr className="bg-[#ECECEC] text-sm font-[500] ">
                                            <th className="font-[600] text-start text-[14px] px-6 py-4">Recently Booked Courses</th>
                                            <th className="text-primary text-end font-[600] text-[14px] px-3  py-4 hover:text-black">View all</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-gray-700">
                                        {loading == true ? (
                                            [1, 2, 3, 4, 5].map((item, index) => (

                                                <tr key={index} className="border-t odd:bg-white even:bg-[#ECECEC] hover:bg-[#ECECEC] cursor-pointer">
                                                    <td className="px-3 py-4">
                                                        <Skeleton style={'h-4 w-full bg-neutral-200'} />
                                                    </td>
                                                    <td className="px-3 py-4">
                                                        <Skeleton style={'h-4 w-full bg-neutral-200 '} />
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            courses.map((course, index) => (

                                                <tr key={index} className="odd:bg-white even:bg-[#ECECEC] hover:bg-[#ECECEC] cursor-pointer">
                                                    <td className="px-2 py-3">
                                                        <div className="flex items-start space-x-2">
                                                            <span className="text-md"><LuBookMinus />
                                                            </span>
                                                            <div>
                                                                <p>{course.name}</p>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td className="px-2 py-2 text-end">
                                                        {course.type === 'classroom' ? (
                                                            <button className="px-1 text-white bg-gray-500 rounded font-[600]">{course.type}</button>
                                                        ) : course.type === 'Live' ? (
                                                            <button className="px-1 text-white bg-gray-900 rounded font-[600]">{course.type}</button>
                                                        ) : course.type === 'self-placed' ? (
                                                            <button className="px-1 text-white bg-[#17a2b8] rounded font-[600]">{course.type}</button>
                                                        ) : null}
                                                    </td>
                                                </tr>
                                            ))
                                        )}

                                    </tbody>
                                </table>
                            </div>

                            <div className="lg:w-[33%] w-full border rounded p-3 overflow-x-auto">
                                <table className="min-w-full">
                                    <thead>
                                        <tr className="bg-[#ECECEC] text-sm font-[500] ">
                                            <th className="font-[600] text-start text-[14px] px-3 py-4">Recently Unassigned Licences</th>
                                            <th className="text-primary text-end font-[600] text-[14px] px-3  py-4 hover:text-black">View all</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm text-gray-700">
                                        {loading == true ? (
                                            [1, 2, 3, 4, 5].map((item, index) => (

                                                <tr key={index} className="border-t odd:bg-white even:bg-[#ECECEC] hover:bg-[#ECECEC] cursor-pointer">
                                                    <td className="px-3 py-4">
                                                        <Skeleton style={'h-2 w-full bg-neutral-200'} />
                                                        <Skeleton style={'h-2 w-full bg-neutral-200 mt-1'} />
                                                    </td>
                                                    <td className="px-3 py-4">
                                                        <Skeleton style={'h-4 w-full bg-neutral-200 '} />
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            results.map((res, index) => (
                                                <tr key={index} className="odd:bg-white even:bg-[#ECECEC] hover:bg-[#ECECEC] cursor-pointer">
                                                    <td className="px-2 py-3">
                                                        <div className="flex items-start space-x-2">
                                                            <span className="text-md"><LuBookMinus />
                                                            </span>
                                                            <div>
                                                                <p>{res.name}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-start space-x-2">
                                                            <span className="text-md"><MdOutlineMail />
                                                            </span>
                                                            <div>
                                                                <p>{res.email}</p>
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td className="px-2 py-2 text-end">
                                                        {res.result === 'Pass' ? (
                                                            <button className="px-1 text-white bg-[#28a745] text-xs rounded font-[600]">{res.result}</button>
                                                        ) : res.result === 'Fail' ? (
                                                            <button className="px-1 text-white bg-danger rounded text-xs font-[600]">{res.result}</button>
                                                        ) : null}
                                                    </td>
                                                </tr>
                                            ))
                                        )}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardBusiness;