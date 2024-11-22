"use client"
import React from 'react'
import Image from 'next/image';
import ButtonInverseFill from '@/components/global/butttons/ButtonInverseFill';

function UpSkillYourTeamSection1() {

  return (
    <>
      <div className="bg-white py-10 px-5 lg:px-20">
        {/* Container for centering and spacing */}
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Left side: Image */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <div className="relative w-full h-0 pb-[100%]"> {/* Aspect ratio container */}
              <Image
                src="/images/upskill-image-1.webp" // Correct path to your image
                alt="Teach with Hurak"
                layout="fill" // Use fill layout for responsive behavior
                objectFit="cover" // Maintain aspect ratio and cover the parent div
                className="rounded-lg"
              />
            </div>
          </div>
          {/* Right side: Text and Button */}
          <div className="text-center lg:text-left w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-10">
            <h2 className="text-4xl font-medium mb-4">Teach with Hurak</h2>
            <p className="text-xl mb-6 w-full lg:w-[420px] text-gray">
              Join Hurak and list your courses for Free! Whether you’re an instructor
              or company, we provide the tools and skills for you to teach with no hassle.
            </p>
            <a href="/advertise-your-courses-hurak">
              <ButtonInverseFill color={'primary'} Padding={"xl"} widthAuto={'auto'} text={'Start teaching today'} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}


export default UpSkillYourTeamSection1;
