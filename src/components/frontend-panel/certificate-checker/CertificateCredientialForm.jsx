"use client"
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ButtonFill from "@/components/global/butttons/ButtonFill";

const CertificateCredentialForm = () => {

    const [certificateNo, setCertificateNo] = useState("");
    const handleInputChange = (e) => {
        setCertificateNo(e.target.value);
    };

    return (
        <>
            <div className="container pt-16 pb-24">
                <div className="border rounded bg-[#f8f9fa]">
                    <div className="p-10">
                        <div className="">
                            <p className="text-2xl pb-3">Certificate Number *</p>
                            <input
                                type="number"
                                name="certificate_no"
                                value={certificateNo}
                                onChange={handleInputChange}
                                className="w-full border h-10 focus:border-primaryBlue focus:outline-none rounded px-3"
                            />
                            <p className="text-sm text-slate-600">
                                The certificate appears on the bottom left of the certificate. Enter this number exactly as it appears (including the dashes).
                            </p>
                        </div>
                        <div className="py-5">
                            <p className="text-2xl pb-3">Candidate Name</p>
                            <input
                                type="text"
                                className="w-full border h-10 focus:border-primaryBlue focus:outline-none rounded px-3"
                            />
                            <p className="text-sm text-slate-600">
                                Enter the candidate's name exactly as it appears on the certificate.
                            </p>
                        </div>
                        <div className="block md:flex justify-between items-center">
                            <div>
                                <p className="text-xs text-slate-600">
                                    This site is protected by reCAPTCHA and the Google
                                </p>
                                <p className="text-xs text-slate-600">
                                    <span className="text-[#0f7c90]">
                                        <a href="https://policies.google.com/privacy?hl=en">Privacy Policy</a>
                                    </span>{" "}
                                    and{" "}
                                    <span className="text-[#0f7c90]">
                                        <a href="https://policies.google.com/terms?hl=en">Terms of Service</a>
                                    </span>{" "}
                                    apply.
                                </p>
                            </div>
                            <div className="text-center pt-5 md:pt-0">
                                <Link href={`/certificate-checker/${certificateNo}`}><ButtonFill color={"primary"} text={"Verify Certificate"} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CertificateCredentialForm;
