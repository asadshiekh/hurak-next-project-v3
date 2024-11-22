"use client"
import ButtonFill from "@/components/global/butttons/ButtonFill";
import SelectField from "@/components/global/forms/SelectField";
import TextInput from "@/components/global/forms/TextInput";
import React, { useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";

const BusinessAccountModal = ({ isOpen, onClose }) => {
    const [TestingID, setTestingID] = useState(null);
    const [Mr, setMr] = useState(null);
    const MrOptions = [
        { text: ' 1-50', value: ' Small (1-10 employees)' },
        { text: ' 51-100', value: ' Small (1-10 employees)' },
        { text: '101-150', value: ' Small (1-10 employees)' }
    ];

    if (!isOpen) return null;
    return (
        <>
            <div className=" fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-6xl">
                    <div className='relative px-5 pt-5'>
                        <button className="absolute top-[10px] right-[20px] text-3xl text-gray-600 hover:text-gray-800" onClick={onClose}>
                            &times;
                        </button>
                    </div>
                    <div className="grid grid-cols-12 p-10 gap-10">
                        <div className="col-start-1 col-span-6">
                            <p className="font-[800] text-2xl">Create a Business Account with Hurak </p>
                            <p className="py-5 text-slate-600 font-[500]">See why leading organisations choose Hurak Business as their destination for employee learning</p>
                            <p className="text-base font-[500] pb-2">Try Hurak for Business</p>
                            <p className="text-2xl font-[400]">The ultimate destination for all your business needs:</p>
                            <div className="py-5">
                                <ul>
                                    <div className="flex pb-2">
                                        <IoCheckmarkOutline className="inline text-xl mr-3" />
                                        <li >Save time and hassle by managing all your customer data in one place.</li>
                                    </div>
                                    <div className="flex pb-2">
                                        <IoCheckmarkOutline className="inline text-xl mr-3" />
                                        <li >Rest easy knowing that your customer's data is safe and secure.</li>
                                    </div>
                                    <div className="flex pb-2">
                                        <IoCheckmarkOutline className="inline text-xl mr-3" />
                                        <li >Easily create repeat orders with stored payment details.</li>
                                    </div>
                                    <div className="flex pb-2">
                                        <IoCheckmarkOutline className="inline text-xl mr-3" />
                                        <li >Easily manage access to your team members and what they can see and do.</li>
                                    </div>
                                    <div className="flex pb-2">
                                        <IoCheckmarkOutline className="inline text-xl mr-3" />
                                        <li >Spend less time worrying about managing your team and more time growing your business.</li>
                                    </div>
                                    <div className="flex pb-2">
                                        <IoCheckmarkOutline className="inline text-xl mr-3" />
                                        <li >It's free! You can use it as much or as little as you want.</li>
                                    </div>

                                </ul>
                            </div>
                        </div>
                        <div className="col-start-7 col-span-6">
                            <form className="flex flex-col space-y-2">
                                <div className='grid grid-cols-2 gap-x-2'>
                                    <TextInput label={`First Name <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
                                    <TextInput label={`Last Name <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
                                </div>
                                <TextInput label={`Company Name <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
                                <TextInput label={`Company Role <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
                                <SelectField options={MrOptions} SelectValue={Mr} setSelectValue={setMr} required={true} />
                                <TextInput label={`Phone <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
                                <TextInput label={`Email <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
                                <TextInput label={`Password <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
                                <div className='flex justify-center py-5'>
                                    <div><ButtonFill color={"primary"} text={"Send Request"} /></div>
                                    {/* <button type="submit" className="bg-primary border border-primary text-white text-xl rounded px-20 py-2 hover:bg-white hover:text-primary transition">Register</button> */}
                                </div>
                                <div className='text-xs'>
                                    By signing up, you agree to our terms and privacy policy. You agree that we can contact you about Hurak and use data from third parties to personalize your experience.
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default BusinessAccountModal;