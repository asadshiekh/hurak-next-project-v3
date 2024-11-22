import React from 'react'
import { GoTasklist } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";
import ButtonOutline from '../global/butttons/ButtonOutline';

const LmsHeader = ({ setLeftBar, setRightBar }) => {

    const handelRightBar = () => {
        setRightBar(prevRightBar => ({
            desktop: !prevRightBar.desktop,
            mobile: !prevRightBar.mobile
        }));
    };

    return (
        <div className='fixed top-0 left-0 md:pl-[80px] w-full h-14 flex items-center justify-between px-5 bg-white shadow-md z-10'>
            <div className='flex items-center space-x-2'>
                <RxHamburgerMenu onClick={() => setLeftBar(true)} className='block md:hidden' />
                <h4 className='text-base md:text-xl font-medium'>Dashboard</h4>
            </div>
            <div className='flex items-center'>
                <ButtonOutline handelClick={() => handelRightBar} textShow={'md'} customStyle={'text-base font-light py-1.5 px-3 md:px-5'} IconLeft={<GoTasklist />} color={'warning'} text={'Activities'} />
                <div className='ml-2'>
                    <div className='h-[35px] w-[35px] rounded-full p-1 flex items-center justify-center border border-primary bg-primary text-white cursor-pointer'>NZ</div>
                </div>
            </div>
        </div>
    )
}

export default LmsHeader