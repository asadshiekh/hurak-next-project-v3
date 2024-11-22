"use client"
import ButtonFill from '@/components/global/butttons/ButtonFill';
import Link from 'next/link';
import React, { useState } from 'react';

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-xl font-semibold mb-6">1 Item in Cart</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Item Section */}
        <div className="md:col-span-2 bg-white shadow-lg rounded-lg p-4 md:px-3 md:py-5">

          <div className="list">
            <div className="flex md:flex-row md:items-center md:justify-between">
              {/* Image */}
              <div className="w-[150px] md:w-[150px]">
                <img
                  src="https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/courses-images/62a905f89916a_cscs%20cl.webp"
                  alt="Course Image"
                  className="object-cover rounded w-full h-auto"
                />
              </div>

              {/* Product Description */}
              <div className="flex-1 ml-4 mt-0 md:mt-0">
                <h3 className="text-lg font-medium">
                  Level 1 Award In Health and Safety in a Construction Environment Course{' '}
                  <span className="bg-yellow-200 text-yellow-800 text-xs font-bold ml-2 py-1 px-2 rounded">Flexi</span>
                </h3>
                <p className="text-sm text-gray-500 mt-1"><span className='font-medium text-black'>Provided by</span> Hurak Learning</p>

                {/* Quantity and Remove */}
                <div className="mt-2 flex items-center space-x-2">
                  {/* Quantity Selector */}
                  <select
                    className="border border-gray-300 rounded-lg px-2 py-1 text-[12px]"
                    value={quantity}
                    onChange={handleQuantityChange}
                  >
                    {[...Array(10).keys()].map((num) => (
                      <option key={num} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>

                  {/* Confirm Quantity Button */}
                  <button className="bg-gray-200 text-gray-700 px-4 py-1 text-[12px]">
                    ✓
                  </button>

                  {/* Remove Button */}
                  <button className="text-blue-500 text-[14px]">Remove</button>
                </div>
              </div>


              {/* Price Section */}
              <div className="mt-4 md:mt-0  hidden md:flex items-center justify-end">
                <span className='text-[12px] font-medium mr-1'>1x</span>
                <p className="text-sm line-through text-red-500 mr-2">£249.99</p>
                <p className="text-xl font-medium text-red-500">£149.99</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex md:hidden items-center justify-end">
              <span className='text-[12px] font-medium mr-1'>1x</span>
              <p className="text-sm line-through text-red-500 mr-2">£249.99</p>
              <p className="text-xl font-medium text-red-500">£149.99</p>
            </div>
          </div>

          <div className="list mt-[30px]">
            <div className="flex md:flex-row md:items-center md:justify-between">
              {/* Image */}
              <div className="w-[150px] md:w-[150px]">
                <img
                  src="https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/courses-images/62a905f89916a_cscs%20cl.webp"
                  alt="Course Image"
                  className="object-cover rounded w-full h-auto"
                />
              </div>

              {/* Product Description */}
              <div className="flex-1 ml-4 mt-0 md:mt-0">
                <h3 className="text-lg font-medium">
                  Level 1 Award In Health and Safety in a Construction Environment Course{' '}
                  <span className="bg-yellow-200 text-yellow-800 text-xs font-bold ml-2 py-1 px-2 rounded">Flexi</span>
                </h3>
                <p className="text-sm text-gray-500 mt-1"><span className='font-medium text-black'>Provided by</span> Hurak Learning</p>

                {/* Quantity and Remove */}
                <div className="mt-2 flex items-center space-x-2">
                  {/* Quantity Selector */}
                  <select
                    className="border border-gray-300 rounded-lg px-2 py-1 text-[12px]"
                    value={quantity}
                    onChange={handleQuantityChange}
                  >
                    {[...Array(10).keys()].map((num) => (
                      <option key={num} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>

                  {/* Confirm Quantity Button */}
                  <button className="bg-gray-200 text-gray-700 px-4 py-1 text-[12px]">
                    ✓
                  </button>

                  {/* Remove Button */}
                  <button className="text-blue-500 text-[14px]">Remove</button>
                </div>
              </div>

              {/* Price Section */}
              <div className="mt-4 md:mt-0  hidden md:flex items-center justify-end">
                <span className='text-[12px] font-medium mr-1'>1x</span>
                <p className="text-sm line-through text-red-500 mr-2">£249.99</p>
                <p className="text-xl font-medium text-red-500">£149.99</p>
              </div>
            </div>
            <div className="mt-4 md:mt-0 flex md:hidden items-center justify-end">
              <span className='text-[12px] font-medium mr-1'>1x</span>
              <p className="text-sm line-through text-red-500 mr-2">£249.99</p>
              <p className="text-xl font-medium text-red-500">£149.99</p>
            </div>
          </div>
        </div>

        {/* Price Summary Section */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-2xl font-bold">£149.99</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Subtotal:</span>
            <span>£149.99</span>
          </div>

          {/* Proceed Button */}
          <Link href="#"><ButtonFill color={"danger"} text={"Proceed"} /></Link>

          {/* Coupon Code */}
          <div className="flex flex-row md:space-y-0  mb-4 mt-3">
            <input
              type="text"
              placeholder="Enter Coupon"
              className="border w-[50px] border-gray-300 text-sm outline-none focus:border-primaryBlue lg:p-2 py-2 pl-1 flex-1  lg:mb-0"
            />
            <button className="bg-red-500 pb-0 mb-0 text-white mt-0 pt-0 text-sm lg:px-6 md:px-2 px-4 font-[600] hover:bg-red-600 transition">
              Apply
            </button>
          </div>

          {/* Klarna Payment Option */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Pay 3 monthly interest-free payments with
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
