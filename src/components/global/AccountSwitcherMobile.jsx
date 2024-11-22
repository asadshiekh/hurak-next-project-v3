
'use client'
import { useState } from "react";
import { LiaCrownSolid, LiaHistorySolid, LiaDoorOpenSolid, LiaLayerGroupSolid, LiaBookOpenSolid } from "react-icons/lia";
import { TbUserCog } from "react-icons/tb";
import { LuBookMinus, LuCreditCard } from "react-icons/lu";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { BiSolidUserAccount } from "react-icons/bi";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import Link from "next/link";
import ButtonFill from "./butttons/ButtonFill";

const AccountSwitchMobile = ({ showModal, setShowModal }) => {
    
    const [showProfileTabs, setShowProfileTabs] = useState(true);
    const [isExiting, setIsExiting] = useState(false);
    const [ShowAccounst, SetShowAccounst] = useState(false);

    const handleProfileClick = () => {
        setShowModal(true);
        setShowProfileTabs(true);
    };

    const handleSwitchAccountClick = () => {
        setShowProfileTabs(false);
    };

    const handleBackClick = () => {
        SetShowAccounst(true);
        setTimeout(() => {
            SetShowAccounst(false);
            setShowProfileTabs(true);
        }, 300);
        setShowProfileTabs(true);
    };

    // const handleBackClickProfile = () => {
    //     setShowModal(false);
    //     setShowProfileTabs(false);
    // };

    const handleBackClickProfile = () => {
        setIsExiting(true); // start slide-out animation
        setTimeout(() => {
            setShowModal(false); // hide modal after animation
            setShowProfileTabs(true);
            setIsExiting(false); // reset for next open
        }, 300); // match the duration of slideOut animation
    };

    return (
        <div>
            {/* Modal */}
            {showModal && (
                <div
                    className={`bg-white  overflow-hidden text-sm h-screen w-[100%] md:w-[100%] z-50 absolute top-0 border rounded shadow-lg ${isExiting ? 'slideOut' : 'slideIn'}`}
                >
                    {showProfileTabs ? (
                        <div>
                            {/* Profile Tabs */}
                            <div className='bg-[#f7f8f8] hover:cursor-pointer' onClick={handleBackClickProfile}>
                                <div className="text-[16px]  px-5 py-6 ">
                                    <AiOutlineLeft className=' inline text-xs mr-4' /> Menu
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="text-[#3c3b37] my-5 cursor-pointer flex items-center hover:text-primary">
                                    <TbUserCog className="text-xl" />
                                    <p className="ml-2">Account Setting</p>
                                </div>
                                <div className="text-[#3c3b37] my-5 cursor-pointer flex items-center hover:text-primary">
                                    <LuBookMinus className="text-xl" />
                                    <p className="ml-2">My learning</p>
                                </div>
                                <div className="text-[#3c3b37] my-5 cursor-pointer flex items-center hover:text-primary">
                                    <RiShoppingCartLine className="text-xl" />
                                    <p className="ml-2">My cart</p>
                                </div>
                                <div className="text-[#3c3b37] my-5 cursor-pointer flex items-center hover:text-primary">
                                    <LuCreditCard className="text-xl" />
                                    <p className="ml-2">Payment methods</p>
                                </div>
                                <div className="text-[#3c3b37] my-5 cursor-pointer flex items-center hover:text-primary">
                                    <IoWalletOutline className="text-xl" />
                                    <p className="ml-2">User wallet</p>
                                </div>
                                <div className="border-b text-[#3c3b37] pb-5 cursor-pointer flex items-center hover:text-primary">
                                    <LiaHistorySolid className="text-xl" />
                                    <p className="ml-2">Purchase history</p>
                                </div>
                                <div className="w-full py-4 border-b text-[#3c3b37] cursor-pointer flex items-center hover:text-primary" onClick={handleSwitchAccountClick}>
                                    <div className="w-full flex items-center justify-between">
                                        <div className="flex">
                                            <BiSolidUserAccount className="text-xl" />
                                            <p className="ml-2">Switch account</p>
                                        </div>
                                        <AiOutlineRight />
                                    </div>
                                </div>

                                <div className="py-5 border-b text-[#3c3b37] cursor-pointer flex items-center hover:text-primary">
                                    <LiaDoorOpenSolid className="text-xl" />
                                    <p className="ml-2">Logout</p>
                                </div>

                                <div className="space-y-3">
                                    <div>
                                        <Link href={"/advertise-your-courses-hurak"}>
                                            <ButtonFill size={'sm'} color={'danger'} text={'Teach with hurak'} />
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href={"/business/dashboard"}>
                                            <ButtonFill size={'sm'} color={'primary'} text={'Hurak business account'} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className={`bg-white  overflow-hidden text-sm h-screen w-[100%] md:w-[100%] z-50 absolute top-0 border rounded shadow-lg ${ShowAccounst ? 'slideOut' : 'slideIn'}`}>
                            {/* Switch Account Section */}
                            <div className='bg-[#f7f8f8] hover:cursor-pointer' onClick={handleBackClick}>
                                <div className="text-[16px]  px-5 py-6 ">
                                    <AiOutlineLeft className=' inline text-xs mr-4' /> Back
                                </div>
                            </div>
                            <div className="p-5">
                                <p className="py-3">Student account</p>
                                <Link href={"/my-learning"}>
                                    <div className="flex pb-2 border-b">
                                        <div className="mr-3">
                                            <p className="border bg-gray-200 rounded-full p-2 text-[#969696] font-[700]">HM</p>
                                        </div>
                                        <div>
                                            <p>haseeb ali</p>
                                            <p className="text-xs">student account</p>
                                        </div>
                                    </div>
                                </Link>
                                <p className="py-3">Business account</p>
                                <Link href={"/business/dashboard"}>
                                    <div className="flex pb-2 border-b">
                                        <div className="mr-3">
                                            <p className="border bg-gray-200 rounded-full p-2 text-[#969696] font-[700]">HM</p>
                                        </div>
                                        <div>
                                            <p>haseeb ali</p>
                                            <p className="text-xs">Business account</p>
                                        </div>
                                    </div>
                                </Link>
                                <p className="py-3">Provider account</p>
                                <div className="flex pb-2 border-b">
                                    <div className="mr-3">
                                        <p className="border bg-gray-200 rounded-full p-2 text-[#969696] font-[700]">HM</p>
                                    </div>
                                    <div>
                                        <p>haseeb ali</p>
                                        <p className="text-xs">Provider account</p>
                                    </div>
                                </div>
                                <div className="flex items-center py-6 border-b">
                                    <div className="mr-3">
                                        <p className="border rounded-full px-2 text-white bg-primary text-xl font-[700]">+</p>
                                    </div>
                                    <div>
                                        <Link href={"/advertise-your-courses-hurak"}><p className="text-[16px] font-[700]">Open a provider account</p></Link>
                                    </div>
                                </div>
                                <div className="py-5 border-b text-[#3c3b37] cursor-pointer flex items-center hover:text-primary">
                                    <LiaDoorOpenSolid className="text-xl" />
                                    <p className="ml-2">Logout</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default AccountSwitchMobile;
