import React from "react";
import OtherSimilarCourses from './OtherSimilarCourses'
import RightArea from './RightArea'
import ClassroomBookingOption from './ClassroomBookingOption'
import MultipleBookingOption from './MultipleBookingOption'

import CourseBanner from '@/components/frontend-panel/course-page/CourseBanner';
import CourseFeatures from '@/components/frontend-panel/course-page/CourseFeatures';
import CourseDetail from '@/components/frontend-panel/course-page/CourseDetail';

import ReviewsSection from '@/components/frontend-panel/course-page/ReviewsSection';
import FeatureSection from '@/components/frontend-panel/course-page/FeatureSection';
import CourseFaqs from "./CourseFaqs";
// import CourseFaqs from '@/components/frontend-panel/course-page/CourseFaqs';



const CourseLocation = () => {

    const courseFeatures = [
        '2-Day Course (with mandatory distance learning)',
        'ACT Awareness & ACT Security courses included',
        'Recognising terrorism',
        'Effective crowd control techniques',
        'Physical Intervention',
        'Get certified in 10–15 working days'
    ];
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
        <>
            <div>
                <div className="w-full bg-white">
                    <CourseBanner />
                    <CourseFeatures features={courseFeatures} />
                    <ClassroomBookingOption />
                    <section className="course-main-module">
                        <div className="container mx-auto py-5 md:py-12">
                            <div className="grid grid-cols-2 md:grid-cols-12  gap-4">
                                <div className="col-span-12 md:col-span-9 p-4 order-2 sm:order-1">
                                    <MultipleBookingOption />
                                    <CourseDetail />
                                    <OtherSimilarCourses />
                                </div>
                                <div className="col-span-12 md:col-span-3 px-5 md:px-0  lg:pr-0 order-1 sm:order-2">
                                    <RightArea />
                                </div>
                            </div>
                        </div>
                    </section>

                    <ReviewsSection reviews={reviews} />
                    <FeatureSection />
                    <CourseFaqs />
                </div>
            </div>
        </>
    )

}
export default CourseLocation