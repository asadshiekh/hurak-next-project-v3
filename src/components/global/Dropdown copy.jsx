"use client";
import { useState } from 'react';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
export default function Dropdown({ label, links }) {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  // Functions to handle mouse events
  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Clear any timeout when hovering
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsOpen(false);
      setActiveSubMenu(null); // Close active submenu
    }, 200); // Delay before closing
    setTimeoutId(id);
  };

  // Function to handle submenu
  const handleSubMenuEnter = (index) => {
    setActiveSubMenu(index);
  };

  const handleSubMenuLeave = () => {
    setActiveSubMenu(null);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter} // Open dropdown on mouse enter
      onMouseLeave={handleMouseLeave} // Close dropdown on mouse leave
    >
      <button className="text-gray-800 hover:text-primary">
        {label}
      </button>
      {isOpen && (
        <div className="absolute mt-2 py-2 w-48 bg-white shadow-lg z-10">
          {links.map((link, index) => (
            <div
              key={index}
              onMouseEnter={() => handleSubMenuEnter(index)} // Open submenu on mouse enter
              onMouseLeave={handleSubMenuLeave} // Close submenu on mouse leave
              className="relative"
            >
              <Link
                href={link.href}
                className={`block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 ${link.subLinks ? 'flex justify-between items-center' : ''}`}
              >
                {link.label}
                {link.subLinks && (
                  <span className="ml-2 text-gray-500">
                    <IoIosArrowForward size={10} color="black"/>
                  </span> // Arrow icon for submenu
                )}
              </Link>
              {link.subLinks && activeSubMenu === index && (
                <div className="absolute left-full top-0 mt-0 py-2 w-48 bg-white shadow-lg z-10 flex flex-col">
                  {link.subLinks.map((subLink, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subLink.href}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200"
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
