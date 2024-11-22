import React from "react";

import { LiaUsersSolid, LiaChalkboardTeacherSolid } from "react-icons/lia";
import { MdBlockFlipped } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { GrAnnounce } from "react-icons/gr";
import { BsBadgeAd } from "react-icons/bs";


const WhyChooseHurak = () => {
    return (
        <>
            <div className="flex flex-col items-center mt-20">
                <div className="w-11/12 md:w-full md:pl-5 lg:w-8/12 text-left">
                    <h1 className="text-4xl font-[600]">Why choose Hurak?</h1>
                    <p className="bg-[#0f7c90] h-1 w-14 mt-4"></p>
                </div>

                <div className="flex flex-wrap justify-between my-10 lg:px-60">
                    <div className="w-full md:w-1/3 py-2 px-5 lg:px-2">
                        <div className="text-left flex flex-col items-center">
                            <div className="flex justify-center items-center mr-2">
                                <LiaUsersSolid className="text-4xl text-[#0f7c90]" />
                            </div>
                            <h1 className="text-lg ">Massive exposure - With over 50,000 unique monthly visits be sure to fill your courses and earn more.</h1>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 py-2 px-5 lg:px-2">
                        <div className="text-left flex flex-col items-center">
                            <div className="flex justify-center items-center mr-2">
                                <MdBlockFlipped className="text-4xl text-[#0f7c90]" />
                            </div>
                            <h1 className="text-lg ">Massive exposure - With over 50,000 unique monthly visits be sure to fill your courses and earn more.</h1>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 py-2 px-5 lg:px-2">
                        <div className="text-left flex flex-col items-center">
                            <div className="flex justify-center items-center mr-2">
                                <HiOutlineUsers className="text-4xl text-[#0f7c90]" />
                            </div>
                            <h1 className="text-lg ">Massive exposure - With over 50,000 unique monthly visits be sure to fill your courses and earn more.</h1>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 py-2 px-5 lg:px-2">
                        <div className="text-left flex flex-col items-center">
                            <div className="flex justify-center items-center mr-2">
                                <GrAnnounce className="text-4xl text-[#0f7c90]" />
                            </div>
                            <h1 className="text-lg ">Massive exposure - With over 50,000 unique monthly visits be sure to fill your courses and earn more.</h1>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 py-2 px-5 lg:px-2">
                        <div className="text-left flex flex-col items-center">
                            <div className="flex justify-center items-center mr-2">
                                <BsBadgeAd className="text-4xl text-[#0f7c90]" />
                            </div>
                            <h1 className="text-lg">Massive exposure - With over 50,000 unique monthly visits be sure to fill your courses and earn more.</h1>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 py-2 px-5 lg:px-2">
                        <div className="text-left flex flex-col items-center">
                            <div className="flex justify-center items-center mr-2">
                                <LiaChalkboardTeacherSolid className="text-4xl text-[#0f7c90]" />
                            </div>
                            <h1 className="text-lg ">Massive exposure - With over 50,000 unique monthly visits be sure to fill your courses and earn more.</h1>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default WhyChooseHurak
