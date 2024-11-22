import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const CourseCertificate = ({certificate_title,certificate_description,course_certificate_images,course_certificate_images_alt}) => {
  return (
    <div className='py-3'>
        <h4 className='text-black text-2xl font-bold mb-5'>{certificate_title}</h4>
        <p className='mb-3'>{certificate_description}</p>
        <Image src={`${process.env.NEXT_PUBLIC_S3_BASE_STORAGE}certificates/${course_certificate_images}`} alt={course_certificate_images_alt} width={800} height={500} />
    </div>
  )
}

export default CourseCertificate