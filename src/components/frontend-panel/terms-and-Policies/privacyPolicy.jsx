import Sidebar from "./siderbar";
import { GoDotFill } from "react-icons/go";

const PrivacyPolicies = () => {
  return (
    <div>
      <div className="max-w-full pb-10 mb-10">
      <div className='md:flex justify-between'>
                    <div className='md:w-[15%]  md:border-r mx-4 md:mx-0 my-3 md:my-0'>
            <Sidebar />
          </div>
          <div className='md:w-[50%] ml-4 mr-4 md:ml-auto md:mr-auto mt-4'>
            <p className='text-[17px]'>
              Last Updated: October 1, 2024
            </p>
            <p className='font-[700] text-2xl my-5'>Privacy policy</p>
            <div className='lg:pr-10 my-10'>
              <p className='my-4 font-[500]'>1. Introduction</p>
              <p className='text-[17px]'>This Privacy Policy explains how Hurak Limited ("we" or "us") collects, uses and shares personal information about you when you use our website at Hurak.com (the "Site") and any related services. By using the Site, you consent to the collection, use and sharing of your personal information as described in this Privacy Policy.</p>
            </div>
            <div className='lg:pr-10 mb-8'>
              <p className='my-4 font-[500]'>2. Information We Collect</p>
              <p className='text-[17px]'>We collect personal information from you when you use the Site, such as your name, email address, and payment information. We may also collect information about your use of the Site, including the courses you have viewed and purchased.</p>
            </div>
            <div className='lg:pr-10 mb-8'>
              <p className='my-4 font-[500]'>3. Use of Your Personal Information</p>
              <p className='text-[17px]'>We use your personal information to provide and improve the Site, process your transactions, and communicate with you about your account and the Site. We may also use your personal information to personalize your experience on the Site and to send you marketing communications.</p>
            </div>
            <div className='lg:pr-10 mb-8'>
              <p className='my-4 font-[500]'>4. Sharing of Your Personal Information</p>
              <p className='text-[17px]'>We may share your personal information with third parties for providing and improving the Site, processing your transactions, and communicating with you about your account and the Site. We may also share your personal information with third-party service providers, who provide services such as website hosting, data analysis, payment processing, and marketing assistance.</p>
            </div>
            <div className='pr-10 mb-8'>
              <p className='my-4 font-[500]'>5.  Data Retention</p>
              <p className='text-[17px]'>We will retain your personal information for as long as necessary to provide you with the services or products you requested or to comply with legal requirements.</p>
            </div>
            <div className='lg:pr-10 mb-8'>
              <p className='my-4 font-[500]'>6.  Data Security</p>
              <p className='text-[17px]'>We take reasonable measures to protect your personal information from unauthorized access, use or disclosure. However, we cannot guarantee that your personal information will be completely secure from unauthorized access, use or disclosure.</p>
            </div>
            <div className='pr-10 mb-8'>
              <p className='my-4 font-[500]'>7. Your Rights</p>
              <p className='text-[17px]'>You have the right to access, correct, update or request the deletion of your personal information. You can do this by emailing us at support@hurak.com.</p>
            </div>
            <div className='lg:pr-10 mb-8'>
              <p className='my-4 font-[500]'>8. Changes to the Privacy Policy</p>
              <p className='text-[17px]'>We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice (such as adding a statement to our home page or sending you a notification).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicies;