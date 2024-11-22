'use client'
import React, { useState } from 'react';
import Header from "../header";
import { IoHomeOutline } from "react-icons/io5";
import { RiVisaLine } from "react-icons/ri";
import ButtonFill from '@/components/global/butttons/ButtonFill';

const PaymentMethod = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="font-poppins">
      {/* <IoHomeOutline /> */}
      <Header breadcrum="Payment methods" headerText="Payment methods" />
      <div className="lg:ml-auto md:ml-auto m-auto lg:w-3/6   my-5 px-4  mb-10 pt-2 pb-5">
        <div>
          <h2 className="text-3xl mb-5">Payment methods</h2>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols  gap-6">
          <div className="border-2 rounded">
            <div className="flex items-center px-5 py-5 border-b ">
              <div>
                <RiVisaLine className="text-6xl" style={{ color: "#00579F" }} />
              </div>
              <div className="ml-5">
                <div className="flex items-center">
                  <p className="text-lg">Visa .... 4242</p>
                  <p className="text-xs ml-2 px-2 rounded" style={{ backgroundColor: "#D4EDDA", color: "#60926B" }}>Default</p>
                </div>
                <p className="text-lg">Expires 12/2026</p>
              </div>
            </div>

            <div className="flex justify-end mr-5 py-5">
              <button className="mt-3 font-semibold mr-5 text-blue" >Remove</button>
              <button className="mt-3 font-semibold mr-2 text-blue" >Make default</button>
            </div>
          </div>

          <div onClick={openModal} className="border-2 cursor-pointer border-dashed px-3 py-4 rounded flex justify-center items-center">
            <div className="text-center font-semibold py-14 text-blue" >+ Add payment method</div>
          </div>
        </div>
      </div>

      {/* Custom Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50  flex justify-center items-center z-50">
          <div className="bg-white p-6 pt-4 rounded shadow-lg max-w-lg w-full relative">
            <button
              className="absolute top-3 right-2 text-xl font-bold"
              onClick={closeModal}>
              <span className='mr-3 font-medium text-xl text-gray-500'> &times;</span>
            </button>

            <h2 className="text-xl font-[500] mb-4 border-b pb-3">Add credit or debit card</h2>
            <div className='flex lg:justify-between md:justify-between items-center flex-wrap'>
              <div className='md:w-[45%] w-[100%]'>
                <label className='text-sm'>Card Number <span className='text-red-600'>*</span></label>
                <p><input className='border border-gray-300 py-1 mt-2 w-[100%] px-2 focus:outline-none focus:border-primary w-full placeholder-gray-300' type="text" placeholder='1234 1234 1234 1234' /></p>
              </div>

              <div className='mt-4 lg:mt-0 md:mt-0 md:w-[30%] w-[50%] ' >
                <label className='text-sm '>Expiration Date <span className='text-red-600'>*</span></label>
                <div className='flex items-end w-full '>
                  <p><input className='border border-gray-300 py-1 placeholder-gray-300  focus:outline-none focus:border-primary mt-2 px-2 mr-3 w-[80%]' type="text" placeholder='03' /></p>
                  <span className='text-lg'>/</span>
                  <p><input className='border border-gray-300 focus:outline-none focus:border-primary py-1 mt-2 ml-3 lg:mr-0 md:mr-0 mr-5 px-2 w-[80%] placeholder-gray-300 ' type="text" placeholder='28' /></p>
                </div>
              </div>

              <div className='mt-4 md:mt-0 md:w-[12%] w-[50%]'>
                <label className='text-sm'>CVC <span className='text-red-600'>*</span></label>
                <p><input className='border border-gray-300 mt-2 focus:outline-none focus:border-blue py-1 px-2 w-[90%] md:w-[100%] placeholder-gray-300 ml-4 md:ml-0 focus:border-primary' type="text" placeholder='03' /></p>
              </div>
            </div>
            <div className='mt-4'>
              <label className='text-sm '>Cardholder Name <span className='text-red-600'>*</span></label>
              <p><input className='border border-gray-300 mt-2 focus:outline-none focus:border-blue py-1 px-2 w-[100%] placeholder-gray-300 focus:border-primary' type="text" placeholder='Enter name here' /></p>
              <p className='text-sm mt-5'>
                By continuing, you agree to the Hurak Payments <span className='underline underline-offset-1 text-blue cursor-pointer text-primary-light'>Terms of Service</span> . The <span className='underline underline-offset-1 text-blue cursor-pointer  text-primary-light'>Privacy Notice</span> describes how your data is handled.
              </p>
            </div>
            <div className='flex justify-end mt-5'>
              <button className='mr-4 font-semibold text-lg text-primary-light hover:text-black' onClick={closeModal} >Cancel</button>
              <div className='flex justify-end'>
                <ButtonFill Padding={"lg"} color={"primary"} text={"Save"} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PaymentMethod;