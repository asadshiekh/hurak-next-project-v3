"use client";
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Skeleton from '@/components/global/Skeletons/Skeleton';


function HeroSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <section className="banner-sec">
      {/* Banner Section for small screens */}

      <div className="block md:hidden md:h-[200px] h-[250px] text-center bg-homebanner bg-no-repeat bg-right bg-cover"></div>


      {/* Banner Section for medium and large screens */}
      <div className="container relative hidden md:block mx-auto h-[200px] sm:h-[300px] md:h-[400px] xl:h-[400px] text-center bg-homebanner bg-no-repeat bg-right bg-cover">
        {/* Find Your Course Section */}
        <div className="bg-white p-8 mx-auto sm:relative sm:w-[90%] md:w-[400px] lg:w-[430px] xl:w-[430px] lg:mt-0 md:ml-[70px] lg:ml-[25px] lg:absolute lg:top-1/2 md:top-16 lg:transform lg:-translate-y-1/2 text-left rounded">
          {loading ? (
              <>
                <Skeleton style={"h-6 w-[100%] bg-neutral-200 mt-5"} />
                <Skeleton style={"h-3 w-[80%] bg-neutral-200 mt-2"} />
                <Skeleton style={"h-3 w-[80%] bg-neutral-200 mt-2"} />
                <Skeleton style={"h-3 w-[80%] bg-neutral-200 mt-2"} />
                <Skeleton style={"h-3 w-[30%] bg-neutral-200 mt-2"} />
                <Skeleton style={"h-4 w-[30%] bg-neutral-200 mt-2"} />
                <Skeleton style={"h-3 w-[60%] bg-neutral-200 mt-2"} />
              </>
          ) : (
            <>
              <h3 className="text-4xl font-bold">Find your course</h3>
              <p className="mt-2 text-xl text-gray-500">
                Choose from our virtual, classroom, or online courses.
              </p>
              <a
                href="https://hurak.com/courses"
                className="flex justify-start items-center text-primary mt-3"
              >
                <span className="text-md">
                  Search for Courses <FaArrowRight className="inline-block" />
                </span>
                <i className="las la-arrow-right ml-2"></i>
              </a>

              {/* Trustpilot Section */}
              <div className="trust-box mt-3">
                <a
                  href="https://uk.trustpilot.com/review/hurak.com"
                  className="block"
                >
                  <img
                    className="w-32"
                    src="https://hurak.com/public/front_panel_assets/images/trust-pilot.svg"
                    loading="lazy"
                    alt="Trustpilot"
                  />
                </a>
              </div>
              <div className="text-sm mt-3">
                <p>
                  See our <b>1,250 reviews on <b>Trustpilot</b></b>
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile Banner Section */}

      <div className="md:hidden bg-white py-8 px-4 mx-auto sm:relative lg:mt-0 md:ml-[70px] lg:ml-[25px] text-left rounded">
        {loading ? (
          <>
            <Skeleton style={"h-6 w-[100%] bg-neutral-200"} />
            <Skeleton style={"h-3 w-[80%] bg-neutral-200 mt-2"} />
            <Skeleton style={"h-3 w-[80%] bg-neutral-200 mt-2"} />
            <Skeleton style={"h-3 w-[80%] bg-neutral-200 mt-2"} />
            <Skeleton style={"h-3 w-[30%] bg-neutral-200 mt-2"} />
            <Skeleton style={"h-4 w-[30%] bg-neutral-200 mt-2"} />
            <Skeleton style={"h-3 w-[60%] bg-neutral-200 mt-2"} />
          </>
        ) : (
          <>
            <h3 className="text-3xl font-bold">Find your course</h3>
            <p className="mt-2 text-xl text-gray-500">
              Choose from our virtual, classroom, or online courses.
            </p>
            <a
              href="https://hurak.com/courses"
              className="flex justify-start items-center text-primary mt-3"
            >
              <span className="text-lg">
                Search for Courses <FaArrowRight className="inline-block" />
              </span>
              <i className="las la-arrow-right ml-2"></i>
            </a>

            {/* Trustpilot Section */}
            <div className="trust-box mt-3">
              <a
                href="https://uk.trustpilot.com/review/hurak.com"
                className="block"
              >
                <img
                  className="w-40"
                  src="https://hurak.com/public/front_panel_assets/images/trust-pilot.svg"
                  loading="lazy"
                  alt="Trustpilot"
                />
              </a>
            </div>
            <div className="text-sm mt-3">
              <p>
                See our <b>1,250 reviews on <b>Trustpilot</b></b>
              </p>
            </div>
          </>

        )}
      </div>

    </section>
  );
}

export default HeroSection;
