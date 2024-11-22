'use client';

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import ButtonOutline from "@/components/global/butttons/ButtonOutline";
import ButtonFill from "@/components/global/butttons/ButtonFill";

const LicenceBookNowCard = ({ setOpen }) => {

    const pathname = usePathname();
    const firstSlug = pathname.split('/').filter(Boolean)[0];
    const SecondSlug = pathname.split('/').filter(Boolean)[1];

    const [showSticky, setShowSticky] = useState(`lg:relative ${firstSlug == 'licences' && SecondSlug != 'cscs-card-application' ? '-top-64' : 'top-0'}`);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 450) {
                setShowSticky('lg:sticky top-2');
            } else {
                setShowSticky(`lg:relative ${firstSlug == 'licences' && SecondSlug != 'cscs-card-application' ? '-top-64' : 'top-0'}`);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>

            <div className={`text-[17px] lg:border rounded lg:shadow-lg lg:p-5 w-full lg:w-[370px] bg-white ${showSticky}`}>

                {firstSlug == 'licences' && SecondSlug == 'cscs-card-application' ?
                    <>
                        <div className="mb-2">
                            <div>
                                <p className="font-bold">AUTHORITY</p>
                                <p className="text-base">Construction Skills Certification Scheme</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-base font-bold">COST</p>
                            <p className="text-base font-bold">VALID FOR</p>
                        </div>
                        <div className="flex items-center justify-between my-1">
                            <p className="text-sm">£36.00</p>
                            <p className="text-sm">5 Years</p>
                        </div>
                        <div>
                            <div>
                                <p className="font-bold">QUALIFICATION(S) NEEDED</p>
                                <a href="/courses/cscs" className="text-lg text-blue">CSCS</a>
                            </div>
                        </div>
                        <div className="mt-2 mb-4">
                            <div>
                                <p className="font-bold">Licence information</p>
                            </div>
                            <div className="flex items-center justify-between border-b pb-2 mb-2">
                                <p>Apply yourself</p>
                                <p className="font-bold">£36.00</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p>Let us apply for you</p>
                                <p className="font-bold">£60.00</p>
                            </div>
                        </div>

                        <ButtonFill color={'danger'} text={'Apply now'} />

                    </>
                    :
                    firstSlug == 'licences' && SecondSlug == 'aplh-personal-licence-application' ?
                        <>
                            <div className="flex items-center justify-between mt-2 mb-4">
                                <div className="">
                                    <p className="font-bold">Licence information</p>
                                    <p>Personal Licence Application</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <p className="font-bold">£140</p>
                                </div>
                            </div>
                            <ButtonFill color={'danger'} handelClick={() => { setOpen('APLHApply') }} text={'Apply now'} />
                        </>
                        :
                        <a href="tel:+03333441293" className="text-center block text-danger text-lg mb-4">Call us to book</a>
                }
                <div className=" py-2 mt-2 border-t">
                    <p className="text-xl font-bold">Need on-site training?</p>
                    <p className="text-sm">Tell us your requirements and get your staff trained on site anywhere in the UK.</p>
                    <div className="mt-3">
                        <ButtonOutline handelClick={() => { setOpen('Requirments') }} color={'primary'} text={'Enter requirments'} />
                    </div>
                </div>
            </div>

        </>
    );
};

export default LicenceBookNowCard;
