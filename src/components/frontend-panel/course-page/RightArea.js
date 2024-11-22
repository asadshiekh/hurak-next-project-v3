import React from 'react'
import { FaChalkboardTeacher, FaLaptop, FaGlobe, FaBuilding } from 'react-icons/fa';
import Tooltip from '@/components/global/Tooltip';
import { AiOutlineInfoCircle } from 'react-icons/ai'; // Import the icon you want to use
import Link from 'next/link';
import ButtonFill from '@/components/global/butttons/ButtonFill';

const RightArea = () => {
    return (
        <div>
            <div className='buybox bg-white p-6 text-left border-[1px] rounded border-[#E2D9E2] w-[300px]'>
                <p className='text-[22px]'><strong>From £89.99</strong> <span className='text-xs'>All inc</span></p>
                <p className='my-5 text-[17px] font-medium'>Learning options</p>
                <ul>
                    <li className='text-[15px] mb-3 flex items-center'>  <FaChalkboardTeacher size={14} className='mr-2' /> Classroom learning</li>
                    <li className='text-[15px] mb-3 flex items-center'>  <FaLaptop size={14} className='mr-2' /> Live online virtual class</li>
                    <li className='text-[15px] mb-3 flex items-center'>  <FaGlobe size={14} className='mr-2' /> E-learning</li>
                    <li className='text-[15px] flex items-center'>  <FaBuilding size={14} className='mr-2' /> In-house</li>
                </ul>
                <div className='text-center my-10'>
                    <Link href="#"><ButtonFill color={"danger"} text={"Select Learning Option"} /></Link>
                </div>

                <div className='buybox_tooltip'>
                    <ul>
                        <li className='flex mb-2'>
                            <p className='mr-3 font-medium text-[17px]'>
                                No booking fee
                            </p>
                            <Tooltip icon={<AiOutlineInfoCircle size={18} />} // Pass the icon as a prop
                                tooltipText="Any course listed on our platform is manually screened by a human to ensure it is as good as it can be."
                            />
                        </li>
                        <li className='flex mb-2
                2'>
                            <p className='mr-3 font-medium text-[17px]'>
                                Approved providers only
                            </p>
                            <Tooltip icon={<AiOutlineInfoCircle size={18} />} // Pass the icon as a prop
                                tooltipText="Any course listed on our platform is manually screened by a human to ensure it is as good as it can be."
                            />
                        </li>
                        <li className='flex mb-2'>
                            <p className='mr-3 font-medium text-[17px]'>
                                Buying for your team?
                            </p>
                            <Tooltip icon={<AiOutlineInfoCircle size={18} />} // Pass the icon as a prop
                                tooltipText="Any course listed on our platform is manually screened by a human to ensure it is as good as it can be."
                            />
                        </li>

                        <li className='flex mb-2'>
                            <p className='mr-3 font-medium text-[17px]'>
                                Pay by invoice
                            </p>
                            <Tooltip icon={<AiOutlineInfoCircle size={18} />} // Pass the icon as a prop
                                tooltipText="Any course listed on our platform is manually screened by a human to ensure it is as good as it can be."
                            />
                        </li>
                    </ul>

                    <Link href="#" className='underline text-xs'>Pay 3 monthly interest-free payments with</Link>
                </div>
            </div>
        </div>
    )
}

export default RightArea