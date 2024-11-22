// Sidebar.js
'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Sidebar = () => {
    const pathname = usePathname();
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            window.location.href = selectedValue; // Redirect to the selected URL
        }
    };
    return (
        <div className="">
            <div className='md:hidden w-full'>
                <select
                    className='w-full border border-gray-400 rounded py-2 px-2 outline-none hover:border-blue'
                    onChange={handleSelectChange}
                    value={pathname} // Set the select value to the current pathname
                >
                    <option value="" disabled>Select an option</option>
                    <option
                        value="/terms"
                        className={`w-full text-left text-lg md:font-[500] px-4 py-2 ${pathname === '/terms' ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
                    >
                        Terms of Service
                    </option>
                    <option
                        value="/terms/privacy-policy"
                        className="w-full text-left text-lg md:font-[500] px-4 py-2 hover:bg-primary hover:text-white"
                    >
                        Privacy Policy
                    </option>
                    <option
                        value="/terms/provider-terms"
                        className="w-full text-left text-lg md:font-[500] px-4 py-2 hover:bg-primary hover:text-white">
                        Provider Terms
                    </option>
                    <option
                        value="/terms/intellectual-property-policy"
                        className="w-full text-left text-lg md:font-[500] px-4 py-2 hover:bg-primary hover:text-white">
                        Intellectual Property Policy
                    </option>
                </select>
            </div>

            {/* Sidebar with tabs */}
            <div className="hidden md:block">
                <div className="py-4 border-r ">

                    <Link href="/terms">
                        <button
                            className={`w-full text-left text-base font-[700] px-4 py-2 ${pathname === '/terms' ? 'bg-primary text-white' : ''
                                }`}>
                            Terms of Service
                        </button>
                    </Link>

                    <Link href="/terms/privacy-policy">
                        <button
                            className={`w-full text-left px-4 text-base font-[700] py-2 ${pathname == '/terms/privacy-policy' ? 'bg-primary text-white' : ''}`}>
                            Privacy Policy
                        </button>
                    </Link>

                    <Link href={"/terms/provider-terms"}>
                        <button
                            className={`w-full text-left px-4 text-base font-[700] py-2 ${pathname == '/terms/provider-terms' ? 'bg-primary text-white' : ''}`}>
                            Provider terms
                        </button>
                    </Link>
                    <Link href={"/terms/intellectual-property-policy"}>
                        <button
                            className={`w-full text-left px-4 text-base font-[700] py-2 ${pathname == '/terms/intellectual-property-policy' ? 'bg-primary text-white' : ''}`}>
                            Intellectual Property policy
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Sidebar;
