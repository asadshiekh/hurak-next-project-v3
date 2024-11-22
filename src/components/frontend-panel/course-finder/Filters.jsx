// components/Filters.js
"use client"
import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { MdChevronLeft } from "react-icons/md";
import Skeleton from "@/components/global/Skeletons/Skeleton"


const Filters = () => {
    const [showFilters, setShowFilters] = useState(false);
    const [currentCategory, setCurrentCategory] = useState(null);
    const [currentSubject, setCurrentSubject] = useState(null);

    const subjects = [
        { name: 'Accounting and Finance', details: ['Accountancy', 'Bookkeeping'] },
        { name: 'Business', details: ['Communication', 'Project Management', 'Sales', 'Human Resources'] },
        { name: 'Construction', details: ['Banksman', 'CSCS', 'SMSTS', 'SSSTS'] },
        { name: 'First Aid', details: ['Emergency First Aid at Work', 'First Aid at Work', 'Mental Health First Aid', 'Paediatric First Aid'] },
        { name: 'Health and Care', details: ['Care'] },
        { name: 'Health and Safety', details: ['Asbestos Awareness', 'Banksman', 'CITB Site Safety Plus', 'CSCS', 'Fire Safety', 'Health and Safety in the Workplace', 'Manual Handling', 'SMSTS', 'SSSTS'] },
        { name: 'Hospitality', details: ['Food Hygiene', 'Personal Licence', 'Scottish Personal Licence'] },
        { name: 'Lifestyle', details: ['Beauty'] },
        { name: 'Marketing', details: ['Digital Marketing', 'Search Engine Optimisation', 'Social Media Marketing'] },
        { name: 'Personal Development', details: ['Career Development', 'Leadership'] },
        { name: 'Security', details: ['CCTV Operator', 'Close Protection', 'Crowd Safety', 'Door Supervisor', 'Physical Intervention', 'Security Guard', 'SIA Trainers', 'Top up for Close Protection', 'Top up for Door Supervisors', 'Top up for Security Guards'] },
        { name: 'Teaching and Academics', details: ['AET', 'Assessment Training', 'Education Training', 'IQA Training', 'SIA Trainers'] },
        // Add more subjects with details as needed
    ];

    const handleSubjectClick = (subject) => {
        setCurrentSubject(subject);
    };

    const handleBackClick = () => {
        setCurrentSubject(null);
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, []);

    return (
        // <div className="py-4">
        //     {/* Button to open filters on small devices */}
        //     <button 
        //         className="lg:hidden bg-gray-800 text-white px-4 py-2 rounded mb-4" 
        //         onClick={() => setShowFilters(true)}
        //     >
        //         Filters
        //     </button>

        //     {/* Filter panel */}
        //     <div className={`${showFilters ? 'translate-x-0' : 'translate-x-full'} fixed z-10 inset-y-0 right-0 bg-white transform transition-transform duration-300 lg:static lg:translate-x-0 px-5 py-3 lg:p-0 overflow-auto`}>
        //         {/* Close button for small screens */}
        //         <button className="lg:hidden text-xl mb-4" onClick={() => setShowFilters(false)}>
        //             <FaTimes />
        //         </button>

        //         {/* Subjects */}
        //         <div className="mb-6">
        //             <h2 className="font-semibold text-xl mb-2">Subjects</h2>
        //             <ul className="space-y-2 text-lg">
        //                 {['Accounting and Finance', 'Business', 'Construction', 'First Aid', 'Health and Care', 'Health and Safety', 'Hospitality', 'Lifestyle', 'Marketing', 'Personal Development', 'Security', 'Teaching & Academics'].map((subject, index) => (
        //                     <li key={index}>
        //                         <label className="flex items-center space-x-2">
        //                             <input type="radio" name="subject" className="form-radio text-blue-500" />
        //                             <span>{subject}</span>
        //                         </label>
        //                     </li>
        //                 ))}
        //             </ul>
        //         </div>

        //         {/* Methods of Study */}
        //         <div className="mb-6">
        //             <h2 className="font-semibold text-xl mb-2">Methods of Study</h2>
        //             <ul className="space-y-2 text-lg">
        //                 {['Classroom', 'Online (live)', 'On Demand'].map((method, index) => (
        //                     <li key={index}>
        //                         <label className="flex items-center space-x-2">
        //                             <input type="checkbox" className="form-checkbox text-blue-500" />
        //                             <span>{method}</span>
        //                         </label>
        //                     </li>
        //                 ))}
        //             </ul>
        //         </div>

        //         {/* Course Levels */}
        //         <div>
        //             <h2 className="font-semibold text-xl mb-2">Course Levels</h2>
        //             <ul className="space-y-2 text-lg">
        //                 {['Beginner', 'Intermediate', 'Advance'].map((level, index) => (
        //                     <li key={index}>
        //                         <label className="flex items-center space-x-2">
        //                             <input type="checkbox" className="form-checkbox text-blue-500" />
        //                             <span>{level}</span>
        //                         </label>
        //                     </li>
        //                 ))}
        //             </ul>
        //         </div>
        //     </div>

        //     {/* Overlay for small screens */}
        //     {showFilters && (
        //         <div 
        //             className="fixed inset-0 bg-black opacity-50 md:hidden"
        //             onClick={() => setShowFilters(false)}
        //         />
        //     )}
        // </div>
        // <div className="py-4">
        //     {/* Button to open filters on small devices */}
        //     <button 
        //         className="lg:hidden bg-gray-800 text-white px-4 py-2 rounded mb-4" 
        //         onClick={() => setShowFilters(true)}
        //     >
        //         Filters
        //     </button>

        //     {/* Filter panel */}
        //     <div className={`${showFilters ? 'translate-x-0' : 'translate-x-full'} fixed z-10 inset-y-0 right-0 bg-white transform transition-transform duration-300 lg:static lg:translate-x-0 px-5 py-3 lg:p-0 overflow-auto`}>
        //         {/* Close button for small screens */}
        //         <button className="lg:hidden text-xl mb-4" onClick={() => setShowFilters(false)}>
        //             <FaTimes />
        //         </button>

        //         {/* Subjects or Submenu */}
        //         {currentSubject ? (
        //             <div className="mb-6">
        //                 <button onClick={handleBackClick} className="text-blue-500 mb-4">
        //                     Back
        //                 </button>
        //                 <h2 className="font-semibold text-xl mb-2">{currentSubject.name}</h2>
        //                 <ul className="space-y-2 text-lg">
        //                     {currentSubject.details.map((detail, index) => (
        //                         <li key={index}>
        //                             <label className="flex items-center space-x-2">
        //                                 <input type="checkbox" className="form-checkbox text-blue-500" />
        //                                 <span>{detail}</span>
        //                             </label>
        //                         </li>
        //                     ))}
        //                 </ul>
        //             </div>
        //         ) : (
        //             <div className="mb-6">
        //                 <h2 className="font-semibold text-xl mb-2">Subjects</h2>
        //                 <ul className="space-y-2 text-lg">
        //                     {subjects.map((subject, index) => (
        //                         <li key={index}>
        //                             <button onClick={() => handleSubjectClick(subject)} className="flex items-center space-x-2 text-blue-500">
        //                                 <span>{subject.name}</span>
        //                             </button>
        //                         </li>
        //                     ))}
        //                 </ul>
        //             </div>
        //         )}

        //         {/* Methods of Study */}
        //         <div className="mb-6">
        //             <h2 className="font-semibold text-xl mb-2">Methods of Study</h2>
        //             <ul className="space-y-2 text-lg">
        //                 {['Classroom', 'Online (live)', 'On Demand'].map((method, index) => (
        //                     <li key={index}>
        //                         <label className="flex items-center space-x-2">
        //                             <input type="checkbox" className="form-checkbox text-blue-500" />
        //                             <span>{method}</span>
        //                         </label>
        //                     </li>
        //                 ))}
        //             </ul>
        //         </div>

        //         {/* Course Levels */}
        //         <div>
        //             <h2 className="font-semibold text-xl mb-2">Course Levels</h2>
        //             <ul className="space-y-2 text-lg">
        //                 {['Beginner', 'Intermediate', 'Advance'].map((level, index) => (
        //                     <li key={index}>
        //                         <label className="flex items-center space-x-2">
        //                             <input type="checkbox" className="form-checkbox text-blue-500" />
        //                             <span>{level}</span>
        //                         </label>
        //                     </li>
        //                 ))}
        //             </ul>
        //         </div>
        //     </div>

        //     {/* Overlay for small screens */}
        //     {showFilters && (
        //         <div 
        //             className="fixed inset-0 bg-black opacity-50 md:hidden"
        //             onClick={() => setShowFilters(false)}
        //         />
        //     )}
        // </div>

        <>

            <div className="py-4">
                {/* Button to open filters on small devices */}
                <button
                    className="lg:hidden bg-gray-800 text-white px-4 py-2 rounded mb-4"
                    onClick={() => setShowFilters(true)}
                >
                    Filters
                </button>

                {/* Filter panel */}
                <div className={`${showFilters ? 'translate-x-0' : 'translate-x-full'} fixed z-10 inset-y-0 right-0 bg-white transform transition-transform duration-300 lg:static lg:translate-x-0 px-5 py-3 lg:p-0 overflow-auto`}>
                    {/* Close button for small screens */}
                    <button className="lg:hidden text-xl mb-4" onClick={() => setShowFilters(false)}>
                        <FaTimes />
                    </button>

                    {/* Subjects or Submenu */}
                    {currentSubject ? (
                        <div className="mb-6">
                            <button onClick={handleBackClick} className="font-semibold mb-4 text-xl">
                                <MdChevronLeft className='inline-block' /> All Subjects
                            </button>
                            <h2 className="font-semibold text-lg mb-2">{currentSubject.name}</h2>
                            <ul className="space-y-2 text-lg">
                                {currentSubject.details.map((detail, index) => (
                                    <li key={index}>
                                        <label className="flex items-center space-x-2">
                                            <input type="checkbox" className="form-checkbox text-blue-500" />
                                            <span>{detail}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <div className="mb-6">
                            <h2 className="font-semibold text-xl mb-2">Subjects</h2>
                            {loading ? (
                                subjects.map((subject, index) => (
                                    <div key={index} className='pt-5'>
                                        <Skeleton style={"h-4 md:h-4 w-[60%] md:w-[80%] bg-neutral-200"} />
                                    </div>
                                ))
                            ) : (

                                <ul className="space-y-2 text-lg">
                                    {subjects.map((subject, index) => (
                                        <li key={index}>
                                            <label className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    name="subject"
                                                    className="form-radio text-blue-500"
                                                    onClick={() => handleSubjectClick(subject)}
                                                />
                                                <span>{subject.name}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}

                    {/* Methods of Study */}
                    <div className="mb-6">
                        <h2 className="font-semibold text-xl mb-2">Methods of Study</h2>
                        <ul className="space-y-2 text-lg">
                            {['Classroom', 'Online (live)', 'On Demand'].map((method, index) => (
                                <li key={index}>
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="form-checkbox text-blue-500" />
                                        <span>{method}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Course Levels */}
                    <div>
                        <h2 className="font-semibold text-xl mb-2">Course Levels</h2>
                        <ul className="space-y-2 text-lg">
                            {['Beginner', 'Intermediate', 'Advance'].map((level, index) => (
                                <li key={index}>
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="form-checkbox text-blue-500" />
                                        <span>{level}</span>
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Overlay for small screens */}
                {showFilters && (
                    <div
                        className="fixed inset-0 bg-black opacity-50 md:hidden"
                        onClick={() => setShowFilters(false)}
                    />
                )}
            </div>
        </>
    );
};

export default Filters;
