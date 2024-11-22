"use client";
import React, { useEffect, useState } from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import BusinessSidebar from "./sidebar";
import Link from "next/link";
import Skeleton from '@/components/global/Skeletons/Skeleton';


const Purchase = () => {
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
                            <p className="text-3xl font-[700] mb-8"> Purchase history </p>
                            <p className="text-lg mb-4">Your payment info and transactions made online</p>
                        </div>


                        {/* Table Start */}
                        <div className="overflow-x-auto">
                            <table className="min-w-full bg-white ">
                                <thead>
                                    <tr className=" text-left text-gray-600 bg-[#e9ecef] text-lg border-b-2 h-[50px] border-[#dee2e6]">
                                        <th className="py-2 px-4 border-b">Purchase history</th>
                                        <th className="py-2 px-4 border-b">Date</th>
                                        <th className="py-2 px-4 border-b">Total Price</th>
                                        <th className="py-2 px-4 border-b">Order Status</th>
                                        <th className="py-2 px-4 border-b">Receipt</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading ? (
                                        [1, 2, 3, 4, 5].map((item, index) => (

                                            <tr key={index} className="text-gray-700 even:#ECECEC border-b text-lg border-[#dee2e6] odd:bg-[white] hover:bg-[#ECECEC]">
                                                <td className="py-2 px-4 ">
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 '} />
                                                </td>
                                                <td className="py-2 px-4 ">
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 '} />
                                                </td>
                                                <td className="py-2 px-4 font-[700]">
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 '} />
                                                </td>
                                                <td className="py-2 px-4 ">
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 '} />
                                                </td>
                                                <td className="py-2 px-4 flex space-x-2">
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 '} />
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        [1, 2, 3, 4, 5].map((item, index) => (
                                            <tr key={index} className="text-gray-700 even:#ECECEC border-b text-lg border-[#dee2e6] odd:bg-[white] hover:bg-[#ECECEC]">
                                                <td className="py-2 px-4 ">locino8002@janfab.com</td>
                                                <td className="py-2 px-4 ">
                                                    11 November. 2024
                                                </td>
                                                <td className="py-2 px-4 font-[700]">£29.99</td>
                                                <td className="py-2 px-4 "><span className="bg-[#28a745] text-white text-xs py-[2px] font-[700] rounded px-2">paid</span></td>
                                                <td className="py-2 px-4 flex space-x-2">
                                                    <Link href="/business/receipt/135654782"><button className="py-1 px-4 text-gray-500 border rounded border-gray-600 hover:bg-primary hover:text-white mt-3 md:mt-0">Receipt</button>
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

export default Purchase;