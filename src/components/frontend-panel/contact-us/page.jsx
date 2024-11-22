import Link from 'next/link'
import React from 'react'
import { BsFileEarmarkText , BsChatRightText , BsTicket } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { SlSupport } from "react-icons/sl";
import { FaWpforms } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div>
        {/* banner section  */}
        <section className='bg-[url("/images/contactus.webp")] bg-cover bg-center py-20 min-h-[350px] flex items-center'>
            <div className='container auto-container mx-auto'>
                <h4 className='text-5xl text-center md:text-left text-white leading-tight'>Get in touch with <br/>Hurak</h4>
            </div>
        </section>
        {/* contact blocks section */}
        <section className='py-20'>
            <div className='container auto-container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-full lg:w-5/6 mx-auto '>
                    <div className='shadow-md rounded-md p-8 bg-gray-50 text-[18px]'>
                        <h4 className='text-2xl mb-5'>
                        <svg
                            className="w-10 h-10 inline-block mr-3" // Tailwind classes for size, adjust as needed
                            viewBox="0 0 39 40"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                            <clipPath id="BuildingsIconClipPath--a">
                                <path
                                d="M37 0a2 2 0 012 2v36a2 2 0 01-2 2h-3v-8a1 1 0 00-1-1h-3a1 1 0 00-1 1v8H18a2 2 0 01-2-2V2a2 2 0 012-2h19zM25 20h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1zm8 0h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1zm0-8h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1zm-8 0h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1zm0-8h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V5a1 1 0 00-1-1zm8 0h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V5a1 1 0 00-1-1z"
                                className="fill-[#0f7c90]" // Tailwind utility for custom color
                                />
                            </clipPath>
                            </defs>
                            <path
                            d="M37 0a2 2 0 012 2v36a2 2 0 01-2 2h-3v-8a1 1 0 00-1-1h-3a1 1 0 00-1 1v8H18a2 2 0 01-2-2V2a2 2 0 012-2h19zM25 20h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1zm8 0h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1zm0-8h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1zm-8 0h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1zm0-8h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V5a1 1 0 00-1-1zm8 0h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V5a1 1 0 00-1-1z"
                            className="fill-[#202020]" // Custom fill color for main path
                            />
                            <path
                            d="M22.954 12.057a2 2 0 01.046.424V38a2 2 0 01-2 2H2a2 2 0 01-2-2V16.612a2 2 0 011.575-1.954l19-4.13a2 2 0 012.38 1.529zM17 28h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1zm-8 0H6a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1zm0-8H6a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1zm8 0h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1z"
                            className="fill-[#0f7c90]" // Custom color for inner path
                            />
                            <g clipPath="url(#BuildingsIconClipPath--a)">
                            <path
                                d="M22.954 12.057a2 2 0 01.046.424V38a2 2 0 01-2 2H2a2 2 0 01-2-2V16.612a2 2 0 011.575-1.954l19-4.13a2 2 0 012.38 1.529zM17 28h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1zm-8 0H6a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1zm0-8H6a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1zm8 0h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1z"
                                className="fill-[#0f7c90]" // Custom color for path inside clip path
                            />
                            </g>
                        </svg>
                            Sales
                        </h4>
                        <p className='mb-3'>We'd love to talk about how we can work together. Get in touch and let us know how we can help.</p>
                        <ul className='space-y-3'>
                            <li><BsFileEarmarkText className='inline-block mr-1'/> <Link href="/courses" className='underline'>Visit course finder</Link></li>
                            <li><FiPhone className='inline-block mr-1' /> <Link href="tel:0333 344 1293" className='underline'>Call us on 0333 344 1293</Link></li>
                            <li><BsChatRightText className='inline-block mr-1' /> <Link href="/" className='underline'>Start live chat</Link></li>
                            <li><FaWpforms className='inline-block mr-1' /> <Link href="/" className='underline'>Sales Form</Link></li>
                        </ul>
                    </div>
                    <div className='shadow-md rounded-md p-8 bg-gray-50 text-[18px]'>
                        <h4 className='text-2xl mb-5'>
                            <svg
                                className="w-10 h-8 text-gray-800 inline-block mr-3" // Tailwind classes for size and color
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 39 33"
                                >
                                <defs>
                                    <clipPath id="clipPath">
                                    <path
                                        d="M2 19.24a12.73 12.73 0 1 1 4.43 4.42l-5.9 1.97c-.4.13-.63-.09-.5-.5l1.98-5.9z"
                                        fill="currentColor"
                                    ></path>
                                    </clipPath>
                                </defs>
                                <path
                                    d="M2 19.24a12.73 12.73 0 1 1 4.43 4.42l-5.9 1.97c-.4.13-.63-.09-.5-.5l1.98-5.9z"
                                    className="fill-gray-800"
                                ></path>
                                <path
                                    d="M16.73 10.73a12.73 12.73 0 0 1 19.93 15.5l1.97 5.9c.13.41-.09.63-.5.5l-5.9-1.97a12.73 12.73 0 0 1-15.5-19.93zM25.5 23.4c-.93 0-1.68.8-1.68 1.8s.75 1.8 1.68 1.8c.93 0 1.69-.8 1.69-1.8s-.76-1.8-1.69-1.8zm-3.2-10.1A4.73 4.73 0 0 0 21 16.8h2.66c0-1.74.92-2.47 1.88-2.47.4-.07.83.06 1.13.37.3.3.45.75.4 1.19 0 1.15-.16 1.37-1.15 2.18a4.11 4.11 0 0 0-1.77 3.53h2.48c.14-.9.65-1.67 1.38-2.11A4 4 0 0 0 30 16.04c0-1.39-.96-4.03-4.38-4.03a4.13 4.13 0 0 0-3.33 1.29z"
                                    className="fill-primary"
                                ></path>
                                <g clipPath="url(#clipPath)">
                                    <path
                                    d="M16.73 10.73a12.73 12.73 0 0 1 19.93 15.5l1.97 5.9c.13.41-.09.63-.5.5l-5.9-1.97a12.73 12.73 0 0 1-15.5-19.93zM25.5 23.4c-.93 0-1.68.8-1.68 1.8s.75 1.8 1.68 1.8c.93 0 1.69-.8 1.69-1.8s-.76-1.8-1.69-1.8zm-3.2-10.1A4.73 4.73 0 0 0 21 16.8h2.66c0-1.74.92-2.47 1.88-2.47.4-.07.83.06 1.13.37.3.3.45.75.4 1.19 0 1.15-.16 1.37-1.15 2.18a4.11 4.11 0 0 0-1.77 3.53h2.48c.14-.9.65-1.67 1.38-2.11A4 4 0 0 0 30 16.04c0-1.39-.96-4.03-4.38-4.03a4.13 4.13 0 0 0-3.33 1.29z"
                                    className="fill-[#0F7C90]" // Specific color
                                    ></path>
                                </g>
                            </svg>
                            Help & support
                        </h4>
                        <p className='mb-3'>Book a course or find more information about our courses. Get help with a course you’ve already booked.</p>
                        <ul className='space-y-3'>
                            <li><SlSupport className='inline-block mr-1'/> <Link href="https://support.hurak.com/portal/en/home" className='underline'> Support hub</Link></li>
                            <li><BsTicket className='inline-block mr-1' /> <Link href="/" className='underline'>Raise a ticket</Link></li>
                            <li><BsChatRightText className='inline-block mr-1' /> <Link href="/" className='underline'>Start live chat</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ContactUs