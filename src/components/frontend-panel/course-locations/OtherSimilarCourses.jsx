import React from 'react'

const OtherSimilarCourses = () => {

    const RelatedCourses = [
        {
            name: 'CITB SMSTS Course in Barking',
            url: 'citb-smsts-course-in-barking'
        },
        {
            name: 'CITB SMSTS Course in Barking',
            url: 'citb-smsts-course-in-barking'
        },
        {
            name: 'CITB SMSTS Course in Barking',
            url: 'citb-smsts-course-in-barking'
        },
        {
            name: 'CITB SMSTS Course in Northamptonshire',
            url: 'citb-smsts-course-in-barking'
        },
        {
            name: 'CITB SMSTS Course in Newcastle upon Tyne',
            url: 'citb-smsts-course-in-barking'
        },


    ];

    return (
        <>
            <div className='border rounded-xl px-5 pt-8'>
                <h2 className='text-2xl'>Explore Other SMSTS Course Locations</h2>
                <div className='grid grid-cols-12 gap-4 py-5'>
                    {RelatedCourses.map((item, index) => (
                        <div key={index} className='grid col-span-12 sm:col-span-6 lg:col-span-4 text-[#0f7c90] text-lg'> {item.name}</div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default OtherSimilarCourses