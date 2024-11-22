"use client";
import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link';
import SignUpModal from '../../global/modal-windows/SignUpModalWindow'
import Skeleton from '@/components/global/Skeletons/Skeleton';
import ButtonOutline from '@/components/global/butttons/ButtonOutline';
import ButtonFill from '@/components/global/butttons/ButtonFill';

const AdvertiseBannerBlock = () => {

  const [isOpen, setOpen] = useState(null);
  const CloseModal = () => {
    setOpen(null);
    document.body.style.overflowY = 'auto';
  }

  const centerVideoRef = useRef(null);
  const leftVideoRef = useRef(null);
  const rightVideoRef = useRef(null);

  const handleMouseEnter = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to the start for each hover
    }
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);


  return (
    <div>
      <section className='pt-20'>
        <div className='container auto-container mx-auto text-center'>
          <div className='mb-20'>
            {loading ? (
              <div className=' flex flex-col justify-center items-center text-center'>
                <Skeleton style={"h-8 md:h-14 w-[70%] md:w-[50%] bg-neutral-200"} />
                <br />
                <Skeleton style={"h-8 md:h-14 w-[40%] md:w-[40%] bg-neutral-200"} />
              </div>
            ) : (
              <h4 className='mb-5 text-3xl md:text-7xl font-bold leading-tight'>List your courses on <br /> Hurak for FREE</h4>
            )}
            <p className='mb-10 text-2xl '>Reach over 100,000 potential students</p>
            <div className='flex justify-center '>
              <Link href="#"><ButtonFill handelClick={() => { setOpen('SignUp') }} color={"secondary"} text={"Get Started"} /> </Link>
            </div>
            {isOpen == 'SignUp' ?
              <SignUpModal
                isOpen={isOpen} CloseModal={CloseModal}
              />
              : false}
          </div>

          {/* Video grid section */}
          <div className="hidden md:grid grid-cols-3 gap-5 justify-center mt-8 overflow-hidden">
            {/* First Video */}
            <div className="video-wrapper">
              <video
                ref={leftVideoRef}
                className="w-full h-auto brightness-50 hover:brightness-100 translate-y-12 hover:translate-y-0 rounded-t-lg duration-200"
                onMouseEnter={() => handleMouseEnter(leftVideoRef)}
                onMouseLeave={() => handleMouseLeave(leftVideoRef)}
                muted
              >
                <source src="/frontend_videos/1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Second Video (Center Video) */}
            <div className="video-wrapper" id="video-banner-center">
              <video
                ref={centerVideoRef}
                className="w-full h-auto brightness-50 hover:brightness-100 translate-y-0 rounded-t-lg duration-200"
                onMouseEnter={() => handleMouseEnter(centerVideoRef)}
                onMouseLeave={() => handleMouseLeave(centerVideoRef)}
                muted
              >
                <source src="/frontend_videos/2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Third Video */}
            <div className="video-wrapper">
              <video
                ref={rightVideoRef}
                className="w-full h-auto brightness-50 hover:brightness-100 translate-y-12 hover:translate-y-0 rounded-t-lg duration-200"
                onMouseEnter={() => handleMouseEnter(rightVideoRef)}
                onMouseLeave={() => handleMouseLeave(rightVideoRef)}
                muted
              >
                <source src="/frontend_videos/3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AdvertiseBannerBlock