import React from 'react'

const OpportunitiesSection = () => {

    return (
        <>
            <section className='py-20 bg-[url("/images/black-map-image.webp")] bg-center bg-cover'>
                <div className='container auto-container mx-auto text-white'>
                    <div className='text-center mb-14'>
                        <h4 className="text-4xl mb-2">Exceptional opportunities</h4>
                        <span className="inline-block h-1 w-16 bg-primary mx-auto"></span>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-10'>
                        <div className='flex flex-col items-center'>
                            <h3 className='text-6xl mb-2'>£3500</h3>
                            <p>Average monthly earnings</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h3 className='text-6xl mb-2'>100k+</h3>
                            <p>Unique monthly visitors</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h3 className='text-6xl mb-2'>20,640</h3>
                            <p>Courses completed</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h3 className='text-6xl mb-2'>1m+</h3>
                            <p>Minutes of learning</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default OpportunitiesSection