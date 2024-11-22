import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { GoOrganization } from "react-icons/go";
import { VscSymbolMethod } from "react-icons/vsc";
import { BsCart2 } from "react-icons/bs";
import { RiExternalLinkLine } from "react-icons/ri";
import Skeleton from '@/components/global/Skeletons/Skeleton';
import ButtonOutline from './butttons/ButtonOutline';
import ButtonFill from './butttons/ButtonFill';
import BasicModal from './modal-windows/BasicModal';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { PiGraduationCapLight } from "react-icons/pi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { CiLaptop } from "react-icons/ci";
import { LiaGlobeSolid } from "react-icons/lia";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { VscCalendar } from "react-icons/vsc";
import { LiaSortAmountUpSolid, LiaUniversitySolid, LiaStopwatchSolid } from "react-icons/lia";
import { PiGraduationCap } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";

const HorizontalCourseCards = () => {

    const [openCourse, setOpenCourse] = useState(false);
    const togglecourseOpen = () => setOpenCourse(!openCourse);

    // CLASSROOM
    const [isCourseOpenModal, setCourseOpenModel] = useState(false);
    const [showDates, setShowDates] = useState(false); // Global toggle for showing all courses
    const [count, setCount] = useState(1);

    const courseOpen = () => setCourseOpenModel(true);
    const courseClose = () => setCourseOpenModel(false);
    const increment = () => setCount(count + 1);
    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    const toggleDates = () => setShowDates(!showDates);

    // LIVE
    const [openCourseLive, setOpenCourseLive] = useState(false);
    const togglecourseOpenLive = () => setOpenCourseLive(!openCourseLive);
    const [showDatesLive, setShowDatesLive] = useState(false);

    // self placed
    const [openCoursePlaced, setOpenCoursePlaced] = useState(false);
    const togglecourseOpenPlaced = () => setOpenCoursePlaced(!openCoursePlaced);
    const [showDatesPlaced, setShowDatesPlaced] = useState(false);

    const courses = [
        { course: "Birmingham (B19 3NY)", address: "89-91 Hatchett St, Birmingham, UK, B19 3NY", price: "£200", date: "Sat 17th Aug - Sun 1st Sep", time: "9:00 AM - 5:00 PM", academy: "T4E" },
        { course: "Burnley (BB10 1LX)", address: "89-91 Hatchett St, Birmingham, UK, B19 3NY", price: "£193", date: "Sat 17th Aug - Sun 1st Sep", time: "9:00 AM - 5:00 PM", academy: "T4E" },
        { course: "Dartford", address: "89-91 Hatchett St, Birmingham, UK, B19 3NY", price: "£432", date: "Sat 17th Aug - Sun 1st Sep", time: "9:00 AM - 5:00 PM", academy: "T4E" },
    ];

    const allcourses = [
        {
            id: "1", image: "/images/sia-card.webp", name: "course", description: "Start your career in construction with our 1-day RQF Level 1 Health and Safety in a Construction Env..", provider: "2 Course providers", study: "Multiple study options", price: "£79.99", discount: "27% Off",
        },
        {
            id: "2", image: "/images/sia-card.webp", name: "course", description: "Start your career in construction with our 1-day RQF Level 1 Health and Safety in a Construction Env..", provider: "2 Course providers", study: "Multiple study options", price: "£79.99", discount: "27% Off",
        },
        {
            id: "3", image: "/images/sia-card.webp", name: "course", description: "Start your career in construction with our 1-day RQF Level 1 Health and Safety in a Construction Env..", provider: "2 Course providers", study: "Multiple study options", price: "£79.99", discount: "27% Off",
        },
        {
            id: "4", image: "/images/sia-card.webp", name: "course", description: "Start your career in construction with our 1-day RQF Level 1 Health and Safety in a Construction Env..", provider: "2 Course providers", study: "Multiple study options", price: "£79.99", discount: "27% Off",
        },
        {
            id: "5", image: "/images/sia-card.webp", name: "course", description: "Start your career in construction with our 1-day RQF Level 1 Health and Safety in a Construction Env..", provider: "2 Course providers", study: "Multiple study options", price: "£79.99", discount: "27% Off",
        }

    ]
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, []);
    return (
        <>
            <div className='py-5 '>
                {
                    allcourses.map((course) => (

                        <div className='grid grid-cols-1 md:grid-cols-4 gap-5 border-b py-5'>
                            {loading ? (
                                <Skeleton style={"h-32 w-[100%] bg-neutral-200"} />
                            ) : (
                                <div className='md:col-span-1'>
                                    {/* <Image src='/images/sia-card.webp' */}
                                    <Image src={course.image}
                                        alt="CSCS Green Card Certiciate"
                                        layout="intrinsic"
                                        width={250}
                                        height={50}
                                        loading="lazy"
                                        className='rounded-md'
                                    />
                                </div>
                            )}
                            <div className='md:col-span-3'>
                                <div className='grid grid-cols-1 md:grid-cols-4 gap-2'>
                                    {loading ? (
                                        <div className='col-span-3'>
                                            <Skeleton style={"h-4 w-[100%] bg-neutral-200 mb-2"} />
                                            <Skeleton style={"h-3 w-[70%] bg-neutral-200 mb-2"} />
                                            <Skeleton style={"h-3 w-[40%] bg-neutral-200 "} />
                                            <div className='flex space-x-5 pt-5'>
                                                <Skeleton style={"h-3 w-[30%] bg-neutral-200 "} />
                                                <Skeleton style={"h-3 w-[30%] bg-neutral-200 "} />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='col-span-3'>
                                            <h4 className='text-xl font-semibold mb-1'>{course.name}</h4>
                                            <p className='mb-2 text-lg'>{course.description}</p>
                                            <ul className='flex space-x-5'>
                                                <li><GoOrganization className='inline-block' /> {course.provider}</li>
                                                <li><VscSymbolMethod className='inline-block' /> {course.study}</li>
                                            </ul>
                                        </div>
                                    )}
                                    {loading ? (
                                        <div className='col-span-1'>
                                            <Skeleton style={"h-4 w-[100%] bg-neutral-200 mb-2"} />
                                            <Skeleton style={"h-3 w-[100%] bg-neutral-200 mb-2"} />
                                        </div>
                                    )
                                        : (
                                            <div className='col-span-1 md:text-right'>
                                                <p className='text-xl mb-3'>From <strong>{course.price}</strong></p>
                                                <p className='text-sm'><del>£249.99</del> {course.discount}</p>
                                            </div>
                                        )}
                                </div>
                                <div className='md:text-right flex justify-end mt-3'>
                                    {/* <Link href="course/sia-door-supervisor-training-course" className='text-primary px-5 py-3 rounded-md border border-primary transition duration-300 ease-in-out text-base mr-2'>
                                <RiExternalLinkLine className='inline-block mt-[-4px] mr-1' />More details
                            </Link> */}

                                    <div className='mr-3'>
                                        <Link href="course/sia-door-supervisor-training-course">
                                            <ButtonOutline IconLeft={<RiExternalLinkLine />}
                                                widthAuto={"auto"}
                                                size={"sm"}
                                                color={"primary"}
                                                text={`More details`}
                                            />
                                        </Link>
                                    </div>

                                    {/* <Link href=""> */}
                                    <ButtonFill handelClick={courseOpen} IconLeft={<RiExternalLinkLine />}
                                        widthAuto={"auto"}
                                        size={"sm"}
                                        color={"danger"}
                                        text={`Add to basket`}
                                    />
                                    {/* </Link> */}
                                </div>
                            </div>
                        </div>
                    ))}

                {/* MODAL START */}

                {isCourseOpenModal && (
                    <BasicModal size={'lg'} scrollable={false} staticBackdrop={true} >
                        <div className="bg-white px-3 py-3 rounded shadow-lg pb-32">
                            <div className='flex justify-between border-b pb-4'>
                                <p className='font-[500] text-2xl'>Booking options</p>
                                <div onClick={courseClose} className='cursor-pointer'>
                                    <IoIosCloseCircleOutline className='text-3xl text-gray-500' />
                                </div>
                            </div>

                            {/* CLASSROOM LEARNING SECTION START*/}
                            <div className='p-6 border my-3 rounded'>
                                <div className={`flex justify-between  ${openCourse ? 'border-b pb-4' : ''}`}>
                                    <div className='flex items-center'>
                                        <div className='text-xl mr-2 border p-2 text-primary border-primary rounded-full'><PiGraduationCapLight /></div>
                                        <p className='text-xl '>Classroom Learning</p>
                                    </div>
                                    {openCourse && (
                                        <div>
                                            <button onClick={togglecourseOpen} className='text-gray-400'>x</button>
                                        </div>
                                    )}
                                </div>

                                {!openCourse && (
                                    <div className='flex md:flex-nowrap flex-wrap justify-between items-center mt-4'>
                                        <div>
                                            <div className='flex items-center mb-2'>
                                                <IoIosCheckmarkCircleOutline className='text-primary mr-2' />
                                                <p className='font-[500]'>Focused study away from the workplace</p>
                                            </div>
                                            <div className='flex items-center mb-2'>
                                                <IoIosCheckmarkCircleOutline className='text-primary mr-2' />
                                                <p className='font-[500]'>Focused study away from the workplace</p>
                                            </div>
                                            <div className='flex items-center'>
                                                <IoIosCheckmarkCircleOutline className='text-primary mr-2' />
                                                <p className='font-[500]'>Focused study away from the workplace</p>
                                            </div>
                                        </div>

                                        <div>
                                            <p className='font-[600] text-lg'>From £89.99 <span className='text-sm font-normal'>All inc</span> </p>
                                            <div className='mt-2'>
                                                <ButtonFill
                                                    handelClick={togglecourseOpen}
                                                    widthAuto={"auto"}
                                                    Padding={"2xl"}
                                                    color={"primary"}
                                                    text={"See Dates"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div>
                                    {courses.map((course, index) => (
                                        // <div key={index} className={`w-full ${openCourse ? 'border-b-2 pb-3' : ''} mt-4`}>
                                        <div key={index} className={`w-full mt-4`}>
                                            {openCourse && (
                                                <div className="w-full border-b pb-5 flex items-center justify-between">
                                                    <div>
                                                        <p className="text-2xl mb-1">{course.course}</p>
                                                        <p>{course.address}</p>
                                                        <p className="text-xl text-danger font-bold mt-3">From {course.price}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-md flex items-center cursor-pointer" onClick={toggleDates}>
                                                            {showDates ? "Hide Dates" : "Show Dates"}
                                                            {showDates ? (
                                                                <MdKeyboardArrowUp className="ml-2 bg-primary h-5 w-5 text-white rounded-full" />
                                                            ) : (
                                                                <MdKeyboardArrowDown className="ml-2 bg-primary h-5 w-5 text-white rounded-full" />
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                            {openCourse && (
                                                <div>
                                                    {showDates && (
                                                        <div className={`w-full   border-b pb-5 mt-5 mb-4 flex md:flex-nowrap flex-wrap items-center justify-between`}>
                                                            <div className=' w-8/12 mr-5 '>
                                                                <p className="text-md mb-1 flex items-center">
                                                                    <VscCalendar className="mr-3" /> {course.date}
                                                                </p>
                                                                <p className="ml-7 text-sm">
                                                                    Weekend courses split over 3 weeks (Saturday and Sunday only)
                                                                </p>
                                                                <p className="text-md mb-1 flex items-center mt-4">
                                                                    <LiaStopwatchSolid className="mr-3" /> {course.time}
                                                                </p>
                                                                <p className="text-md mb-1 flex items-center">
                                                                    <LiaUniversitySolid className="mr-3" /> {course.academy}
                                                                </p>
                                                            </div>
                                                            <div className="w-4/12 ml-3">
                                                                <p className="text-md">Price per delegate</p>
                                                                <p className="text-xl font-medium">
                                                                    From {course.price} <span className="text-xs">All inc</span>
                                                                </p>
                                                                <p className="text-xs mt-3 mb-2">Number of delegates</p>
                                                                <div className="flex items-center mb-3">
                                                                    <button
                                                                        onClick={decrement}
                                                                        className="w-8 h-8 text-lg hover:bg-black hover:text-white border rounded-full text-center cursor-pointer"
                                                                    >
                                                                        -
                                                                    </button>
                                                                    <input
                                                                        type="text"
                                                                        value={count}
                                                                        readOnly
                                                                        className="text-center p-1 w-16  mx-2"
                                                                    />
                                                                    <button
                                                                        onClick={increment}
                                                                        className="w-8 h-8 text-lg hover:bg-black hover:text-white border rounded-full text-center cursor-pointer"
                                                                    >
                                                                        +
                                                                    </button>
                                                                </div>
                                                                <ButtonFill color={"danger"} text={"Book Now"} />

                                                                {/* <button className="bg-danger text-white font-semibold px-8 py-2 mt-2 rounded">
                                                                    Book Now
                                                                </button> */}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )}

                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* END CLASSROOM LEARNING SECTION */}

                            {/* SECOND LIVE SECTION */}
                            <div className='p-6 border my-3 rounded'>
                                <div className={`flex justify-between ${openCourseLive ? 'border-b pb-4' : ''}`}>
                                    <div className='flex items-center'>
                                        <div className='text-xl mr-2 border p-2 text-primary border-primary rounded-full'><CiLaptop /></div>
                                        <p className='text-xl '>Live Online Virtual Class</p>
                                    </div>
                                    {openCourseLive && (
                                        <div>
                                            <button onClick={togglecourseOpenLive} className='text-gray-400'>x</button>
                                        </div>
                                    )}
                                </div>
                                {/* {!openCourse && ( */}
                                {!openCourseLive && (
                                    <div className='flex md:flex-nowrap flex-wrap justify-between items-center mt-4'>
                                        <div>
                                            <div className='flex items-center mb-2'>
                                                <IoIosCheckmarkCircleOutline className='text-primary mr-2' />
                                                <p className='font-[500]'>Focused study away from the workplace</p>
                                            </div>
                                            <div className='flex items-center mb-2'>
                                                <IoIosCheckmarkCircleOutline className='text-primary mr-2' />
                                                <p className='font-[500]'>Focused study away from the workplace</p>
                                            </div>
                                            <div className='flex items-center'>
                                                <IoIosCheckmarkCircleOutline className='text-primary mr-2' />
                                                <p className='font-[500]'>Focused study away from the workplace</p>
                                            </div>
                                        </div>

                                        <div>
                                            <p className='font-[600] text-lg'>From £89.99 <span className='text-sm font-normal'>All inc</span> </p>
                                            <div className='mt-2'>
                                                <ButtonFill
                                                    handelClick={togglecourseOpenLive}
                                                    widthAuto={"auto"}
                                                    Padding={"2xl"}
                                                    color={"primary"}
                                                    text={"See Dates"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* jkjdjdkjdfdffd */}

                                <div>
                                    {courses.map((course, index) => (
                                        <div key={index} className="w-full mt-4">
                                            {openCourseLive && (
                                                <div className={`w-full border-b pb-5 mt-5 mb-4 flex md:flex-nowrap flex-wrap items-center justify-between`}>
                                                    <div className='w-8/12 mr-4'>
                                                        <p className="text-md mb-1 flex items-center">
                                                            <VscCalendar className="mr-3" /> {course.date}
                                                        </p>

                                                        <p className="text-md mb-1 flex items-center ">
                                                            <LiaStopwatchSolid className="mr-3" /> {course.time}
                                                        </p>
                                                        <p className="text-md mb-1 flex items-center">
                                                            <LiaUniversitySolid className="mr-3" /> {course.academy}
                                                        </p>
                                                    </div>
                                                    <div className="w-4/12 ml-5">
                                                        <p className="text-md">Price per delegate</p>
                                                        <p className="text-xl font-medium">
                                                            From {course.price} <span className="text-xs">All inc</span>
                                                        </p>
                                                        <p className="text-xs mt-3 mb-2">Number of delegates</p>
                                                        <div className="flex items-center mb-3">
                                                            <button
                                                                onClick={decrement}
                                                                className="w-8 h-8 text-lg hover:bg-black hover:text-white border rounded-full text-center cursor-pointer"
                                                            >
                                                                -
                                                            </button>
                                                            <input
                                                                type="text"
                                                                value={count}
                                                                readOnly
                                                                className="text-center p-1 w-16 mx-2"
                                                            />
                                                            <button
                                                                onClick={increment}
                                                                className="w-8 h-8 text-lg hover:bg-black hover:text-white border rounded-full text-center cursor-pointer"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                        <ButtonFill
                                                            color={"danger"}
                                                            text={"Book Now"}
                                                        />
                                                        {/* <button className="bg-danger text-white font-semibold px-8 py-2 mt-2 rounded">
                                                            Book Now
                                                        </button> */}
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    ))}
                                </div>

                                {/* kjdnkdskvkdsvkdskv */}
                            </div>
                            {/*SECOND LIVE SECTION END */}



                            {/* Third Self Placed SECTION START */}
                            <div className='p-6 border my-3 rounded'>
                                <div className={`flex justify-between ${openCoursePlaced ? 'border-b pb-4' : ''}`}>
                                    <div className='flex items-center'>
                                        <div className='text-xl mr-2 border p-2 text-primary border-primary rounded-full'><LiaGlobeSolid /></div>
                                        <p className='text-xl '>Self-Paced E-Learning</p>
                                    </div>
                                    {openCoursePlaced && (
                                        <div>
                                            <button onClick={togglecourseOpenPlaced} className='text-gray-400'>x</button>
                                        </div>
                                    )}
                                </div>
                                {/* {!openCourse && ( */}
                                {!openCoursePlaced && (
                                    <div className='flex md:flex-nowrap flex-wrap justify-between items-center mt-4'>
                                        <div>
                                            <div className='flex items-center mb-2'>
                                                <IoIosCheckmarkCircleOutline className='text-primary mr-2' />
                                                <p className='font-[500]'>Focused study away from the workplace</p>
                                            </div>
                                            <div className='flex items-center mb-2'>
                                                <IoIosCheckmarkCircleOutline className='text-primary mr-2' />
                                                <p className='font-[500]'>Focused study away from the workplace</p>
                                            </div>
                                            <div className='flex items-center'>
                                                <IoIosCheckmarkCircleOutline className='text-primary mr-2' />
                                                <p className='font-[500]'>Focused study away from the workplace</p>
                                            </div>
                                        </div>

                                        <div>
                                            <p className='font-[600] text-lg'>From £89.99 <span className='text-sm font-normal'>All inc</span> </p>
                                            <div className='mt-2'>
                                                <ButtonFill
                                                    handelClick={togglecourseOpenPlaced}
                                                    widthAuto={"auto"}
                                                    Padding={"2xl"}
                                                    color={"primary"}
                                                    text={"See Dates"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* jkjdjdkjdfdffd */}

                                <div>
                                    {courses.map((course, index) => (
                                        <div key={index} className="w-full mt-4">

                                            {openCoursePlaced && (

                                                <div className="w-full pb-5 border-b mt-5 mb-4 flex md:flex-nowrap flex-wrap items-center justify-between">
                                                    <div className="w-8/12 ml-5">

                                                        <p className="text-md mb-1 flex items-center">
                                                            <LiaUniversitySolid className="mr-3" /> {course.academy}
                                                        </p>
                                                    </div>
                                                    <div className="w-4/12 ml-5">
                                                        <p className="text-md">Price per delegate</p>
                                                        <p className="text-xl font-medium">
                                                            From {course.price} <span className="text-xs">All inc</span>
                                                        </p>
                                                        <p className="text-xs mt-3 mb-2">Number of delegates</p>
                                                        <div className="flex items-center mb-3">
                                                            <button
                                                                onClick={decrement}
                                                                className="w-8 h-8 text-lg hover:bg-black hover:text-white border rounded-full text-center cursor-pointer"
                                                            >
                                                                -
                                                            </button>
                                                            <input
                                                                type="text"
                                                                value={count}
                                                                readOnly
                                                                className="text-center p-1 w-16 mx-2"
                                                            />
                                                            <button
                                                                onClick={increment}
                                                                className="w-8 h-8 text-lg hover:bg-black hover:text-white border rounded-full text-center cursor-pointer"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                        <ButtonFill
                                                            color={"danger"}
                                                            text={"Book Now"}
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                        </div>
                                    ))}
                                </div>

                                {/* kjdnkdskvkdsvkdskv */}
                            </div>
                            {/*Third Self Placed SECTION END */}



                        </div>
                    </BasicModal>
                )}
                {/* MODAL END */}
            </div >
        </>
    )
}

export default HorizontalCourseCards;