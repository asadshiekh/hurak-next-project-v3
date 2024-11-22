// Term.js
'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Sidebar from './siderbar';
import { GoDotFill } from "react-icons/go";

const Term = () => {

    return ( 
        <div className="max-w-full pb-10 mb-10">
            <div className='md:flex justify-between'>
                <div className='md:w-[15%]  md:border-r mx-4 md:mx-0 my-3 md:my-0'>
                    <Sidebar />
                </div>
                <div className='md:w-[50%] ml-4 mr-4 md:ml-auto md:mr-auto mt-4'>
                    <p className='text-[17px]'>
                        Last Updated: October 1, 2024
                    </p>
                    <p className='font-[700] text-2xl my-5'>Terms of Service</p>
                    <div className='lg:pr-10'>
                        <p className='my-4 font-[700]'>1. introduction</p>
                        <p className='text-[17px]'>This website (the "Site") is an online course marketplace operated by Hurak Limited (the "Company"). By accessing or using the Site, you agree to be bound by the following terms and conditions (the "Terms of Use"). If you do not agree to these Terms of Use, you may not access or use the Site.</p>
                    </div>
                    <div className='lg:pr-10'>
                        <p className='my-4 font-[700]'>2. User Eligibility</p>
                        <p className='text-[17px]'>The Site is intended for use by individuals who are 18 years of age or older. By using the Site, you represent and warrant that you are 18 years of age or older and that you have the right, authority, and capacity to enter into and abide by these Terms of Use.</p>
                    </div>
                    <div className='lg:pr-10'>
                        <p className='my-4 font-[700]'>3. Course Listings</p>
                        <p className='text-[17px]'>The Company does not pre-screen or endorse any of the courses or instructors that are listed on the Site. The Company is not responsible for the content or accuracy of any course listings or instructor profiles.</p>
                    </div>
                    <div className='lg:pr-10'>
                        <p className='my-4 font-[700]'>4. Purchase of Courses</p>
                        <p className='text-[17px]'>When you purchase a course through the Site, you will be required to provide certain personal and payment information. You represent and warrant that all such information is accurate and complete.</p>
                    </div>
                    <div className='lg:pr-10'>
                        <p className='my-4 font-[700]'>5. Refund Policy</p>
                        <p className='text-[17px]'>The refund policy for each course may vary depending on the provider. Therefore, it is the responsibility of the user to review and accept the specific refund policy of the provider before purchasing the course. The company is not responsible for any refund claims or disputes related to the provider's refund policy.</p>
                        <p className='mt-3'>Cancellation requests for card or licence application services are subject to a £24 administration and cancellation fee; this fee covers and includes, but is not limited to, communication with the applicant, communication with the relevant authority and the refund process.</p>
                    </div>
                    <div className='lg:pr-10'>
                        <p className='my-4 font-[700]'>6. Limitation of Liability</p>
                        <p className='text-[17px]'>You agree that we are not responsible for the actions, inactions, or content of other users or the courses they list on the platform. The company does not endorse or verify the quality, safety or legality of the classes advertised, the truth or accuracy of users’ content or listings, the ability of educators to offer classes, the ability of students to pay for classes, or that a student or training provider will actually complete a transaction or return a class purchase. </p>
                        <p className='mt-3'>We also cannot guarantee that our sites, services, or tools will always be accessible or operate without interruption. As such, we are not liable for any damage to reputation, loss of money, or any special, indirect or consequential damage arising directly or indirectly from your use of our sites, services, and tools.</p>
                    </div>
                    <div className='lg:pr-10'>
                        <p className='my-4 font-[700]'>7. Intellectual Property</p>
                        <p className='text-[17px]'>All content on the Site, including but not limited to text, graphics, logos, images, and software, is the property of the Company or its licensors and is protected by the copyright and trademark laws of the United Kingdom and other applicable laws. You may not use any content on the Site without the express written consent of the Company.</p>
                    </div>
                    <div className='lg:pr-10'>
                        <p className='my-4 font-[700]'>8. Termination</p>
                        <p className='text-[17px]'>We reserve the right to determine, at our sole discretion, if any violation of our terms of service has occurred through your use of our website. If a violation is determined, we may take appropriate action as deemed fit. We may take any or all of the following actions:</p>
                        <ol className="list-disc pl-5">
                        <li ><span>Revoke your right to use our websites, either temporarily or permanently</span></li>
                        <li ><span>Remove any content or material that you have uploaded to our website, either temporarily or permanently</span></li>
                        <li><span>Issue a warning regarding your conduct.</span></li>
                        <li><span>Take legal action against you for reimbursement of all costs incurred on an indemnity basis, including but not limited to legal and administrative costs, due to the violation</span></li>
                        <li ><span>Take further legal action as necessary.</span></li>
                        <li ><span>Disclose any relevant information to law enforcement authorities as we deem appropriate
                            We will not be held liable for any actions taken in response to violations of our terms of service. The actions listed in this policy are not exhaustive, and we reserve the right to take any other action that we deem appropriate in the given circumstances</span></li>
                             </ol>
                       

                    </div>
                    <div className='lg:pr-10'>
                        <p className='my-4 font-[700]'>9. Governing Law</p>
                        <p className='text-[17px]'>These Terms of Use shall be governed by and construed in accordance with the laws of England and Wales, without giving effect to any principles of conflicts of law.</p>
                    </div>
                    <div className='lg:pr-10'>
                        <p className='my-4 font-[700]'>10. Changes to Terms of Use</p>
                        <p className='text-[17px]'>The Company reserves the right to make changes to these Terms of Use at any time. Your continued use of the Site following any changes to these Terms of Use will be deemed to be your acceptance of such changes.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Term;
