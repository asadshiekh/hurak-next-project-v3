import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { LuChevronsRight } from "react-icons/lu";
import ButtonFill from '@/components/global/butttons/ButtonFill';
import ButtonInverseFill from '@/components/global/butttons/ButtonInverseFill';

const ProvidersList = () => {
    const providers = [
        {
            image: '/images/provider-dummy.png',
            id: '3',
            name: 'Wataha Training',
        },
        {
            image: '/images/tutorak-logo.png',
            id: '2',
            name: 'Tutorak',
        },
        {
            image: '/images/provider-dummy.png',
            id: '3',
            name: 'Education Links',
        },
        {
            image: '/images/provider-dummy.png',
            id: '3',
            name: 'First Perception',
        },
        {
            image: '/images/provider-dummy.png',
            id: '3',
            name: 'Good Egg Medical',
        },
        {
            image: '/images/provider-dummy.png',
            id: '3',
            name: 'Good Academy',
        },
        {
            image: '/images/hurak-learning-logo.png',
            id: '1',
            name: 'Hurak Learning',
        },
        {
            image: '/images/tutorak-logo.png',
            id: '2',
            name: 'Tutorak',
        },
    ];
    return (
        <div>
            {/* banner */}
            <section className='bg-gray-200 py-20'>
                <div className='container auto-container mx-auto text-center'>
                    <p className='uppercase mb-4'>Hurak Providers Directory</p>
                    <h4 className='text-4xl font-semibold mb-4'>Approved Training Providers <span className='text-primary'>Listed with Hurak</span></h4>
                    <p className='text-[19px] mb-6'>No matter what your company’s learning objectives are, our training providers are here to help you achieve them — in a simple and seamless way. <strong> See our list of current partners below.</strong></p>
                    <div className='flex justify-center'>
                        <div >
                            <Link href="/advertise-your-courses-hurak" > <ButtonInverseFill Padding={"xl"} color={"danger"} text={"Get Started"} /></Link>
                        </div>
                    </div>
                    <p className='text-[19px] mt-6'>Need Support? <Link href="/" className='text-primary underline'>Contact us</Link></p>
                </div>
            </section>

            {/* providers list */}
            <section className='py-20'>
                <div className='container auto-container mx-auto'>
                    <div className='mb-3'>
                        <p className='text-right'><span className='font-semibold text-primary'>50</span> Providers found</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                        {providers.map((item, index) => (
                            <div key={index}>
                                <Link href={`/providers/${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                                    <div className='border rounded-3xl p-4 mb-3 shadow-md'>
                                        <div className='w-[200px] h-[200px] mx-auto flex items-center justify-center'>
                                            <Image src={item.image} height={200} width={200} />
                                        </div>
                                    </div>
                                    <h4 className='text-[19px] font-semibold'>{item.name}</h4>
                                </Link>
                                <Link href='' className='text-sm text-primary font-semibold'>Learn more <LuChevronsRight className='inline-block' /></Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProvidersList;