import React from 'react'
import Image from 'next/image';
const AboutGallery = () => {
  return (
    <div className='py-20'>
        <div className='container auto-container mx-auto'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <div className='grid grid-cols-2'>
                        <div>
                            <Image src="/images/about_gallery_1.webp" width={400} height={100} />
                        </div>
                        <div>
                            <Image src="/images/about_gallery_2.webp" width={400} height={100} />
                        </div>
                    </div>
                    <div>
                        <Image src="/images/about_gallery_3.webp" width={800} height={100} />
                    </div>
                </div>
                <div className='text-center flex items-center justify-center p-5 md:p-0 bg-gray-100'>
                    <div className='w-full md:w-2/3 py-4'>
                        <h4 className='text-3xl font-semibold mb-3'>A great place to grow</h4>
                        <p className='text-xl'>Hurak employees live out our values every day as learners and teachers ourselves. Our culture is diverse, inclusive, and committed to personal and professional development. We’re not afraid to take on a new challenge, and we love taking Hurak courses!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutGallery