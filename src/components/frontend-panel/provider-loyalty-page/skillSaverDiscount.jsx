import { IoCheckmarkOutline } from "react-icons/io5";

const SkillSaverDiscount = () =>{
    return(
        <div>
            <p className="text-xl font-[600]">Meet your Skill Savers</p>
                <div className="flex flex-wrap justify-between items-baseline border-b">
                    <div>
                        <p className="text-xl font-500] md:mt-10 md:mb-10 mt-8 mb-2">Skill Saver Level 1</p>
                    </div>
                    <div className="mr-28 mb-8">
                        <p className="text-lg font-[600]">Knowledge seekers with a Hurak.com account</p>
                        
                        <div className="flex items-center">
                        <IoCheckmarkOutline className="text-primary text-xl" />
                        <p className="text-lg ml-2">Offer a discount of up to 10%</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-between items-baseline border-b">
                    <div>
                        <p className="text-xl font-500] md:mt-10 md:mb-10 mt-8 mb-2">Skill Saver Level 2</p>
                    </div>
                    <div className="mb-8">
                        <p className="text-lg font-[600]">Knowledge seekers who have completed 3 courses in 1 year</p>
                        <div className="flex items-center">
                        <IoCheckmarkOutline className="text-primary text-xl" />
                        <p className="text-lg ml-2">Offer a 15% discount</p>
                        </div>
                        <div className="flex items-center">
                        <IoCheckmarkOutline className="text-primary text-xl" />
                        <p className="text-lg ml-2">10% less likely to cancel</p>
                        </div>
                        <div className="flex items-center">
                        <IoCheckmarkOutline className="text-primary text-xl" />
                        <p className="text-lg ml-2">20% more likely to leave reviews</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-between items-baseline border-b">
                    <div>
                        <p className="text-xl font-500] md:mt-10 md:mb-10 mt-8 mb-2">Skill Saver Level 3</p>
                    </div>
                    <div className="mb-8">
                        <p className="text-lg font-[600]">Knowledge seekers who have completed 5 courses in 2 year</p>
                        <div className="flex items-center">
                        <IoCheckmarkOutline className="text-primary text-xl" />
                        <p className="text-lg ml-2">Offer a 20% discount</p>
                        </div>
                        <div className="flex items-center">
                        <IoCheckmarkOutline className="text-primary text-xl" />
                        <p className="text-lg ml-2">Most likely to book a Skill Saver course</p>
                        </div>
                        <div className="flex items-center">
                        <IoCheckmarkOutline className="text-primary text-xl" />
                        <p className="text-lg ml-2">25% less likely to cancel</p>
                        </div>
                        <div className="flex items-center">
                        <IoCheckmarkOutline className="text-primary text-xl" />
                        <p className="text-lg ml-2">40% more likely to leave reviews</p>
                        </div>
                        <div className="flex items-center">
                        <IoCheckmarkOutline className="text-primary text-xl" />
                        <p className="text-lg ml-2">70% more likely to share their experiences with others <br /> when satisfied</p>
                        </div>
                        
                    </div>
                </div>
        </div>

    )}

    export default SkillSaverDiscount;