"use client"
import React, { useState, useEffect } from 'react'
import { MdOutlineStarPurple500, MdOutlineStarHalf } from "react-icons/md";
import Skeleton from '@/components/global/Skeletons/Skeleton';
import ButtonFill from '@/components/global/butttons/ButtonFill';

const TestPrepMockReview = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  const Preview = [
    {
      name: 'Lee Stanley',
      email: 'leestanley007@yahoo.com',
      date: 'August 19, 2024'
    },
    {
      name: 'Lee Stanley',
      email: 'leestanley007@yahoo.com',
      date: 'August 19, 2024'
    },
    {
      name: 'Lee Stanley',
      email: 'leestanley007@yahoo.com',
      date: 'August 19, 2024'
    },
    {
      name: 'Lee Stanley',
      email: 'leestanley007@yahoo.com',
      date: 'August 19, 2024'
    },
  ];

  return (
    <>
      <div className="w-full bg-[#f8f9fa] min-h-[220px] border shadow-sm flex justify-center items-center py-14">
        <div className='container mx-auto px-6 lg:px-16'>
          {loading ? (
            <Skeleton style={'h-10 w-[100%] md:w-[40%] bg-neutral-200 mt-2'} />
          ) : (
            <h1 className='text-4xl md:text-3xl'>Mock Exam Reviews</h1>
          )}

          {Preview.length > 0 ? (
            Preview.map((item, index) => (
              loading ? (
                <div className='flex w-full mt-5'>
                  <div className=''>
                    <Skeleton style={'h-12 w-12 bg-neutral-200 mt-2 rounded-full'} />
                  </div>
                  <div className='w-full ml-5'>
                    <Skeleton style={'h-4 w-[50%] md:w-[20%] bg-neutral-200 mt-2'} />
                    <Skeleton style={'h-4 w-[60%] md:w-[25%] bg-neutral-200 mt-2'} />
                    <Skeleton style={'h-4 w-[100%] md:w-[60%] bg-neutral-200 mt-2'} />
                  </div>
                </div>
              ) : (
                <div key={index} className='flex py-5 md:p-5 '>
                  <div className='h-10 w-10 min-w-10 bg-black rounded-full text-white flex justify-center items-center mr-3 lg:mr-5'>
                    <p>Ls</p>
                  </div>
                  <div>
                    <div>
                      <p className='text-xl'>{item.name}</p>
                    </div>
                    <div className='flex'>
                      <div className='flex justify-end items-center text-[20px] text-[#ffc107] pr-1'>
                        <MdOutlineStarPurple500 /> <MdOutlineStarHalf />
                      </div>
                      <p>{item.date}</p>
                    </div>
                    <div>
                      <p className='text-xl'>The Mock Exams Excellent Thank you {item.email}</p>
                    </div>
                  </div>
                </div>
              )
            ))
          ) : (
            <p className='pt-5 text-lg'>There is no review yet</p>
          )}

          <div className='mt-6 flex justify-start'>
            <div>
              <a href="#">
                <ButtonFill color={"primary"} text={"Give a review"} />
              </a>
            </div>
            {/* <a className="bg-[#0f7c90] hover:bg-white hover:text-[#0f7c90] border-[1px] border-[#0f7c90] text-white text-lg w-full py-3 px-[30px] rounded-[4px]" href="#">Give a review</a> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default TestPrepMockReview;
