
"use client";
import Link from 'next/link';
import TeachingJourney from './TeachingJourney';
import AdvertiseFeaturesSection from './AdvertisefeaturesSection';
import WorkflowSection from './WorkflowSection';
import OpportunitiesSection from './OpportunitiesSection';
import EarningBlock from './EarningBlock';
import CalculatorBlock from './CalculatorBlock';
import AdvertiseBannerBlock from './AdvertiseBannerBlock';
import ButtonFill from '@/components/global/butttons/ButtonFill';


const AdvertiseOnHurak = () => {


  return (
    <div className='text-center md:text-left'>
      {/* banner section */}
      <AdvertiseBannerBlock />

      {/* section menu */}
      <section className='py-5 border-y border-gray-200 sticky top-0 left-0 right-0 z-10 bg-white whitespace-nowrap overflow-x-auto px-5'>
          <div className='md:container md:auto-container mx-auto'>
              <ul className="flex items-center justify-between space-x-10 text-custom-17">
                  <li><Link href="#features">Features</Link></li>
                  <li><Link href="#list-your-course-pricing">Pricing</Link></li>
                  <li><Link href="#list-your-course-faqs">FAQs</Link></li>
                  <li>
                  <Link href="/" className="bg-secondary text-white text-lg font-bold px-12 py-2 rounded-md border hover:bg-transparent hover:border-1 hover:border-secondary hover:text-black transition duration-300 ease-in-out  mr-3 md:mr-0">
                      Get Started
                  </Link>
                  </li>
              </ul>
          </div>
      </section>

      {/* left right section */}
      <TeachingJourney />

      {/*Features section */}
      <AdvertiseFeaturesSection />

      {/* Workflow Section */}
      <WorkflowSection />

      {/* opportunities section */}
      <OpportunitiesSection />

      {/* Earning Block */}
      <EarningBlock />

      {/* Calculator Block */}
      <CalculatorBlock />


    </div>
  );
};

export default AdvertiseOnHurak;
