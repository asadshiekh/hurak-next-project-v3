'use client'
import { useState } from 'react';

export default function Tabs({tabs,tabContent}) {
  const [activeTab, setActiveTab] = useState(0); // State to track the active tab


  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex py-2 px-6 text-center cursor-pointer transition-colors duration-200 mb-4
              ${activeTab === index ? 'border shadow-sm text-primary rounded-full' : 'text-gray-500'}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 bg-gray-50 border-t-2 border-primary rounded-b-md text-custom-17">
        {tabContent[activeTab]}
      </div>
    </div>
  );
}