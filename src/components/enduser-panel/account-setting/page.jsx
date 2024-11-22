'use client'
import React, { useState } from 'react';
import Header from '../header';
import Image from 'next/image';
import TextInput from '@/components/global/forms/TextInput';
import SelectField from '@/components/global/forms/SelectField';
import ButtonOutline from '@/components/global/butttons/ButtonOutline';
import ButtonInverseFill from '@/components/global/butttons/ButtonInverseFill';

const AccountSettings = () => {

  const [isModalopen, setisModalopen] = useState(false);
  const modalOpen = () => setisModalopen(true);
  const modalClose = () => setisModalopen(false);
  const [TestingID, setTestingID] = useState(null);
  const [Mr, setMr] = useState(null);
  const MrOptions = [
    { text: ' Small (1-10 employees)', value: ' Small (1-10 employees)' },
    { text: ' Medium (51-100 employees)', value: ' Small (1-10 employees)' },
    { text: ' Large (101-150 employees)', value: ' Small (1-10 employees)' }
  ];
  return (

    <div>
      <div className='ml-4 mr-4 md:ml-auto md:mr-auto lg:ml-auto lg:mr-auto m-auto lg:w-2/5 md:w-3/4 w-3/3 border my-5 py-5 px-5 rounded-lg mb-7'>

        <div className='flex justify-between flex-wrap items-center border-b pb-5'>
          <div>
            <h1 className='text-2xl text-gray-700'>Basic Info</h1>
            <p className='text-lg text-gray-700 mt-1'>
              The information below is used for your billing <br /> details.
            </p>
          </div>
          <div>
            <p className='bg-green-500 text-white font-bold px-2 rounded text-md' style={{ backgroundColor: "#84CB94" }}>Verified User</p>
          </div>
        </div>

        <div className='flex justify-between items-center border-b py-5'>
          <div>
            <h1 className='text-lg'>Photo</h1>
          </div>

          {/* <div>
                <p className='text-md text-gray-700'>Add a photo to personalise your account</p>
            </div> */}

          <div>
            <Image onClick={modalOpen}
              className='w-16 h-16  rounded-full object-cover border cursor-pointer'
              src="/images/upskill-image.webp"
              alt="Upskill your team with Hurak Business"
              layout=""
              width={90}
              height={50}
              loading="lazy" />
          </div>
        </div>


        <div className='flex justify-between items-center flex-wrap lg:flex-nowrap md:flex-nowrap w-full pt-5 mt-5'>
          <div className='w-full mr-2'>
            <TextInput label={`First Name <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />

            {/* <input className='border w-full px-4 py-3 rounded text-sm border-gray-300 outline-none' type="text" placeholder='First Name' /> */}

          </div>

          <div className='w-full lg:ml-5 md:ml-5 md:mr-5 lg:mr-5 mr-2 mt-3 lg:mt-0 md:mt-0'>
            <TextInput label={`Last Name <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />

            {/* <input className='border w-full px-4 py-3 rounded text-sm border-gray-300 outline-none' type="text" placeholder='Last Name' /> */}
          </div>
        </div>

        <div className='flex justify-between items-center w-full py-3 flex-wrap lg:flex-nowrap md:flex-nowrap'>
          <div className='w-full mr-2'>
            <TextInput label={`date of birth <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />

            {/* <input className='border w-full px-4 py-3 rounded text-sm border-gray-300 text-gray-00 outline-none' type="date" placeholder='date of birth' /> */}
          </div>

          <div className='w-full lg:ml-5 md:ml-5 md:mr-5 lg:mr-5 mr-2 mt-3 lg:mt-0 md:mt-0'>
            <TextInput label={`Last Name <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />

            {/* <input className='border w-full px-4 py-3 rounded text-sm border-gray-300 outline-none ' type="text" placeholder='Last Name' /> */}
          </div>
        </div>

        <div className='mb-1 mt-1 text-end mr-5'>
          <button className='text-blue font-[600] text-lg hover:text-primary cursor-pointer'>Save changes</button>
        </div>
      </div>

      {/* Address  Section start  */}
      <div className='ml-4 mr-4 md:ml-auto md:mr-auto lg:ml-auto lg:mr-auto m-auto lg:w-2/5 md:w-3/4 w-3/3 border my-5 py-5 px-5 rounded-lg mb-7'>
        <div className='border-b pb-4'>
          <p className='text-2xl text-gray-700'>Address information
          </p>
        </div>

        <div className='flex justify-between items-center w-full pt-5 mt-4 flex-wrap lg:flex-nowrap md:flex-nowrap'>
          <div className='w-full mr-2'>
            <TextInput label={`Street Address <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
          </div>

          <div className='w-full lg:ml-5 md:ml-5 md:mr-5 lg:mr-5 mr-2 mt-3 lg:mt-0 md:mt-0'>
            <TextInput label={`Town/City <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />

          </div>
        </div>

        <div className='lg:w-[336px] md:w-[245px] mr-2 mt-3'>
          <TextInput label={`Postcode <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />

        </div>
        <div className='mb-1 mt-1 text-end mr-5'>
          <button className='text-blue font-[600] text-lg hover:text-primary cursor-pointer'>Save changes</button>
        </div>
      </div>
      {/*Address  Section end*/}

      {/* Email section start */}
      <div className='ml-4 mr-4 md:ml-auto md:mr-auto lg:ml-auto lg:mr-auto m-auto lg:w-2/5 md:w-3/4 w-3/3 border my-5 py-5 px-5 rounded-lg mb-7'>
        <div className='border-b pb-4'>
          <p className='text-2xl text-gray-700'>Email setting
          </p>
          <p className='text-lg text-gray-700 mt-1'>Manage your primary email address here.</p>
        </div>

        <div className='flex justify-between items-center w-full pt-5 mt-4 flex-wrap lg:flex-nowrap md:flex-nowrap'>
          <div className='w-full mr-2'>
            <TextInput label={`Email <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />

          </div>

          <div className='w-full lg:ml-5 md:ml-5 md:mr-5 lg:mr-5 mr-2 mt-3 lg:mt-0 md:mt-0'>
            <TextInput label={`Current Password <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />

          </div>
        </div>
        <div className='mb-1 mt-1 text-end mr-5 mt-4'>
          <button className='text-blue font-[600] text-lg hover:text-primary cursor-pointer'>Save changes</button>
        </div>
      </div>
      {/* Email Section end */}

      {/* Password setting  two start  */}
      <div className='ml-4 mr-4 md:ml-auto md:mr-auto lg:ml-auto lg:mr-auto m-auto lg:w-2/5 md:w-3/4 w-3/3 border my-5 py-5 px-5 rounded-lg mb-7'>
        <div className='border-b pb-4 '>
          <p className='text-2xl text-gray-700'>Password setting
          </p>
          <p className='text-lg text-gray-700 mt-1'>Choose a strong password for a secure login.</p>
        </div>

        <div className='lg:w-[336px] md:w-[245px] mr-2 mt-5 pt-4'>
          <TextInput label={`Current Password <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />

        </div>

        <div className='flex justify-between items-center w-full pt-5 flex-wrap lg:flex-nowrap md:flex-nowrap'>
          <div className='w-full mr-2'>
            <TextInput label={`New Password <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />

          </div>

          <div className='w-full lg:ml-5 md:ml-5 md:mr-5 lg:mr-5 mr-2 mt-3 lg:mt-0 md:mt-0'>
            <TextInput label={`Repeat Password <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />

          </div>
        </div>
        <div className='mb-1 mt-1 text-end mr-5 mt-4'>
          <button className='text-blue font-[600] text-lg hover:text-primary cursor-pointer'>Save changes</button>
        </div>


      </div>
      {/*Password setting Section two end*/}

      {/* Business setting */}
      <div className='ml-4 mr-4 md:ml-auto md:mr-auto lg:ml-auto lg:mr-auto m-auto lg:w-2/5 md:w-3/4 w-3/3 border my-5 py-5 px-5 rounded-lg mb-7'>
        <div className='border-b pb-4'>
          <p className='text-2xl text-gray-700'>Business setting
          </p>
          <p className='text-gray-700 text-lg'>Manage your business information here.</p>
        </div>

        <div className='flex justify-between items-center w-full pt-5 mt-4 flex-wrap lg:flex-nowrap md:flex-nowrap'>
          <div className='w-full mr-2'>
            <TextInput label={`Company name <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />

          </div>

          <div className='w-full lg:ml-5 md:ml-5 md:mr-5 lg:mr-5 mr-2 mt-3 lg:mt-0 md:mt-0'>
            <TextInput label={`Your role <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
          </div>
        </div>

        <div className='lg:w-[336px] md:w-[245px] mr-2 mt-3'>
          <SelectField options={MrOptions} SelectValue={Mr} setSelectValue={setMr} required={true} />

          {/* <select className='border text-gray-400 w-full px-4 py-3 rounded text-sm border-gray-300 outline-none'>
            <option className='text-gray-500'>Company Size</option>
            <option className='text-gray-500'>-- Select -- </option>
            <option>1-50</option>
            <option>51-100</option>
            <option>101-500</option>
            <option>501-1001</option>
          </select> */}
        </div>
        <div className='mb-1 mt-1 text-end mr-5'>
          <button className='text-blue font-[600] text-lg hover:text-primary cursor-pointer'>Save changes</button>
        </div>
      </div>
      {/*Business setting end*/}

      {/* Custom Modal */}
      {isModalopen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50  flex justify-center items-center z-50">
          <div className="bg-white p-6 pt-4 rounded shadow-lg max-w-3xl w-full relative">
            <button
              className="absolute top-3 right-2 text-xl font-bold"
              onClick={modalClose}>
              <span className='mr-3 font-medium text-xl text-gray-500'> &times;</span>
            </button>
            <h2 className="text-xl mb-4 border-b pb-3">Select profile photo</h2>
            <div className="flex justify-center items-center">
              <Image onClick={modalOpen}
                className='w-56 h-56 border-black rounded-full object-cover border'
                src="/images/end_user_profile.png"
                alt="Upskill your team with Hurak Business"
                layout=""
                width={90}
                height={50}
                loading="lazy" />
            </div>
            <div className='flex justify-center mt-4 '>
              {/* <div className='w-[13%]'> */}
              <ButtonOutline widthAuto={"auto"} color={"dark"} text={"upload"} />
              {/* </div> */}
            </div>
            <div className='flex justify-end mt-5'>
              <button className='mr-4 font-semibold text-lg text-blue hover:text-black' onClick={modalClose} >Cancel</button>
              <div className='flex justify-end'>
                <ButtonInverseFill color={"primary"} text={"Save"} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

  )
}

export default AccountSettings;