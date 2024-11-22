// components/SubMenu.jsx
'use client'
import React, { useState, useEffect } from 'react'
import Skeleton from '@/components/global/Skeletons/Skeleton';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const SubMenu = ({ OpenThird, setThird }) => {

  //   console.log(subMenuOptions);

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 600);
  // }, []);

  // const GotoMenu =() =>{
  //   // console.log(ThirdMenuBack);
  //   ThirdMenuBack(true);
  // }

  const [menuItems, setMenuItems] = useState([]);



  const TestLocations = [
    {
      test_location_id: 1,
      items: [
        { test_location_id: 1, url: 'tests/citb-Aberdeen', title: 'Aberdeen' },
        { test_location_id: 2, url: 'tests/citb-Aberystwyth', title: 'Aberystwyth' },
      ]
      // items: ['Aberdeen', 'Aberystwyth', 'Aldershot', 'Andover', 'Aylesbury', 'Ayr', 'Ballymena', 'Bangor', 'Barnstaple']
    },
  ]


  useEffect(() => {
    console.log(OpenThird);
    if (OpenThird != null && OpenThird.name == 'testLocations') {
      TestLocations.forEach((item) => {
        if (item.test_location_id === OpenThird.id) {
          setMenuItems(item.items);
        }
      });
    } else if (OpenThird != null && OpenThird.name == 'categories') {

      subCategories.forEach((item) => {
        if (item.cat_id === OpenThird.id) {
          setMenuItems(item.items);
        }
      });
    }

  }, [OpenThird]);


  return (
    <div
      className={`w-[380px] overflow-x-hidden fixed top-0 ${OpenThird != null ? 'left-0 ' : 'left-[100%]'} h-screen w-[100%] bg-white transition-all duration-300 overflow-x-hidden overflow-y-auto z-50`}
    >

      <div className='bg-[#f7f8f8] hover:cursor-pointer' onClick={() => { setThird(null) }}>
        <div className="text-[16px]  px-5 py-5 ">
          <AiOutlineLeft className=' inline text-xs mr-4' /> Back
        </div>
      </div>
      <div className='px-3 py-4'>
        <h2 className="text-lg font-semibold mb-4"></h2>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer flex items-center justify-between">
            <a href={`/${item.url}`} className='mt-2'>
              {item.title}
            </a>
          </li>
        ))}
      </div>
    </div>
  )
};

export default SubMenu;
