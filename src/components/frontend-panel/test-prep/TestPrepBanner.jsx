"use client";

import React, { useEffect, useState } from 'react';
import StarsRatting from '@/components/global/StarsRatting';
import Skeleton from '@/components/global/Skeletons/Skeleton';

const TestPrepComponent = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 740) {
        setShowSticky(true);
      } else {
        setShowSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="group grid grid-cols-8 bg-[#ebf5dd] border-b-[6px] border-[#0f7c90]">
        <div className="col-start-1 col-span-8 lg:col-start-2 lg:col-span-4 h-auto py-5 px-6 lg:px-0">
          <div className='min-h-[300px] py-3 lg:relative'>
            <div className='sm:flex hidden '>
              <a href="">Home</a>
              <a href=""> &nbsp;/&nbsp;Test Prep </a>
              <a href="">&nbsp;/&nbsp; CSCS Green Card Mock Test</a>
            </div>
            <div>
              {loading ? (
                <>
                  <Skeleton style={'h-10 w-[80%] lg:w-[50%] bg-neutral-200 mt-2'} />
                  <Skeleton style={'h-8 w-[40%] lg:w-[15%] bg-neutral-200 mt-2'} />
                  <Skeleton style={'h-4 w-[100%] bg-neutral-200 mt-2'} />
                  <Skeleton style={'h-4 w-[100%] bg-neutral-200 mt-2'} />
                  <Skeleton style={'h-4 w-[100%] bg-neutral-200 mt-2'} />
                  <Skeleton style={'h-4 w-[50%] bg-neutral-200 mt-2'} />
                  <Skeleton style={'h-5 w-[30%] bg-neutral-200 mt-5'} />
                </>

              ) : (
                <>
                  <h1 className='font-bold text-[38px]'>CSCS Green Card Mock Test</h1>
                  <p className='text-xl'>
                    <span className='text-2xl font-bold block'>Free</span>
                    The CSCS Green Card mock test consists of 40 multiple choice questions covering safety practices,
                    accident prevention, and the use of protective equipment. To pass this test, 32 out of 40 questions must be correct. At the end of the test,
                    a page will display your score and the incorrect answers.
                  </p>
                  <div className='flex pt-5'>
                    <p className='font-bold'>3.5</p>
                    <div className='mx-2'>
                      <StarsRatting color={'#ffc107'} size={20} ratting={3.5} />
                    </div>
                    <p className='font-bold underline'>1123 ratings</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={`hidden lg:block  fixed w-full left-0 ease-in-out	duration-500 z-50 ${showSticky ? 'top-0' : '-top-16'} `}>
        <div className='flex justify-between items-center bg-[#0f7c90] py-2 px-9'>
          <p className='text-white font-bold'>CSCS Green Card Mock Test</p>
          <div className='pr-28'>
            <a className="bg-[#dc3545] text-white  w-full py-2 px-16 block text-center rounded" href="#">
              <span>Start Free Test</span>
            </a>
          </div>
        </div>
      </div>

    </>
  );
};

export default TestPrepComponent;

