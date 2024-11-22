import ButtonFill from "@/components/global/butttons/ButtonFill";

const SkillPercentage = () => {
    return (
        <div>
            <p className="text-xl font-[500] mb-5">We expect Skill Saver partners to see on average:</p>
            <div className="flex justify-between">
                <div className="text-center w-[33%]">
                    <p className="font-[500] text-4xl md:text-5xl" >60%</p>
                    <p className="text-[18px] my-3">Increase in search views</p>
                </div>
                <div className="text-center w-[33%]">
                    <p className="font-[500] text-4xl md:text-5xl" >40%</p>
                    <p className="text-[18px] my-3">More bookings</p>
                </div>
                <div className="text-center w-[33%]">
                    <p className="font-[500] text-4xl md:text-5xl" >35%</p>
                    <p className="text-[18px] my-3">more revenue</p>
                </div>
            </div>
            <div className="flex justify-center mb-5 mt-3">
                <ButtonFill size={"sm"} widthAuto={"auto"}  Padding={"2xl"} color={"danger"} text={"Join Now"} />
            </div>
        </div>
    )
}

export default SkillPercentage;