import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { LiaCertificateSolid } from "react-icons/lia";
import ButtonInverseFill from './butttons/ButtonInverseFill';
import ButtonOutline from './butttons/ButtonOutline';

const JourneyBlock = ({ content }) => {

    return (
        <>
            <div>
                {content.map((item, index) => (
                    <div key={index} className='line-block mt-10 md:mt-0'>
                        <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20`}>
                            {/* Content */}
                            <div className={`flex flex-col items-start justify-center ${index % 2 === 0 ? '' : 'md:order-2'} `}>
                               <div className='mb-4'>
                               {item.link_text &&
                                    // <Link href={item.link} className='rounded-full px-6 py-2 border border-gray-500 mb-5 inline-block hover:bg-primary hover:text-white duration-200 flex items-center mx-auto md:mx-0'>
                                    //     <LiaCertificateSolid className='inline-block mr-1' />{item.link_text}
                                    // </Link>
                                    <Link href={item.link}><ButtonOutline size={"sm"} widthAuto={true} Rounded={"full"} IconLeft={<LiaCertificateSolid  />} color={"primary"} text={"Send Request"} /></Link>
                                }
                               </div>
                                <h4 className='mb-5 font-bold text-3xl md:text-4xl'>{item.title}</h4>
                                <p className='text-xl'>{item.desc}</p>
                            </div>

                            {/* Image */}
                            <div className={`${index % 2 === 0 ? 'flex justify-end' : ''}`}>
                                <Image
                                    src={item.image}
                                    alt="image"
                                    width={400}
                                    height={300}
                                    className='rounded-md'
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default JourneyBlock