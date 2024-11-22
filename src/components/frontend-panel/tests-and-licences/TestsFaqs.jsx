import React from 'react';
import FAQItem from '@/components/global/FAQItem';
import { GoPlus, GoDash } from "react-icons/go";

const TestsFaqs = () => {

  return (
    <section className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="bg-white rounded-lg">
        {/* {faqData.map((faq, index) => ( */}
        <FAQItem bgColor={'bg-[#F8F9FA]'} OpenBtn={<GoDash />} CloseBtn={<GoPlus />} />
        {/* ))} */}
      </div>
    </section>
  )
}

export default TestsFaqs;