import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { ImFacebook } from "react-icons/im";
import { AiFillYoutube } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io";
import VerticleCourseCards from '@/components/global/VerticleCourseCards';
import Tabs from '@/components/global/tabs';
import ButtonOutline from '@/components/global/butttons/ButtonOutline';

const SingleProvider = () => {
  const Products = [
    {
      idx: '1',
      image: '/images/course-image.jpg',
      title: 'CSCS Green Card',
      study: 'Classroom',
      price: '99.99',
    },
    {
      idx: '2',
      image: '/images/sia-card.webp',
      title: 'CITB Site Supervisor Safety Training (SSSTS) Online',
      study: 'Classroom',
      price: '99.99',
    },
    {
      idx: '3',
      image: '/images/course-image2.webp',
      title: 'First Aid at Work Course for Instructors',
      study: 'Multiple study options',
      price: '99.99',
    },
    {
      idx: '4',
      image: '/images/course-image3.webp',
      title: 'CITB Site Manager Safety Training Scheme (SMSTS)',
      study: 'Classroom',
      price: '99.99',
    },
    {
      idx: '5',
      image: '/images/course-image.jpg',
      title: 'CSCS Green Card',
      study: 'Enquire',
      price: '99.99',
    }, {
      idx: '2',
      image: '/images/sia-card.webp',
      title: 'CITB Site Supervisor Safety Training (SSSTS) Online',
      study: 'Classroom',
      price: '99.99',
    },
    {
      idx: '3',
      image: '/images/course-image2.webp',
      title: 'First Aid at Work Course for Instructors',
      study: 'Multiple study options',
      price: '99.99',
    },
    {
      idx: '4',
      image: '/images/course-image3.webp',
      title: 'CITB Site Manager Safety Training Scheme (SMSTS)',
      study: 'Classroom',
      price: '99.99',
    },
  ];

  const featured = [
    {
      image: '/images/sponsor1.webp',
    },
    {
      image: '/images/sponsor2.webp',
    },
    {
      image: '/images/sponsor3.webp',
    },
    {
      image: '/images/sponsor4.webp',
    },
  ]

  const tabs = ['Terms and Conditions', 'Policies']; // Define your tabs
  const tabContent = [
    "This is content for Tab 1 & Cancellation of a course is only accepted when we are in receipt of a written notice prior to the commencement of the course",
    "This is content for Tab 2",
  ]; // Content for each tab

  return (
    <div>
      <section className='my-10'>
        <div className='container auto-container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-20'>
            <div className='md:col-span-3'>
              <p className='uppercase mb-3'>TRAINING PROVIDER Hurak Learning PROFILE</p>
              <h4 className='font-semibold text-3xl mb-2'>Hurak Learning</h4>
              <p className='mb-2 font-semibold'>UK's Leading supplier of compliance training.</p>
              <hr />
              <h6 className='font-semibold my-4 text-lg'>About us</h6>
              <p className='text-custom-17'>With over 12 years of experience in compliance training we have grown tremendously. We offer training covering over 10 different sectors, specialising in providing approved and accredited qualifications in the following areas: first aid, food safety, health and safety, personal licencing, SIA Security licencing and teacher training. To match our learners differing needs, we offer classroom, virtual and online courses.</p>
            </div>
            <div className='md:col-span-1 flex flex-col items-center justify-center'>
              <div className='h-[200px] w-[200px] p-5 bg-gray-100 flex md:mr-16 lg:mr-0 mr-0 items-center justify-center rounded-xl'>
                <Image src={"/images/hurak-learning-logo.png"} alt="logo" height={200} width={200} />
              </div>
              <div className='p-3 w-full'>
                <div className='mb-3'> <Link href='/'><ButtonOutline IconLeft={<ImFacebook />} color={"primary"} text={"Facebook"} /></Link></div>
                <div className='mb-3'> <Link href='/'><ButtonOutline IconLeft={<AiFillYoutube />} color={"primary"} text={"Youtube"} /></Link></div>
                <Link href='/' ><ButtonOutline IconLeft={<IoLogoLinkedin />} color={"primary"} text={"Linkedin"} /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Courses section */}
      <section className='pb-20'>
        <div className='container auto-container mx-auto'>
          <h4 className='font-semibold text-2xl mb-5'>Our courses</h4>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {Products.map((item, index) => (
              <VerticleCourseCards idx={item.idx} image={item.image} title={item.title} study={item.study} price={item.price} />
            ))}
          </div>
        </div>
      </section>
      {/* sponsor images */}
      <section className='py-10 bg-gray-100'>
        <div className='container auto-container mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4'>
            {featured.map((item, index) => (
              <div className='flex items-center justify-center'>
                <Image src={item.image} alt='sponsor image' height={150} width={150} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* polices section */}
      <section className='py-20'>
        <div className='container auto-container mx-auto'>
          <Tabs tabs={tabs} tabContent={tabContent} />
        </div>
      </section>
    </div>
  )
}

export default SingleProvider