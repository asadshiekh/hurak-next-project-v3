'use client'
import React, { useState } from 'react'
import { FaFacebookF } from 'react-icons/fa';
import Link from 'next/link';
import TextInput from '@/components/global/forms/TextInput';
import { GoLock, GoMention } from 'react-icons/go';
import ButtonFill from '@/components/global/butttons/ButtonFill';
import ButtonOutline from '@/components/global/butttons/ButtonOutline';
import { FcGoogle } from 'react-icons/fc';
function page() {
  const [TestingID, setTestingID] = useState(null);
  return (
    <>
      <div className="flex items-center justify-center py-5">
        <div className="container mx-auto max-w-md p-6 ">
          <h1 className="text-xl font-bold mb-5 text-center">Log In to Your Hurak Account!</h1>
          <div className="space-y-3 border-t border-gray-300 mb-5 pt-5">

            <ButtonOutline shadow={true} align={'left'} IconLeft={<FaFacebookF className='text-[#FFF]' size={25} />} color={'bg-[#4267B2] text-white'} text={'Sign up with Facebook'} />
            <ButtonOutline shadow={true} align={'left'} IconLeft={<FcGoogle size={25} />} color={'light'} text={'Sign up with Google'} />

          </div>

          <div className="space-y-3 mt-8">
            <TextInput IconLeft={<GoMention />} label={`Email Address <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
            <TextInput IconLeft={<GoLock />} label={`Password <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
            <ButtonFill color={'danger'} text={'Log In'} />
          </div>


          <div className="general-content mt-5 text-center w-full mx-auto">
            <div className='text-base space-y-3 pb-5'>
              <p>
                <Link href="/sign-up" className="text-primary-light font-semibold hover:underline"> Sign Up </Link> or
                <Link href="/forget-password" className="text-primary-light font-semibold hover:underline"> Forgot Password</Link>.
              </p>
            </div>
            <div className='text-base space-y-3 border-t border-gray-300 mb-5 pt-5'>
              <p>
                If you are a course provider please visit our <Link href="/" className="text-primary-light font-semibold hover:underline"> Course provider page</Link> to register with us and advertise your courses for free in no time.
              </p>
              <p>
                If you are a business please visit our <Link href="/" className="text-primary-light font-semibold hover:underline"> Hurak Business page</Link> to register with us and receive exclusive deals and access to your own dashboard to manage your learners.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default page