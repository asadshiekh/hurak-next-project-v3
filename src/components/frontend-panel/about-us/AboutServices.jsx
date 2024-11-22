import React from 'react'
import { BsHandThumbsUp } from "react-icons/bs";
import { LiaHandshake } from "react-icons/lia";
import { RiSnowflakeFill } from "react-icons/ri";

const AboutServices = () => {
  return (
    <div className='py-20 bg-[#f2fbfc]'>
      <div className='container auto-container mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
          {/* 1st block */}
          <div className='text-center px-2'>
            <div className='h-[50px] w-[50px] bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4'>
              <BsHandThumbsUp className='text-xl' />
            </div>
            <h5 className='text-2xl mb-2'>Who We Are</h5>
            <p className='text-lg'>Hurak Education Services has been offering compliance training for over 10 years. Since then we have delivered around 5,000 courses, taught over 50,000 people and covered 3,000,000+ minutes of learning, thus allowing us to become industry leaders.</p>
          </div>
          {/* 2nd block */}
          <div className='text-center px-2'>
            <div className='h-[50px] w-[50px] bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4'>
              <LiaHandshake className='text-xl' />
            </div>
            <h5 className='text-2xl mb-2'>What We Do</h5>
            <p className='text-lg'>Whether it is our security, first aid, food, APLH, teaching or any other training courses all Hurak employees work to unique standards of professionalism and excellence. We offer bespoke services to all of our clients and have the privilege to be the first choice of all our clients, past and present, for their training needs.</p>
          </div>
          {/* 3rd block */}
          <div className='text-center px-2'>
            <div className='h-[50px] w-[50px] bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4'>
              <RiSnowflakeFill className='text-xl' />
            </div>
            <h5 className='text-2xl mb-2'>Why We Do It</h5>
            <p className='text-lg'>There are many reasons why we do it, but a simple one would be, like most people, we like to do only what we enjoy and love.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutServices