"use client";

import React, { useEffect, useState } from 'react';

const MockExamBanner = () => {
  
  return (
    <>
      <div className="group grid grid-cols-8 text-white bg-[#0f7c90] ">
        <div className="col-start-1 col-span-8 lg:col-start-2 lg:col-span-6 h-auto py-5 px-6 lg:px-0">
          <div className='py-5 lg:relative'>
            <div className='flex'>
              <a href="">Home</a>
              <a href=""> &nbsp;/&nbsp;Test Prep </a>
              <a href="">&nbsp;/&nbsp; CSCS Green Card Mock Test</a>
            </div>
            <div className='pt-7'>
              <h1 className='font-bold text-4xl'>CSCS Green Card Mock Test</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MockExamBanner;

