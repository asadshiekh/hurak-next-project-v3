import React from 'react'

const ProviderDetailsForm = () => {
    return (
        <>
            <div className='grid grid-cols-8 pt-10 pb-[105px] md:pb-[350px] lg:pb-16 px-6'>
                <div className='col-start-1 lg:col-start-2 col-span-12 lg:col-span-4'>
                    <h1 className='text-3xl font-[600] pr-5'>You’re on your way to starting your teaching journey</h1>
                    <p className='text-lg pt-2'>
                        Hurak courses give students the chance to learn actionable skills. Whether you have experience teaching, or it’s your first time,
                        we’ll help you package your knowledge into a course that improves students’ lives and helps you earn!
                    </p>
                    <div className='py-10'>
                        <p className='text-2xl'>Who will the course be provided by?</p>
                        <div className="grid grid-cols-10  pt-2 pb-10 gap-10">
                            <div className="col-start-1 col-span-10">
                                <form className="flex flex-col space-y-2">
                                    <input
                                        type="text"
                                        name='InstructorOrCompanyName'
                                        placeholder='Enter Instructor or Company name here *'
                                        className='border border-gray-500 rounded shadow-lg px-4 py-3 focus:outline-none '
                                        required
                                    />
                                    <input
                                        type="text"
                                        name='Mobile'
                                        placeholder='Enter Mobile Number Here *'
                                        className='border border-gray-500 rounded shadow-lg px-4 py-3 focus:outline-none '
                                        required
                                    />

                                    <div className='text-start text-sm font-[300]'>
                                        <div>
                                            <p className="">By clicking "Continue", I accept the <a href='/terms/provider-terms' className="text-[#007bff]" >Provider terms</a> .</p>
                                            <button className='bg-[#dc3545] text-white text-base font-[400] py-2 px-5 rounded mt-5'>Continue</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProviderDetailsForm
