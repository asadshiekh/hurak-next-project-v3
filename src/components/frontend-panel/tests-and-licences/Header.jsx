"use client"
import React, { useState, useEffect } from 'react'
import ButtonFill from "@/components/global/butttons/ButtonFill";
import GlobalBreadcrumbs from "@/components/global/GlobalBreadcrumbs";
import Skeleton from '@/components/global/Skeletons/Skeleton';

import { usePathname } from 'next/navigation';


const TestsHeader = ({ setOpen }) => {
    const pathname = usePathname();
    const firstSlug = pathname.split('/').filter(Boolean)[0];
    const SecondSlug = pathname.split('/').filter(Boolean)[1];
    const slug = pathname.split('/').pop();// Split by '/' and get the last segment (the slug)
    const Location = decodeURI(slug.split('-').pop());// Split by '/' and get the last segment (the slug)

    const categories = [
        { name: 'Home', link: '/' },
        { name: 'CITB Health, Safety & Environment (HS&E) Test', link: 'tests/citb-test' },
    ];

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    return (
        <section className="lg:bg-black lg:text-white flex justify-center lg:justify-start items-center lg:min-h-[350px]">
            <div className="max-w-[1140px] mx-auto flex justify-center lg:block w-full px-4 py-4 lg:py-0">
                <div className="md:w-4/5 lg:w-4/6 md:pr-5">
                    <GlobalBreadcrumbs categories={categories} style={'hidden lg:block text-[#8ed1dc] text-sm font-semibold'} />
                    {loading ? (
                        <div className='hidden md:block w-full'>
                            <Skeleton style={'h-10 w-[70%] bg-neutral-200 mt-2'} />
                            <Skeleton style={'h-4 w-[100%] bg-neutral-200 mt-2'} />
                            <Skeleton style={'h-4 w-[100%] bg-neutral-200 mt-2'} />
                            <Skeleton style={'h-4 w-[50%] bg-neutral-200 mt-2'} />
                        </div>
                    ) : (
                        firstSlug == 'licences' && SecondSlug == 'aplh-personal-licence-application' ?
                            <>
                                <h1 className="text-lg md:text-3xl lg:text-4xl font-semibold mb-4 mt-3">APLH Personal Licence Application</h1>
                                <p className="text-base md:text-lg lg:text-xl">A personal license is required to sell alcohol from a premise in the United Kingdom. Local councils issue Personal Licences that enable holders to authorise the sale of alcohol.</p>

                                <div className="flex lg:hidden items-center justify-between my-4">
                                    <div className="">
                                        <p className="font-bold">Licence information</p>
                                        <p>Personal Licence Application</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="font-bold">£140</p>
                                    </div>
                                </div>

                                <div className="block lg:hidden mt-3">
                                    <ButtonFill handelClick={() => { setOpen('CSCSApply') }} color={'danger'} text={'Apply Now'} />
                                </div>
                            </>
                            :
                            <>
                                <h1 className="text-lg md:text-3xl lg:text-4xl font-semibold mb-4 mt-3">CITB Health, Safety & Environment (HS&E) Test {firstSlug == 'tests-locations' ? `in ${Location}` : false}</h1>
                                <p className="text-base md:text-lg lg:text-xl">Book your CSCS or CITB Health, Safety & Environment (HS&E) Test to apply for or renew your CSCS Card.</p>
                            </>

                    )}
                </div>
            </div>
        </section>
    );
};

export default TestsHeader;
