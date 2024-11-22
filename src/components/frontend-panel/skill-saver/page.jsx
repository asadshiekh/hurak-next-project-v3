import React from "react";

import Banner from './Banner'
import CourseLavels from './CourseLavels'
import Content from './Content'
import Faqs from './Faqs'
const SkillSaver =()=>{

    return(
        <div className=" lg:container py-10 lg:py-20 px-5 lg:px-28">
            <Banner/>
            <CourseLavels />
            <Content />
            <Faqs/>
        </div>
    )
}

export default SkillSaver