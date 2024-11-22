"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FiMenu, FiSearch, FiShoppingCart } from 'react-icons/fi';
import Sidebar from './Sidebar';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';

export default function PricingHeaderSmallScreen({ SearchItems, SearchQuery, setSearchQuery }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]); // State to hold search results

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchInput(''); // Clear the search input when closing the search
    setSearchResults([]); // Clear search results when closing the search
  };

  // const handleSearchInputChange = (e) => {
  //   const inputValue = e.target.value;
  //   setSearchInput(inputValue);

  //   // Mock search results based on input value
  //   // Replace this with your actual search logic
  //   if (inputValue) {
  //     const mockResults = ['Result 1', 'Result 2', 'Result 3'].filter(result =>
  //       result.toLowerCase().includes(inputValue.toLowerCase())
  //     );
  //     setSearchResults(mockResults);
  //   } else {
  //     setSearchResults([]); // Clear results if input is empty
  //   }
  // };

  return (
    <>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-start justify-center z-50">
          <div className="relative bg-white p-2 w-full">
            <button
              className="absolute top-[15px] left-1 text-gray-600"
            >
              <FiSearch size="18" />
            </button>
            <input
              type="text"
              value={SearchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for categories, courses, or training provider"
              className="w-full py-1 px-5 focus:outline-none"
            />
            <button
              onClick={toggleSearch}
              className="absolute top-[15px] right-1 text-gray-600">
              <AiOutlineClose size="18" />
            </button>

            {/* Search Results Panel */}
            {searchResults.length > 0 && (
              <div className="absolute top-[45px] left-0 right-0 bg-white shadow-lg mt-1">
                {searchResults.map((result, index) => (
                  <div key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
                    {result}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={`${SearchQuery && SearchQuery.length >= 2 ? 'min-h-20 max-h-96' : 'opacity-0 max-h-0'} top-12 transition-all duration-300 absolute bg-white mt-1 rounded overflow-y-auto overflow-x-hidden z-50 w-full border border-gray-300 shadow-2xl shadow-black/50`}>
            {SearchItems && SearchItems.map((item, index) => (
              <div key={index} className='p-2 cursor-pointer transition-colors duration-150 hover:bg-neutral-100'>
                <div className='flex space-x-2'>
                  <div className='w-1/6 rounded overflow-hidden'>
                    <Image src={item.image} className={`h-14 w-full rounded ${item.type == 'course' ? 'object-cover' : 'object-contain p-1 border border-gray-300'} `} height={55} width={200} alt='course image' />
                  </div>
                  <div className='w-5/6 flex flex-col space-y-1'>
                    <p className='font-semibold text-sm'>{item.name}</p>
                    {item.type == 'course' ?
                      <div className='flex items-center space-x-2'>
                        <p className='font-semibold text-xs'>{item.category}</p>
                        <p className='font-normal text-xs'>{item.provider}</p>
                      </div>
                      :
                      <div>
                        <p className='font-normal text-xs'>Training provider</p>
                      </div>
                    }
                  </div>
                </div>
              </div>
            ))
            }
          </div>
        </div>
      )}

      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-200 ">
        {/* Menu Icon */}
        <div className="text-2xl cursor-pointer" onClick={toggleSidebar}>
          <FiMenu />
        </div>

        {/* Hurak Logo */}
        <div className="flex text-center justify-center items-center">
          <Image
            src="/images/hurak-logo.webp" // replace with your actual image path
            alt="Hurak Logo"
            width={100}
            height={40}
          />
        </div>

        {/* Search and Cart Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <FiSearch className="text-2xl cursor-pointer" onClick={toggleSearch} />

          {/* Cart Icon with Notification Badge */}
          <div className="relative">
            <Link href="/shop-cart">
              <FiShoppingCart className="text-2xl" />
              <span className="absolute top-[-12px] right-[-5px] inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full">
                1
              </span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
