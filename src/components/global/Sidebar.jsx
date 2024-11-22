// components/Sidebar.jsx
"use client"
import React, { useState, useEffect } from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import SubMenu from './SubMenu';
import Link from 'next/link';
import Image from 'next/image';
import { LiaCrownSolid } from "react-icons/lia";
import AccountSwitchMobile from './AccountSwitcherMobile';
import Skeleton from '@/components/global/Skeletons/Skeleton';

const Sidebar = ({ isOpen, toggleSidebar }) => {

  const [loading, setLoading] = useState(true);
  const [showAccountModal, setAccountModal] = useState(false);

  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [showButton, setShowButton] = useState(false);
  // const [NestedSubMenu, setNestedSubMenu] = useState(null);

  // const [NestedSubMenu, setNestedSubMenu] = useState(openSubMenu.items);

  // Category data defined directly in Sidebar
  const categories = [
    {
      cat_id: 1,
      name: 'Accounting and Finance'
    },
    {
      cat_id: 2,
      name: 'Business'
    },
    {
      cat_id: 3,
      name: 'Construction'
    },
    // Add more categories as needed
  ];

  // const categories = [
  //   {
  //     name: 'Accounting and Finance',
  //     items: ['Bookkeeping', 'Financial Analysis', 'Payroll Management', 'Tax Preparation'],
  //   },
  //   {
  //     name: 'Business',
  //     items: ['Entrepreneurship', 'Project Management', 'Business Strategy', 'Operations Management'],
  //   },
  //   {
  //     name: 'Construction',
  //     items: ['Building Regulations', 'Construction Safety', 'Site Management', 'Construction Technology'],
  //   },
  //   // Add more categories as needed
  // ];
  const Test = [
    {
      name: 'CITB',
      items: ['CITB Health, Safety & Environment (HS&E) Test'],
    },
  ]
  const Licences = [
    {
      name: 'CSCS Card',
      items: ['CSCS Card Application - Applying for your CSCS Card'],
    },
    {
      name: 'Personal Licence',
      items: ['APLH Personal Licence Application', 'Premises Licence', 'Occasional Licence']

    },
    {
      name: 'Security Licence',
      items: ['SIA Security Guard Licence', 'SIA Door Supervisor Licence', 'SIA Close Protection Licence', 'CCTV Licence ']
    },
    {
      name: 'Construction',
      items: ['Forklift Licence']
    },
  ];


  const Locations = [
    {
      name: 'Classroom Locations',
      items: [
        'Emergency First Aid Courses in Birmingham',
        'Emergency First Aid Courses in Hayes',
        'Emergency First Aid Courses in Leeds',
        'Emergency First Aid Courses in Liverpool',
        'Emergency first aid Courses in London',
        'Emergency First Aid Courses in Manchester',
        'Emergency First Aid Courses in Newcastle',
        'Emergency First Aid Courses in Nottingham',
        'Emergency First Aid Courses in Sheffield',
        'First Aid at Work Courses in London',
        'First Aid at Work Courses in Birmingham',
        'First Aid at Work Courses in Manchester',
      ]

    },
  ]


  const TestLocations = [
    {
      id: 1,
      name: 'Test Locations',
    },
  ]

  const handleCategoryClick = (id, name) => {
    // console.log(id, name);
    setOpenSubMenu({ id: id, name: name });
    // setNestedSubMenu(category)
  };

  // const handleBackClick = () => {
  //   setOpenSubMenu(null);
  // };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setLoading(false);
      }, 600);
      const timer = setTimeout(() => setShowButton(true), 500);
      return () => clearTimeout(timer);
    } else {
      setShowButton(false);
    }
  }, [isOpen]);

  const ClickOpenAccount = () => {
    setAccountModal(true)
  }
  const CloseOpenAccount = () => {
    setAccountModal(false)
  }
  const [showModal, setShowModal] = useState(false);

  const handleProfileClick = () => {
    setShowModal(true);
    // setShowProfileTabs(true);
  };
  return (
    <div className={`fixed top-0 w-full bg-[#343a40b3] bg-opacity-80 h-screen z-40 ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'} overflow-x-hidden overflow-y-auto max-h-screen`}>

      <button
        className={`fixed top-[20px] left-[80%] md:left-[53%] text-4xl rounded-full z-50 bg-white text-gray-500 px-[15px] py-1 transition-opacity duration-500 ease-in-out ${showButton ? 'opacity-100' : 'opacity-0'}`}
        onClick={toggleSidebar}>
        ×
      </button>
      <div
        className={` overflow-x-hidden fixed top-0 left-0 h-full w-[75%] md:w-[50%] lg:w-[60%]  bg-white transition-transform duration-300 overflow-auto ${isOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
          } overflow-y-auto max-h-screen`}>

        <div className={`${openSubMenu || showModal ? 'w-0 h-0' : ''} overflow-x-hidden `}>
          <div className="text-2xl font-bold bg-[#f7f8f8] py-4">
            <Link href="/">
              <Image
                src="/images/hurak-logo.webp"
                alt="Logo"
                width={100}
                height={100}
                className="cursor-pointer ml-3"
              />
            </Link>
          </div>
          <div className=' py-4 '>
            <div className="w-full pl-3 pr-1">
              <div onClick={() => setShowModal(true)}>
                <div className="grid grid-cols-10">
                  <div className=" col-span-2">
                    <div className="flex justify-center items-center w-14 h-14 rounded-full bg-[#6c757d]">
                      <p className=' text-2xl  text-white'>HM</p>
                    </div>
                  </div>
                  <div className="col-start-3 col-span-7">
                    <div className="flex justify-between">
                      <div>
                        <p className="text-md font-[500]">haseeb ali</p>
                        <p className="text-xs">haseeb.maqsood@collaborak.com</p>
                        <div className=" w-full flex items-center justify-between">
                          <p className="text-xs">Student account</p>

                        </div>
                        <div className="flex mt-2 items-center bg-black text-white rounded w-[70px]">
                          <LiaCrownSolid className="mx-1 text-yellow-500" />
                          <p className="font-[700] text-xs py-1">Level 1</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <AiOutlineRight className="text-gray-500 inline bg-white" size="14" />
                  </div>
                </div>
              </div>
            </div>
            <hr className='mt-5'>
            </hr>
            <div className="mb-6 px-3">
              <h2 className="text-lg font-semibold mb-2 ">User Account</h2>
              <ul className="space-y-2">
                <li>Login</li>
                <li>Sign Up</li>
              </ul>
            </div>

            <hr className='my-3'></hr>

            <div className="mb-6 px-3">
              <h2 className="text-lg font-semibold mb-2">Categories</h2>
              <ul className="space-y-2">
                {loading ? (
                  [1, 2, 3].map((item, index) => (
                    <Skeleton key={index} style={"h-4 w-[80%] bg-neutral-200 mt-3"} />
                  ))
                ) : (
                  categories.map((category) => (
                    <li
                      key={category.name}
                      onClick={() => handleCategoryClick(category.cat_id, 'categories')}
                      className="cursor-pointer flex items-center justify-between">
                      {category.name} <AiOutlineRight className="text-gray-500" size="10" />
                    </li>
                  ))
                )}
              </ul>
            </div>

            <hr className='my-6'></hr>
            <div className="mb-6 px-3">
              <h2 className="text-lg font-semibold mb-2">Tests</h2>
              <ul className="space-y-2">
                {loading ? (
                  [1, 2, 3].map((item, index) => (
                    <Skeleton key={index} style={"h-4 w-[80%] bg-neutral-200 mt-3"} />
                  ))
                ) : (
                  Test.map((Test) => (
                    <li
                      key={Test.name}
                      onClick={() => handleCategoryClick(Test.items)}
                      className="cursor-pointer flex items-center justify-between">
                      {Test.name} <AiOutlineRight className="text-gray-500" size="10" />
                    </li>
                  ))
                )}
              </ul>
            </div>

            <hr className='my-6'></hr>

            <div>
              <h2 className="text-lg font-semibold mb-2 px-3">Licences</h2>
              <ul className="space-y-2 px-3">
                {loading ? (
                  [1, 2, 3].map((item, index) => (
                    <Skeleton key={index} style={"h-4 w-[80%] bg-neutral-200 mt-3"} />
                  ))
                ) : (
                  Licences.map((Licence) => (
                    <li
                      key={Licence.name}
                      onClick={() => handleCategoryClick(Licence.items)}
                      className="cursor-pointer flex items-center justify-between">
                      {Licence.name} <AiOutlineRight className="text-gray-500" size="10" />
                    </li>
                  ))
                )}
              </ul>
            </div>
            <div className='pt-5'>
              <h2 className="text-lg font-semibold mb-2 px-3">Locations</h2>
              <ul className="space-y-2 px-3">
                {loading ? (
                  [1, 2, 3].map((item, index) => (
                    <Skeleton key={index} style={"h-4 w-[80%] bg-neutral-200 mt-3"} />
                  ))
                ) : (
                  <>
                    {TestLocations.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handleCategoryClick(item.id, 'testLocations')}
                        className="cursor-pointer flex items-center justify-between">
                        {item.name}<AiOutlineRight className="text-gray-500" size="10" />
                      </li>
                    ))}
                    {Locations.map((Location) => (
                      <li
                        key={Location.name}
                        onClick={() => handleCategoryClick(Location.items)}
                        className="cursor-pointer flex items-center justify-between">
                        {Location.name} <AiOutlineRight className="text-gray-500" size="10" />
                      </li>
                    ))}
                  </>
                )}
              </ul>
            </div>

            <hr className='my-6'></hr>

            <div>
              <h2 className="text-lg font-semibold mb-2 px-3">More from Hurak</h2>
              <ul className="space-y-2 px-3">
                <li>CSCS Card</li>
                <li>Personal Licence</li>
              </ul>
            </div>

            <hr className='my-6'></hr>

            <div>
              <h2 className="text-lg font-semibold mb-2 px-3">Find a Course</h2>
              <ul className="space-y-2 px-3">
                <li>All Courses</li>
                <li>Classroom Courses</li>
                <li>Live Online Course</li>
                <li>On Demand Course</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ):( */}

        {/* <SubMenu openSubMenu={openSubMenu} NestedSubMenu={NestedSubMenu} setNestedSubMenu={setNestedSubMenu} setOpenSubMenu={setOpenSubMenu} onBack={handleBackClick} /> */}
        <SubMenu openSubMenu={openSubMenu} setOpenSubMenu={setOpenSubMenu} />
        {/* <div className="w-full pl-3 pr-1"> */}
        <AccountSwitchMobile showModal={showModal} setShowModal={setShowModal} />
        {/* </div> */}
        {/* )} */}
      </div>

    </div>
  );
};

export default Sidebar;
