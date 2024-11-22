"use client"
import React, { useState, useEffect } from 'react'
import Skeleton from '@/components/global/Skeletons/Skeleton';

const TestPrepBanner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);
  return (
    <>
      <div className=" w-full ">
        <div className="row flex justify-evenly items-center h-auto  md:h-[400px] px-auto bg-contain bg-no-repeat bg-right bg-[url('/images/test-prep-banner.png')] " >
          <div className="container py-5 md:py-0">
            <div className='w6/12 px-4 md:x-0 '>
            {loading?(
                <>
                    <Skeleton style={'h-10 w-[50%] lg:w-[30%] bg-neutral-200 mt-2'}/>
                    <Skeleton style={'h-4 w-[80%] lg:w-[50%] bg-neutral-200 mt-2'}/>
                    <Skeleton style={'h-4 w-[50%] lg:w-[40%] bg-neutral-200 mt-2'}/>

                </>
            ):(
              <>
              <h1 className='text-[38px] font-bold mb-6'>Test Prep</h1>
              <p className=''>Free resources, including exam preparation materials, handbooks, and more.</p>
                </>
            )}
              <input className='mt-5 w-50 md:w-80 h-9 rounded-[50px] border focus:outline-0 border-[#0f7c90] pl-3' type="text" placeholder='Search for a test' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestPrepBanner