// components/PricingHeader.jsx
import Image from 'next/image';
import PricingHeaderSmallScreen from './PricingHeaderSmallScreen';

const PricingHeader = () => {
  return (
    <>
    <div className="bg-white py-6 px-4 border-b hidden md:block">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left: Logo and Course Title */}
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0">
          {/* Hurak Logo */}
          <Image src="/images/hurak-logo.webp" alt="Hurak Logo" width={100} height={40} />
          {/* Course Title */}
          <h1 className="text-base font-medium text-center md:text-left hidden md:block">
            Level 1 Award In Health and Safety in a Construction Environment Course
          </h1>
        </div>

        {/* Right: Guarantee Badge and Info */}
        <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-4 space-y-2 md:space-y-0">
          {/* Guarantee Image */}
          <Image src="/images/guarantee_tag.png" alt="100% Buyer Guarantee" width={80} height={80} />
          {/* Guarantee Text */}
          <div className="text-sm space-y-1 text-center md:text-left">
            <p>✅ Browse with confidence | Price match guarantee</p>
            <p>✅ Transparent pricing with no hidden costs</p>
            <p>✅ Courses delivered by industry experts</p>
          </div>
        </div>
      </div>
    
    </div>
     
     <div className="block md:hidden">
      <PricingHeaderSmallScreen></PricingHeaderSmallScreen>
    </div>
   </>
  );
};

export default PricingHeader;
