// components/SupportSection.jsx
import { FaPhoneAlt, FaComments } from 'react-icons/fa'; // Importing icons from React Icons

const SupportSection = () => {
  return (
    <div className="bg-white py-20 px-6">
      <h2 className="text-center text-3xl font-medium mb-10">We're here to help.</h2>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
        
        {/* Call Us Section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-16 h-16 border border-primary rounded-full">
            <FaPhoneAlt className="w-8 h-8 text-primary"/>
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm text-teal-500">Call us now!</p>
            <p className="text-lg font-bold">0333 344 1293</p>
          </div>
        </div>

        {/* Divider for Desktop */}
        <div className="hidden md:block h-16 border-l border-primary mx-4"></div>

        {/* Live Chat Section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-16 h-16 border border-primary rounded-full">
            <FaComments className="w-8 h-8 text-primary" />
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm text-teal-500">Start a chat!</p>
            <p className="text-lg font-bold">LIVE CHAT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;
