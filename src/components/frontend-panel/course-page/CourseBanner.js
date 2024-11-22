"use client";

import { useState, useEffect } from "react";
import React from "react";
import Breadcrumbs from "@/components/frontend-panel/course-page/Breadcrumbs";
import CourseSlider from "./CourseSlider";
import Link from "next/link";
import BasicModal from "@/components/global/modal-windows/BasicModal";
import { GoPlus, GoDash, GoCheck, GoX, GoChevronDown } from "react-icons/go";
import { PiGraduationCap } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import { LiaSortAmountUpSolid, LiaUniversitySolid, LiaStopwatchSolid } from "react-icons/lia";
import { MdKeyboardArrowUp } from "react-icons/md";
import { VscCalendar } from "react-icons/vsc";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import ButtonFill from "@/components/global/butttons/ButtonFill";
import Klarna from "@/components/global/KlarnaPaymentModal";


const CourseBanner = ({ course_title, course_short_des }) => {
  const categories = [
    { name: "Security", link: "#" },
    { name: "Top up for Door Supervisors", link: "#" },
    { name: "SIA Top-Up Training For Door Supervisors", link: "#" },
  ];

  const courses = [
    { course: "Birmingham (B19 3NY)", address: "89-91 Hatchett St, Birmingham, UK, B19 3NY", price: "£200", date: "Sat 17th Aug - Sun 1st Sep", time: "9:00 AM - 5:00 PM", academy: "T4E" },
    { course: "Burnley (BB10 1LX)", address: "89-91 Hatchett St, Birmingham, UK, B19 3NY", price: "£193", date: "Sat 17th Aug - Sun 1st Sep", time: "9:00 AM - 5:00 PM", academy: "T4E" },
    { course: "Dartford", address: "89-91 Hatchett St, Birmingham, UK, B19 3NY", price: "£432", date: "Sat 17th Aug - Sun 1st Sep", time: "9:00 AM - 5:00 PM", academy: "T4E" },
    { course: "Leicester", address: "89-91 Hatchett St, Birmingham, UK, B19 3NY", price: "£328", date: "Sat 17th Aug - Sun 1st Sep", time: "9:00 AM - 5:00 PM", academy: "T4E" },
    { course: "London - East (Isle of Dogs)", address: "89-91 Hatchett St, Birmingham, UK, B19 3NY", price: "£250", date: "Sat 17th Aug - Sun 1st Sep", time: "9:00 AM - 5:00 PM", academy: "T4E" },

  ];

  const [isOpen, setOpen] = useState(null);
  const CloseModal = () => {
    setOpen(null);
    document.body.style.overflowY = "auto";
  };

  const [showDates, isShowDates] = useState(false);
  const toggleDates = () => {
    isShowDates(!showDates);

  };
  const [count, setCount] = useState(1);
  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <div className="container mx-auto px-4 pt-8 pb-32 md:pt-16 flex flex-col md:flex-row ">
        {/* Image Section */}

        <CourseSlider />

        {/* Text Section */}
        <div className="w-full md:w-[60%] md:order-1">
          <Breadcrumbs categories={categories} />
          <h1 className="text-3xl font-semibold mb-4 mt-4">
            {course_title}
          </h1>
          <p className="text-[20px] mb-4 w-full md:w-[90%]">
            {course_short_des}
          </p>
          <p className="text-[12px] text-black mb-5 font-medium">
            16 Course Provider
          </p>
          <p className="text-xl font-medium mb-2">
            From £99.99{" "}
            <span className="text-sm text-gray font-light">All inc</span>
          </p>
          <p className="text-sm mb-4">
            <span className="line-through">£139.99</span> 29% Off
          </p>

          {/* <button
            onClick={() => {
              setOpen("Requirments");
            }}
            className="text-xl font-medium bg-secondary text-white px-6 py-3 rounded-md "
          >
            Book Now
          </button> */}

          <div className="">
            <ButtonFill Padding={"2xl"} widthAuto={"auto"} handelClick={() => { setOpen("Requirments"); }} color={"danger"} text={"Book Now"} />
          </div>
          <div>
            <Klarna/>
          </div>


          {/* <div className="mt-4">
            <p className="text-sm">
              4.8
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="text-yellow-400">★</span>
              <span className="underline">(1136 ratings)</span>
              <span className="text-gray font-light ml-2">
                2,782 students enrolled
              </span>
            </p>
          </div> */}
        </div>
        {/* modal start */}
        {isOpen == "Requirments" ? (
          <BasicModal
            size={"w-full lg:w-[800px]"}
            isOpen={isOpen}
            scrollable={true}
            CloseModal={CloseModal}
          >

            <div className=" flex flex-wrap">
              <div className=" p-3 sticky top-0 w-full z-40 bg-white">
                <div className="w-full flex justify-between items-center pb-3 border-b ">
                  <p className="text-2xl flex items-center text-primary font-[500]">
                    <span>
                      <PiGraduationCap className="mr-2" />
                    </span>
                    Classroom learning
                  </p>
                  <GoX
                    onClick={CloseModal}
                    className={`cursor-pointer border border-gray-500 rounded-full py-1 px-1 `}
                    size={25}
                  />
                </div>
                <div className="w-full bg-[#f8f9fa] drop-shadow-md  px-3 py-3">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex items-center text-gray-600">
                      <CiLocationOn className="text-xl" />
                      <input
                        type="text"
                        placeholder="Address or postcode"
                        className="border border-gray-400 ml-3 rounded w-full p-2 outline-none focus:border-blue"
                      />
                    </div>

                    <div className="flex items-center text-gray-500">
                      <LiaSortAmountUpSolid className="text-xl" />
                      <select className="border border-gray-400 ml-3 rounded w-full p-2 outline-none focus:border-blue">
                        <option>Order by</option>
                        <option>Earlier</option>
                        <option>Cheapest</option>
                      </select>
                      {/* <input
                      type="text"
                      placeholder="Order by"
                      className="border border-gray-400 ml-3 rounded w-full p-2 outline-none focus:border-blue"
                    /> */}
                    </div>
                  </div>
                  <div className="flex justify-end text-primary cursor-pointer">
                    <u className="text-sm mt-1 hover:text-black">Clear filter</u>
                  </div>
                </div>
              </div>
              {courses.map((course, index) =>
                <div className="px-5 border-b w-full">
                  <div className="w-full mt-5 px-3 mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-2xl mb-1">{course.course}</p>
                      <p>{course.address}</p>
                      <p className="text-xl text-danger font-[700] mt-3">From {course.price}</p>
                    </div>
                    <div>
                      {showDates ? (

                        <p className="text-md flex items-center cursor-pointer" onClick={toggleDates} >Hide Dates <span className="text-[5px]"><MdKeyboardArrowUp className="ml-2 bg-primary h-[20px]  w-[20px] text-white rounded-full" /> </span></p>
                      ) : (
                        <p className="text-md flex items-center cursor-pointer" onClick={toggleDates}>Show Dates <span className="text-[5px]"><MdKeyboardArrowDown className="ml-2 bg-primary h-[20px]  w-[20px] text-white rounded-full" /> </span></p>
                      )}
                    </div>

                  </div>
                  {showDates && (
                    <div className="w-full mt-5 px-3 mb-4 flex md:flex-nowrap flex-wrap items-center justify-between">
                      <div>
                        <p className="text-md mb-1 flex items-center"><span><VscCalendar className="mr-3" /></span> {course.date}</p>
                        <p className="ml-7 text-sm">Weekend courses split over 3 weeks (Saturday and Sunday only)</p>
                        <p className="text-md mb-1 flex items-center mt-4"><span><LiaStopwatchSolid className="mr-3" /></span> {course.time}</p>
                        <p className="text-md mb-1 flex items-center"><span><LiaUniversitySolid className="mr-3" /></span> {course.academy}</p>
                      </div>
                      <div className="w-full md:w-auto">
                        <p className="text-md flex items-center">Price per delegate</p>
                        <p className="text-xl font-[500]">From {course.price} <span className="text-[10px]">All inc</span></p>
                        <p className="text-xs mt-3">num of delegates</p>
                        <div className="flex">
                          <p onClick={decrement} className="w-[30px] h-[30px] text-[20px] hover:bg-black hover:text-white border rounded-full text-center cursor-pointer">-</p>
                          <p><input type="text" value={count} className="text-center p-1 w-[70px]" /></p>
                          <p onClick={increment} className="w-[30px] h-[30px] text-[20px] hover:bg-black hover:text-white border rounded-full text-center cursor-pointer">+</p>
                        </div>
                        <button className="bg-danger text-white font-[600] px-16 py-2 md:w-auto w-full rounded mt-2 ">Book Now</button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

          </BasicModal>
        ) : (
          false
        )}
        {/* modal end */}
      </div>
    </div>
  );
};

export default CourseBanner;
