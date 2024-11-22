import { useState } from 'react';

const FAQList = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track which FAQ is open

  const faqs = [
    {
      question: 'How do I sign up to enter the loyalty programme?',
      answer:
        'You will be given an option to enter the loyalty programme during the initial account set-up process. If you decide not to join at the time, but change your mind later, you will be able to register through your provider account.',
    },
    {
      question: 'Can I change my loyalty programme level?',
      answer:
        'Yes, you can change your loyalty programme level at any time by contacting customer support or adjusting settings in your account.',
    },
    // Add more FAQs here
  ];

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <h2 className="text-2xl font-[500] mb-4 pt-6">FAQS</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item border rounded-lg p-4 my-2">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleOpen(index)}>
           <div className='flex items-start'>
           <span className='border border-black rounded-full px-[5px] font-[700] text-[10px] mr-2 mt-2'>?</span>
           <h3 className="font-semibold text-xl"> {faq.question}</h3>
           </div>
            <button  className="text-xl ">
              {openIndex === index ? '-' : '+'}
            </button>
          </div>
          {openIndex === index && <p className="mt-2 text-[17px] pt-3">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQList;
