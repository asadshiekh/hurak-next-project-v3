'use client'
import { useState } from "react";
import { LiaCrownSolid, LiaHistorySolid, LiaDoorOpenSolid, LiaLayerGroupSolid, LiaBookOpenSolid } from "react-icons/lia";
import { TbUserCog } from "react-icons/tb";
import { LuBookMinus, LuCreditCard } from "react-icons/lu";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { BiSolidUserAccount } from "react-icons/bi";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { CiUser } from "react-icons/ci";
import { PiUsersThreeThin } from "react-icons/pi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ButtonFill from "./butttons/ButtonFill";


const AccountSwitch = () => {
    const pathname = usePathname();
    const [openModal, isOpenModal] = useState(false);

    const [accountSwitch, isAccountSwitch] = useState(false);
    const openAccount = () => isAccountSwitch(!accountSwitch);

    return (
        <div>
            <div onMouseEnter={() => isOpenModal(true)} onMouseLeave={() => isOpenModal(false)}
                className="cursor-pointer p-1 rounded-full bg-primary font-[500] text-white">
                <p>HM</p>
            </div>

            {/* Modal */}
            {openModal && (
                <div onMouseEnter={() => isOpenModal(true)} onMouseLeave={() => isOpenModal(false)} className="p-4 overflow-hidden text-sm w-[310px] z-50 absolute top-12 right-4 mt-2 bg-white border rounded shadow-lg">
                    <div className="flex pb-5 border-b">
                        <div className="mr-3">
                            <p className="border bg-gray-200 rounded-full p-2 text-[#969696] font-[700]">HM</p>
                        </div>
                        <div>
                            <p>haseeb ali</p>
                            <p className="text-xs">haseeb.maqsood@collaborak.com</p>
                            <div className="flex mt-2 items-center bg-black text-white rounded w-[70px]">
                                <LiaCrownSolid className="mx-1 text-yellow-500" />
                                <p className="font-[700]">Level 1</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5">
                        {!accountSwitch && (

                            <div>
                                {pathname === '/my-learning' && (
                                    <div>
                                        <div className="text-[#3c3b37] mb-5 cursor-pointer flex items-center hover:text-primary">
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

                                    </div>
                                )}

                                {pathname === '/business/dashboard' && (
                                    <div>
                                        <div className=" text-[#3c3b37] pb-5 cursor-pointer flex items-center hover:text-primary">
                                            <LiaLayerGroupSolid className="text-xl" />
                                            <p className="ml-2">Dashboard</p>
                                        </div>

                                        <div className=" text-[#3c3b37] pb-5 cursor-pointer flex items-center hover:text-primary">
                                            <CiUser className="text-xl" />
                                            <p className="ml-2">Learners</p>
                                        </div>
                                        <div className="text-[#3c3b37] pb-5 cursor-pointer flex items-center hover:text-primary">
                                            <LiaBookOpenSolid className="text-xl" />
                                            <p className="ml-2">Courses</p>
                                        </div>

                                        <div className="text-[#3c3b37] pb-5 cursor-pointer flex items-center hover:text-primary">
                                            <PiUsersThreeThin className="text-xl" />
                                            <p className="ml-2">Teams</p>
                                        </div>

                                        <div className="border-b text-[#3c3b37] pb-5 cursor-pointer flex items-center hover:text-primary">
                                            <LiaHistorySolid className="text-xl" />
                                            <p className="ml-2">Purchase history</p>
                                        </div>
                                    </div>
                                )}

                                <div onClick={openAccount} className="w-full py-4 border-b text-[#3c3b37] cursor-pointer flex items-center hover:text-primary">
                                    <div className="w-full flex items-center justify-between">
                                        <div className="flex">
                                            <BiSolidUserAccount className="text-xl" />
                                            <p className="ml-2">Switch account</p>
                                        </div>
                                        <GoArrowRight />
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
                        )}

                        {accountSwitch && (
                            <div className="">
                                <div onClick={openAccount} className="flex items-center hover:text-primary pb-4 border-b cursor-pointer">
                                    <GoArrowLeft />
                                    <p className="ml-2 ">Back account</p>
                                </div>
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
                                    <div className="flex pb-2 border-b cursor-pointer">
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

                                <div className="flex items-center py-6  border-b">
                                    <div className="mr-3">
                                        <p className="border rounded-full px-2 bg-primary text-white text-xl font-[700]">+</p>
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
                        )}

                    </div>
                </div>
            )}

            {/* Modal End */}
        </div>

    )
}

export default AccountSwitch;