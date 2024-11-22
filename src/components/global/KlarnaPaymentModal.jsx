import Image from "next/image";
import { useState } from "react";
import BasicModal from "./modal-windows/BasicModal";
import { IoMdClose } from "react-icons/io";
import { PiCursor } from "react-icons/pi";


const Klarna = () => {
    const [klarnaModal, setKlarnaModal] = useState(false);
    const openModal = () => setKlarnaModal(true);
    const closeModal = () => setKlarnaModal(false);
    return (
        <div>
            <div className="my-3 cursor-pointer" onClick={openModal}>
                <u className="text-sm">Pay 3 monthly interest-free payments with</u>
                <Image
                    className='w-[45px] object-cover cursor-pointer mt-2'
                    src="/images/klarna-img.png"
                    alt=""
                    layout=""
                    width={90}
                    height={50}
                    loading="lazy" />
            </div>

            {
                klarnaModal && (
                    <BasicModal size={'xl'} scrollable={false} staticBackdrop={true} >
                        <div className="bg-white px-3 py-3 rounded shadow-lg pb-12">
                            <div className="flex justify-end items-center">
                                <p onClick={closeModal} className="text-3xl text-gray-500 cursor-pointer"><IoMdClose /></p>
                            </div>
                            <div className="text-center pt-4 pb-8">
                                <p className="text-4xl font-bold pb-3">How Klarna works.</p>
                                <p className="text-lg font-[500] pb-3">Pay in 3 monthly installments, interest-free. Easy</p>
                            </div>
                            <div className="border mx-6 px-4  pt-5 py-6 rounded">
                                <div className="grid lg:grid-cols-5">
                                    <div className="lg:border-r lg:border-b-0 border-b-2 mr-3 px-2 lg:pb-16 pb-6">
                                        <Image
                                            className='w-[60px] object-cover cursor-pointer mt-2'
                                            src="/images/klarna-img.png"
                                            alt=""
                                            layout=""
                                            width={90}
                                            height={50}
                                            loading="lazy" />
                                        <div className="lg:text-left text-center">
                                            <p className="text-[#ff94b0] text-sm font-bold py-2">Pay over 3 months</p>
                                            <p className="text-sm">Monthly instalment of 3 months.</p>
                                        </div>
                                    </div>

                                    <div className="px-3 text-center" >
                                        <div className="flex justify-center text-4xl">
                                            <Image
                                                className='w-[35px] object-cover cursor-pointer mt-2'
                                                src="/images/klarna-arrow.png"
                                                alt=""
                                                layout=""
                                                width={90}
                                                height={50}
                                                loading="lazy" />
                                        </div>
                                        <p className="text-[#ff94b0] text-sm font-[700] py-2">Pay by Klarna</p>
                                        <p className="text-sm ">Proceed to checkout. Select Klarna as your payment method.</p>
                                    </div>

                                    <div className="px-3 text-center" >
                                        <div className="flex justify-center text-4xl">
                                            <Image
                                                className='w-[35px] object-cover cursor-pointer mt-2'
                                                src="/images/klarna.svg"
                                                alt=""
                                                layout=""
                                                width={90}
                                                height={50}
                                                loading="lazy" />
                                        </div>
                                        <p className="text-[#ff94b0] text-sm font-[700] py-2">Complete order.</p>
                                        <p className="text-sm ">Log in or sign up for an account in minutes.</p>

                                    </div>


                                    <div className="px-3 text-center" >
                                        <div className="flex justify-center text-4xl">
                                            <Image
                                                className='w-[35px] object-cover cursor-pointer mt-2'
                                                src="/images/klarna-calendar.png"
                                                alt=""
                                                layout=""
                                                width={90}
                                                height={50}
                                                loading="lazy" />
                                        </div>
                                        <p className="text-[#ff94b0] text-sm font-[700] py-2">Pay by Klarna</p>
                                        <p className="text-sm ">Choose your payment day. View your schedule and select pay now.</p>

                                    </div>


                                    <div className="px-3 text-center" >
                                        <div className="flex justify-center text-4xl">
                                            <Image
                                                className='w-[35px] object-cover cursor-pointer mt-2'
                                                src="/images/klarna-face.png"
                                                alt=""
                                                layout=""
                                                width={90}
                                                height={50}
                                                loading="lazy" />
                                        </div>
                                        <p className="text-[#ff94b0] text-sm font-[700] py-2">Pay by Klarna</p>
                                        <p className="text-sm ">Your items are on their way. Payments will be taken automatically each month.</p>

                                    </div>


                                </div>
                            </div>

                            <div className="px-6 mt-3 ">
                                <div>
                                    <div className="flex items-center">
                                        <p className="mr-4">Other payment options: </p>
                                        <Image
                                            className='w-[350px] object-cover cursor-pointer mt-2'
                                            src="/images/laybuy_payment_cards.svg"
                                            alt=""
                                            layout=""
                                            width={90}
                                            height={50}
                                            loading="lazy" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </BasicModal>
                )
            }

        </div>
    )
}

export default Klarna;