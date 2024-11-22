'use client';

import GlobalBreadcrumbs from "@/components/global/GlobalBreadcrumbs";
import LicenceSlider from "./LicenceSlider";
import ButtonFill from "@/components/global/butttons/ButtonFill";
import ButtonOutline from "@/components/global/butttons/ButtonOutline";
import ButtonInverseFill from "@/components/global/butttons/ButtonInverseFill";


const CSCSLicenceHeader = ({ setOpen }) => {

    const categories = [
        { name: 'Home', link: '/' },
        { name: 'CSCS Card', link: '/' },
        { name: 'CITB Health, Safety & Environment (HS&E) Test', link: 'tests/citb-test' },
    ];

    return (
        <section className="flex justify-center lg:justify-start items-center lg:py-12">
            <div className="max-w-[1140px] mx-auto w-full lg:py-0">
                <div className="w-full px-5 mb-5">
                    <GlobalBreadcrumbs categories={categories} style={'hidden lg:block text-sm font-medium'} />
                </div>
                <div className="flex flex-wrap-reverse justify-center">
                    <div className="md:w-4/5 lg:w-7/12 px-5">
                        <h1 className="text-lg md:text-3xl lg:text-[2.1rem] font-semibold mb-4">CSCS Card Application - Applying for your CSCS Card</h1>
                        <p className="text-base md:text-lg lg:text-xl">If you're looking to apply for your CSCS card, you can do so quickly and easily with Hurak. We offer New/ Renew/ Lost CSCS Card Applications Online, so you can apply whenever you need to.</p>

                        <div className="mt-5">
                            <p className="font-semibold text-lg">Licence information</p>
                        </div>

                        <div className="flex justify-between mt-2">
                            <p className="font-normal">Apply yourself</p>
                            <p className="font-semibold text-xl">£36.00</p>
                        </div>
                        <div className="flex justify-between border-t pt-5 my-5">
                            <p className="font-normal">Let us apply for you</p>
                            <p className="font-semibold text-xl">£60.00</p>
                        </div>

                        <ButtonFill widthAuto={'md'} handelClick={() => { setOpen('CSCSApply') }} color={'danger'} text={'Apply Now'} />

                    </div>
                    <div className="md:w-4/5 lg:w-5/12 px-3">
                        <LicenceSlider />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CSCSLicenceHeader;
