"use client"
import React, { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi'; // Shopping cart icon
import { IoMdArrowDropdown } from 'react-icons/io'; // Dropdown arrow icon
import SideMenuCheckout from './SideMenuCheckout';
import ButtonFill from './butttons/ButtonFill';

const CartSection = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-6 bg-white shadow rounded-lg z-50 overflow-hidden"> {/* Fixed position and high z-index */}
      {/* Cart Icon with Notification Badge */}
      <div className="relative flex items-center">
        <div onClick={toggleSideMenu} className="cursor-pointer flex items-center">
          <FiShoppingCart className="text-2xl" />
          <span className="absolute top-[-10px] right-[-5px] bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
            1
          </span>
          <IoMdArrowDropdown className={`text-2xl transition-transform ${isSideMenuOpen ? 'rotate-180' : ''}`} /> {/* Rotate arrow when menu opens */}
        </div>
      </div>

      {/* Price */}
      <div className="order_details flex items-center">
        <div className="text-lg font-semibold mr-2">£89.00</div>

        {/* Register Button */}
      
        <ButtonFill color={"primary"} text={"Register"} />
      </div>

      {/* Side Menu Component */}
      {isSideMenuOpen && <SideMenuCheckout />}
    </div>
  );
};

export default CartSection;
