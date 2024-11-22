
'use client';
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { BiBlock } from "react-icons/bi";
import { IoCardOutline } from "react-icons/io5";
import { IoPlayForwardOutline } from "react-icons/io5";

const EarningBlock = () => {

    return (
        <>
            <div className="pt-20">
                <div className="container auto-container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-4">

                        {/* Pay as you Earn Card */}
                        <div className="bg-white rounded-lg shadow-lg p-6 lg:w-1/2">
                            <h2 className="text-center text-3xl font-semibold mb-2">Pay as you Earn</h2>
                            <h5 className="text-center text-lg mb-6">For sales we bring you through our marketplace</h5>

                            <div className="space-y-4">
                                {/* First Row */}
                                <div className="flex items-center justify-center space-x-4">
                                    <div className="text-center">
                                        <h3 className="text-3xl font-bold">3 %</h3>
                                        <p className="text-sm">Card payment transaction fee</p>
                                    </div>
                                    <span className="text-lg font-semibold">+</span>
                                    <div className="text-center">
                                        <h3 className="text-3xl font-bold">20 %</h3>
                                        <p className="text-sm">Marketplace fee</p>
                                    </div>
                                </div>

                                {/* Second Row */}
                                <div className="flex items-center justify-center space-x-4">
                                    <div className="text-center">
                                        <h3 className="text-3xl font-bold">6 %</h3>
                                        <p className="text-sm">BNPL transaction fee</p>
                                    </div>
                                    <span className="text-lg font-semibold">+</span>
                                    <div className="text-center">
                                        <h3 className="text-3xl font-bold">20 %</h3>
                                        <p className="text-sm">Marketplace fee</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="mt-6" />

                            {/* Features */}
                            <div className="space-y-2 mt-4 text-left">
                                <div className="flex items-center space-x-3">
                                    <span className='bg-[#d6f0f5] p-2 rounded-full text-sm text-primary'><BiBlock /></span>
                                    <span>No limits. No hidden fees. No setup fees.</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className='bg-[#d6f0f5] p-2 rounded-full text-sm text-primary'><IoCardOutline /></span>
                                    <span>No monthly fees. Simple & transparent pricing</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className='bg-[#d6f0f5] p-2 rounded-full text-sm text-primary'><IoPlayForwardOutline /></span>
                                    <span>All features included with new ones each year.</span>
                                </div>
                            </div>

                            {/* Button */}
                            <div className="text-center mt-4">
                                <button className="btn btn-danger px-4 py-2 bg-secondary text-white rounded hover:bg-secondary">
                                    Get Started
                                </button>
                            </div>
                        </div>

                        {/* Custom Card */}
                        <div className="bg-[#0c2e4e] rounded-lg shadow-lg p-2 lg:w-1/2 grid grid-cols-1 md:grid-cols-2">
                            <div className='flex flex-col items-start justify-between p-6'>
                                <div>
                                    <h2 className="text-3xl font-semibold text-white mb-3">Custom</h2>
                                    <p className="text text-[#adbdcc] mb-3">
                                        Available for businesses with large payments volume, high-value transactions, L&D/HR use, charities, or other unique business models.
                                    </p>
                                </div>
                                <Link className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 mx-auto md:mx-0" href="#guidance">
                                    Book a call
                                </Link>

                            </div>

                            {/* Features List */}
                            <div className="space-y-2">
                                <ul className="list-none grid gap-1 h-full text-lg">
                                    <li className="py-2 bg-[#1f4468] flex items-center justify-center text-white">High-value courses</li>
                                    <li className="py-2 bg-[#1f4468] flex items-center justify-center text-white">Support & training</li>
                                    <li className="py-2 bg-[#1f4468] flex items-center justify-center text-white">Volume discounts</li>
                                    <li className="py-2 bg-[#1f4468] flex items-center justify-center text-white">Industry-specific rates</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}

export default EarningBlock