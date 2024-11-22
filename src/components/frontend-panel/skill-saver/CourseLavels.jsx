import React from "react";
import { CgLock } from "react-icons/cg";
import Image from 'next/image';

const CourseLevel = () => {
    return (
        <div className="">
            <p className="text-2xl py-6">Book your next course with Hurak.com</p>
            <div className="border-2 rounded-xl p-5">
                <div className="flex">
                    <div className="pr-5">
                        
                        <Image src="/images/Gift-box.svg" alt="" width={70} height={100}
                        className="w-96 h-20  md:w-24 md:h-10 lg:w-24 lg:h-16"
                        />
                    </div>
                    <div>
                        <p className="text-lg font-bold">Learning Pays Off: Learn, Save, Succeed</p>
                        <p> Unlock extraordinary rewards as a Skill Saver and elevate your learning journey with our highest course discounts. Join today for an enhanced learning experience</p>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-5 md:gap-x-14  pt-10 lg:pt-5">
                    <div className="col-span-12 md:col-span-4">
                        <div className="border-2 rounded-xl text-center py-14 px-5 relative">
                            <p>Unlock instant discounts on select courses upon signing in 10% discounts</p>
                            <div className="absolute bg-white -top-4 left-1/2 transform -translate-x-1/2 border-2 rounded-xl px-1 lg:px-5 py-1">
                                <div className="flex justify-center items-center text-center">
                                    <div className="flex justify-center items-center text-[#959595] text-xl pr-2">
                                        <CgLock />
                                    </div>
                                    <p>Level 1</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-4">
                        <div className="border-2 rounded-xl text-center py-14 px-5 relative">
                            <p>Unlock instant discounts on select courses upon signing in 10% discounts</p>
                            <div className="absolute bg-white -top-4 left-1/2 transform -translate-x-1/2 border-2 rounded-xl  px-1 lg:px-5  py-1">
                                <div className="flex justify-center items-center text-center">
                                    <div className="flex justify-center items-center text-[#959595] text-xl pr-2">
                                        <CgLock />
                                    </div>
                                    <p>Level 2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                        <div className="border-2 rounded-xl text-center py-14 px-5 relative">
                            <p>Unlock instant discounts on select courses upon signing in 10% discounts</p>
                            <div className="absolute bg-white -top-4 left-1/2 transform -translate-x-1/2 border-2 rounded-xl  px-1 lg:px-5  py-1">
                                <div className="flex justify-center items-center text-center">
                                    <div className="flex justify-center items-center text-[#959595] text-xl pr-2">
                                        <CgLock />
                                    </div>
                                    <p>Level 3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseLevel