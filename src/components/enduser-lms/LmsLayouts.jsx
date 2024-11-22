'use client';

import React from 'react'
import LmsSidebar from './sidebar'
import LmsHeader from './header'
import LmsRightbar from './LmsRightbar'

import { useState } from 'react';

const LmsLayouts = ({ children }) => {

    const [LeftBar, setLeftBar] = useState(false);
    const [RightBar, setRightBar] = useState({ 'desktop': true, 'mobile': false });

    return (
        <>
            <LmsSidebar LeftBar={LeftBar} setLeftBar={setLeftBar} />
            <LmsHeader setLeftBar={setLeftBar} setRightBar={setRightBar} />
            <LmsRightbar RightBar={RightBar} />
            <div className={`md:pl-[70px] ${RightBar.desktop == true ? 'md:pr-[20%]' : false} ease-in-out duration-150 pt-14 bg-gray-100 h-full`}>
                {children}
            </div >
        </>
    )
}

export default LmsLayouts