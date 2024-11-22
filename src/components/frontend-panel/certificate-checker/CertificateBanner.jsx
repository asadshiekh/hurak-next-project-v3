import React from "react";

const CertificateBanner = () =>{
    return(
        <>
        <div className="h-[280px] md:h-[330px] bg-[url('/images/degree.webp')] bg-cover bg-[70%] bg-no-repeat flex items-center pt-12 md:pt-0 bg-slate-900 bg-opacity-40 bg-blend-screen">
            <div className="grid grid-cols-11 ">
                    <div className="col-start-2 col-span-9 lg:col-start-5 lg:col-span-3 w-full text-center ">
                        <h1 className="text-4xl font-bold text-[#0f7c90]  ">Certificate Verification</h1>
                        <p className="text-white  text-lg pt-2">Authenticate a certificate through this online tool. Enter the candidate's name and certificate number for a valid search</p>
                    </div>
            </div>
        </div>
        {/* <div className="h-[280px] md:h-[330px] bg-[url('/images/degree.webp')] bg-cover bg-[70%] bg-no-repeat flex items-center pt-12 md:pt-0">
            <div className="grid grid-cols-11 w-full h-full bg-black bg-opacity-40 bg-blend-screen">
                <div className="col-start-2 col-span-9 lg:col-start-5 lg:col-span-3 w-full text-center">
                    <h1 className="text-4xl font-bold text-[#0f7c90]">Certificate Verification</h1>
                    <p className="text-white text-lg pt-2">Authenticate a certificate through this online tool. Enter the candidate's name and certificate number for a valid search</p>
                </div>
            </div>
        </div> */}

        </>
    )
}
export default CertificateBanner
