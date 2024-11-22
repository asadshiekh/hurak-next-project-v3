import React from 'react'


const AboutBlock = () => {
    return (
        <div>
            <div className="bg-white py-20">
                {/* Container for centering and spacing */}
                <div className="container auto-container mx-auto">
                    <div className='grid grid-cols-1 lg:grid-cols-2 mb-5 gap-5'>
                        {/* Left side: Image */}
                        <div className="">
                            <div className=" mx-auto">
                                <img src="/images/upskill-image-1.webp" // Correct path to your image
                                />
                            </div>
                        </div>

                        {/* Right side: Text and Button */}
                        <div className="flex flex-col justify-center text-center lg:text-left bg-gray-100 p-5 md:p-10">
                            <h2 className="text-3xl font-semibold mb-4">Staying ahead of the future of work</h2>
                            <p className="text-lg mb-6 text-gray">
                                Whether it is our security, first aid, food, APLH, teaching or any other training courses all Hurak employees work to unique standards of professionalism and excellence. We offer bespoke services to all of our clients and have the privilege to be the first choice of all of our clients, past and present, for their training needs.
                            </p>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        {/* Left side: Image */}
                        <div className="flex flex-col justify-center text-center lg:text-left bg-gray-100 p-5 md:p-10">
                            <h2 className="text-3xl font-semibold mb-4">Our Impact</h2>
                            <p className="text-lg text-gray">
                                Since the establishment of this organisation we've tried our very best to help our community and our people as much as we can, here's how: With roughly 20 000 people visiting our website every month and over 25 security courses like: 6 Door Supervisor courses, 6 Upskilling courses, 3 CCTV Operator courses, 6 Security Guarding courses, 3 First Aid courses and 3 Personal Licence courses etc to choose from in a month, which leads to around 6000 qualifications issued every year we're really trying to make the difference.
                            </p>
                        </div>

                        {/* Right side: Text and Button */}

                        <div className="">
                            <div className="">
                                <img src="/images/about-services.webp" // Correct path to your image
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBlock