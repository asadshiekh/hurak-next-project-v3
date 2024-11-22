"use client"
import Image from "next/image";
import React, { useState } from "react";
import BusinessAccountModal from './BusinessAccountModalWindow'
import ButtonFill from "@/components/global/butttons/ButtonFill";

const HurakBusinessBanner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <div className="sm:h-[550px] sm:bg-[url('/images/Hurakbusinesshero-Desk.webp')] bg-cover bg-[70%] bg-no-repeat flex items-center pt-12 md:pt-0">
                <div className="container lg:px-40 ">
                    <div className="md:w-1/2 lg:w-2/4 px-3 md:px-0">
                        <div className="text-left">
                            <h1 className="text-4xl font-bold text-[#0f7c90]">Hurak Business</h1>
                            <p className="text-lg pt-1">
                                Elevate your business efficiency with Hurak by assigning licenses as courses. Empower your team with continuous on-demand learning.
                            </p>

                            <div className="flex justify-start mt-5">
                                <div>
                                    <ButtonFill Padding={"lg"} handelClick={() => setIsModalOpen(true)} color={"primary"} text={"Sign Up"} />
                                </div>
                            </div>

                            {isModalOpen && (
                                <BusinessAccountModal
                                    isOpen={isModalOpen}
                                    onClose={() => setIsModalOpen(false)}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="block sm:hidden w-full px-2">
                <Image src={'/images/businesshero-mob.webp'}
                    width={300}
                    height={300}
                    className="w-full"
                />
            </div>
        </>

    );
}

export default HurakBusinessBanner;
