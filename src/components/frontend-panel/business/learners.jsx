"use client";

import React, { useEffect, useState } from 'react';
import BusinessSidebar from "./sidebar";
import { IoCheckmark } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import ButtonFill from "@/components/global/butttons/ButtonFill";
import TextInput from "@/components/global/forms/TextInput";
import Skeleton from '@/components/global/Skeletons/Skeleton';
import BasicModal from '@/components/global/modal-windows/BasicModal';
const Learner = () => {
    const [TestingID, setTestingID] = useState(null);

    const [openEmail, setOpenEmail] = useState(false);
    const openModal = () => setOpenEmail(true);
    const closeModal = () => setOpenEmail(false);

    const [openLearnerModal, setLearnerModal] = useState(false);
    const openLearnModal = () => setLearnerModal(true);
    const closeLearnModal = () => setLearnerModal(false);

    const orders = [
        {
            id: "1", orderNumber: "2345678", orderStatus: "Enrolled", plan: "saver", firstName: "haseeb", lastName: "ali", email: "haseeb.maqsood@gmail.com", number: "12345678",
        },
        {
            id: "2", orderNumber: "2345678", orderStatus: "Enrolled", plan: "saver", firstName: "haseeb", lastName: "ali", email: "haseeb.maqsood@gmail.com", number: "12345678",
        },
        {
            id: "3", orderNumber: "2345678", orderStatus: "Enrolled", plan: "saver", firstName: "haseeb", lastName: "ali", email: "haseeb.maqsood@gmail.com", number: "12345678",
        },
        {
            id: "4", orderNumber: "2345678", orderStatus: "Enrolled", plan: "saver", firstName: "haseeb", lastName: "ali", email: "haseeb.maqsood@gmail.com", number: "12345678",
        },
        {
            id: "5", orderNumber: "2345678", orderStatus: "Enrolled", plan: "saver", firstName: "haseeb", lastName: "ali", email: "haseeb.maqsood@gmail.com", number: "12345678",
        },
        {
            id: "6", orderNumber: "2345678", orderStatus: "Enrolled", plan: "saver", firstName: "haseeb", lastName: "ali", email: "haseeb.maqsood@gmail.com", number: "12345678",
        },
        {
            id: "7", orderNumber: "2345678", orderStatus: "Enrolled", plan: "saver", firstName: "haseeb", lastName: "ali", email: "haseeb.maqsood@gmail.com", number: "12345678",
        },
        {
            id: "8", orderNumber: "2345678", orderStatus: "Enrolled", plan: "saver", firstName: "haseeb", lastName: "ali", email: "haseeb.maqsood@gmail.com", number: "12345678",
        },
        {
            id: "9", orderNumber: "2345678", orderStatus: "Enrolled", plan: "saver", firstName: "haseeb", lastName: "ali", email: "haseeb.maqsood@gmail.com", number: "12345678",
        },
        {
            id: "10", orderNumber: "2345678", orderStatus: "Enrolled", plan: "saver", firstName: "haseeb", lastName: "ali", email: "haseeb.maqsood@gmail.com", number: "12345678",
        }
    ]
    const [isOpen, setOpen] = useState(null);
    const CloseModal = () => {
        setOpen(null);
        document.body.style.overflowY = 'auto';
    }

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, []);

    return (
        <>
            <div className="flex mb-[100px]">
                <div className="w-auto border border-r ">
                    <BusinessSidebar />
                </div>
                <div className="w-full overflow-x-auto">
                    <div className=" px-3 mt-5">
                        <div className="text-center">
                            <p className="text-3xl font-[700]"> Learners</p>
                        </div>
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:w-[70%] mt-10">
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
                        </div>
                        {/* Table Start */}
                        <div className="overflow-x-auto mt-10">
                            <table className="min-w-full bg-white ">
                                <thead>
                                    <tr className=" text-left text-gray-600 uppercase text-sm border-b-2 border-[#dee2e6]">
                                        <th className="py-2 px-4 border-b">#Order</th>
                                        <th className="py-2 px-4 border-b">Status</th>
                                        <th className="py-2 px-4 border-b">Plan</th>
                                        <th className="py-2 px-4 border-b">First Name</th>
                                        <th className="py-2 px-4 border-b">Last Name</th>
                                        <th className="py-2 px-4 border-b">Email</th>
                                        <th className="py-2 px-4 border-b">Number</th>
                                        <th className="py-2 px-4 border-b">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {loading == true ? (
                                        [1, 2, 3, 4, 5].map((item, index) => (
                                            <tr key={index} className="border-t odd:bg-white even:bg-[#ECECEC] hover:bg-[#ECECEC] cursor-pointer">
                                                <td className="px-3 py-4">
                                                    <Skeleton style={'h-4 w-full bg-neutral-200'} />
                                                </td>
                                                <td className="px-3 py-4">
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 '} />
                                                </td>
                                                <td className="px-3 py-4">
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 '} />
                                                </td>
                                                <td className="px-3 py-4">
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 '} />
                                                </td>
                                                <td className="px-3 py-4">
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 '} />
                                                </td>
                                                <td className="px-3 py-4">
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 '} />
                                                </td>
                                                <td className="px-3 py-4">
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 '} />
                                                </td>
                                                <td className="px-3 py-4">
                                                    <Skeleton style={'h-4 w-full bg-neutral-200 '} />
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        orders.map((order, index) => (
                                            <tr className="text-gray-700 even:bg-white border-b border-[#dee2e6] odd:bg-[#ECECEC] hover:bg-[#ECECEC]">
                                                <td className="py-2 px-4 ">{order.orderNumber}</td>
                                                <td className="py-2 px-4 ">
                                                    <span className="bg-[#17a2b8] text-white text-xs font-semibold rounded px-1">{order.orderStatus}</span>
                                                </td>
                                                <td className="py-2 px-4 ">{order.plan}</td>
                                                <td className="py-2 px-4 ">{order.firstName}</td>
                                                <td className="py-2 px-4 ">{order.lastName}</td>
                                                <td className="py-2 px-4 ">{order.email}</td>
                                                <td className="py-2 px-4 ">{order.number}</td>
                                                <td className="py-2 px-4 flex space-x-2">
                                                    <button onClick={() => { setOpen('SendEmail') }} className="text-teal-500 hover:text-teal-600">
                                                        <MdOutlineEmail className="text-primary text-2xl" />
                                                    </button>
                                                    <button onClick={() => { setOpen('learnerDetail') }} className="">
                                                        <FaRegEdit className="text-primary text-xl" />
                                                    </button>
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

            {isOpen == 'SendEmail' ?
                <BasicModal size={'md'} staticBackdrop={true} isOpen={isOpen} CloseModal={CloseModal}>
                    <div className=" p-6 rounded shadow-lg  relative pb-8 pt-4">
                        <div className="text-center ">
                            <div className="flex justify-center">
                                <img src="/images/Mailbox_re.png" className="w-[200px]" />
                            </div>
                            <p className="px-4 text-[16px] ">
                                Resend <span className="font-[500]">haseeb.maqsood@collaborak.com</span> an invite to access their training course?
                            </p>
                        </div>
                        <div className='flex justify-center mt-12'>
                            <div className="mr-3"><ButtonFill size={"sm"} color={"primary"} text={"Confirm"} /></div>
                            <div className="mr-3"><ButtonFill size={"sm"} handelClick={() => { setOpen(null) }} color={"gray"} text={"Close"} /></div>
                        </div>
                    </div>
                </BasicModal>
                : false}

            {isOpen == 'learnerDetail' ?
                <BasicModal size={'md'} header={true} scrollable={true} heading={'Change learner details request'} staticBackdrop={true} isOpen={isOpen} CloseModal={CloseModal}>
                    <div className="bg-white px-4 rounded shadow-lg relative pt-3 pb-8">
                        <div className="mt-3 pb-4 border-b">
                            <p className="text-[14px] pr-8">Please provide the following information to assign the purchased licenses to the learner:</p>
                            <p className="text-xl font[500] mt-3">Learner current details</p>
                            <p className="text-gray-400 text-[14px] mt-2">First name: <span className="text-gray-600">haseeb</span></p>
                            <p className="text-gray-400 text-[14px] pt-1">Last name: <span className="text-gray-600">ali</span></p>
                            <p className="text-gray-400 text-[14px] pt-1">Number: <span className="text-gray-600">7654365433</span></p>
                            <p className="text-gray-400 text-[14px] pt-1">Email: <span className="text-gray-600">haseeb.maqsood@collaborak.com</span></p>
                        </div>
                        <div>
                            <p className="text-xl font[500] mt-3">Enter Learner details</p>
                            <div className="grid grid-cols-2 mt-3 gap-2">
                                <div>
                                    <p className="text-[14px]">First Name</p>
                                    <TextInput label={`Enter learner first name <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
                                </div>
                                <div>
                                    <p className="text-[14px]">Last Name</p>
                                    <TextInput label={`Enter learner last name <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
                                </div>
                            </div>
                            <p className="text-[14px] mt-3">Number</p>
                            <TextInput label={`Enter number <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
                            <p className="text-[14px] mt-3">Email</p>
                            <TextInput label={`Enter email <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
                            <p className="text-[14px] mt-3">Reason</p>
                            <textarea name="" className="px-2  border border-gray-300 w-full rounded outline-none focus:border-primaryBlue placeholder:text-gray-500" placeholder="Enter reason or required changes" rows={"5"} id=""></textarea>
                            <div className="flex justify-end mt-4">
                                <div>
                                    <ButtonFill color={"primary"} size={"sm"} text={"Send Request"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </BasicModal>
                : false}
        </>
    )
}

export default Learner;