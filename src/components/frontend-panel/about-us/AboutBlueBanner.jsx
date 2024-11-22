import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { ImStopwatch } from "react-icons/im";
import { LuClipboardList } from "react-icons/lu";

const AboutBlueBanner = () => {
  return (
    <div className='py-20 bg-primary text-white text-center'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-3 mb-8'>
                <div>
                    <LuClipboardList className='text-4xl inline-block mx-auto mb-5' />
                    <h4 className='text-xl font-semibold'>5,640 courses completed</h4>
                </div>
                <div>
                    <FaRegUser className='text-4xl inline-block mx-auto mb-5 lg:mt-0 mt-5 ' />
                    <h4 className='text-xl font-semibold'>57,000 people trained</h4>
                </div>
                <div>
                    <ImStopwatch className='text-4xl inline-block mx-auto mb-5 lg:mt-0 mt-5' />
                    <h4 className='text-xl font-semibold'>3,000,000 minutes of learning</h4>
                </div>
            </div>
            <p>"To be, and to be recognised as a world class provider of compliance training and development solutions. Our aim is to help our students obtain an education which will give them the knowledge and skills necessary for improving their lives and their communities." - Hurak Mission Statement</p>
        </div>
    </div>
  )
}

export default AboutBlueBanner;