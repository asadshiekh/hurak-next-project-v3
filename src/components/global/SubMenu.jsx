// components/SubMenu.jsx
'use client'
import React, { useState, useEffect } from 'react'
import Skeleton from '@/components/global/Skeletons/Skeleton';
import ThirdMenu from '@/components/global/ThirdMenu'
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const SubMenu = ({ openSubMenu, setOpenSubMenu }) => {
  // if (typeof NestedSubMenu === 'string') {
  //   try {
  //     // Try parsing the string
  //     const parsed = JSON.parse(NestedSubMenu);

  //     // Check if parsed is an object (array or object)
  //     if (typeof parsed === 'object' && parsed !== null) {
  //       alert('Valid JSON!');
  //     } else {
  //       alert('Parsed JSON is not an object or array!');
  //     }
  //   } catch (e) {
  //     // If parsing fails, it's not valid JSON
  //     // alert('Not a valid JSON!');
  //   }
  // }

  // const [loading, setLoading] = useState(true);
  const [OpenThird, setThird] = useState(null);
  // // 
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 600);
  // }, []);

  // const MenuBack = () => {
  //   onBack(null);
  // }
  // const ThirdMenuBack = () => {
  //   setThird(false);
  // }
  // const subMenuOptions = () => {
  //   setThird(true);
  // };

  const [menuItems, setMenuItems] = useState([]);

  const TestLocations = [
    {
      test_id: 1,
      items: [
        { type: "testLocations", test_location_id: 1, url: 'tests/citb', title: 'CITB Health, Safety & Environment (HS&E) Test' },
      ]
    }
  ]

  const subCategories = [
    {
      cat_id: 1,
      items: [
        { type: "categories", sub_cat_id: 1, url: 'courses/bookkeeping', title: 'Bookkeeping' },
        { type: "categories", sub_cat_id: 2, url: 'courses/financial-analysis', title: 'Financial Analysis' },
        { type: "categories", sub_cat_id: 3, url: 'courses/payroll-management', title: 'Payroll Management' },
        { type: "categories", sub_cat_id: 4, url: 'courses/tax-preparation', title: 'Tax Preparation' },
      ]
    },
    {
      cat_id: 2,
      items: [
        { type: "categories", sub_cat_id: 1, url: 'courses/bookkeeping', title: 'Bookkeeping' },
        { type: "categories", sub_cat_id: 2, url: 'courses/financial-analysis', title: 'Financial Analysis' },
        { type: "categories", sub_cat_id: 3, url: 'courses/payroll-management', title: 'Payroll Management' },
        { type: "categories", sub_cat_id: 4, url: 'courses/tax-preparation', title: 'Tax Preparation' },
      ]
      // items: ['Entrepreneurship', 'Project Management', 'Business Strategy', 'Operations Management'],
    },
    {
      cat_id: 3,
      items: [
        { type: "categories", sub_cat_id: 1, url: 'courses/bookkeeping', title: 'Bookkeeping' },
        { type: "categories", sub_cat_id: 2, url: 'courses/financial-analysis', title: 'Financial Analysis' },
        { type: "categories", sub_cat_id: 3, url: 'courses/payroll-management', title: 'Payroll Management' },
        { type: "categories", sub_cat_id: 4, url: 'courses/tax-preparation', title: 'Tax Preparation' },
      ]
      // items: ['Building Regulations', 'Construction Safety', 'Site Management', 'Construction Technology'],
    },
  ];


  useEffect(() => {

    if (openSubMenu != null && openSubMenu.name == 'testLocations') {
      TestLocations.forEach((item) => {
        if (item.test_id === openSubMenu.id) {
          setMenuItems(item.items);
          console.log(menuItems);

        }
      });
    } else if (openSubMenu != null && openSubMenu.name == 'categories') {

      subCategories.forEach((item) => {
        if (item.cat_id === openSubMenu.id) {
          setMenuItems(item.items);
          console.log(menuItems);

        }
      });
    }

  }, [openSubMenu]);

  const handleCategoryClick = (id, name) => {
    setThird({ id: id, name: name });
  };

  // const TestLocations = [
  //   {
  //     test_id:1,
  //     name: 'CITB Health, Safety & Environment (HS&E) Test',
  //     items: ['Aberdeen', 'Aberystwyth', 'Aldershot', 'Andover', 'Aylesbury', 'Ayr', 'Ballymena', 'Bangor', 'Barnstaple']
  //   },
  //   {
  //     name: 'Health Environment',
  //     items: ['Aberdeen', 'Aberystwyth', 'Aldershot', 'Andover', 'Aylesbury', 'Ayr', 'Ballymena', 'Bangor', 'Barnstaple']
  //   },


  // ]

  return (
    <div
      className={`w-[100%]  overflow-x-hidden fixed top-0 ${openSubMenu != null ? 'left-0 ' : 'left-[100%]'} h-screen w-[100%] bg-white transition-all duration-300 overflow-x-hidden overflow-y-auto z-50`}
    >

      <div className='bg-[#f7f8f8] hover:cursor-pointer' onClick={() => { setOpenSubMenu(null) }}>
        <div className="text-[16px]  px-5 py-5 ">
          <AiOutlineLeft className=' inline text-xs mr-4' /> Menu
        </div>
      </div>
      <div className='px-3 py-4'>
        <h2 className="text-lg font-semibold mb-4">{openSubMenu != null ? openSubMenu.name : false}</h2>
        <ul className="space-y-2">
          {/* {loading ? (
            [1, 2, 3, 4, 5].map((item, index) => (
              <Skeleton key={index} style={"h-4 w-[80%] bg-neutral-200 mt-3"} />
            ))
          ) : ( */}
          {/* NestedSubMenu != null ? */}
          {menuItems.map((item, index) => (
            item.type == 'testLocations' ?
              <li
                key={index}
                onClick={() => handleCategoryClick(item.test_location_id, item.type)}
                className="cursor-pointer flex items-center justify-between">
                {item.title}
              </li>
              :
              <li
                key={index}
                className="cursor-pointer flex items-center justify-between">
                <a href={`/${item.url}`}>
                  {item.title}
                </a>
              </li>
          ))}
        </ul>
      </div>
      <ThirdMenu OpenThird={OpenThird} setThird={setThird} />
    </div>
  )
};

export default SubMenu;
