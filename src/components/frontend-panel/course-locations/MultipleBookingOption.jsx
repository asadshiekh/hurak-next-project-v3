import ButtonFill from '@/components/global/butttons/ButtonFill';
import React from 'react'

const MostPopular = () => {
    const RelatedCourses = [
        {
            description: `<p><strong>Online (self-placed):</strong>Complete the course online at your own peace, and take the exam from home.</p>
                            <p><i className=" mb-2 font-16 las la-check-circle text-primary pr-1 pt-1"></i> Designed to work around your schedule.</p>
                            <p><i className=" mb-2 font-16 las la-check-circle text-primary pr-1 pt-1"></i> Complete the course in your own time.</p>
                            <p><i className=" mb-2 font-16 las la-check-circle text-primary pr-1 pt-1"></i> Access learning materials from any device.</p>`,
            price: '99.99',
            oldPrice: '120',
            status: 'popular'
        },
        {
            description: `<p><strong>Online (live):</strong></p>
                          <p>Attend a live online class from home or work and complete the exam on the same day.</p>`,
            price: '69.99',
            oldPrice: '120'
        },
        {
            description: `<p><strong>Classroom:</strong></p>
                          <p>Join us at one of our training centers to finish the course and take the exam on the same day.</p>`,
            price: '111.99',
            oldPrice: '120'
        }
    ];

    return (
        <div className='pb-5 relative'>
            <h2 className='text-2xl font-bold pb-1'>Explore Other SMSTS Course Locations</h2>
            {RelatedCourses.map((item, index) => (
                <div
                    key={index}
                    className={`border rounded-xl p-5 my-5 ${item.status === 'popular' ? 'border-4 border-[#0f7c90]' : ''}`}
                >
                    <div className='grid grid-cols-12'>
                        <div className='text-lg col-span-12 md:col-span-8' dangerouslySetInnerHTML={{ __html: item.description }} />
                        <div className='col-span-12 md:col-span-4 pt-5 md:pt-0'>
                            <div className='flex flex-col items-end justify-center h-full'>
                                <div>
                                    <span className='text-lg font-bold'>From £{item.price}</span>
                                    <span className='pl-2 text-sm text-slate-600'>All inc</span>
                                </div>
                                <div className='text-slate-600'>
                                    <span className='line-through'>£{item.oldPrice}</span>
                                    <span className='pl-2'>23% Off</span>
                                </div>
                                <div className='my-5 w-full sm:w-auto '>
                                <ButtonFill color={"danger"} text={"See Dates"} />
                                    {/* <button href="" className='bg-[#ec5252] text-white font-bold rounded w-full px-7 py-3'>See Dates</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className='absolute top-[70px] left-32  md:top-10 lg:left-96 md:left-48 '>
                <div className='border-2 border-[#e5b224] bg-[#fff8ee] rounded-lg text-base font-bold px-5 md:px-10 py-1'>
                    Most Popular
                </div>
            </div>
        </div>
    );
}

export default MostPopular;
