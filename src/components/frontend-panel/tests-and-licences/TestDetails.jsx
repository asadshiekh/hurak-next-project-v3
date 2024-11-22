'use client';
import React, { useState, useEffect } from 'react'

import '@/../public/css/global/Rawhtml.css';
import { usePathname } from 'next/navigation';
import Skeleton from '@/components/global/Skeletons/Skeleton';

const TestsDetails = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 100);
    }, []);

    const pathname = usePathname();
    const firstSlug = pathname.split('/').filter(Boolean)[0];


    const rawHTMLLicence = ` <h2 data-pm-slice="1 1 []"><strong style="font-size: 32px; background-color: transparent;">CSCS Card Application</strong></h2>
                <p>If you're looking to apply for a CSCS card, you can do so quickly and easily with Hurak. We offer New/ Renew/ Lost CSCS Card Applications Online, so you can apply whenever you need to.</p>
                <p>To get started, simply fill out our online application form. Once we have all the necessary information, we'll process your application and get your CSCS card to you as soon as possible. So don't wait - apply for CSCS card today!</p>
                <h2><strong>What is a CSCS Card?</strong></h2>
                <p>A CSCS card is a Construction Skills Certification Scheme card which shows that you have the skills and training needed to work in construction. It's required for anyone who wants to work on construction sites in the UK, so if you're looking for work in the construction industry, you'll need to make sure you have a valid CSCS card.</p>
                <h2><strong>Types of CSCS Cards</strong></h2>
                <p>There are different types of CSCS cards available, depending on your qualifications and experience.</p>
                <ul>
                <li>
                <p>The most common type of card is the <a style="color: rgb(57, 132, 198);" href="../course/cscs-green-card-labourers-card-course" target="_blank" rel="noopener noreferrer"><strong>CSCS Green Labourer Card</strong></a>, which is available to those who have completed an NVQ or SVQ at Level 2 in construction-related subjects.</p>
                </li>
                <li>
                <p><strong>White CSCS Card</strong> (available to those with construction site experience but no formal qualifications),</p>
                </li>
                <li>
                <p><strong>Gold CSCS Card </strong>(available to experienced construction workers with a high level of health and safety training),</p>
                </li>
                <li>
                <p><strong>Black CSCS Card</strong> (available to managers and supervisors on construction sites).</p>
                </li>
                </ul>
                <h2><strong>How to apply for CSCS Green Labourer Card</strong></h2>
                <p>We have written down the process to get the most common CSCS card, which is the CSCS Green Labourer Card. The steps are:</p>
                <ol>
                <li>
                <h4><strong>Completing the Course and Exam</strong></h4>
                </li>
                </ol>
                <p>Complete our <a style="color: rgb(57, 132, 198);" href="../course/cscs-green-card-labourers-card-course" target="_blank" rel="noopener noreferrer">online Green CSCS Labourers Card Course</a>, it will take you approximately 2-3 hours to complete.</p>
                <p>Once you have completed the online e-learning course, sit for the multiple-choice exam from the comfort of your home using a Desktop/Laptop computer.</p>
                <ol start="2">
                <li>
                <h4><strong>Passing the CITB test</strong></h4>
                </li>
                </ol>
                <p>Next, you will need to book and take your Construction Industry Training Board <a style="color: rgb(57, 132, 198);" href="../tests/citb-health-safety-and-environment-test" target="_blank" rel="noopener noreferrer">(CITB) Health, Safety, and Environment test</a> at a test centre nearest to you, the cost of booking this test directly with CITB is currently £22.</p>
                <ol start="3">
                <li>
                <h4><strong>Applying for the Green CSCS Card</strong></h4>
                </li>
                </ol>
                <p>You will need the Level 1 Award in Health and Safety in a Construction Environment certification and the CITB pass results when applying for your card. The fee for the CSCS Green Card is £36 which can be paid by a credit or debit card.</p>
                <p>We know that applying for a CSCS card can be a confusing process, but we're here to help. If you have any questions about the application process or the correct card to apply for, don't hesitate to contact us for further information. We're always happy to help!</p>
                <h2><a href="https://drive.google.com/file/d/19YUEaeEYLjIuk8tf2AYHs3bMoRjaQ26J/view" target="_blank" rel="noopener"><strong><img src="https://hurak-training-uploads.s3.eu-west-2.amazonaws.com/uploads/blog-media/667acd261af75_citb-test-for-operatives-and-specialists.webp" alt="citb hse test prep handbook" width="100%" height="100%"></strong></a></h2>
                <h2><strong>Renewing your CSCS Card</strong></h2>
                <p>To renew your existing CSCS card you'll need to provide proof of your identity, as well as evidence of your training and qualifications. You also need to pass the CITB Health Safety and Environment test. The test costs £22.50 Once we have all the necessary information, we'll process your renewal and get your new CSCS card to you as soon as possible.</p>`;

    const rawHTML = `
    <div>
            <h2 style="margin-left:0px;">
                <span style="color:rgb(0,0,0);">About the Health, Safety &amp; Environment (HS&amp;E) Test</span>
            </h2>
            <p style="margin-left:0px;">
                The HS&amp;E test is important for anyone who wants to work in construction in the UK. <strong>The test covers aspects of health and safety that are relevant to workers in the construction industry.</strong>
            </p>
            <p style="margin-left:0px;">
                For employers, the HS&amp;E test ensures that employees are up-to-date with the latest health &amp; safety legislation and demonstrates a commitment to health and safety in the workplace.
            </p>
            <p style="margin-left:0px;">
                &nbsp;
            </p>
            <h3 style="margin-left:0px;">
                What do I need to bring to the Test Centre?
                <br />
                &nbsp;
            </h3>
            <p style="margin-left:0px;">
                It's mandatory to bring your valid Identity Card to the test centre to appear in the test. Without having one, you won't be allowed to attempt the test.
            </p>
            <p style="margin-left:0px;">
                &nbsp;
            </p>
            <h2 style="margin-left:0px;">
                Test Structure
            </h2>
            <p style="margin-left:0px;">
                <strong>The HS&amp;E test is made up of 50 multiple-choice questions</strong>. The questions are divided into five sections:
            </p>
            <ul>
                <li>
                    Legal and Management
                </li>
                <li>
                    Health and Welfare
                </li>
                <li>
                    General Safety
                </li>
                <li>
                    High-Risk Activities
                </li>
                <li>
                    Environment
                </li>
            </ul>
            <h2 style="margin-left:0px;">
                &nbsp;
            </h2>
            <h2 style="margin-left:0px;">
                <span style="background-color:transparent;">Types of HS&amp;E tests</span>
            </h2>
            <p style="margin-left:0px;">
                There are <strong>three types of HS&amp;E tests: the Operatives, specialists and the Managers test</strong>. The type of HS&amp;E test you need to take depends on the role you want to carry out in construction.
            </p>
            <h2 style="margin-left:0px;">
                &nbsp;
            </h2>
            <h2 style="margin-left:0px;">
                Operatives HS&amp;E Test
            </h2>
            <p style="margin-left:0px;">
                If you want to work on a construction site as an operative, labourer or tradesperson, you will need to take the Operatives HS&amp;E test.
            </p>
            <h2 style="margin-left:0px;">
                &nbsp;
            </h2>
            <h2 style="margin-left:0px;">
                Specialists HS&amp;E Test
            </h2>
            <p style="margin-left:0px;">
                If you want to work on a construction site in a specialist role, such as a scaffolder, plant operator or demolition worker, you will need to take the Specialist HS&amp;E test.
            </p>
            <h2 style="margin-left:0px;">
                &nbsp;
            </h2>
            <h2 style="margin-left:0px;">
                Managers and Professionals HS&amp;E Test
            </h2>
            <p style="margin-left:0px;">
                If you want to work in construction as a site manager, project manager or any other type of managerial role, you will need to take the Managers and Professionals HS&amp;E test.
            </p>
            <h2 style="margin-left:0px;">
                &nbsp;
            </h2>
            <h2 style="margin-left:0px;">
                <span style="background-color:rgba(0,0,0,0);color:rgb(0,0,0);">How much does the Health, Safety &amp; Environment Test Cost?</span>
            </h2>
            <p style="margin-left:0px;">
                <span style="background-color:rgba(0,0,0,0);color:rgb(0,0,0);">The HS&amp;E test costs £22.50 with CITB and can be booked at different test centres across the UK. Hurak can book the test for you at a cost of £37.50, taking all of the headaches out of arranging your exam.</span>
            </p>
            <h2 style="margin-left:0px;">
                &nbsp;
            </h2>
            <h2 style="margin-left:0px;">
                Preparing for <span style="color:rgb(0,0,0);">the </span><span style="background-color:rgba(0,0,0,0);color:rgb(0,0,0);">Health, Safety &amp; Environment Test</span>
            </h2>
            <p style="margin-left:0px;">
                You can prepare for the HS&amp;E test by buying the <a href="https://www.citb.co.uk/courses-and-qualifications/health-safety-and-environment-hse-test-and-cards/preparing-for-the-test/"><span style="color:hsl(210,75%,60%);"><strong><u>CITB HS&amp;E Test Candidates’ Handbook</u></strong></span></a>. The revision materials contain information about what will be covered in the test, as well as practice questions.
            </p>
            <p style="margin-left:0px;">
                You can also take an HS&amp;E test preparation course, or the CITB Health, Safety &amp; Environment mock test, which will give you the chance to ask questions and get feedback from a qualified instructor.
            </p>
            <h2 style="margin-left:0px;">
                &nbsp;
            </h2>
            <h2 style="margin-left:0px;">
                Applying for a CSCS Card
            </h2>
            <p style="margin-left:0px;">
                Once you have passed the HS&amp;E test, you can apply for a CSCS card.
            </p>
            <p style="margin-left:0px;">
                There are different types of CSCS cards, depending on your occupation. For example, there are cards for labourers, groundworkers, bricklayers, carpenters and joiners, painters and decorators, plumbers and electricians.
            </p>
            <p style="margin-left:0px;">
                To apply for a CSCS card, you will need to provide proof of your identity, qualifications and employment history.
            </p>
            <h2 style="margin-left:0px;">
                &nbsp;
            </h2>
            <h2 style="margin-left:0px;">
                The Construction Skills Certification Scheme (CSCS)
            </h2>
            <p style="margin-left:0px;">
                The CSCS is a scheme that was set up to improve standards in the construction industry.
            </p>
            <p style="margin-left:0px;">
                To get a CSCS card, you need to pass the HS&amp;E test. The CSCS card shows that you have the necessary skills and knowledge to work safely and competently in construction.
            </p>
            <p style="margin-left:0px;">
                CSCS cards are widely recognised by employers and are often a requirement for working on construction sites.
            </p>
            <h2 style="margin-left:0px;">
                &nbsp;
            </h2>
            <h2 style="margin-left:0px;">
                Card Schemes
            </h2>
            <p style="margin-left:0px;">
                There are different card schemes that you can apply for, depending on your occupation.
            </p>
            <p style="margin-left:0px;">
                For example, there is the Green Card scheme for labourers, the Gold Card scheme for skilled workers, and the Black Card scheme for management.
            </p>
            <p style="margin-left:0px;">
                To find out more about the different card schemes, visit the <a href="https://www.cscs.uk.com/types-of-cscs-cards/"><span style="color:hsl(210,75%,60%);">CSCS website</span></a>.
            </p>
        </div>
    `

    return (
        <>
            {loading ? (
                <>
                    <Skeleton style={'h-10 w-[70%] bg-neutral-200 mt-2'} />
                    <Skeleton style={'h-4 w-[100%] bg-neutral-200 mt-4'} />
                    <Skeleton style={'h-4 w-[100%] bg-neutral-200 mt-2'} />
                    <Skeleton style={'h-4 w-[100%] bg-neutral-200 mt-2'} />
                    <Skeleton style={'h-4 w-[100%] bg-neutral-200 mt-2'} />
                    <Skeleton style={'h-4 w-[60%] bg-neutral-200 mt-2'} />
                </>
            ) : (
                <div className='rawHtml' dangerouslySetInnerHTML={{ __html: firstSlug != 'licences' ? rawHTML : rawHTMLLicence }} />
            )}
        </>
    );
};

export default TestsDetails;
