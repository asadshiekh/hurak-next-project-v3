'use client'; // Make sure to add this at the top of your component file

import React from 'react';

import useEmblaCarousel from 'embla-carousel-react';
import './packagesSlider.css';
import Link from "next/link";
import { IoStar } from "react-icons/io5";
import { FaCheck, FaCheckCircle, FaTimesCircle, FaPlusCircle } from "react-icons/fa";
import ButtonFill from '@/components/global/butttons/ButtonFill';


const Packages = () => {

  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    breakpoints: {
      '(min-width: 1300px)': { active: false }
    }
  });


  return (

    <section className="pricing_plan_boxes md:px-8 mt-10">
      <div className="container mx-auto">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {/* Saver Plan */}
            <div className="embla__slide bg-white shadow-md rounded-lg  min-h-full flex flex-col justify-between border-[2px] border-gray-300 hover:border-primary hover:shadow-lg transition-all duration-300">
              <div className="bg-[#afd8dc] rounded-tl-[5px] rounded-tr-[5px] h-[20px] w-full "></div>
              <div className="text-center p-6">
                <div className="flex items-center items-left mb-2 text-4xl">
                  <IoStar className="text-primary mr-2" size={30} />
                  <span>Saver</span>
                </div>

                <div className="flex justify-center">
                  <div className="line-through mt-2 text-3xl mr-2">£169.99</div>
                  <div className="text-4xl mt-1 font-bold">£99.99</div>
                </div>

                <div className="border-b border-gray-300 my-4"></div>
                <p className="text-sm text-black mb-3">You save £70</p>
                {/* <Link href="/shop-cart" className="block bg-secondary w-full text-white px-6 py-2 mt-4 rounded-md hover:bg-red-600">
                  Select
                </Link> */}
                <Link href="/shop-cart"><ButtonFill color={"danger"} text={"Select"} /></Link>
              </div>

              <ul className="px-8 space-y-6 text-left">
                <li className="text-black text-[12px] font-medium">
                  <FaCheck className="text-green-500 inline-block mr-1" /> Valid
                  for life qualification
                </li>
                <li className="text-black text-[12px] font-medium">
                  <FaCheck className="text-green-500 inline-block mr-1" />{" "}
                  Includes online Training & Exam
                </li>
                <li className="text-black text-[12px] font-medium">
                  <FaCheck className="text-green-500 inline-block mr-1" />{" "}
                  Compatible with mobile & desktop devices
                </li>
                <li className="text-black text-[12px] font-medium">
                  <FaCheck className="text-green-500 inline-block mr-1" />{" "}
                  Nationally recognised certificate
                </li>
                <li className="text-black text-[12px] font-medium">
                  <FaCheck className="text-green-500 inline-block mr-1" /> CSCS
                  Learner Pack
                  <p className="text-[#4c4a4a] text-[12px] font-thin pl-5">
                    Interactive eLearning course, CITB Handbook
                  </p>
                </li>
              </ul>

              <div className="flex items-center justify-between my-5 px-8">
                <div className="border-t w-1/4"></div>
                <FaPlusCircle className="text-gray-400 text-3xl" />
                <div className="border-t w-1/4"></div>
              </div>
              <div className="flex flex-col items-start  px-6">
                <h3 className="text-xl font-normal mb-3">Fast Track</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-black text-[12px] font-medium">
                    <FaCheck className="text-green-500 inline-block mr-1" />{" "}
                    Same Day Results
                  </li>
                  <li className="flex items-center text-black text-[12px] font-medium">
                    <FaTimesCircle className="mr-1 text-red-600" /> Quicker
                    Certification (ready in 5-7 working days)
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-between my-5 px-8">
                <div className="border-t w-1/4"></div>
                <FaPlusCircle className="text-gray-400 text-3xl" />
                <div className="border-t w-1/4"></div>
              </div>

              <div className="flex flex-col items-start px-6">
                <h3 className="text-xl font-normal mb-3">Fast Track</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-black text-[12px] font-medium">
                    <FaCheck className="text-green-500 inline-block mr-1" />{" "}
                    Same Day Results
                  </li>
                  <li className="flex items-center text-black text-[12px] font-medium">
                    <FaTimesCircle className="mr-1 text-red-600" /> Quicker
                    Certification (ready in 5-7 working days)
                  </li>
                </ul>
              </div>

              <div className="text-center my-4 px-6">
                {/* <Link href="/shop-cart" className="block bg-secondary w-full text-white px-6 py-2 mt-4 rounded-md hover:bg-red-600">
                  Select
                </Link> */}
                <Link href="/shop-cart"><ButtonFill color={"danger"} text={"Select"} /></Link>

              </div>
            </div>


            <div className="embla__slide bg-white shadow-md rounded-lg  min-h-full flex flex-col justify-between border-[2px] border-gray-300 hover:border-primary hover:shadow-lg transition-all duration-300">
              <div className="bg-[#5797B2] rounded-tl-[5px] rounded-tr-[5px] h-[20px] w-full "></div>
              <div className="text-center p-6">
                <div className="flex relative items-center items-left mb-2 text-4xl">
                  <IoStar className="text-primary mr-2" size={30} />
                  <span>Flexi</span>
                  <div className="absolute top-0 right-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded-md">
                    <IoStar className="inline-block mr-1" /> MOST POPULAR
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="line-through mt-2 text-3xl mr-2">£169.99</div>
                  <div className="text-4xl mt-1 font-bold">£99.99</div>
                </div>

                <div className="border-b border-gray-300 my-4"></div>
                <p className="text-sm text-black mb-3">You save £70</p>
                <Link href="/shop-cart"><ButtonFill color={"danger"} text={"Select"} /></Link>

                {/* <Link href="/shop-cart" className="block bg-secondary w-full text-white px-6 py-2 mt-4 rounded-md hover:bg-red-600">
                  Select
                </Link> */}
              </div>

              <ul className="px-8 space-y-6 text-left">
                <li className="text-black text-[12px] font-medium">
                  <FaCheck className="text-green-500 inline-block mr-1" /> Valid
                  for life qualification
                </li>
                <li className="text-black text-[12px] font-medium">
                  <FaCheck className="text-green-500 inline-block mr-1" />{" "}
                  Includes online Training & Exam
                </li>
                <li className="text-black text-[12px] font-medium">
                  <FaCheck className="text-green-500 inline-block mr-1" />{" "}
                  Compatible with mobile & desktop devices
                </li>
                <li className="text-black text-[12px] font-medium">
                  <FaCheck className="text-green-500 inline-block mr-1" />{" "}
                  Nationally recognised certificate
                </li>
                <li className="text-black text-[12px] font-medium">
                  <FaCheck className="text-green-500 inline-block mr-1" /> CSCS
                  Learner Pack
                  <p className="text-[#4c4a4a] text-[12px] font-thin pl-5">
                    Interactive eLearning course, CITB Handbook
                  </p>
                </li>
              </ul>

              <div className="flex items-center justify-between my-5 px-8">
                <div className="border-t w-1/4"></div>
                <FaPlusCircle className="text-gray-400 text-3xl" />
                <div className="border-t w-1/4"></div>
              </div>
              <div className="flex flex-col items-start  px-6">
                <h3 className="text-xl font-normal mb-3">Fast Track</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-black text-[12px] font-medium">
                    <FaCheck className="text-green-500 inline-block mr-1" />{" "}
                    Same Day Results
                  </li>
                  <li className="flex items-center text-black text-[12px] font-medium">
                    <FaTimesCircle className="mr-1 text-red-600" /> Quicker
                    Certification (ready in 5-7 working days)
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-between my-5 px-8">
                <div className="border-t w-1/4"></div>
                <FaPlusCircle className="text-gray-400 text-3xl" />
                <div className="border-t w-1/4"></div>
              </div>

              <div className="flex flex-col items-start px-6">
                <h3 className="text-xl font-normal mb-3">Fast Track</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-black text-[12px] font-medium">
                    <FaCheck className="text-green-500 inline-block mr-1" />{" "}
                    Same Day Results
                  </li>
                  <li className="flex items-center text-black text-[12px] font-medium">
                    <FaTimesCircle className="mr-1 text-red-600" /> Quicker
                    Certification (ready in 5-7 working days)
                  </li>
                </ul>
              </div>

              <div className="text-center my-4 px-6">
                {/* <Link href="/shop-cart" className="block bg-secondary w-full text-white px-6 py-2 mt-4 rounded-md hover:bg-red-600">
                  Select
                </Link> */}
                <Link href="/shop-cart"><ButtonFill color={"danger"} text={"Select"} /></Link>

              </div>
            </div>


            <div className="embla__slide bg-white shadow-md rounded-lg  min-h-full flex flex-col justify-between border-[2px] border-gray-300 hover:border-primary hover:shadow-lg transition-all duration-300">
              <div className="bg-[#02425D] rounded-tl-[5px] rounded-tr-[5px] h-[20px] w-full "></div>
              <div className="text-center p-6">
                <div className="flex items-center items-left mb-2 text-4xl">
                  <IoStar className="text-primary mr-2" size={30} />
                  <span>Premium</span>
                </div>

                <div className="flex justify-center">
                  <div className="line-through mt-2 text-3xl mr-2">£169.99</div>
                  <div className="text-4xl mt-1 font-bold">£99.99</div>
                </div>

                <div className="border-b border-gray-300 my-4"></div>
                <p className="text-sm text-black mb-3">You save £70</p>
                {/* <Link href="/shop-cart" className="block bg-secondary w-full text-white px-6 py-2 mt-4 rounded-md hover:bg-red-600">
                  Select
                </Link> */}
                <Link href="/shop-cart"><ButtonFill color={"danger"} text={"Select"} /></Link>
              </div>

              <ul className="px-8 space-y-6 text-left">
                <li className="text-black text-[12px] font-medium">
                  <FaCheck className="text-green-500 inline-block mr-1" /> Valid
                  for life qualification
                </li>
                <li className="text-black text-[12px] font-medium">
                  <FaCheck className="text-green-500 inline-block mr-1" />{" "}
                  Includes online Training & Exam
                </li>
                <li className="text-black text-[12px] font-medium">
                  <FaCheck className="text-green-500 inline-block mr-1" />{" "}
                  Compatible with mobile & desktop devices
                </li>
                <li className="text-black text-[12px] font-medium">
                  <FaCheck className="text-green-500 inline-block mr-1" />{" "}
                  Nationally recognised certificate
                </li>
                <li className="text-black text-[12px] font-medium">
                  <FaCheck className="text-green-500 inline-block mr-1" /> CSCS
                  Learner Pack
                  <p className="text-[#4c4a4a] text-[12px] font-thin pl-5">
                    Interactive eLearning course, CITB Handbook
                  </p>
                </li>
              </ul>

              <div className="flex items-center justify-between my-5 px-8">
                <div className="border-t w-1/4"></div>
                <FaPlusCircle className="text-gray-400 text-3xl" />
                <div className="border-t w-1/4"></div>
              </div>
              <div className="flex flex-col items-start  px-6">
                <h3 className="text-xl font-normal mb-3">Fast Track</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-black text-[12px] font-medium">
                    <FaCheck className="text-green-500 inline-block mr-1" />{" "}
                    Same Day Results
                  </li>
                  <li className="flex items-center text-black text-[12px] font-medium">
                    <FaTimesCircle className="mr-1 text-red-600" /> Quicker
                    Certification (ready in 5-7 working days)
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-between my-5 px-8">
                <div className="border-t w-1/4"></div>
                <FaPlusCircle className="text-gray-400 text-3xl" />
                <div className="border-t w-1/4"></div>
              </div>

              <div className="flex flex-col items-start px-6">
                <h3 className="text-xl font-normal mb-3">Fast Track</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-black text-[12px] font-medium">
                    <FaCheck className="text-green-500 inline-block mr-1" />{" "}
                    Same Day Results
                  </li>
                  <li className="flex items-center text-black text-[12px] font-medium">
                    <FaTimesCircle className="mr-1 text-red-600" /> Quicker
                    Certification (ready in 5-7 working days)
                  </li>
                </ul>
              </div>

              <div className="text-center my-4 px-6">
                <Link href="/shop-cart"><ButtonFill color={"danger"} text={"Select"} /></Link>

                {/* <Link href="/shop-cart" className="block bg-secondary w-full text-white px-6 py-2 mt-4 rounded-md hover:bg-red-600">
                  Select
                </Link> */}
              </div>
            </div>

          </div>
        </div>


      </div>
    </section>
  );
};

export default Packages;
