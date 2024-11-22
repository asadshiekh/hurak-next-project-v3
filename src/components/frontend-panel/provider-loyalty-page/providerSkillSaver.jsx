import ButtonFill from "@/components/global/butttons/ButtonFill";

const ProviderSkillSaver = () => {
    return (
        <div>
            <div className="text-center">
                <h1 className="font-[500] text-[45px]">Skill Saver</h1>
                <p className="text-[17px] ">
                    Skill Saver is the ultimate loyalty program designed exclusively for course providers like you at Hurak.com. With Skill Saver, we're committed to providing you with a powerful marketing tool to enhance your visibility, attract a broader audience of eager learners, and unlock new revenue opportunities.
                </p>
                <p className="lg:mx-8 text-[17px] ">
                    Take this opportunity to elevate your courses, expand your reach, and tap into the vast potential of our loyal customer base. Join Skill Saver today and embark on a journey of growth, success, and unmatched opportunities for your course offerings.
                </p>
                {/* <button className="text-[17px] bg-danger py-1 px-10 rounded text-white my-5">Join Now</button> */}
                <div className="my-5 flex justify-center">
                    <ButtonFill size={'sm'} Padding={"xl"} widthAuto={"md"} color={"danger"} text={"Join Now"} />
                </div>

                <div className="flex justify-center mb-10">
                    <video controls width="600" className="rounded">
                        <source src="https://player.vimeo.com/video/831872688?h=9fe4078c2e&badge=0&autopause=0&player_id=0&app_id=58479" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    )
}

export default ProviderSkillSaver;