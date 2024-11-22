"use client";
import React, { useState, useEffect } from 'react'
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import style from '@/../public/css/global/FrontEndMegaMenu.css';
import Skeleton from '@/components/global/Skeletons/Skeleton';

export default function Dropdown({
  label,
  links,
  SecondLevelLinks,
  ThirdLevelLinks,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [activeThirdMenu, setActiveThirdMenu] = useState(null);
  const [loading, setLoading] = useState(true);

  //  Functions to handle mouse events for Course
        const handleMouseEnter = () => {
          clearTimeout(timeoutId);
          setIsOpen(true);
        };

        const handleMouseLeave = () => {
          const id = setTimeout(() => {
            setIsOpen(false);
            setActiveSubMenu(null);
            setActiveThirdMenu(null);
          }, 200);
          setTimeoutId(id);
        };

        const handleSubMenuEnter = (CatID) => {
          setActiveSubMenu(CatID);
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 500);
        };

        const handleThirdMenuEnter = (SubID) => {
          setActiveThirdMenu(SubID);
        };

        const handleThirdMenuLeave = () => {
          setActiveThirdMenu(null);
        };

        const handleSecondLevelMouseLeave = (event) => {
          const relatedTarget = event.relatedTarget;
          if (
            !relatedTarget ||
            !relatedTarget.closest(".second-level") &&
            !relatedTarget.closest(".third-level")
          ) {
            setActiveSubMenu(null);
          }
        };

        const handleThirdLevelMouseLeave = (event) => {
          const relatedTarget = event.relatedTarget;
          if (!relatedTarget || !relatedTarget.closest(".third-level")) {
            setActiveThirdMenu(null);
          }
        };

        const hasSubLinks = (link) => {
          // console.log(link);

          return link.subLinks && link.subLinks.length > 0;
        };

    //  Functions to handle mouse events for Course

  return (
    <div
      className={`relative`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="text-gray-800 hover:text-primary">{label}</button>

      {isOpen && (
          <div className={`border absolute mt-2 py-2 w-[250px] h-96 overflow-y-auto bg-white shadow-lg z-10 menuScrollbar ${style.menuScrollbar}`}
          onMouseLeave={handleSecondLevelMouseLeave}
        >
          <p className="text-xl font-bold pl-4 pb-2">Main-Categories</p>
          {links.map((link, index) => (
              !hasSubLinks(link) ? (
                <div key={index} className="relative">
                  <Link
                    href={link.href}
                    className="block px-4 py-2 text-base font-[400] text-gray-800 hover:bg-gray-200"
                  >
                    {link.label}
                  </Link>
                </div>
              ) : (
                <div
                  key={index}
                  onMouseEnter={() => handleSubMenuEnter(link.cat_id)}
                  className="relative"
                >
                  <Link
                    href={`courses/${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="pl-4 pr-2 py-2 text-base font-[400] text-gray-800 hover:text-primary flex justify-between items-center"
                  >
                    {link.label}
                    {link.subLinks && (
                      <span className=" text-gray-500">
                        <IoIosArrowForward size={10} color="black" />
                      </span>
                    )}
                  </Link>
                </div>
              )
          ))}

        </div>        
      )}

      {activeSubMenu && SecondLevelLinks.some(link => link.cat_id === activeSubMenu) && (
        <div className="border absolute left-[250px] mt-2 py-2 w-[250px] h-96 overflow-y-auto bg-white shadow-lg z-10 second-level"
          onMouseLeave={handleThirdLevelMouseLeave}
        >
          <p className="text-xl font-bold pl-4 pb-2">Sub-Categories</p>
          {SecondLevelLinks.map(
            (link, index) =>
              activeSubMenu === link.cat_id && (
                loading ? (
                  <div key={index}>
                    <Skeleton style={'h-4 w-[90%] bg-neutral-200 mt-4 mx-2'} />
                  </div>
                ) : (
                <div
                  key={index}
                  onMouseEnter={() => handleThirdMenuEnter(link.sub_cat_id)}
                  className="relative"
                >
                  <Link
                    href={`courses/${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="pl-4 pr-2 py-1 text-base font-[400] text-gray-800 hover:text-primary flex justify-between items-center"
                  >
                    {link.label}
                    {link.subLinks && (
                      <span className=" text-gray-500">
                        <IoIosArrowForward size={10} color="black" />
                      </span>
                    )}
                  </Link>
                </div>
                )
              )
          )}
        </div>
      )}

      {activeThirdMenu && ThirdLevelLinks.some(link => link.sub_cat_id === activeThirdMenu) && (
        <div className="border absolute left-[500px] mt-2 py-2 w-[250px] h-96 overflow-y-auto bg-white shadow-lg z-10 third-level">
          <p className="text-xl font-bold pl-4 pb-2">Popular Courses</p>
          {ThirdLevelLinks.map(
            (link, index) =>
              activeThirdMenu === link.sub_cat_id && (
                <div key={index} className="relative">
                  <Link
                    href={`course/${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="pl-4 pr-2 py-1 text-base font-[400] text-gray-800 hover:text-primary flex justify-between items-center"
                  >
                    {link.label}
                    {link.subLinks && (
                      <span className=" text-gray-500">
                        <IoIosArrowForward size={10} color="black" />
                      </span>
                    )}
                  </Link>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}
