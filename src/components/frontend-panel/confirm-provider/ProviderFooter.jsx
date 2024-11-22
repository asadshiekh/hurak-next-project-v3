import React from 'react'
import Link from 'next/link';

const ProviderHeader = () => {
    return (
        <footer className=''>
            <div className="border-t border-gray-300 py-2 bg-[#CFD2D3] px-6">
                <div className='flex justify-center items-center'>
                    <div className='space-x-6 text-right text-sm'>
                        <a href="/terms" className="hover:underline">Terms of Service</a>
                        <a href="/terms/privacy-policy" className="hover:underline">Privacy Policy</a>
                        <button className="hover:underline">Cookies</button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default ProviderHeader
