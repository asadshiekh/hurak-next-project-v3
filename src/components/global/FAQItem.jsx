"use client";
import React, { useState } from "react";
import { GoQuestion } from "react-icons/go";

const FAQItem = ({ bgColor, OpenBtn, CloseBtn, index, question, answer }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div key={index} className="border border-gray-200 rounded mb-2">
      <button
        onClick={() => toggleFAQ(index)}
        className={`w-full flex justify-between rounded-t items-start py-4 focus:outline-none px-2 ${bgColor}`}
      >
        <div className="flex">
          <p>
            <GoQuestion size={20} className="mt-1 mr-2" />
          </p>
          <h5 className="text-left text-lg font-medium">{question}</h5>
        </div>
        <span className="text-xl">{openIndex === index ? OpenBtn : CloseBtn}</span>
      </button>
      {openIndex === index && <p className="mt-2 px-2 pb-4">{answer}</p>}
    </div>
  );
};

export default FAQItem;
