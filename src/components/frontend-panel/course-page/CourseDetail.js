import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import '@/../public/css/global/Rawhtml.css';

const CourseDetail = ({course_long_des}) => {
  if(!course_long_des) return false;
  return (
    <div>
      <div className='rawHtml'
        dangerouslySetInnerHTML={{ __html: course_long_des }}
      ></div>
        {/* <h2 className="font-semibold mb-2 text-3xl mb-5">First Aid at Work Course</h2>
        <p>To get a construction job in the UK today, most construction sites require you to have a <strong>CSCS Card</strong>. The CSCS Green Labourer Card allows individuals to work on sites in entry-level positions; it is issued as part of the <strong>Construction Skills Certification Scheme </strong>and is <strong>valid for five years</strong>.</p>
        <p className='my-4'>Carrying a CSCS Green Card demonstrates that you have the appropriate knowledge and skills for the job.</p>
        <p className='my-4'>After completing the Green CSCS Card Course, you’ll become eligible to <Link href="#" className='text-[#007bff] underline font-bold'> apply for the CSCS Green Card</Link>. Getting the CSCS Green Card will help you get work on a construction site as a labourer (bricklayer, carpenter, plumber, etc.).</p>
        <p className='my-4'>The Green CSCS Card Course is a one-day course that lasts for a lifetime. That’s why it’s the most frequently opted qualification for getting a CSCS Labourer Card.</p>
        <div className='courselinkblock bg-[#eeeeee] p-5 text-center border-[1px] rounded border-[#E2D9E2]'>
            <Link href="#" className='text-[#007bff] font-bold leading-7'>A CSCS Green Card is for non-skilled workers in the construction industry. However, if you work in a skilled occupation you would need to take a <span className='underline'>CSCS NVQ</span> qualification. </Link>
        </div>
        <div className='cetificateblock my-5'>
            <h2 className='text-black text-3xl font-medium mb-5'>CSCS Green Card Course Certification</h2>
            <p className='mb-5 text-black font-medium'>You will receive the Level 1 Award in Health and Safety within a Construction Environment (RQF) certificate upon completing the course.</p>
              <Image 
                src="/images/certificate.webp" 
                alt="CSCS Green Card Certiciate" 
                layout="responsive" 
                width={500} 
                height={500} 
                loading="lazy" 
                className='rounded'
              />
          </div> */}
    </div>
  )
}

export default CourseDetail