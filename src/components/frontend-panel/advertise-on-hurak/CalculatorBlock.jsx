'use client';
import ButtonFill from '@/components/global/butttons/ButtonFill';
import React, { useState, useEffect } from 'react';
import { HiOutlineArrowLongLeft } from "react-icons/hi2";

const CalculatorBlock = () => {

    const [coursePrice, setCoursePrice] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('card');

    const transactionFeeRate = paymentMethod === 'card' ? 0.03 : 0.06; // 3% for card, 6% for BNPL

    // Calculate marketplace and outside marketplace amounts based on selected payment method
    const calculateMarketplaceAmount = () => {
        const transactionFee = coursePrice * transactionFeeRate;
        const marketplaceAmount = (coursePrice - transactionFee) * 0.8; // 20% marketplace fee on net amount
        return marketplaceAmount.toFixed(2);
    };

    const calculateOutsideMarketplaceAmount = () => {
        const transactionFee = coursePrice * transactionFeeRate;
        return (coursePrice - transactionFee).toFixed(2);
    };

    return (
        <>
            <div className="py-20 overflow-x-hidden">
                <div className="container auto-container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row lg:justify-center gap-4">

                        {/* Price Calculator Card */}
                        <div className="bg-[#518aaa] shadow-md shadow-top rounded-lg p-6 lg:w-1/2 flex items-center text-white">
                            <div className="w-full">
                                <h4 className="text-center text-2xl font-semibold mb-4">Price Calculator</h4>
                                <div className="mb-4">
                                    <div className="flex space-x-2 p-2 rounded">
                                        <button
                                            className={`w-full py-2 ${paymentMethod === 'card' ? 'bg-gray-200' : 'bg-white'} rounded-md`}
                                            onClick={() => setPaymentMethod('card')}
                                        >
                                            <input
                                                type="radio"
                                                id="PayByCard"
                                                name="PriceCalculator"
                                                value="card"
                                                checked={paymentMethod === 'card'}
                                                onChange={() => setPaymentMethod('card')}
                                                className="hidden"
                                            />
                                            <label htmlFor="PayByCard" className="ml-2 cursor-pointer text-gray-900">Card payment</label>
                                        </button>
                                        <button
                                            className={`w-full py-2 ${paymentMethod === 'laybuy' ? 'bg-gray-200' : 'bg-white'} rounded-md`}
                                            onClick={() => setPaymentMethod('laybuy')}
                                        >
                                            <input
                                                type="radio"
                                                id="PayByLaybuy"
                                                name="PriceCalculator"
                                                value="laybuy"
                                                checked={paymentMethod === 'laybuy'}
                                                onChange={() => setPaymentMethod('laybuy')}
                                                className="hidden"
                                            />
                                            <label htmlFor="PayByLaybuy" className="ml-2 cursor-pointer text-gray-900">BNPL payment</label>
                                        </button>
                                    </div>
                                    <p className="ml-1 mt-2 text-lg">Enter your course price</p>
                                </div>
                                <div className="text-center">
                                    <div className="flex items-center border-b-2 border-white pb-2">
                                        <span className="text-2xl">£</span>
                                        <input
                                            type="number"
                                            placeholder="10"
                                            className="ml-2 w-full border-none focus:outline-none text-lg bg-transparent"
                                            value={coursePrice > 0 ? coursePrice : ""}
                                            onChange={(e) => setCoursePrice(Number(e.target.value))}
                                        />
                                    </div>
                                    <div className='flex justify-center mt-4'>
                                        <ButtonFill widthAuto={"sm"} color={"secondary"} text={"Calculate"} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Calculation Result Card */}
                        <div className="lg:w-1/2">
                            {coursePrice <= 0 ? (
                                <div className="bg-white shadow-md border rounded-lg p-6 flex items-center justify-center min-h-[300px]">
                                    <span className="text-3xl flex items-center"><HiOutlineArrowLongLeft className='inline-block mr-2' />Enter your price</span>
                                </div>
                            ) : (
                                <div className="bg-white shadow-md border rounded-lg p-10 min-h-[300px]">
                                    <div className="mb-6">
                                        <h3 className="text-custom-17 font-semibold">For sales on our marketplace</h3>
                                        <p className="text-sm">
                                            When a sale is made on our marketplace, both the <span className="font-bold">{transactionFeeRate * 100}%</span> transaction fee and 20% marketplace fee apply.
                                            The 20% marketplace fee is applied on the net amount after the transaction fee is applied.
                                            If your course price is £<span>{coursePrice}</span>, you will receive <span className="font-bold">£{calculateMarketplaceAmount()}</span>.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-custom-17 font-semibold">For sales outside of our marketplace</h3>
                                        <p className="text-sm">
                                            When you make a sale outside of the marketplace, only the <span className="font-bold">{transactionFeeRate * 100}%</span> transaction fee applies.
                                            If your course price is £<span>{coursePrice}</span>, you will receive <span className="font-bold">£{calculateOutsideMarketplaceAmount()}</span>.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CalculatorBlock;
