
// "use client"
// import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CourseFeatures from '@/components/frontend-panel/course-page/CourseFeatures';
import LearningOptions from '@/components/frontend-panel/course-page/LearningOptions';
import ReviewsSection from '@/components/frontend-panel/course-page/ReviewsSection';
import FeatureSection from '@/components/frontend-panel/course-page/FeatureSection';
import AreasCovered from '@/components/frontend-panel/course-page/AreasCovered';
import CourseBanner from '@/components/frontend-panel/course-page/CourseBanner';
import LeftArea from '@/components/frontend-panel/course-page/LeftArea';
import RightArea from '@/components/frontend-panel/course-page/RightArea';
import CourseDetail from '@/components/frontend-panel/course-page/CourseDetail';
import WhoThisCourse from '@/components/frontend-panel/course-page/WhoThisCourse';
import CourseFaqs from '@/components/frontend-panel/course-page/CourseFaqs';
import CourseCertificate from './CourseCertificate';

async function fetchCourseData(course_url) {
  const host = process.env.NEXT_PUBLIC_HOST;
  const apiKey = process.env.NEXT_PUBLIC_STATIC_API_KEY;

  const response = await fetch(`${host}api/course/${course_url}`, {
    headers: { "X-API-KEY": apiKey },
  });

  if (!response.ok) {
    // Handle 404 or other errors
    throw new Error('Course not found');
  }

  return response.json();
}

export default async function CoursePage({ course_url }) {
  const { course } = await fetchCourseData(course_url);

  const reviews = [
    {
      name: 'Fred Pulisic',
      course: 'Hurak Learning',
      date: 'Tue July 30 2024',
      rating: 5,
      review: 'I booked my training through Hurak but I got my SIA training at Reed Training. The trainers were awesome and I did get the required treatment and training as I was told. Their service was good and I would love to do my CCTV training with them in the future.',
    },
    {
      name: 'Fred Pulisic',
      course: 'Hurak Learning',
      date: 'Tue July 30 2024',
      rating: 5,
      review: 'I booked my training through Hurak but I got my SIA training at Reed Training. The trainers were awesome and I did get the required treatment and training as I was told. Their service was good and I would love to do my CCTV training with them in the future.',
    },
    {
      name: 'Fred Pulisic',
      course: 'Hurak Learning',
      date: 'Tue July 30 2024',
      rating: 5,
      review: 'I booked my training through Hurak but I got my SIA training at Reed Training. The trainers were awesome and I did get the required treatment and training as I was told. Their service was good and I would love to do my CCTV training with them in the future.',
    },
    // Add more reviews here
  ];

  return (
    <div>
        <div className="w-full bg-white">
            <CourseBanner course_title={course.course_title} course_short_des={course.course_short_des} course_image={course.course_image} />
            <CourseFeatures course_id={course.course_id} />
            <LearningOptions />
            <section className="course-main-module">
              <div className="container mx-auto py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                  {/* Left Column (3 col) */}
                  <div className="lg:col-span-3 md:col-span-5  p-4">
                      <LeftArea />
                  </div>

                  {/* Middle Column (6 col) */}
                  <div className="md:col-span-6 p-4">
                      <CourseDetail course_long_des={course.course_long_des} />
                      {course.certificate_title != "null" &&
                      <CourseCertificate certificate_title={course.certificate_title} certificate_description={course.certificate_description} course_certificate_images={course.course_certificate_images} course_certificate_images_alt={course.course_certificate_images_alt} />
                      }
                      <WhoThisCourse />
                      <AreasCovered />
                  </div>

                  {/* Right Column (3 col) */}
                  <div className="md:col-span-3 hidden lg:block">
                    <RightArea />
                  </div>
                </div>
              </div>
            </section>

        <ReviewsSection reviews={reviews} />
        <FeatureSection />
        <CourseFaqs course_id={course.course_id} />
      </div>
    </div>
  )
}
