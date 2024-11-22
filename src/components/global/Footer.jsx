'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, Instagram } from 'react-icons/fa';
import { AiOutlineYoutube } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import ToggleCheckbox from './forms/ToggleCheckbox';
import { FaXTwitter } from 'react-icons/fa6';
import Image from 'next/image';
import InstagramLogo from '@/../public/images/instagram.png';

function Footer() {
  const [isSideModal, setSideModal] = useState(false);
  const openSideModal = () => setSideModal(true);
  const closeSideModal = () => setSideModal(false);

  const [isOpen, setIsOpen] = useState(false);
  const toggleContent = () => setIsOpen(prevIsOpen => !prevIsOpen);

  // Company
  const [isOpenCompany, setIsOpenCompany] = useState(false);
  const toggleContentCompany = () => setIsOpenCompany(!isOpenCompany);

  // Categpry
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const toggleContentCategory = () => setIsOpenCategory(!isOpenCategory);

  // Resource
  const [isOpenResource, setIsOpenResource] = useState(false);
  const toggleContentResource = () => setIsOpenResource(!isOpenResource);

  // Courses
  const [isOpenCourses, setIsOpenCourses] = useState(false);
  const toggleContentCourses = () => setIsOpenCourses(!isOpenCourses);

  // More
  const [isOpenMore, setIsOpenMore] = useState(false);
  const toggleContentMore = () => setIsOpenMore(!isOpenMore);

  return (
    <footer>

      <div className="flex flex-wrap md:flex-nowrap lg:flex-row justify-between items-center border-t py-8">
        {/* Left side: Text */}
        <div className="lg:mb-0 lg:w-1/2 text-center lg:text-left px-5">
          <h3 className="lg:text-xl md:text-xl text-lg mb-2 font-semibold">Trusted by companies big and small.</h3>
        </div>

        {/* Right side: Logos */}
        <div className="flex justify-center lg:justify-end lg:w-1/2 lg:space-x-5 md:space-x-5">
          <a href='https://www.crisis.org.uk/'><img src="/images/brand1.webp" alt="Crisis" className="lg:w-auto md:w-[80px] h-auto object-contain" /></a>
          <a href='https://www.armani.com/en-wx/'><img src="/images/brand2.webp" alt="Giorgio Armani" className=" lg:w-auto md:w-[80px] h-auto object-contain " /></a>
          <a href='https://www.marksandspencer.com/'><img src="/images/brand4.webp" alt="Balfour Beatty" className="lg:w-auto md:w-[80px] h-auto object-contain" /></a>
          <a href='https://www.balfourbeatty.com/'><img src="/images/brand3.webp" alt="Marks & Spencer" className="lg:w-auto md:w-[80px] h-auto object-contain" /></a>
        </div>
      </div>

      {/* <div className="container mx-auto px-5 lg:px-20"> */}
      {/* Top section with logos */}

      {/* Links Section */}
      <div className="flex flex-wrap  w-full border-2 l bg-gray-100">
        <div className='lg:w-[70%] w-full'>
          <div className='md:flex justify-between '>
            <div className='md:px-6 px-2'>
              <div className='border-b-2 md:border-b-0 mb-3 md:mb-0'>
                <div onClick={toggleContent} className='flex items-center justify-between md:hidden'>
                  <h4 className="font-semibold text-xl pt-6 pb-4  ">Find a Course</h4>
                  {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                <h4 className="font-semibold text-xl pt-6 pb-4 hidden md:block">Find a Course</h4>
                {/* For mobile */}
                {isOpen && (
                  <ul className="space-y-2 mb-4 md:hidden">
                    <li><Link href='courses'>All Courses</Link></li>
                    <li>Classroom Courses</li>
                    <li>On Demand Courses</li>
                    <li>Live Online Courses</li>
                    <li>Advertise on hurak</li>
                  </ul>
                )}
              </div>
              {/* For mobile end*/}

              {/* For medium and large screen */}
              <ul className="space-y-2 mb-4 md:block hidden ">
                <li><Link href='/courses'>All Courses</Link></li>
                <li><Link href='/courses/classroom'>Classroom Courses</Link></li>
                <li><Link href='/courses/online'>On Demand Courses</Link></li>
                <li><Link href='/courses/virtual'>Live Online Courses</Link></li>
                <li><Link href='/advertise-your-courses-hurak'>Advertise on hurak</Link></li>
              </ul>
              {/* For medium and large screen end*/}
              <div className='border-b-2 md:border-b-0 mb-3 md:mb-0'>
                <div onClick={toggleContentCompany} className='flex items-center justify-between md:hidden'>
                  <h4 className="font-semibold text-xl mb-3" >Company</h4>
                  {isOpenCompany ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                <h4 className="font-semibold text-xl mb-3 hidden md:block" >Company</h4>
                {isOpenCompany && (
                  <ul className="space-y-2 md:hidden">
                    <li><Link href="/about-us">About Us</Link></li>
                    <li><Link href="/contact-us">Contact Us</Link></li>
                  </ul>
                )}
              </div>
              <ul className="space-y-2 md:block hidden">
                <li><Link href="/about-us">About Us</Link></li>
                <li><Link href="/contact-us">Contact Us</Link></li>
              </ul>
            </div>
            <div className='md:p-6 pt-0 md:pt-6'>
              <div className='border-b-2 md:px-0 px-2 md:border-b-0 mb-3 md:mb-0'>
                <div onClick={toggleContentCategory} className='flex items-center justify-between md:hidden'>
                  <h4 className="font-semibold text-xl mb-4 md:hidden">Popular Categories</h4>
                  {isOpenCategory ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                <h4 className="font-semibold text-xl mb-4 hidden md:block">Popular Categories</h4>
                {/* For medium and large screen */}
                {isOpenCategory && (
                  <ul className="space-y-2 mb-4 md:hidden">
                    <li><Link href='/courses/citb-site-safety-plus'>CITB Site Safety Plus</Link></li>
                    <li><Link href='/courses/personal-licence'>Personal Licence</Link></li>
                    <li><Link href='/courses/first-aid'>First Aid</Link></li>
                    <li><Link href='/courses/health-and-safety'>Health & Safety</Link></li>
                    <li><Link href='/courses/security'>Security</Link></li>
                  </ul>
                )}
              </div>

              {/* for large screen */}
              <ul className="space-y-2 mb-4 md:block hidden">
                <li><Link href='/courses/citb-site-safety-plus'>CITB Site Safety Plus</Link></li>
                <li><Link href='/courses/personal-licence'>Personal Licence</Link></li>
                <li><Link href='/courses/first-aid'>First Aid</Link></li>
                <li><Link href='/courses/health-and-safety'>Health & Safety</Link></li>
                <li><Link href='/courses/security'>Security</Link></li>
              </ul>
              <div className='border-b-2 md:px-0 px-2 md:border-b-0 mb-3 md:mb-0'>
                <div onClick={toggleContentResource} className='flex items-center justify-between md:hidden'>
                  <h4 className="font-semibold text-xl mb-3"  >Resources</h4>
                  {isOpenResource ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                <h4 className="font-semibold text-xl mb-3 hidden md:block"  >Resources</h4>
                {isOpenResource && (
                  <ul className="space-y-2 md:hidden">
                    <li><Link href="https://hurak.com/blog/">Blog</Link></li>
                    <li><Link href="test-prep">Test Prep</Link></li>
                    <li><Link href="hurak-business">Hurak Business</Link></li>
                  </ul>
                )}
              </div>

              <ul className="space-y-2 md:block hidden" >
                <li><Link href="https://hurak.com/blog/">Blog</Link></li>
                <li><Link href="/test-prep">Test Prep</Link></li>
                <li><Link href="/hurak-business">Hurak Business</Link></li>
              </ul>
            </div>

            <div className='md:p-6 pt-0 md:pt-6 lg:pr-40'>
              <div className='border-b-2 md:px-0 px-2 md:border-b-0 mb-3 md:mb-0'>
                <div onClick={toggleContentCourses} className='flex items-center justify-between md:hidden'>
                  <h4 className="font-semibold text-xl mb-4" >Popular Courses</h4>
                  {isOpenCourses ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
                <h4 className="font-semibold text-xl mb-4 hidden md:block" >Popular Courses</h4>
                {isOpenCourses && (
                  <ul className="space-y-2 mb-4 md:hidden">
                    <li><Link href="/courses/cscs-green-card-labourers-card-course">CSCS Green Card Training</Link></li>
                    <li><Link href="/courses/aplh-personal-licence-training-course">Personal Licence</Link></li>
                    <li><Link href="/courses/traffic-banksman-traffic-marshal-training-course">Traffic Marshal</Link></li>
                    <li><Link href="/courses/emergency-first-aid-at-work-training-1-day">Emergency First Aid at Work</Link></li>
                    <li><Link href="/courses/first-aid-at-work-training-3-days">First Aid at Work Training</Link></li>
                    <li><Link href="/courses/sia-door-supervisor-training">Door Supervisor Training</Link></li>
                  </ul>
                )}
              </div>

              <ul className="space-y-2 mb-4 md:block hidden">
                <li><Link href="/courses/cscs-green-card-labourers-card-course">CSCS Green Card Training</Link></li>
                <li><Link href="/courses/aplh-personal-licence-training-course">Personal Licence</Link></li>
                <li><Link href="/courses/traffic-banksman-traffic-marshal-training-course">Traffic Marshal</Link></li>
                <li><Link href="/courses/emergency-first-aid-at-work-training-1-day">Emergency First Aid at Work</Link></li>
                <li><Link href="/courses/first-aid-at-work-training-3-days">First Aid at Work Training</Link></li>
                <li><Link href="/courses/sia-door-supervisor-training">Door Supervisor Training</Link></li>
              </ul>

              <div className=' md:px-0 px-2 md:border-b-0 mb-3 md:mb-0'>
                <div onClick={toggleContentMore} className='flex items-center justify-between md:hidden' >
                  <h4 className="font-semibold text-xl mb-3 " >More</h4>
                  {isOpenMore ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>

                <h4 className="font-semibold text-xl mb-3 hidden md:block" >More</h4>
                {isOpenMore && (
                  <ul className="space-y-2 md:hidden">
                    <li><Link href="#">List Your Course</Link></li>
                    <li><Link href="/genius-program">Skill Saver Program</Link></li>
                    <li><Link href="/provider-loyalty-page">Provider Skill Saver Program</Link></li>
                    <li><Link href="/certificate-checker">Verify Certificate</Link></li>
                    <li><Link href="/providers-list">Listed Training Providers</Link></li>
                  </ul>
                )}
              </div>

              <ul className="space-y-2 md:block hidden">
                <li><Link href="/advertise-your-courses-hurak">List Your Course</Link></li>
                <li><Link href="/genius-program">Skill Saver Program</Link></li>
                <li><Link href="/provider-loyalty-page">Provider Skill Saver Program</Link></li>
                <li><Link href="/certificate-checker">Verify Certificate</Link></li>
                <li><Link href="/providers-list">Listed Training Providers</Link></li>
              </ul>

            </div>
          </div>
        </div>

        <div className='lg:w-[30%]  w-full '>
          <div className='border bg-[#ededed] lg:h-[485px] p-6'>
            <h4 className="font-semibold text-xl mb-4">Contact Us</h4>
            <p className="mb-4 text-lg">0333 344 1293</p>
            <h5 className="font-semibold text-2xl mb-3">Head Office Address</h5>
            <p className="text-lg">
              10 Tiller Rd, <br />
              London, <br />
              E14 8PX
            </p>
            <div className="flex items-center flex-wrap space-x-6 mb-8 border-t border-gray-300 pt-4 mt-4">
              <a href="https://www.facebook.com/Hurak/" className="text-primary">
                <FaFacebookF size={25} className='text-[#4267B2]' />
              </a>
              <a href="https://twitter.com/hurak_com" className="text-[#14171A]">
                <FaXTwitter size={25} />
              </a>
              <a href="https://www.linkedin.com/company/hurak/" className="text-[#0077B5]">
                <FaLinkedinIn size={25} />
              </a>
              <a href="https://www.youtube.com/channel/UC9OW9Poo5DJPr6_1oASL69A" className="text-[#FF0000]">
                <AiOutlineYoutube size={28} />
              </a>
              <Link href="https://www.instagram.com/hurak_com/" className="block">
                <Image src={InstagramLogo} width={23} height={23} quality={40} priority={false} loading='lazy' alt="Instagram Logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="border-t border-gray-300 py-3 bg-[#CFD2D3] px-6">
        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
          <div>
            <Link href="/">
              <img
                src="/images/hurak-logo.webp"
                alt="Logo"
                className="cursor-pointer w-28"
              />
            </Link>
          </div>
          <div className='space-x-6 text-right text-lg'>
            <a href="/terms" className="hover:underline">Terms of Service</a>
            <a href="/terms/privacy-policy" className="hover:underline">Privacy Policy</a>
            <button onClick={openSideModal} className="hover:underline">Cookies</button>
          </div>
        </div>

      </div>
      {/* </div> */}

      {/* Modal Start */}

      {isSideModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white h-screen overflow-y-auto overflow-x-hidden p-6 pt-4 rounded shadow-lg md:max-w-lg lg:max-w-xl max-w-[350px] w-full relative">
            <button
              className="absolute top-0 right-2 text-xl font-bold "
              onClick={closeSideModal}>
              <span className='mr-3 font-[300] text-4xl text-gray-500'> &times;</span>
            </button>
            {/* <h2 className="text-xl mb-4 border-b pb-3">Course refund</h2> */}
            <div className='mt-8  pr-4'>
              <p className='md:text-[40px] text-2xl font-[500] mb-8'>Cookies Settings</p>
              <p className='text-[17px] mt-4'> We use cookies for storing information on your device. Some of them are necessary for optimum functioning of the website and others allow us to enhance your user experiences by providing us valuable insights.</p>
              <button className='md:text-[22px] text-md my-8 bg-primary text-white py-3 px-5 rounded font-[400] hover:bg-transparent hover:text-primary border hover:border-primary '>Accept Recommended Settings</button>
            </div>

            <div className='pr-4'>
              <p className='text-xl font-[500] mb-4'>Essential Cookies </p>
              <p className='text-[17px] pb-8'>Necessary or essential cookies facilitate optimum website experience by allowing you to access secure areas and navigate to different pages. Without them, the website cannot function optimally. To disable them, you will need to modify your browser preferences</p>
            </div>
            <div className=''>
              <div className='mt-6 mb-2 flex justify-between items-center'>
                <p className=' text-xl font-[500] mb-4'>Analytical Cookies </p>
                {/* ToggleCheckbox size is optional and trueValue/falseValue 1/0 or yes/no or true/false (on requirement) */}
                <ToggleCheckbox size={'lg'} trueValue={1} falseValue={0} />
                {/* ToggleCheckbox size is optional and trueValue/falseValue 1/0 or yes/no or true/false (on requirement) */}
              </div>
              <p className='text-[17px] mb-6 pb-8 '>Analytical cookies help in the assessment as well as improvement of the performance of this website by allowing us to collect and report usage information.</p>
            </div>

            <div>
              <div className='mt-6 mb-2 flex justify-between items-center'>
                <p className=' text-xl font-[500] mb-4'>Marketing Cookies </p>
                {/* ToggleCheckbox size is optional and trueValue/falseValue 1/0 or yes/no or true/false (on requirement) */}
                <ToggleCheckbox size={'lg'} trueValue={1} falseValue={0} />
                {/* ToggleCheckbox size is optional and trueValue/falseValue 1/0 or yes/no or true/false (on requirement) */}
              </div>
              <p className='text-[17px] pb-20'>The relevance of advertising campaigns received by you becomes optimum with the help of marketing cookies.</p>
            </div>

          </div>
        </div>
      )}

      {/* Modal End */}
    </footer>
  );
}

export default Footer;
