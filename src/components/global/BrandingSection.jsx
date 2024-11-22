"use client"
import React from 'react'
import Image from 'next/image'; 

function BrandingSection() {

  return (
    <>
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
            {/* Left Section - Text and Buttons */}
            <div className="text-center lg:text-left lg:w-1/2">
              <h2 className="text-3xl lg:text-8xl font-bold text-primary mb-4">DOWNLOAD  <span></span>THE APP</h2>
              <p className="mb-6 text-xl w-full lg:w-10/12 font-medium">
                Coming soon to Android and iOS. Access your learning on the go and learn anywhere with offline viewing.
              </p>
              <div className="flex justify-center lg:justify-start space-x-4">
                {/* App Store and Google Play Buttons */}
                <Image src="/images/apple-button.jpg" alt="App Store" width={144} height={50} />
                <Image src="/images/google-button.jpg" alt="Google Play" width={144} height={50} />
              </div>
            </div>

            {/* Right Section - Phone Image */}
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <div className="relative">
                {/* Phone Image */}
                <img src="/images/mobile.webp" // Replace this path with your uploaded phone image
                  alt="Phone Preview"
                  className="w-full max-w-xs lg:max-w-xl mx-auto" />
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default BrandingSection;
