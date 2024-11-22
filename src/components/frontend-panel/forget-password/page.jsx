'use client'
import ButtonFill from "@/components/global/butttons/ButtonFill";
import TextInput from "@/components/global/forms/TextInput";
import Link from "next/link";
import { useState } from "react";
import { GoMention } from "react-icons/go";

const ForgetPasswords = () => {
    const [TestingID, setTestingID] = useState(null);
    return (
        <div>
            <div className="max-w-sm m-auto my-10 text-center">
                <h1 className="text-xl font-bold mb-5 text-center">Forget Password!</h1>
                <div className="space-y-3 border-t border-gray-300 mb-5 pt-8">
                    <TextInput IconLeft={<GoMention />} label={`Email Address <span style="color:#ec5252;">*</span>`} InputValue={TestingID} setInputValue={setTestingID} required={true} />
                    <ButtonFill size={"sm"} color={'danger'} text={'Reset Password'} />
                </div>
                <div className="general-content my-5 text-center w-full mx-auto">
                    <Link href={"/log-in"} className="text-primary-light text-base font-semibold hover:underline"> Already have an account?</Link>
                </div>
            </div>
        </div>
    )
}

export default ForgetPasswords;