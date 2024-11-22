import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import ButtonFill from '@/components/global/butttons/ButtonFill';

const LeftArea = () => {
  return (
    <div>
      <div className='adblock bg-[#F8FAFB] p-8 text-center border-[1px] rounded border-[#E2D9E2]'>
        <lable className="text-primary border-[1px] border-[#0f7c90] p-1 rounded-full text-sm">Want to book</lable>
        <h2 className='mt-4 text-2xl text-primary font-medium'>CITB Health, Saftey & Environment test?</h2>
        <p className='text-sm mt-2 mb-8 text-black font-medium'>Includes complimentary mock test and study materials (worth £60)</p>
        {/* <Link href="#" className='mt-5 bg-secondary text-white px-1 rounded py-3 lg:text-xl font-medium'>Book now for £37.50</Link> */}
        <Link href="#"><ButtonFill color={"danger"} text={"Book now for £37.50"} /></Link>

      </div>

      <div className='imageblock mt-3 '>
        <Image
          src="/images/klarna.webp"
          alt="Klarna payment image"
          layout="responsive"
          width={200}
          height={200}
          loading="lazy"
          className='rounded'
        />
      </div>
    </div>
  )
}

export default LeftArea