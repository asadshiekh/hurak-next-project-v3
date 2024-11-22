import React, { useState, useEffect } from 'react';
import { FiCheckCircle } from "react-icons/fi";

const AdvertiseFeaturesSection = () => {
  
  return (
    <>
        <div className="bg-[#f2fbfc] py-20">
          <div className="container auto-container mx-auto px-4">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row mb-10">
              <div className="w-full md:w-1/4 mb-4 md:mb-0">
                <h4 className="text-4xl font-semibold mb-3">Why choose Hurak?</h4>
                <span className="block h-1 w-16 bg-primary mx-auto md:mx-0"></span>
              </div>
              <div className="w-full md:w-3/4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Column of List */}
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-2 text-xl">
                      <FiCheckCircle className="text-indigo-600 inline-block mt-1 w-14" />
                      <span className="text-gray-700">Massive exposure - With over 50,000 unique monthly visits be sure to fill your courses and earn more.</span>
                    </li>
                    <li className="flex items-start space-x-2 text-xl">
                      <FiCheckCircle className="text-indigo-600 inline-block mt-1 w-14" />
                      <span className="text-gray-700">Risk-free bookings - We only take a commission on paid bookings, this way listing a course is risk-free!</span>
                    </li>
                    <li className="flex items-start space-x-2 text-xl">
                      <FiCheckCircle className="text-indigo-600 inline-block mt-1 w-14" />
                      <span className="text-gray-700">Fill up your empty seats - Get your courses out to an active audience looking to upskill.</span>
                    </li>
                  </ul>
                  {/* Second Column of List */}
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-2 text-xl">
                      <FiCheckCircle className="text-indigo-600 inline-block mt-1 w-14" />
                      <span className="text-gray-700">Marketing & sales geeks – Let us focus on the advertising while you focus on delivering a high-quality education.</span>
                    </li>
                    <li className="flex items-start space-x-2 text-xl">
                      <FiCheckCircle className="text-indigo-600 inline-block mt-1 w-14" />
                      <span className="text-gray-700">Paid advertisement - We also purchase pay-per-click traffic to advertise our partners' courses.</span>
                    </li>
                    <li className="flex items-start space-x-2 text-xl">
                      <FiCheckCircle className="text-indigo-600 inline-block mt-1 w-14" />
                      <span className="text-gray-700">Free access to a Training Management System - manage your team, courses, learners, cohorts, and more.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature Card Section */}
            <div className="bg-black text-white pt-20 px-10 rounded-lg mb-6 text-center" id='guidance'>
              <h4 className="text-2xl font-semibold">Schedule a Free Consultation</h4>
              <h5 className="text-2xl mt-2 w-full lg:w-5/6 mx-auto">Interested in what we can do for you? Schedule a meeting with us and let us help turn your knowledge into an engaging course or give you a personalized demo.</h5>
              <div className="w-full h-[700px] min-w-[300px]">
                <iframe
                  src="https://calendly.com/humza-zahid/click-here-to-scdule-a-meetin?embed_domain=localhost&embed_type=Inline&text_color=000000&primary_color=0f7c90&back=1&month=2022-11"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Select a Date & Time - Calendly"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default AdvertiseFeaturesSection;
