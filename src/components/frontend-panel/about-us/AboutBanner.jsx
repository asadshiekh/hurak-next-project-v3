import React from 'react'
import { GiCircle } from "react-icons/gi";
const AboutBanner = () => {
  return (
    <div>
        <div className="bg-[url('/images/about-bg.jpg')] py-20 bg-cover">
          <div className='container auto-container mx-auto lg:text-left text-center'>
            <h4 className='text-white text-4xl md:text-5xl leading-snug my-5'>Get to know about <br/> Hurak</h4>
          </div>
        </div>
        <div className='bg-primary py-5 text-center'>
          <p className="text-white"><span className='text-[#f5c252]'><GiCircle className='inline-block' /> Company News:</span> Hurak LMS Launches, ready for 2024</p>
        </div>
    </div>
  )
}

export default AboutBanner