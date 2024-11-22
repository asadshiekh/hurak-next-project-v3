'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { LuBookMinus } from "react-icons/lu";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { BsFileBarGraph } from "react-icons/bs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi";
import { VscGraph } from "react-icons/vsc";
import { RiTeamLine } from "react-icons/ri";

const WorkflowSection = () => {

    const [activeTab, setActiveTab] = useState(0);

    // Define your tabs with icons and labels
    const tabs = [
        { icon: <LuBookMinus />, label: 'Courses' },
        { icon: <MdOutlineFeaturedPlayList />, label: 'Cohorts' },
        { icon: <BsFileBarGraph />, label: 'Pricing Plans' },
        { icon: <FaRegCircleCheck />, label: 'Orders' },
        { icon: <HiOutlineUsers />, label: 'Students' },
        { icon: <VscGraph />, label: 'Performance' },
        { icon: <RiTeamLine />, label: 'Team' },
    ];

    const tabContent = [
        {
            image: "/images/workflow-1.jpg",
            detail: "Create your course landing page. The importance of your course landing page on our platform cannot be overstated. It is crucial to your success and serves as your chance to attract potential students to inquire or sign up for your course. This is one of the first things that potential students will see when browsing through courses. Students will review the information on your course landing page and decide whether to enrol in your course.",
        },
        {
            image: "/images/workflow-2.png",
            detail: "View all your cohorts in list or calendar view. Create or unpublish cohorts with ease. Want to change the details of an existing cohort, reschedule a student to a different cohort or enrol a student for a resit? Here, you can manage all your cohorts and all students that are enrolled.",
        },
        {
            image: "/images/workflow-3.png",
            detail: "Set up your course price with either a flat rate price, or a 3-tiered pricing structure. A flat rate price works best when you have a single service for everyone. On the other hand, including a pricing plan helps ensure you cater for all types of customers; those looking for the cheapest price, those looking for some additional perks, and others who want greater value and are willing to pay a higher price. Pricing plans also help to increase your overall sales.",
        },
        {
            image: "/images/workflow-4.png",
            detail: "View and manage all your orders here. Give your students ease of access to invoices - simply add an invoice to your order and your student can see it from their individual account. Need to resend a booking confirmation email? You can do this with a few clicks. You can also create manual orders for students who book directly with you, outside of Hurak.com, at no extra cost allowing you to manage all your students on one platform.",
        },
        {
            image: "/images/workflow-5.png",
            detail: "Find all your students' information in one place. See all the courses they have enrolled in. Great for finding their information quickly and as an opportunity to find leads manually. You can upsell and earn more!",
        },
        {
            image: "/images/workflow-6.png",
            detail: "Get top insights about your performance. With figures showing your total revenue, total leads, total enrolments, you can see exactly how well your courses are performing. As the account owner, you can also see your past and upcoming payouts.",
        },
        {
            image: "/images/workflow-7.png",
            detail: "Set up your team with different access rights. You are in control of who gets different levels of access. You can give your instructors an 'Instructor' role to enhance their teaching experience with you as they will easily be able to see all their students, mark attendance, make notes and more. Manage your team with default roles e.g Admin, Instructor, Customer Support Executive or create your own custom role. You have the flexibility to suit your needs.",
        },
    ];

    return (
        <>
            <section className='py-20' id='features'>
                <div className="container auto-container mx-auto">
                    {/* Tab Headers */}
                    <div className="flex justify-center">
                        <div className="inline-flex mx-auto border border-gray-200 shadow-md overflow-auto whitespace-nowrap">
                            {tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    className={`flex flex-col text-lg items-center py-4 px-6 text-center cursor-pointer transition-colors duration-200
                                ${activeTab === index ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {tab.icon && <span className="mr-2">{tab.icon}</span>} {/* Display icon if available */}
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="pt-10">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
                            <div className='flex items-center justify-center'>
                                <Image src={tabContent[activeTab].image} width={450} height={300} alt="Tab content image" />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <h4 className='text-2xl text-primary flex items-center justify-center md:justify-start mb-3'>{tabs[activeTab].icon && <span className="mr-2 inline-block">{tabs[activeTab].icon}</span>}{tabs[activeTab].label}</h4>
                                <p className=' text-[19px]'>{tabContent[activeTab].detail}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WorkflowSection;
