'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import Header from '@/components/enduser-panel/header';
import BusinessSidebar from './sidebar';

const BusinsessReceipt = () => {

    const [receiptModal, isReceiptModal] = useState(false);
    const openReceiptModal = () => isReceiptModal(true);
    const closeReceiptModal = () => isReceiptModal(false);

    const [isButtonVisible, setIsButtonVisible] = useState(true);
    const [activeClass, setActiveClass] = useState("md:mr-auto md:ml-auto m-auto mx-5 lg:w-3/5 md:w-[700px] my-5 mb-10 pt-2");
    const [providerActiveClass, setProviderActiveClass] = useState("mt-5 border-2 py-2 px-3 flex justify-between items-center flex-wrap ");
    const [tableActiveClass, setTableActiveClass] = useState(" px-4 py-2 text-left");
    const [receiptActiveClass, setReceiptActiveClass] = useState("flex justify-between mt-5 items-center  border-b pb-6 flex-wrap");
    const [imageActiveClass, setImageActiveClass] = useState("m-auto flex justify-center ");

    const contentRef = useRef();

    const handleGeneratePdf = () => {
        setActiveClass("w-100 px-5");
        setProviderActiveClass("mt-5 border-2 py-2 pb-7 px-3 flex justify-between items-center flex-wrap")
        setIsButtonVisible(false);
        setTableActiveClass("px-4 py-2 pb-7 text-left");
        setImageActiveClass("m-auto flex justify-center mt-8");
        setReceiptActiveClass("flex justify-center items-center  border-b pb-6 flex-wrap")
        const element = contentRef.current;
        html2pdf()
            .set({

                margin: [0, 0, 0, 0],
                pagebreak: { mode: ["css", "legacy"] },
                filename: "PDCC-66677899889977.pdf",
                image: { type: "png", quality: 0.98 },
                html2canvas: { scale: 2 },
                html2canvas: { dpi: 300, letterRendering: true, useCORS: true },
                jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
            })
            .from(element)
            .save()
            .then(() => {
                // Revert to the original class after download
                setActiveClass("md:mr-auto md:ml-auto m-auto mx-5 lg:w-3/5 md:w-[700px] my-5 mb-10 pt-2");
                setProviderActiveClass("mt-5 border-2 py-2 px-3 flex justify-between items-center flex-wrap ")
                setIsButtonVisible(true);
                setTableActiveClass("px-4 py-2 text-left");
                setImageActiveClass("m-auto flex justify-center");
                setReceiptActiveClass("flex justify-between mt-5 items-center  border-b pb-6 flex-wrap");
            });
    };

    return (
        <div>
            <div className="flex mb-[150px]">
                <div className="w-auto border border-r ">
                    <BusinessSidebar />
                </div>

                <div className="w-full overflow-x-auto">
                    <div ref={contentRef} className={activeClass}>
                        <div className={imageActiveClass}>
                            <Link className="cursor-pointer font-bold" href="/">
                                <Image
                                    src="/images/hurak-logo.webp"
                                    alt="Upskill your team with Hurak Business"
                                    layout=""
                                    width={120}
                                    height={20}
                                    loading="lazy" />
                            </Link>
                        </div>

                        <div className={receiptActiveClass}>
                            <p className='md:text-xl lg:text-2xl text-xl mb-4 '>Receipt for Cart - 20 September 2024</p>
                            {isButtonVisible && (
                                <button onClick={handleGeneratePdf} className='bg-primary text-white px-7 py-3 text-xl rounded md:w-auto w-full'>Download PDF</button>
                            )}
                        </div>

                        <div className='flex justify-end my-3 font-bold text-md'>
                            <p>Billing Address:</p>
                        </div>

                        <div className='flex justify-between items-center flex-wrap'>
                            <div>
                                <p className='font-bold pb-1'>Order # <span className='font-normal'>123456789</span></p>
                                <p className='text-2xl pb-1'>Haseeb Maqsood</p>
                                <p className='font-bold'>Customer Email: <span className='font-normal'>haseeb.maqsood@collaborak.com</span></p>
                            </div>

                            <div>
                                <p className=' font-bold lg:hidden md:hidden'>Billing Address:</p>
                                <p className='text-lg'>DFX</p>
                                <p className='text-lg'>DFX</p>
                                <p className='text-lg'>1234</p>
                            </div>
                        </div>

                        <div className={providerActiveClass}>
                            <p className='font-bold text-lg '>Provided by:<span> Hurak Learning</span></p>
                            {isButtonVisible && (
                                <button className='py-2 px-4 rounded bg-primary text-white text-sm mt-2'>Request invoice</button>
                            )}
                        </div>

                        <div className=' border relative overflow-x-auto'>
                            {isButtonVisible && (
                                <div className='absolute top-16 lg:right-[400px] right-[-60px] md:right-[270px]'>
                                    <button onClick={openReceiptModal} className='px-4 rounded bg-primary text-white text-sm'>Request a fund</button>
                                </div>
                            )}
                            <table className=" border-collapse mt-3 w-full overflow-x-auto">

                                <thead>
                                    <tr className="bg-gray-100  border-b-2 border-t-2">
                                        <th className={tableActiveClass}>Product</th>
                                        <th className={tableActiveClass}>Qty</th>
                                        <th className={tableActiveClass}>Package</th>
                                        <th className={tableActiveClass}>Amount</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className=" px-4 text-sm pt-3">Booking reference: 000016444</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4">Traffic Banksman (Traffic Marshal) Training Course (Online)</td>
                                    </tr>
                                    <tr>
                                        <td className=" px-4 text-sm font-bold">Delegate Name:<span className='font-normal'> haseeb ali</span></td>
                                        <td className=" px-4">x 1</td>
                                        <td className=" px-4">Saver</td>
                                        <td className=" px-4">£29.99</td>
                                    </tr>
                                    <tr >
                                        <td className=" px-4 text-sm font-bold">Delegate Email:<span className='font-normal'> haseeb.maqsood@collaborak.com</span></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='border-t my-5 pb-3'>

                            </div>
                        </div>

                        <div className='flex justify-between items-center mt-5 border-b pb-4'>

                            <p className='lg:text-xl md:text-xl text-md'>Subtotal</p>
                            <p className='lg:text-lg md:text-lg text-md font-bold'>£36.29</p>
                        </div>

                        <div className='flex justify-between items-center mt-5 border-b pb-4'>

                            <p className='lg:text-xl md:text-xl text-md'>Total Paid</p>
                            <p className='lg:text-lg md:text-lg text-md font-bold'>£36.29</p>
                        </div>

                        <div className='text-center mt-10'>
                            <p>Hurak | 10 Tiller Road | London, E14 8PX</p>
                            <p className='pb-5'>Copyright 2022 Hurak.co.uk All rights reserved.</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Modal start */}
            {receiptModal && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50  flex justify-center items-center z-50">
                    <div className="bg-white p-6 pt-4 rounded shadow-lg max-w-xl w-full relative">
                        <button
                            className="absolute top-3 right-2 text-xl font-bold"
                            onClick={closeReceiptModal}>
                            <span className='mr-3 font-medium text-xl text-gray-500'> &times;</span>
                        </button>
                        <h2 className="text-xl mb-4 border-b pb-3">Course refund</h2>

                        <div>
                            <form>
                                <p className='w-full mb-2'>Refund Type</p>
                                <select name="" id="" className='border w-full py-2 px-2 rounded outline-none focus:border-blue'>
                                    <option>Select refund type</option>
                                    <option>full refund </option>
                                    <option>Partial refund</option>
                                </select>

                                <p className='w-full mb-2 mt-4'>Refund Reason</p>
                                <textarea name="" id="" className='border w-full rounded outline-none focus:border-blue' rows={4}></textarea>
                            </form>
                        </div>


                        <div className='flex justify-center mt-5'>
                            {/* <button className='mr-4 font-semibold text-lg text-blue hover:text-black'  onClick={closeReceiptModal} >Cancel</button> */}
                            <button className='bg-primary text-white  py-1 rounded text-lg w-full'>Submit</button>
                        </div>
                    </div>
                </div>
            )}
            {/* Modal end */}


        </div>

    )
}

export default BusinsessReceipt;