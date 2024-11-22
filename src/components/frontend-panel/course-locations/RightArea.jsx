import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const RightArea = () => {
  return (
    <div className=' h-full'>
        <div className='imageblock mt-3 sticky top-0 py-5'>
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

export default RightArea