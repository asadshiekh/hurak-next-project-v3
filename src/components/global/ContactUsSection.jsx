import React from 'react';
import { FaPhoneAlt, FaComments, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons

function ContactUsSection() {
  return (
    <>
    <section className="bg-white">
    <div className="container mx-auto py-16 px-5 lg:px-20">
      {/* Title and Description */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold">Need To Contact Us?</h2>
        <p className="text-gray-600 mt-2">
          Our support team is available Monday to Friday - 9:00 AM to 5:30 PM. For help after hours, visit our Contact Us page.
        </p>
      </div>
      
      {/* Contact Options */}
      <div className="flex flex-col lg:flex-row justify-center space-y-6 lg:space-y-0 lg:space-x-8">
        {/* Phone Option */}
        <a href={`tel:0333 344 1293`} className="flex flex-col items-center bg-white p-6 rounded-lg border border-gray-200 w-full lg:w-1/3">
          <FaPhoneAlt className="h-10 w-10 text-primary mb-4" />
          <p className="text-lg font-semibold">0333 344 1293</p>
        </a>

        {/* Live Chat Option */}
        <div className="flex flex-col items-center bg-white p-6 rounded-lg border border-gray-200 w-full lg:w-1/3">
          <FaComments className="h-10 w-10 text-primary mb-4" />
          <p className="text-lg font-semibold">Live Chat</p>
        </div>

        {/* Email Option */}
        <a href={`mailto:support@hurak.com`} className="flex flex-col items-center bg-white p-6 rounded-lg border border-gray-200 w-full lg:w-1/3">
          <FaEnvelope className="h-10 w-10 text-primary mb-4" />
          <p className="text-lg font-semibold">Email us</p>
        </a>
      </div>
    </div>
    </section>
    </>
  );
}

export default ContactUsSection;
