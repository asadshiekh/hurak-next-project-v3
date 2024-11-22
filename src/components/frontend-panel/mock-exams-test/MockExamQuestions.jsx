"use client";

import ButtonOutline from '@/components/global/butttons/ButtonOutline';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const questions = [
    { question: 'Under the CDM regulations, what is one of the primary responsibilities of the principal contractor on a construction site?', options: ['A option', 'B option', 'C option', 'D option'] },
    { question: 'What is the second question?', options: ['A option', 'B option', 'C option', 'D option'] },
    { question: 'What is the third question?', options: ['A option', 'B option', 'C option', 'D option'] },
    { question: 'What is the fourth question?', options: ['A option', 'B option', 'C option', 'D option'] },
];

const MockExamQuestions = () => {
    const initialTime = "00:30:00";
    const [time, setTime] = useState(0);

    useEffect(() => {
        const [hours, minutes, seconds] = initialTime.split(':').map(Number);
        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        setTime(totalSeconds);

        const interval = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [initialTime]);

    const formatTime = (seconds) => {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${secs}`;
    };

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const currentQuestion = questions[currentIndex];

    const handleOptionClick = (index) => {
        const updatedSelectedOptions = [...selectedOptions];
        updatedSelectedOptions[currentIndex] = index;
        setSelectedOptions(updatedSelectedOptions);
    };

    return (
        <>
            <div className="group grid grid-cols-8 pt-10">
                <div className="col-start-1 col-span-8 lg:col-start-2 lg:col-span-6 h-auto pt-5 px-6 lg:px-0">
                    <div className='flex md:justify-end justify-center pb-5'>
                        <div>
                            <div className='mb-3'>
                                <Link href={"#bookCourse"} ><ButtonOutline color={"primary"} text={"Book a course"} /></Link>
                            </div>
                            <Link href={"#leaveComment"}><ButtonOutline color={"primary"} text={"Leave a comment"} /></Link>

                            <div className='mt-5'>
                                <p className='text-end font-bold'>{formatTime(time)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='border rounded-md shadow-lg py-7 px-5'>
                        <div className='grid grid-cols-9 '>
                            <p className='col-span-6 md:col-span-7 lg:col-span-8  text-lg md:text-xl max-w-4xl '>
                                Q: {currentQuestion.question}
                            </p>
                            <p className='col-span-3 md:col-span-2 lg:col-span-1 text-lg lg:text-xl text-right font-bold'>
                                {currentIndex + 1} of {questions.length}
                            </p>
                        </div>
                        <div className='grid grid-cols-8 gap-y-5 gap-x-7 py-5 lg:px-5'>
                            {currentQuestion.options.map((option, index) => (
                                <div
                                    key={index}
                                    className={`col-span-8 md:col-span-4 gap-x-10 gap-y-5 rounded-xl py-3 hover:cursor-pointer focus:outline-none  
                                    ${selectedOptions[currentIndex] === index ? 'bg-[#0f7c90] text-white text-xl' : 'bg-[#ededed]'}`}
                                    onClick={() => handleOptionClick(index)}
                                >
                                    <p className='px-5'>{option}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-end pt-5'>
                        <div className=' m-1' onClick={handlePrevious}>
                        <ButtonOutline handelClick={(e) => e.preventDefault()} color={"primary"} text={"Previous"} />

                            {/* <p onClick={(e) => e.preventDefault()}>Previous</p> */}
                        </div>
                        <div className=' m-1' onClick={handleNext}>
                        <ButtonOutline handelClick={(e) => e.preventDefault()} color={"primary"} text={"Next"} />
                            {/* <p onClick={(e) => e.preventDefault()}>Next</p> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MockExamQuestions;
