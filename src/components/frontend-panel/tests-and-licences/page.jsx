'use client';
import { useState } from "react";

import BasicModal from "@/components/global/modal-windows/BasicModal";
import CSCSLicenceCards from "./CSCSLicenceCards";
import CSCSLicenceHeader from "./CSCSLicenceHeader";
import TestsHeader from "./Header";
import LicenceBookNowCard from "./LicenceBookNowCard";
import TestCohortCard from "./TestCohortCard";
import TestsDetails from "./TestDetails";
import TestLocations from "./TestLocations";
import TestsBookNowCard from "./TestsBookNowCard";
import TestsFaqs from "./TestsFaqs";

import { usePathname } from 'next/navigation';
import { GoCheck, GoCheckCircle, GoChevronDown, GoChevronLeft, GoChevronRight, GoX } from "react-icons/go";
import Radio from "@/components/global/forms/Radio";
import UppyUploader from "@/components/frontend-panel/tests-and-licences/UppyUploader";
import TextInput from "@/components/global/forms/TextInput";
import SelectField from "@/components/global/forms/SelectField";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import ButtonFill from "@/components/global/butttons/ButtonFill";

const Tests = () => {

    const pathname = usePathname();
    const firstSlug = pathname.split('/').filter(Boolean)[0];
    const SecondSlug = pathname.split('/').filter(Boolean)[1];

    const [isOpen, setOpen] = useState(null);
    const CloseModal = () => {
        setOpen(null);
        document.body.style.overflowY = 'auto';
    }

    const [FormCurrentIndex, setFormCurrentIndex] = useState(0);

    const [ApplicationTypeValue, setApplicationTypeValue] = useState(null);
    const [CSCSCardValue, setCSCSCardValue] = useState(null);

    const [TestingID, setTestingID] = useState(null);
    const [NIC, setNIC] = useState(null);

    const [Mr, setMr] = useState(null);
    const [FName, setFName] = useState(null);
    const [LName, setLName] = useState(null);
    const [Email, setEmail] = useState(null);
    const [Phone, setPhone] = useState(null);
    const [Address, setAddress] = useState(null);
    const [City, setCity] = useState(null);
    const [Zip, setZip] = useState(null);

    const [CardNumber, setCardNumber] = useState(null);
    const [ExpDate, setExpDate] = useState(null);
    const [CVC, setCVC] = useState(null);

    const MrOptions = [
        { text: 'Mr', value: 'Mr' },
        { text: 'Mrs', value: 'Mrs' },
        { text: 'Ms.', value: 'Ms.' }
    ];



    const SelectCategories = [
        { selected: true, disabled: true, text: 'Select categories', value: 'null' },
    ];
    const SelectCourses = [
        { selected: true, disabled: true, text: 'Select courses', value: 'null' },
    ];
    const SelectLocations = [
        { selected: true, disabled: true, text: 'Select locations', value: 'null' },
    ];
    const SelectNoTrainees = [
        { selected: true, disabled: true, text: 'Select number of trainees', value: 'null' },
    ];

    const [Over18, setOver18] = useState(null);
    const [CompetedCourse, setCompetedCourse] = useState(null);
    const [RightToWork, setRightToWork] = useState(null);

    const EligibilityOptions = [
        { selected: true, disabled: true, text: 'Select', value: 'null' },
        { text: 'Yes', value: 'yes' },
        { text: 'No', value: 'no' },
    ];

    return (
        <>
            {firstSlug != 'licences' || SecondSlug != 'cscs-card-application' ? <TestsHeader setOpen={setOpen} /> : <CSCSLicenceHeader setOpen={setOpen} />}
            <section className="flex justify-center lg:justify-start items-center">
                <div className="max-w-[1140px] mx-auto flex flex-wrap-reverse justify-center lg:justify-between w-full px-4 py-4 lg:py-0">
                    <div className="w-full md:w-4/5 lg:w-4/6 lg:pr-5 py-6">
                        {firstSlug == 'licences' && SecondSlug == 'cscs-card-application' ? <CSCSLicenceCards /> : false}
                        <TestsDetails />
                        {firstSlug != 'licences' ? <TestCohortCard /> : false}
                        <TestsFaqs />
                        {firstSlug != 'licences' ? <TestLocations /> : false}
                    </div>
                    <div className="w-full md:w-4/5 lg:w-4/12 lg:px-5">
                        {firstSlug != 'licences' ? <TestsBookNowCard setOpen={setOpen} /> : <LicenceBookNowCard setOpen={setOpen} />}
                    </div>
                </div>
            </section>

            {isOpen == 'CSCSApply' ?
                <BasicModal size={'xl'} staticBackdrop={true} isOpen={isOpen} CloseModal={CloseModal}>
                    <div className="py-3 px-5">
                        <div className="w-full border-b border-gray-300 pb-3 flex items-center justify-between">
                            {FormCurrentIndex == 0 ?
                                <h3 className="text-[28px] font-semibold">Step 1 of 2 - CSCS Card Application Details</h3>
                                :
                                <h3 className="text-[28px] font-semibold">Step 2 of 2 - Payment Details</h3>
                            }
                            <GoX onClick={CloseModal} className="text-danger cursor-pointer" size={25} />
                        </div>
                        <div className={`${FormCurrentIndex == 0 ? 'flex' : 'hidden'} flex-wrap py-4`}>
                            <div className="md:pr-4 w-full md:w-1/2">
                                <div className="w-full">
                                    <h5 className="text-lg font-semibold">Application Type <span className="text-danger">*</span></h5>
                                    <div className="mt-3 grid grid-cols-1 gap-y-1">
                                        <Radio selectedRadioValue={ApplicationTypeValue} setSelectedRadioValue={setApplicationTypeValue} required RadioValue={'New Card'} name={'applicationType'} label={'New Card'} />
                                        <Radio selectedRadioValue={ApplicationTypeValue} setSelectedRadioValue={setApplicationTypeValue} required RadioValue={'Renew Card'} name={'applicationType'} label={'Renew Card'} />
                                        <Radio selectedRadioValue={ApplicationTypeValue} setSelectedRadioValue={setApplicationTypeValue} required RadioValue={'Lost/Stolen'} name={'applicationType'} label={'Lost/Stolen'} />
                                    </div>
                                </div>
                                <div className="w-full pt-4">
                                    <h5 className="text-lg font-semibold">What CSCS card would you like to apply for <span className="text-danger">*</span></h5>
                                    <div className="mt-3 grid grid-cols-1 gap-y-1">
                                        <Radio selectedRadioValue={CSCSCardValue} setSelectedRadioValue={setCSCSCardValue} required RadioValue={'Green Labourer Card'} name={'apply'} label={'Green Labourer Card'} />
                                        <Radio selectedRadioValue={CSCSCardValue} setSelectedRadioValue={setCSCSCardValue} required RadioValue={'Blue Skilled Card'} name={'apply'} label={'Blue Skilled Card'} />
                                        <Radio selectedRadioValue={CSCSCardValue} setSelectedRadioValue={setCSCSCardValue} required RadioValue={'Gold Card'} name={'apply'} label={'Gold Card'} />
                                        <Radio selectedRadioValue={CSCSCardValue} setSelectedRadioValue={setCSCSCardValue} required RadioValue={'Black Managers Card'} name={'apply'} label={'Black Managers Card'} />
                                        <div className="">
                                            <Radio selectedRadioValue={CSCSCardValue} setSelectedRadioValue={setCSCSCardValue} required RadioValue={'Provisional Card'} name={'apply'} label={'Provisional Card'} />
                                            <span className="ml-5 text-sm">(6 months card, applicable only if you have never had a CSCS card before)</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full pt-4">
                                    <TextInput label={`CITB Testing ID (Optional)`} InputValue={TestingID} setInputValue={setTestingID} required={false} />
                                </div>
                            </div>
                            <div className="md:pl-4 w-full md:w-1/2 md:border-l border-gray-300">
                                <div className="w-full pt-4">
                                    <input className="w-full p-3 border outline-0 focus:border-primary border-gray-300 rounded" required type="date" placeholder="Date of birth" />
                                </div>
                                <div className="w-full pt-4">
                                    <TextInput label={`National Insurance Number <span style="color:#ec5252;">*</span>`} InputValue={NIC} setInputValue={setNIC} required={true} />
                                    <p className="text-[12px] ml-1 mt-1 text-gray-500">e.g. QC123456C</p>
                                </div>
                                <div className="w-full pt-4">
                                    <p className="text-sm mb-1">Upload a proof of identification <span className="text-danger">*</span></p>
                                    <UppyUploader />
                                    <p className="text-[12px] mt-1 text-gray-500">Please upload a valid proof of identification, such as a passport or a driver's licence.</p>
                                </div>
                            </div>
                        </div>
                        <div className={`${FormCurrentIndex == 1 ? 'flex' : 'hidden'} flex-wrap py-4`}>
                            <div className="md:pr-4 w-full md:w-1/2 space-y-4">
                                <div className="flex justify-between flex-wrap space-y-4 md:space-y-0">
                                    <div className="w-full md:w-1/6 md:pr-2">
                                        <SelectField options={MrOptions} SelectValue={Mr} setSelectValue={setMr} required={true} />
                                    </div>
                                    <div className="w-full md:w-5/12 md:px-2">
                                        <TextInput label={'First Name <span style="color:#ec5252;">*</span>'} InputValue={FName} setInputValue={setFName} required={true} />
                                    </div>
                                    <div className="w-full md:w-5/12 md:pl-2">
                                        <TextInput label={`Last Name <span style="color:#ec5252;">*</span>`} InputValue={LName} setInputValue={setLName} required={true} />
                                    </div>
                                </div>
                                <div>
                                    <TextInput label={'Email <span style="color:#ec5252;">*</span>'} InputValue={Email} setInputValue={setEmail} required={true} />
                                </div>
                                <div>
                                    <TextInput label={'Address <span style="color:#ec5252;">*</span>'} InputValue={Address} setInputValue={setAddress} required={true} />
                                </div>
                                <div>
                                    <TextInput label={'Phone <span style="color:#ec5252;">*</span>'} InputValue={Phone} setInputValue={setPhone} required={true} />
                                </div>
                                <div className="flex justify-between flex-wrap space-y-4 md:space-y-0">
                                    <div className="w-full md:w-1/2 md:pr-2">
                                        <TextInput label={'City <span style="color:#ec5252;">*</span>'} InputValue={City} setInputValue={setCity} required={true} />
                                    </div>
                                    <div className="w-full md:w-1/2 md:pl-2">
                                        <TextInput label={`Postal/Zip/Code <span style="color:#ec5252;">*</span>`} InputValue={Zip} setInputValue={setZip} required={true} />
                                    </div>
                                </div>
                            </div>
                            <div className="md:pl-4 md:w-1/2 md:border-l mt-4 md:mt-0 border-gray-300">
                                <div className="space-y-4 md:space-y-5">
                                    <div className="">
                                        <TextInput label={'Card number <span style="color:#ec5252;">*</span>'} InputValue={CardNumber} setInputValue={setCardNumber} required={true} />
                                    </div>
                                    <div className="flex justify-between flex-wrap">
                                        <div className="w-1/2 pr-2">
                                            <TextInput label={'Expiration date <span style="color:#ec5252;">*</span>'} InputValue={ExpDate} setInputValue={setExpDate} required={true} />
                                        </div>
                                        <div className="w-1/2 pl-2">
                                            <TextInput label={`CVC number <span style="color:#ec5252;">*</span>`} InputValue={CVC} setInputValue={setCVC} required={true} />
                                        </div>
                                    </div>
                                    <div className="rounded bg-zinc-100 py-6 px-3">
                                        <h3 className="font-semibold mb-4 text-xl">Order Details</h3>
                                        <div className="flex justify-between my-3 pb-3 border-b border-gray-400">
                                            <p className="text-base flex items-center">
                                                <GoCheckCircle className="mr-1" />
                                                CSCS Card Application - Applying for your CSCS Card</p>
                                            <p className="font-semibold text-lg">£60.00</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-semibold text-lg">Order Total</p>
                                            <p className="font-semibold text-lg">£60.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-3 px-5">
                        {FormCurrentIndex == 1 ?
                            <div className="flex justify-between">
                                <div>
                                    <ButtonFill handelClick={() => setFormCurrentIndex(0)} color={'primary-light'} IconLeft={<GoChevronLeft />} text={'Previous'} />
                                </div>
                                <div>
                                    <ButtonFill color={'primary'} text={'Apply Now'} />
                                </div>
                            </div>
                            :
                            <div className="flex justify-end">
                                <div>
                                    <ButtonFill handelClick={() => setFormCurrentIndex(1)} color={'primary-light'} IconRight={<GoChevronRight />} text={'Next'} />
                                </div>
                            </div>
                        }
                    </div>
                </BasicModal>
                : false}


            {isOpen == 'APLHApply' ?
                <BasicModal size={'xl'} staticBackdrop={true} isOpen={isOpen} CloseModal={CloseModal}>
                    <div className="py-3 px-5">
                        <div className="w-full border-b border-gray-300 pb-3 flex items-center justify-between">
                            {FormCurrentIndex == 0 ?
                                <h3 className="text-[28px] font-semibold">Step 1 of 2 - Eligibility check</h3>
                                :
                                <h3 className="text-[28px] font-semibold">Step 2 of 2 - Payment Details</h3>
                            }
                            <GoX onClick={CloseModal} className="text-danger cursor-pointer" size={25} />
                        </div>
                        <div className={`${FormCurrentIndex == 0 ? 'flex' : 'hidden'} flex-wrap py-4`}>
                            <div className="md:pr-4 w-full md:w-1/2 mb-5 md:mb-0">
                                <div className="h-full flex flex-col justify-center items-center">
                                    <IoMdCheckmarkCircleOutline className="text-primary h-auto w-1/3" />
                                    <p className="mt-2 text-[17px]">Application will take approximately 5 minutes</p>
                                </div>
                            </div>
                            <div className="md:pl-4 w-full space-y-5 md:w-1/2 md:border-l border-gray-300">
                                <div className="w-full">
                                    <p className="mb-1 text-[17px]">I am over 18 years old</p>
                                    <SelectField SelectValue={Over18} setSelectValue={setOver18} required={true} options={EligibilityOptions} />
                                </div>
                                <div className="w-full">
                                    <p className="mb-1 text-[17px]">I have completed the personal license course</p>
                                    <SelectField SelectValue={CompetedCourse} setSelectValue={setCompetedCourse} required={true} options={EligibilityOptions} />
                                </div>
                                <div className="w-full">
                                    <p className="mb-1 text-[17px]">I have the right to work in the uk</p>
                                    <SelectField SelectValue={RightToWork} setSelectValue={setRightToWork} required={true} options={EligibilityOptions} />
                                </div>
                            </div>
                        </div>
                        <div className={`${FormCurrentIndex == 1 ? 'flex' : 'hidden'} flex-wrap py-4`}>
                            <div className="md:pr-4 w-full md:w-1/2 space-y-4">
                                <div className="flex justify-between flex-wrap space-y-4 md:space-y-0">
                                    <div className="w-full md:w-1/6 md:pr-2">
                                        <SelectField options={MrOptions} SelectValue={Mr} setSelectValue={setMr} required={true} />
                                    </div>
                                    <div className="w-full md:w-5/12 md:px-2">
                                        <TextInput label={'First Name <span style="color:#ec5252;">*</span>'} InputValue={FName} setInputValue={setFName} required={true} />
                                    </div>
                                    <div className="w-full md:w-5/12 md:pl-2">
                                        <TextInput label={`Last Name <span style="color:#ec5252;">*</span>`} InputValue={LName} setInputValue={setLName} required={true} />
                                    </div>
                                </div>
                                <div>
                                    <TextInput label={'Email <span style="color:#ec5252;">*</span>'} InputValue={Email} setInputValue={setEmail} required={true} />
                                </div>
                                <div>
                                    <TextInput label={'Address <span style="color:#ec5252;">*</span>'} InputValue={Address} setInputValue={setAddress} required={true} />
                                </div>
                                <div>
                                    <TextInput label={'Phone <span style="color:#ec5252;">*</span>'} InputValue={Phone} setInputValue={setPhone} required={true} />
                                </div>
                                <div className="flex justify-between flex-wrap space-y-4 md:space-y-0">
                                    <div className="w-full md:w-1/2 md:pr-2">
                                        <TextInput label={'City <span style="color:#ec5252;">*</span>'} InputValue={City} setInputValue={setCity} required={true} />
                                    </div>
                                    <div className="w-full md:w-1/2 md:pl-2">
                                        <TextInput label={`Postal/Zip/Code <span style="color:#ec5252;">*</span>`} InputValue={Zip} setInputValue={setZip} required={true} />
                                    </div>
                                </div>
                            </div>
                            <div className="md:pl-4 md:w-1/2 md:border-l mt-4 md:mt-0 border-gray-300">
                                <div className="space-y-4 md:space-y-5">
                                    <div className="">
                                        <TextInput label={'Card number <span style="color:#ec5252;">*</span>'} InputValue={CardNumber} setInputValue={setCardNumber} required={true} />
                                    </div>
                                    <div className="flex justify-between flex-wrap">
                                        <div className="w-1/2 pr-2">
                                            <TextInput label={'Expiration date <span style="color:#ec5252;">*</span>'} InputValue={ExpDate} setInputValue={setExpDate} required={true} />
                                        </div>
                                        <div className="w-1/2 pl-2">
                                            <TextInput label={`CVC number <span style="color:#ec5252;">*</span>`} InputValue={CVC} setInputValue={setCVC} required={true} />
                                        </div>
                                    </div>
                                    <div className="rounded bg-zinc-100 py-6 px-3">
                                        <h3 className="font-semibold mb-4 text-xl">Order Details</h3>
                                        <div className="flex justify-between my-3 pb-3 border-b border-gray-400">
                                            <p className="text-base flex items-center">
                                                <GoCheckCircle className="mr-1" />
                                                CSCS Card Application - Applying for your CSCS Card</p>
                                            <p className="font-semibold text-lg">£60.00</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="font-semibold text-lg">Order Total</p>
                                            <p className="font-semibold text-lg">£60.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-3 px-5">
                        {FormCurrentIndex == 1 ?
                            <div className="flex justify-between">
                                <div>
                                    <ButtonFill handelClick={() => setFormCurrentIndex(0)} color={'primary-light'} IconLeft={<GoChevronLeft />} text={'Previous'} />
                                </div>
                                <div>
                                    <ButtonFill color={'primary'} text={'Apply Now'} />
                                </div>
                            </div>
                            :
                            <div className="flex justify-end">
                                <div>
                                    <ButtonFill handelClick={() => setFormCurrentIndex(1)} color={'primary-light'} IconRight={<GoChevronRight />} text={'Next'} />
                                </div>
                            </div>
                        }
                    </div>
                </BasicModal>
                : false}


            {isOpen == 'Requirments' ?
                <BasicModal size={'w-full lg:w-[1000px]'} isOpen={isOpen} CloseModal={CloseModal}>
                    <div className="p-5 flex flex-wrap">
                        <div className="w-full flex justify-end mb-5">
                            <GoX onClick={CloseModal} className={`cursor-pointer`} size={20} />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <p className="text-4xl text-primary=pro font-semibold mb-5">Your Requirements</p>
                            <p className="text-lg">Give us some details and we’ll get back to you within 24 hours</p>
                            <p className="text-3xl font-semibold my-5">Need to Get your Staff Trained?</p>
                            <p className="text-lg">With over 15 instructors working full-time we’ve got you training needs covered. Get your staff trained on site anywhere in the UK or at one of our training locations.</p>
                            <ul className="mt-5 hidden md:block">
                                <li className="flex items-start text-lg"><GoCheck className="mt-1 mr-1" size={20} /><span>Best price guaranteed – We’ll meet or beat any of our competitor’s prices.</span></li>
                                <li className="flex items-start text-lg"><GoCheck className="mt-1 mr-1" size={20} /><span>Special corporate discounts with free upgrades to same-day results.</span></li>
                                <li className="flex items-start text-lg"><GoCheck className="mt-1 mr-1" size={20} /><span>Bespoke service designed for your business.</span></li>
                                <li className="flex items-start text-lg"><GoCheck className="mt-1 mr-1" size={20} /><span>Date and location of your choice.</span></li>
                                <li className="flex items-start text-lg"><GoCheck className="mt-1 mr-1" size={20} /><span>Dedicated corporate account manager.</span></li>
                                <li className="flex items-start text-lg"><GoCheck className="mt-1 mr-1" size={20} /><span>Get your staff trained on site anywhere in the UK or at one of our training locations.</span></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2 px-3 mt-5 md:mt-0">
                            <form className="grid grid-cols-1 gap-3">
                                <div className="relative">
                                    <SelectField options={SelectCategories} required={true} />
                                </div>
                                <div className="relative">
                                    <SelectField options={SelectCourses} required={true} />
                                </div>
                                <div className="relative">
                                    <SelectField options={SelectLocations} required={true} />
                                </div>
                                <div className="relative">
                                    <SelectField options={SelectNoTrainees} required={true} />
                                </div>
                                <input required className="w-full border placeholder:text-gray-400 border-gray-400 rounded p-3 outline-primary" type="date" placeholder="dd/mm/yyy" />
                                <TextInput label={`Full name <span style="color:#ec5252;">*</span>`} required={true} />
                                <TextInput label={`Company name <span style="color:#ec5252;">*</span>`} required={true} />
                                <TextInput label={`Email address <span style="color:#ec5252;">*</span>`} required={true} />
                                <TextInput label={`Contact no <span style="color:#ec5252;">*</span>`} required={true} />
                                <p className="text-xs text-center text-gray-600">This site is protected by reCAPTCHA and the Google<br />
                                    Privacy Policy and Terms of Service apply.</p>
                                <ButtonFill color={'primary'} text={'Submit'} />

                            </form>
                        </div >
                    </div >
                </BasicModal >
                : false
            }

        </>
    );
};

export default Tests;
