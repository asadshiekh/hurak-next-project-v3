import React from "react";
import { CgLock } from "react-icons/cg";
const Banner = () =>{
    return (
        <div className="text-center">
            <h1 className="text-4xl ">Skill Saver</h1>
            <p className="text-lg pt-2 pb-5">Rewarding Your Learning Journey</p>
            <div className="border-2 rounded-xl p-5 text-start h-[255px] md:h-52  ">
                <p className="text-lg font-bold">Book your next course with hurak</p>
                <p className="text-lg">Discover the power of Skill Saver, taking your learning journey on Hurak.com to the next level. Enjoy free lifetime access to Skill Saver Level 3 rewards on select courses.</p>
                <div className="pt-6">
                    <div className="border-2 h-2 relative grid grid-cols-11 ">

                         <div className="absolute col-start-1 col-span-4 -top-5 -left-1 bg-white text-center">
                         <div className="border-2 rounded-full h-14 w-14 flex justify-center items-center text-3xl text-[#959595]">
                              <CgLock />
                         </div>
                         <div className="block">
                              <p className="text-[#658c93]">Lavel 1</p>
                         </div>
                         </div>

                         <div className="absolute col-start-6 col-span-4 bg-white -top-5 text-center">
                         <div className="border-2 rounded-full h-14 w-14 flex justify-center items-center text-3xl text-[#959595]">
                              <CgLock />
                         </div>
                         <div className="block">
                              <p className=" text-[#658c93]">Lavel 2</p>
                         </div>
                         </div>
                         
                         <div className="absolute col-start-12 col-span-4 bg-white -top-5 -right-1 text-center">
                         <div className="border-2 rounded-full h-14 w-14 flex justify-center items-center text-3xl text-[#959595]">
                              <CgLock />
                         </div>
                         <div className="block">
                              <p className=" text-[#658c93]">Lavel 3</p>
                         </div>
                         </div>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Banner