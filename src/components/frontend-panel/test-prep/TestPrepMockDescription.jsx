"use client"
import React, { useState, useEffect } from 'react'
import Skeleton from '@/components/global/Skeletons/Skeleton';

const TestPrepMockDescription = ({ params }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);
  const MockDescription = [

  ]
  return (
    <>
      <div className='pb-8'>
        {loading ? (
          <>
            <Skeleton style={'h-12 w-[70%] bg-neutral-200 mt-2'} />
            <Skeleton style={'h-4 w-[100%] bg-neutral-200 mt-4'} />
            <Skeleton style={'h-4 w-[100%] bg-neutral-200 mt-2'} />
            <Skeleton style={'h-4 w-[100%] bg-neutral-200 mt-2'} />
            <Skeleton style={'h-4 w-[100%] bg-neutral-200 mt-2'} />
            <Skeleton style={'h-4 w-[100%] bg-neutral-200 mt-2'} />
            <Skeleton style={'h-4 w-[50%] bg-neutral-200 mt-2'} />
          </>
        ) : (
          <>
            <p className='text-5xl'>CSCS Green Card Mock Test</p>
            <p>The CSCS Green Card Mock Test is for entry level workers or those wanting to join the construction industry. This is your first step to start a career in construction.

              Note: This mock test is for the RQF Level 1 Award in Health and Safety in a Construction Environment (L1HSCE). It's one of the accepted qualifications you need to get a CSCS Green Card. The passing requirements depend on the training provider. At Hurak, we give you a Highfield certificate when you finish the L1HSCE course with us. This mock exam mimics the actual test.
              Don't mix up this test with the CITB Health, Safety, and Environment test. If you're looking for CSCS Mock Tests, please visit this page.
            </p>
          </>
        )}
      </div>
    </>
  )
}

export default TestPrepMockDescription