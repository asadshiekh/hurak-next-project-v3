import React from 'react'
import FAQItem from '@/components/global/FAQItem';

import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const CourseFaqs = () => {
    const faqData = [
    {
        question: 'What is the purpose of the SIA Top-Up Training for Security Guard Licence?',
        answer: 'The purpose of the SIA Top-Up Training for Security Guard Licence is to provide existing security guard licence holders with updated knowledge and skills required to meet the new licence renewal requirements set by the Security Industry Authority (SIA).',
    },
    {
        question: 'Who is eligible to take the SIA Top-Up Training course?',
        answer: 'The course is for those who are renewing their SIA Security Guard licence and meet the SIA eligibility criteria.',
    },
    {
        question: 'Will the SIA Top-Up Training course improve my job prospects and career advancement in the security industry?',
        answer: 'Yes, completing the course will enhance your knowledge and skills, increasing your chances for better job opportunities in the security industry.',
    },
    {
        question: 'Can I request an exemption from the SIA Top-Up Training course if I have extensive experience in the security field?',
        answer: 'No, the course is mandatory for all SIA security guard licence holders regardless of their experience.',
    },
    {
        question: 'How often do I need to retake the SIA Top-Up Training?',
        answer: 'You need to retake the course whenever you renew your SIA Security Guard licence, as per the new regulations.',
    },
    ];

    return ( 
        <>
        <div className='grid grid-cols-12 pt-10 pb-20'>
            <div className='col-start-1 col-span-12 px-5 lg:px-0 lg:col-start-5 lg:col-span-4 w-full'>
                <div>
                    <h2 className="text-4xl    lg:text-center mb-4 text-[#0f7c90]">Everything you need to know before signing up</h2>
                </div>
            </div>
            <div className="col-start-1 col-span-12 px-5 lg:px-0 lg:col-start-4 lg:col-span-6 w-full bg-white py-5">
                {/* {faqData.map((faq, index) => ( */}
                    <FAQItem bgColor={'bg-[#FFF]'} OpenBtn={<FaAngleDown />} CloseBtn={<FaAngleUp/>} />
                {/* ))} */}
            </div>
        </div>
        </>
    )
}

export default CourseFaqs;