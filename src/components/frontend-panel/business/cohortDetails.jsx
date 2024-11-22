"use client";

import React, { useEffect, useState } from 'react';
import BusinessSidebar from "./sidebar";
import { IoCheckmark, IoCallOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { CiAt } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import { LiaClipboardListSolid, LiaCertificateSolid, LiaSignInAltSolid } from "react-icons/lia";
import Link from "next/link";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import Skeleton from '@/components/global/Skeletons/Skeleton';


const CohortDetails = () => {
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
                    <div className="px-3 mt-5">
                        <div className="text-center">
                            <p className="text-3xl font-[700]"> Course Details</p>
                        </div>
                        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 mt-10 md:mx-10">
                            <div>
                                <div className="flex items-center">
                                    <div>
                                        <div className="flex items-center w-[130px]">
                                            <FaRegCalendarAlt />
                                            <p className="text-md ml-2 font-[500]">Course</p>
                                        </div>
                                    </div>
                                    <div className=" text-md">
                                        <p>APLH Personal Licence Training Course</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <div>
                                        <div className="flex items-center w-[130px]">
                                            <LuClock />
                                            <p className="text-md ml-2 font-[500]">Category</p>
                                        </div>
                                    </div>
                                    <div className=" text-md">
                                        <p>Hospitality</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 mt-6 md:mx-10">
                            <div>
                                <div className="flex items-center">
                                    <div>
                                        <div className="flex items-center w-[130px]">
                                            <FaRegCalendarAlt />
                                            <p className="text-md ml-2 font-[500]">Date/s</p>
                                        </div>
                                    </div>
                                    <div className=" text-md">
                                        <p>2nd Sep 2024 - 2nd Sep 2024</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <div>
                                        <div className="flex items-center w-[130px]">
                                            <LuUser2 />
                                            <p className="text-md ml-2 font-[500]">Venue</p>
                                        </div>
                                    </div>
                                    <div className=" text-md">
                                        <p>London - (East) (Canary Wharf)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 mt-6 md:mx-10 mb-20">
                            <div>
                                <div className="flex items-center">
                                    <div>
                                        <div className="flex items-center w-[130px]">
                                            <LuClock />
                                            <p className="text-md ml-2 font-[500]">Timings</p>
                                        </div>
                                    </div>
                                    <div className=" text-md">
                                        <p>10:45 AM - 3:45 PM</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="grid lg:grid-cols-6 md:grid-cols-2 gap-8 mt-10 ">
                            <div className="flex justify-between items-center border border-black rounded pl-2 pr-1">
                                <input type="text" placeholder="Learner first name" className="outline-none" />
                                <div className=" cursor-pointer hover:text-white hover:bg-black rounded px-2 my-[3px] py-2 ">
                                    <IoCheckmark className="" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center border border-black rounded pl-2 pr-1">
                                <input type="text" placeholder="Learner last name" className="outline-none" />
                                <div className=" cursor-pointer hover:text-white hover:bg-black rounded px-2 my-[3px] py-2 ">
                                    <IoCheckmark className="" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center border border-black rounded pl-2 pr-1">
                                <input type="text" placeholder="Learner email" className="outline-none" />
                                <div className=" cursor-pointer hover:text-white hover:bg-black rounded px-2 my-[3px] py-2 ">
                                    <IoCheckmark className="" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center border border-black rounded pl-2 pr-1">
                                <input type="text" placeholder="Learner number" className="outline-none" />
                                <div className=" cursor-pointer hover:text-white hover:bg-black rounded px-2 my-[3px] py-2 ">
                                    <IoCheckmark className="" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center border border-black rounded pl-2 pr-1">
                                <input type="text" placeholder="Learner number" className="outline-none" />
                                <div className=" cursor-pointer hover:text-white hover:bg-black rounded px-2 my-[3px] py-2 ">
                                    <IoCheckmark className="" />
                                </div>
                            </div>
                            <div className="flex justify-between items-center border border-black rounded pl-2 pr-1">
                                <input type="text" placeholder="Learner number" className="outline-none" />
                                <div className=" cursor-pointer hover:text-white hover:bg-black rounded px-2 my-[3px] py-2 ">
                                    <IoCheckmark className="" />
                                </div>
                            </div>
                        </div>
                        {/* Table Start */}
                        <div className="overflow-x-auto mt-10">
                            <table className="min-w-full bg-white ">
                                <thead>
                                    <tr className=" text-left text-gray-600 uppercase text-sm border-b-2 border-[#dee2e6]">
                                        <th className="py-2 px-4 border-b">Status</th>
                                        <th className="py-2 px-4 border-b">learner</th>
                                        <th className="py-2 px-4 border-b">Customer</th>
                                        <th className="py-2 px-4 border-b">Package</th>
                                        <th className="py-2 px-4 border-b">Payment</th>
                                        <th className="py-2 px-4 border-b">LMS</th>
                                        <th className="py-2 px-4 border-b">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        [1, 2, 3, 4, 5].map((item, index) => (
                                            <tr key={index} className="text-sm text-gray-700 even:#ECECEC border-b border-[#dee2e6] odd:bg-[white] hover:bg-[#ECECEC]">
                                                <td className="py-2 px-4 ">
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 '} />

                                                </td>
                                                <td className="py-2 px-4 ">
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 '} />
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 mt-1'} />
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 mt-1'} />
                                                </td>
                                                <td className="py-2 px-4 ">
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 '} />
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 mt-1'} />
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 mt-1'} />
                                                </td>
                                                <td className="py-2 px-4 ">
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 '} />
                                                </td>
                                                <td className="py-2 px-4 ">
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 '} />
                                                </td>
                                                <td className="py-2 px-4 font-[700]">
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 '} />
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 mt-1'} />
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 mt-1'} />
                                                </td>

                                                <td className="py-2 px-4 flex space-x-2">
                                                    <Link href="/business/learner-report/16344">
                                                        <button className="mt-4">
                                                            <LiaClipboardListSolid className="text-xl" />
                                                        </button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        [1, 2, 3, 4, 5].map((item, index) => (
                                            <tr key={index} className="text-sm text-gray-700 even:#ECECEC border-b border-[#dee2e6] odd:bg-[white] hover:bg-[#ECECEC]">
                                                <td className="py-2 px-4 ">
                                                    <button className="shadow-[0px_0.5rem_1rem_rgba(0,0,0,0.15)] px-1 bg-white font-[600] rounded text-sm">Enrolled</button>
                                                </td>
                                                <td className="py-2 px-4 ">
                                                    <div className="flex items-center text-sm">
                                                        <LuUser2 />
                                                        <p className=" ml-1">haseeb user</p>
                                                    </div>
                                                    <div className="flex items-center text-sm">
                                                        <CiAt />
                                                        <p className="text-md ml-1">locino8002@janfab.com</p>
                                                    </div>
                                                    <div className="flex items-center text-sm">
                                                        <IoCallOutline />
                                                        <p className="text-md ml-1">23456789</p>
                                                    </div>
                                                </td>
                                                <td className="py-2 px-4 ">
                                                    <div className="flex items-center text-sm">
                                                        <LuUser2 />
                                                        <p className=" ml-1">haseeb user</p>
                                                    </div>
                                                    <div className="flex items-center text-sm">
                                                        <CiAt />
                                                        <p className="text-md ml-1">haseeb.maqsood@collaborak.com</p>
                                                    </div>
                                                    <div className="flex items-center text-sm">
                                                        <IoCallOutline />
                                                        <p className="text-md ml-1">23456789</p>
                                                    </div>
                                                </td>
                                                <td className="py-2 px-4 ">Flexi</td>
                                                <td className="py-2 px-4 ">
                                                    <button className="shadow-2xl px-1 bg-[#28a745] font-[600] rounded text-white text-sm">Succeeded</button>
                                                </td>
                                                <td className="py-2 px-4 font-[700]">
                                                    <div className="flex items-center text-sm">
                                                        <MdOutlineSignalCellularAlt />
                                                        <p className=" ml-1 ">Progress: <span className="font-[400]">0%</span></p>
                                                    </div>
                                                    <div className="flex items-center text-sm">
                                                        <CiAt />
                                                        <p className="text-md ml-1">Certificate: --</p>
                                                    </div>
                                                    <div className="flex items-center text-sm">
                                                        <LiaCertificateSolid />
                                                        <p className="text-md ml-1">Last login: <span className="font-[400]">Never</span></p>
                                                    </div>
                                                </td>

                                                <td className="py-2 px-4 flex space-x-2">
                                                    <Link href="/business/learner-report/16344">
                                                        <button className="mt-4">
                                                            <LiaClipboardListSolid className="text-xl" />
                                                        </button>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                        {/* Table End */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CohortDetails;