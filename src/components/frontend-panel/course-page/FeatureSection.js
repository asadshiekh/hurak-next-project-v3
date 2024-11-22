// components/FeatureSection.js
import { FaMoneyCheckAlt, FaUserCheck, FaShoppingCart, FaFileInvoice } from 'react-icons/fa';

const FeatureSection = () => {
  return (
    <section className='feature-section py-20'>
      <div className="bg-white py-10">
        <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-8">
          
          {/* No Booking Fee */}
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <FaMoneyCheckAlt className="text-primary text-4xl mb-4" />
            <h3 className="font-normal text-primary text-[22px] mb-2">No Booking fee</h3>
            <p className="text-gray-600 text-center">We provide our services without any additional charges.</p>
          </div>
          
          {/* Approved Providers Only */}
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <FaUserCheck className="text-primary text-4xl mb-4" />
            <h3 className="font-normal text-primary text-[22px] mb-2">Approved providers only</h3>
            <p className="text-gray-600 text-center">All courses on our platform undergo thorough manual screening to ensure the utmost quality.</p>
          </div>
          
          {/* Buying for Your Team */}
          <div className="flex flex-col items-center mb-6 md:mb-0">
            <FaShoppingCart className="text-primary text-4xl mb-4" />
            <h3 className="font-normal text-primary text-[22px] mb-2">Buying for your team?</h3>
            <p className="text-gray-600 text-center">Purchases courses for team, family or colleagues. Add a course, and provide student details at checkout.</p>
          </div>
          
          {/* Pay by Invoice */}
          <div className="flex flex-col items-center">
            <FaFileInvoice className="text-primary text-4xl mb-4" />
            <h3 className="font-normal text-primary text-[22px] mb-2">Pay by invoice</h3>
            <p className="text-gray-600 text-center">Choose “Business Customer” at checkout for access to this payment method.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
