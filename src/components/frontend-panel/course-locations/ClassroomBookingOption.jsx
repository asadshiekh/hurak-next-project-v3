"use client";
import React, { useState } from 'react';
import { LuCalendarDays, LuAlarmClock } from "react-icons/lu";
import { GoPerson, GoDash, GoPlus } from "react-icons/go";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { LiaUniversitySolid } from "react-icons/lia";
import ButtonFill from '@/components/global/butttons/ButtonFill';


const ClassroomBookingOption = () => {
    const RelatedCourses = [
        {
            venu: 'London - (East) (Canary Wharf)',
            address: '10 Tiller Road, London, UK, E14 8PX',
            average_price: '29',
            locations: [
                {
                    id: 1,
                    date: 'Sat 31st Aug - Sun 1st Sep',
                    time: '9:00 AM - 6:30 PM',
                    address: 'Day 1: 0900-1330 EFAW, 1400-2000 Top-up Door',
                    provider: 'Hurak Provider',
                    seatsLeft: '17'
                },
                {
                    id: 2,
                    date: 'Sat 31st Aug - Sun 1st Sep',
                    time: '9:00 AM - 6:30 PM',
                    address: 'Day 1: 0900-1330 EFAW, 1400-2000 Top-up Door',
                    provider: 'Hurak Provider',
                    seatsLeft: '17'
                },
                {
                    id: 3,
                    date: 'Sat 31st Aug - Sun 1st Sep',
                    time: '9:00 AM - 6:30 PM',
                    address: 'Day 1: 0900-1330 EFAW, 1400-2000 Top-up Door',
                    provider: 'Hurak Provider',
                    seatsLeft: '17'
                },
                {
                    id: 4,
                    date: 'Sat 31st Aug - Sun 1st Sep',
                    time: '9:00 AM - 6:30 PM',
                    address: 'Day 1: 0900-1330 EFAW, 1400-2000 Top-up Door',
                    provider: 'Hurak Provider',
                    seatsLeft: '17'
                },
            ]
        },
        {
            venu: 'London - (East) (Canary Wharf)',
            address: '10 Tiller Road, London, UK, E14 8PX',
            average_price: '29',
            locations: [
                {
                    id: 1,
                    date: 'Sat 31st Aug - Sun 1st Sep',
                    time: '9:00 AM - 6:30 PM',
                    address: 'Day 1: 0900-1330 EFAW, 1400-2000 Top-up Door',
                    provider: 'Hurak Provider',
                    seatsLeft: '17'
                },
                {
                    id: 2,
                    date: 'Sat 31st Aug - Sun 1st Sep',
                    time: '9:00 AM - 6:30 PM',
                    address: 'Day 1: 0900-1330 EFAW, 1400-2000 Top-up Door',
                    provider: 'Hurak Provider',
                    seatsLeft: '17'
                },
                {
                    id: 3,
                    date: 'Sat 31st Aug - Sun 1st Sep',
                    time: '9:00 AM - 6:30 PM',
                    address: 'Day 1: 0900-1330 EFAW, 1400-2000 Top-up Door',
                    provider: 'Hurak Provider',
                    seatsLeft: '17'
                },
                {
                    id: 4,
                    date: 'Sat 31st Aug - Sun 1st Sep',
                    time: '9:00 AM - 6:30 PM',
                    address: 'Day 1: 0900-1330 EFAW, 1400-2000 Top-up Door',
                    provider: 'Hurak Provider',
                    seatsLeft: '17'
                },
            ]
        }
    ];

    const [quantities, setQuantities] = useState(
        RelatedCourses.reduce((acc, course, courseIndex) => {
            course.locations.forEach((location) => {
                acc[`${courseIndex}-${location.id}`] = 1;
            });
            return acc;
        }, {})
    );


    const [expandedCourses, setExpandedCourses] = useState({});

    const increaseQuantity = (courseIndex, id) => {
        const key = `${courseIndex}-${id}`;
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [key]: prevQuantities[key] + 1,
        }));
    };

    const decreaseQuantity = (courseIndex, id) => {
        const key = `${courseIndex}-${id}`;
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [key]: prevQuantities[key] > 1 ? prevQuantities[key] - 1 : 1,
        }));
    };

    const handleQuantityChange = (e, courseIndex, id) => {
        const value = parseInt(e.target.value, 10);
        const key = `${courseIndex}-${id}`;
        if (!isNaN(value) && value >= 1) {
            setQuantities((prevQuantities) => ({
                ...prevQuantities,
                [key]: value,
            }));
        }
    };


    const toggleCourseVisibility = (courseIndex) => {
        setExpandedCourses((prevExpanded) => ({
            ...prevExpanded,
            [courseIndex]: !prevExpanded[courseIndex],
        }));
    };

    return (
        <section className="course-features">
            <div className="w-full bg-white mb-10">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold pb-5">SIA Course Venue Session</h2>
                    <div className="grid grid-cols-12 border rounded-xl lg:h-[550px] overflow-hidden">
                        <div className="text-lg col-span-12 lg:col-span-6 p-5 lg:overflow-y-auto">
                            {RelatedCourses.map((course, courseIndex) => (
                                <div key={courseIndex} className="md:col-span-12 py-2 px-2">
                                    <div className="flex justify-between items-center">
                                        <div className="pb-2">
                                            <p className="text-2xl">{course.venu}</p>
                                            <p className="text-sm">{course.address}</p>
                                            <p className="text-danger text-xl font-bold">From £{course.average_price}</p>
                                        </div>
                                        <div className=''>
                                            {RelatedCourses.length > 1 ? (
                                                <button
                                                    onClick={() => toggleCourseVisibility(courseIndex)}
                                                    className="text-xl cursor-pointer"
                                                >
                                                    {expandedCourses[courseIndex] ? (
                                                        <span className='flex justify-center items-end text-base'> Hide dates <FaChevronUp className="font-bold bg-[#0f7c90]  rounded-full text-white p-1 ml-1 text-xl " /></span>
                                                    ) : (
                                                        <span className='flex justify-center items-end text-base'>Show dates<FaChevronDown className="font-bold bg-[#0f7c90] rounded-full text-white p-1 ml-1 text-xl" /></span>
                                                    )}
                                                </button>
                                            ) : null}
                                        </div>
                                    </div>
                                    {(RelatedCourses.length === 1 || expandedCourses[courseIndex]) && course.locations.map((location) => (
                                        <div key={location.id} className='pt-2'>
                                            <div className="sm:flex justify-between py-2">
                                                <div className="flex justify-center items-center">
                                                    <div>
                                                        <div className="flex text-base">
                                                            <span className="flex justify-center pr-2 pt-2">
                                                                <LuCalendarDays />
                                                            </span>
                                                            <div>
                                                                <div>{location.date}</div>
                                                                <div>{location.address}</div>
                                                            </div>
                                                        </div>
                                                        <div className="flex text-base pt-2">
                                                            <span className="flex justify-center items-center pr-2">
                                                                <LuAlarmClock />
                                                            </span>
                                                            <span>{location.time}</span>
                                                        </div>
                                                        <div className="flex text-base pt-2">
                                                            <span className="flex justify-center items-center pr-2">
                                                                <LiaUniversitySolid />
                                                            </span>
                                                            <span>{location.provider}</span>
                                                        </div>
                                                        <div className="flex text-base pt-2">
                                                            <span className="flex justify-center items-center pr-2">
                                                                <GoPerson />
                                                            </span>
                                                            <span className="text-danger">
                                                                Hurry! Only {location.seatsLeft} seats left
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-lg pt-5 sm:pt-0">
                                                    <div className="text-[16px]">Price per delegate</div>
                                                    <div className='font-[600]'>From £{course.average_price} <span className='text-[10px] font-[400]'>all inc</span></div>
                                                    <div className="text-sm">number of delegates</div>
                                                    <div className="flex items-center">
                                                        <button
                                                            type="button"
                                                            className=" h-8  w-8 text-slate-500 btn border-2 rounded-full flex justify-center items-center hover:bg-[#343a40] hover:text-white"
                                                            onClick={() => decreaseQuantity(courseIndex, location.id)}
                                                        >
                                                            <GoDash size={15} />
                                                        </button>
                                                        <input
                                                            value={quantities[`${courseIndex}-${location.id}`] || 1}
                                                            type="number"
                                                            className="border-0 w-10 h-8 text-center ml-3"
                                                            min="1"
                                                            onChange={(e) => handleQuantityChange(e, courseIndex, location.id)}
                                                        />
                                                        <button
                                                            type="button"
                                                            className="h-8  w-8 btn border-2 rounded-full flex justify-center items-center hover:bg-[#343a40] hover:text-white"
                                                            onClick={() => increaseQuantity(courseIndex, location.id)}
                                                        >
                                                            <GoPlus size={15} />
                                                        </button>
                                                    </div>
                                                    <div className="my-2 w-full sm:w-auto">

                                                        <ButtonFill color={"danger"} text={"Book Now"} />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className='border'></div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div className="text-lg col-span-12 lg:col-span-6 h-[550px] overflow-hidden">
                            <div className="relative inset-0 flex justify-center items-center h-full">
                                <img
                                    src="/images/Map.png"
                                    alt="Map"
                                    className="absolute w-full h-auto object-cover"
                                />
                                <div className="z-50">
                                    <ButtonFill color={"danger"} text={"Explore Location"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClassroomBookingOption;
