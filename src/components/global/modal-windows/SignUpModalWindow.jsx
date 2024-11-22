"use client"
import React, { useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import BasicModal from "./BasicModal";
import ButtonFill from "../butttons/ButtonFill";

const SignUpModal = ({ isOpen, CloseModal }) => {

    const [active, setActive] = useState(2);

    const handleActive = (button) => {
        setActive(button);
    };

    return (
        <>
            <BasicModal isOpen={isOpen} CloseModal={CloseModal}>
                <div className="grid grid-cols-12">
                    <button className={`col-start-1 col-span-6 flex justify-center items-center text-xl h-20 ${active === 1 ? 'bg-primary text-white' : 'bg-[#f0f0f0]'}`} onClick={() => handleActive(1)} id="1" > Login </button>
                    <button className={`col-start-7 col-span-6 flex justify-center items-center text-xl h-20 ${active === 2 ? 'bg-primary text-white' : 'bg-[#f0f0f0]'}`} onClick={() => handleActive(2)} id="2" > Sign Up </button>
                </div>
                <div className="grid grid-cols-10 px-10 text-start">
                    <div className="col-start-1 col-span-10 py-4">
                        {active === 1 &&
                            <div>
                                <p className="text-3xl font-[500]">Login</p>
                                <p className=" text-slate-600 pt-2">Login to your Hurak Account.</p>
                            </div>

                        }
                        {active === 2 &&
                            <div>
                                <p className="text-3xl font-[500]">Sign Up</p>
                                <p className=" text-slate-600 pt-2">Sign up with Hurak and start learning.</p>
                            </div>
                        }

                    </div>
                    <div className="col-start-1 col-span-12 border"></div>
                    <div className="col-start-1 col-span-12 py-2">
                        <div className='flex justify-center  py-2'>
                            <a href="https://hurak.com/auth/facebook" className="bg-[#1a538a] hover:bg-[#164675] text-start border border-primary text-white text-md font-bold rounded w-full py-2  transition flex justify-start items-center"> <FaFacebookF className="mx-2" />Continue with Facebook</a>
                        </div>
                        <div className='flex justify-center '>
                            <a href="https://hurak.com/auth/google" className=" text-start border text-md font-[600] bg-white hover:bg-[#f2f3f5] rounded w-full py-2 transition flex justify-start items-center"><FcGoogle className="mx-2 text-2xl" /> Continue with Google</a>
                        </div>
                    </div>
                    <div className="col-start-1 col-span-12 py-3">
                        <div className="relative border">
                            <p className="absolute top-[-12px] left-1/2 transform -translate-x-1/2 bg-white px-2">or</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-10 px-10 pt-2 pb-10 gap-10">
                    <div className="col-start-1 col-span-10">
                        <form className="flex flex-col space-y-2">
                            {active === 2 &&
                                <div className="grid grid-cols-4 gap-x-8">
                                    <input
                                        type="text"
                                        name='fName'
                                        placeholder='First Name *'
                                        className='border border-gray-300 rounded px-4 py-3 focus:outline-none col-span-2'
                                        required
                                    />
                                    <input
                                        type="text"
                                        name='lName'
                                        placeholder='Last Name*'
                                        className='border border-gray-300 rounded px-4 py-3 focus:outline-none col-span-2'
                                        required
                                    />
                                </div>
                            }

                            <input
                                type="email"
                                name='email'
                                placeholder='Email Address *'
                                className='border border-gray-300 rounded px-4 py-3 focus:outline-none '
                                required
                            />
                            <input
                                type="password"
                                name='password'
                                placeholder='Password *'
                                className='border border-gray-300 rounded px-4 py-3 focus:outline-none '
                                required
                            />
                            {active === 1 &&
                                <div className='flex justify-center py-5'>
                                    <ButtonFill color={"primary"} text={"Sign In"} />
                                    {/* <button type="submit" className="bg-primary border border-primary text-white text-xl rounded w-full py-2 hover:bg-white hover:text-primary transition" >Sign In</button> */}
                                </div>
                            }
                            {active === 2 &&
                                <div className='flex justify-center py-5'>
                                     <ButtonFill color={"danger"} text={"Sign Up"} />
                                    {/* <button type="submit" className="bg-[#dc3545] border text-white text-xl rounded w-full py-2 hover:bg-[#c82333] transition" >Sign Up</button> */}
                                </div>
                            }
                            <div className='text-start text-sm font-[300]'>
                                {active === 1 &&
                                    <div>
                                        <div>
                                            <a href="https://hurak.com/forget-password" className="text-danger">Forget your password?</a>
                                        </div>
                                        <button className="">Don't have an account <span className="text-[#007bff]" onClick={() => handleActive(2)}>Sign Up</span> .</button>
                                    </div>
                                }
                                {active === 2 &&
                                    <div>
                                        <button className="">Already have an account  <span className="text-[#007bff]" onClick={() => handleActive(1)}>Sign In</span> .</button>
                                        <p className="pt-5">By clicking "Sign Up", I accept the <a href="https://hurak.com/terms" className="text-[#007bff]">Terms of Service</a>  and have read the <a href="https://hurak.com/terms" className="text-[#007bff]">Privacy Policy</a>  .</p>

                                    </div>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </BasicModal>


        </>
    );
}
export default SignUpModal