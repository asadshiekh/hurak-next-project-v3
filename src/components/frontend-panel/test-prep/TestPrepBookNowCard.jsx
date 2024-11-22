import ButtonFill from '@/components/global/butttons/ButtonFill'
import React from 'react'
const TestPrepBookNowCard = ({ params }) => {

  return (
    <>
      <div className='h-auto bg-white border rounded-lg bottom-4 p-2 mb-3'>
        <div className='max-w-full'>
          <img src="/images/test-prep-mock-test.webp" alt="" />
        </div>
        <div className='pt-6'>
          <a href="#takeTest">
            <ButtonFill color={"danger"} text={"START FREE TEST"} />
          </a>
        </div>
        <div className='flex justify-center text-center py-8'>
          <p className='font-bold text-3xl'>Ready to book your course ?</p>
        </div>
        <div className='mt-2 mb-6'>
          <a href="/course/cscs-green-card-labourers-card-course"> <ButtonFill color={"primary"} text={"START FREE TEST"} /></a>
        </div>
      </div>
    </>
  )
}

export default TestPrepBookNowCard