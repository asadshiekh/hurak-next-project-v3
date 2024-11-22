import React from "react";
import HurakBusinessBanner from './HurakBusinessBanner'
import CourseFaqs from "./CourseFaqs";
import WhyChooseHurak from "./WhyChooseHurak";
import BusinessAccountModal from './BusinessAccountModalWindow'
const HurakBusiness = () => {
    return (
        <>
            <HurakBusinessBanner />
            <WhyChooseHurak />
            <CourseFaqs />
            <BusinessAccountModal/>
        </>
    )
}

export default HurakBusiness