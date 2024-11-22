"use client"
import React, { useState, useEffect } from 'react'
import { GoCheckCircle } from "react-icons/go";
import { BiWorld } from "react-icons/bi";
import Skeleton from '@/components/global/Skeletons/Skeleton';
import ButtonFill from '@/components/global/butttons/ButtonFill';

const TestCohortCard = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, []);

    return (
        <section className="rounded border p-5 my-8">
            <div className='flex  w-full'>
                <div className='w-10 hidden md:block'>
                    <span className='h-10 w-10 flex items-center justify-center border border-primary rounded-full '>
                        <BiWorld className="text-primary" />
                    </span>
                </div>

                <div className='flex flex-wrap md:pl-4 items-center w-full'>
                    {loading ? (
                        <div className='w-full md:w-4/6'>
                            <Skeleton style={'h-10 w-[70%] bg-neutral-200 mt-2'} />
                            <Skeleton style={'h-4 w-[90%] bg-neutral-200 mt-3'} />
                            <Skeleton style={'h-4 w-[90%] bg-neutral-200 mt-2'} />
                            <Skeleton style={'h-4 w-[90%] bg-neutral-200 mt-2'} />
                        </div>

                    ) : (
                        <div className='w-full md:w-4/6'>
                            <h3 className="text-2xl font-semibold mb-2 flex items-center">E-learning Session</h3>
                            <p className='flex items-start'>
                                <GoCheckCircle className="text-primary mt-1 mr-1" />
                                <span>Designed to work around your schedule</span>
                            </p>
                            <p className='flex items-start'>
                                <GoCheckCircle className="text-primary mt-1 mr-1" />
                                <span>Complete the course in your own time</span>
                            </p>
                            <p className='flex items-start'>
                                <GoCheckCircle className="text-primary mt-1 mr-1" />
                                <span>Access learning materials from any device</span>
                            </p>
                        </div>
                    )}
                    <div className='w-full md:w-4/12'>
                        {loading ? (
                            <Skeleton style={'h-5 w-[90%] bg-neutral-200 mb-2'} />
                        ) : (
                            <p className="font-bold text-xl mb-2">From £37.50</p>
                        )}
                        <ButtonFill color={"danger"} text={"Book now"} />

                        {/* <button className="bg-danger text-white py-3 rounded text-xl font-bold w-full">Book now</button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestCohortCard;