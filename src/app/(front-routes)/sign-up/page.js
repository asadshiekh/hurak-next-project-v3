
'use client'
import React, { useState } from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { GoLock, GoMention, GoPerson } from 'react-icons/go';


import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';
import TextInput from '@/components/global/forms/TextInput';
import ButtonOutline from '@/components/global/butttons/ButtonOutline';
import ButtonFill from '@/components/global/butttons/ButtonFill';
import Checkbox from '@/components/global/forms/Checkbox';
function Page() {
  const [TestingID, setTestingID] = useState(null);


  return (


    <>
      <div className="flex items-center justify-center py-5">
        <div className="container mx-auto max-w-md p-6 ">
          <h1 className="text-xl font-bold mb-5 text-center">Sign Up and Start Learning!</h1>
          <div className="space-y-3 border-t border-gray-300 mb-5 pt-5">


            <ButtonOutline shadow={true} align={'left'} IconLeft={<FaFacebookF className='text-[#FFF]' size={25} />} color={'bg-[#4267B2] text-white'} text={'Sign up with Facebook'} />
            <ButtonOutline shadow={true} align={'left'} IconLeft={<FcGoogle size={25} />} color={'light'} text={'Sign up with Google'} />


          </div>


          <div className="space-y-3 mt-8">
            <TextInput IconLeft={<GoPerson />} label={`First Name <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
            <TextInput IconLeft={<GoPerson />} label={`Last Name <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
            <TextInput IconLeft={<GoMention />} label={`Email Address <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
            <TextInput IconLeft={<GoLock />} label={`Password <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
            <Checkbox trueValue={'true'} falseValue={'false'} CheckValue={'exclusive'} name={'exclusive'} label={'Yes! I want to get the most out of Hurak by receiving emails with exclusive deals, recommendations and learning tips!'} />
            <ButtonFill color={'danger'} text={'Sign Up'} />
          </div>


          <div className="general-content mt-5 text-center w-full mx-auto">
            <div className='text-base space-y-3 pb-5'>
              <p>By signing up, you agree to our
                <Link href="/" className="text-primary-light font-semibold hover:underline"> Terms of Use</Link> and
                <Link href="/" className="text-primary-light font-semibold hover:underline"> Privacy Policy</Link>.
              </p>
              <p>
                <Link href={"/log-in"} className="text-primary-light font-semibold hover:underline"> Already have an account?</Link>
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


export default Page