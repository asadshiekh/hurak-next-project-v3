"use client";
import React, { useState, useEffect } from "react";
import { MdOutlineCurrencyPound } from "react-icons/md";
import { IoLocationOutline, IoRocketOutline } from "react-icons/io5";

function Services() {

  const guarantees = [
    {
      title: "Price Match Guarantee",
      description: "Browse with confidence, we’ll meet or beat any of our competitor’s prices",
      icon: <MdOutlineCurrencyPound />
    },
    {
      title: "Nationwide Coverage",
      description: "Local and nationwide coverage so that you can get trained no matter where you are",
      icon: <IoLocationOutline />
    },
    {
      title: "Same Day Results",
      description: "Benefit from instant results for most of our courses",
      icon: <IoRocketOutline />
    }
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="bg-white rounded-lg p-6 flex">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-12 h-12 bg-[#f2fbfc] text-primary rounded-full">
                  {guarantee.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{guarantee.title}</h3>
                <p className="text-gray-600">{guarantee.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Services
