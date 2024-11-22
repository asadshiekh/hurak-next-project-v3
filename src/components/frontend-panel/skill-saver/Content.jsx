import React from "react";
import Image from 'next/image';
const content = () => {

    return(
        <div className="py-10">
            <div className="flex justify-between items-center" >
                <div className="">
                    <p className="text-xl font-[700]">Savings made simple</p>
                    <p className="text-lg pt-2">You'll identify eligible courses by the prestigious Skill Saver badge. Experience exclusive rewards that are automatically applied when you enrol in any qualifying course.</p>
                </div>
                <div>
                    <Image src="/images/Skill-saver-logo-18.webp" alt="" width={600} height={100}/>
                </div>
            </div>
        </div>
    )
}
export default content