import Link from 'next/link';
import React from 'react'
import { IoMdCheckmark } from "react-icons/io";
const OrderConfirmation = () => {
return (
<div>
   {/* banner */}
   <section className='py-20 text-center bg-gray-100 text-xl'>
      <div className='bg-[#4be1a0] h-[50px] w-[50px] p-2 flex items-center justify-center text-2xl rounded-full text-white mx-auto mb-5'>
         <IoMdCheckmark className='inline-block'/>
      </div>
      <h4 className='mb-3'>Thanks for placing your order on Hurak</h4>
      <p>Order # <strong>12345678</strong></p>
   </section>
   {/* banner end */}
   <section className='cmain px-10'>
      <div className='container mx-auto'>
         {/* customer information */}
         <section className='py-10 grid grid-cols-1 md:grid-cols-2  gap-10'>
            <div>
               <h4 className='text-xl font-medium mb-2'>Customer Information</h4>
               <h6 className='text-lg font-medium mb-2'>Jhon Doe</h6>
               <p className='mb-3'>( xirire3763@acroins.com )</p>
               <ul className='space-y-3'>
                  <li><strong className='font-medium'>Phone Number :</strong>2345678900</li>
                  <li><strong className='font-medium'>Payment Method :</strong> visa - 4242</li>
                  <li><strong className='font-medium'>Receipt Sent to :</strong>xirire3763@acroins.com</li>
               </ul>
            </div>
            {/* order summary */}
            <div>
               <div className='border shadow-sm p-4 w-full lg:w-3/4 ml-auto'>
                  <h4 className='text-xl font-medium mb-2'>Order Summary</h4>

                  <div className='order_list'>
                      <div className='grid grid-cols-2 mt-4'>
                        <p className='text-[11px] font-normal text-left'>1 x Fire Marshal (Fire Warden) Course</p>
                        <p className='text-[11px] font-normal text-right'>£ 29.99</p>
                      </div>
                      <div className='grid grid-cols-2 mt-4'>
                        <p className='text-[11px] font-normal text-left'>1 x Fire Marshal (Fire Warden) Course</p>
                        <p className='text-[11px] font-normal text-right'>£ 29.99</p>
                      </div>
                  </div>

                  <div className='border-t flex items-center justify-between py-4 mt-4'>
                     <p>Order total</p>
                     <p>£ 29.99</p>
                  </div>
               </div>
            </div>
            {/* order summary end */}
         </section>
         {/* customer information end */}
         {/* delegates information */}
         <section className='border-t mt-5 py-10'>
            <div className="delegate-block sm:p-6 mb-5 md:mb-0">
               <h5 className="text-[16px] font-medium">
                  <strong className='font-normal'>Delegate Name:</strong> Test testing
               </h5>
               <h4 className="text-[18px] text-[##39364f] mt-1 mb-2 sm:mb-3 font-medium">
                  Traffic Banksman (Traffic Marshal) Training Course (Saver)
               </h4>
               <p className="mb-2 sm:mb-3 font-medium text-[13px]">
                  <strong className='font-normal'>Provider name:</strong> 
                  <Link  href="#" className='underline ml-1'>
                  Hurak Learning</Link>
               </p>
               <ul className="flex flex-col sm:flex-row sm:space-x-4 lg:space-x-20 items-start sm:items-center">
                  <li className="mb-2 sm:mb-0 ">
                     <h6 className=" uppercase font-medium text-[12px]">JOINING INSTRUCTIONS SENT TO</h6>
                     <p className="text-[12px] font-normal">xirire3763@acroins.com</p>
                  </li>
                  <li className="mb-2 sm:mb-0 ">
                     <h6 className=" uppercase font-medium text-[12px]">JOINING INSTRUCTIONS SENT TO</h6>
                     <p className="text-[12px] font-normal">xirire3763@acroins.com</p>
                  </li>
                  <li className="mb-2 sm:mb-0">
                     <h6 className=" uppercase font-medium text-[12px]">JOINING INSTRUCTIONS SENT TO</h6>
                     <p className="text-[12px] font-normal">xirire3763@acroins.com</p>
                  </li>
               </ul>
            </div>
            <hr className='mb-5 md:mb-0'>
            </hr>
            <div className="delegate-block sm:p-6 mb-5 md:mb-0">
               <h5 className="text-[16px] font-medium">
                  <strong className='font-normal'>Delegate Name:</strong> Test testing
               </h5>
               <h4 className="text-[18px] text-[##39364f] mt-1 mb-2 sm:mb-3 font-medium">
                  Traffic Banksman (Traffic Marshal) Training Course (Saver)
               </h4>
               <p className="mb-2 sm:mb-3 font-medium text-[13px]">
                  <strong className='font-normal'>Provider name:</strong> 
                  <Link  href="#" className='underline ml-1'>
                  Hurak Learning</Link>
               </p>
               <ul className="flex flex-col sm:flex-row sm:space-x-4 lg:space-x-20 items-start sm:items-center">
                  <li className="mb-2 sm:mb-0 ">
                     <h6 className=" uppercase font-medium text-[12px]">JOINING INSTRUCTIONS SENT TO</h6>
                     <p className="text-[12px] font-normal">xirire3763@acroins.com</p>
                  </li>
                  <li className="mb-2 sm:mb-0 ">
                     <h6 className=" uppercase font-medium text-[12px]">JOINING INSTRUCTIONS SENT TO</h6>
                     <p className="text-[12px] font-normal">xirire3763@acroins.com</p>
                  </li>
                  <li className="mb-2 sm:mb-0">
                     <h6 className=" uppercase font-medium text-[12px]">JOINING INSTRUCTIONS SENT TO</h6>
                     <p className="text-[12px] font-normal">xirire3763@acroins.com</p>
                  </li>
               </ul>
            </div>
         </section>
         {/* delegates information end */}
      </div>
   </section>
</div>
)
}
export default OrderConfirmation