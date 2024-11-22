import React from 'react'
import Link from 'next/link';

const ProviderHeader = () => {
    return (
        <>
            <div className='border-b shadow-md h-[78px]'>
                <div className="flex justify-between  px-8 py-4 ">
                    <Link href="/" >
                        <img
                            src="/images/hurak-logo.webp"
                            alt="Logo"
                            width={100}
                            className="cursor-pointer"
                        />
                    </Link>
                    <a href="/courses" className='bg-primary text-white text-xl font-[400] px-8 py-2 rounded hidden sm:block'> Hurak Courses</a>
                </div>
            </div>
        </>
    )
}
export default ProviderHeader
