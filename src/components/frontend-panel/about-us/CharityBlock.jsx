import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import ButtonFill from '@/components/global/butttons/ButtonFill';
import ButtonInverseFill from '@/components/global/butttons/ButtonInverseFill';

const CharityBlock = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <h4 className='font-semibold text-3xl text-primary text-center mb-4'>Charity and Community</h4>
                <p className='text-center text-xl w-full md:w-2/3 mx-auto'>We want to make a positive impact in our community by supporting incredible charities that make such an incredible difference.</p>
                <div className='grid grid-cols-1 md:grid-cols-2 py-10  text-center md:text-left'>
                    <div className='flex items-center justify-center'>
                        <div className='w-full'>
                            <h4 className='font-semibold text-3xl mb-4'>Cancer Research UK</h4>
                            <p className='text-lg mb-7'>Cancer Research UK is the world’s largest independent cancer research charity conducting research for prevention, diagnosis and treatment of all types of cancers.</p>
                            <div className='flex justify-start'>
                                <Link href="https://www.cancerresearchuk.org/">
                                    {/* Visit Charity */}
                                    <ButtonInverseFill Padding={"lg"} color={"primary"} text={"Visit Charity"} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='py-5'>
                        <Image src="/images/charity.webp" alt='charity image' width={600} height={600} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharityBlock;