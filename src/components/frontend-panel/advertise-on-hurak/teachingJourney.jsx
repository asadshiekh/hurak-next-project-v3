import React from 'react';
import '@/../public/css/global/Rawhtml.css';
import JourneyBlock from '@/components/global/JourneyBlock';

const TeachingJourney = () => {
    const content = [
        {
            image: '/images/teaching-1.jpg',
            title: 'Sign up for free and start earning!',
            desc: 'Turn your hard-earned knowledge into a course that students love.',
            link: '#',
            link_text : 'Guidance'
        },
        {
            image: '/images/teaching-2.jpg',
            title: 'Only 20% Commission',
            desc: 'With only 20% commission, you keep most of your hard earned income',
            link: '#',
            link_text : 'Monetize'
        },
        {
            image: '/images/teaching-3.jpg',
            title: 'Get featured in our course marketplace',
            desc: 'The simplest way to run and grow a successful cohort-based or eLearning course',
            link: '#',
            link_text : 'Scale'
        },
        // Add more items as needed
    ];

    return (
        <section className='py-20'>
            <div className='container auto-container mx-auto'>
                <h4 className='text-3xl md:text-6xl font-semibold text-center leading-tight line-block-heading'>Start your teaching journey <br/> today</h4>
                <JourneyBlock content={content} />
            </div>
        </section>
    );
};

export default TeachingJourney;
