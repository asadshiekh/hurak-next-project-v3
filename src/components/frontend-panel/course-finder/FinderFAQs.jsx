import FAQItem from '@/components/global/FAQItem';
import React from 'react';
import { HiOutlinePlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi2";

const FinderFAQs = () => {

    return (
        <div>
            {/* {faqData.map((faq, index) => ( */}
            <div className='mb-2'>
                <FAQItem bgColor={'#F8F9FA'} OpenBtn={<HiMinus />} CloseBtn={<HiOutlinePlus />} />
            </div>
            {/* ))} */}
        </div>
    )
}

export default FinderFAQs;