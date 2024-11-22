"use client";

import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const Checkbox = ({ label, name, size, trueValue, falseValue }) => {

    const [isToggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(previsToggle => !previsToggle);
    }

    return (
        <div className="block">
            <div className="inline-flex items-start cursor-pointer" onClick={handleToggle}>
                <div className="block mt-1 w-auto">
                    <div className={`${size == 'lg' ? 'h-8 w-8' : 'h-5 w-5'} flex justify-center items-center rounded ${isToggle === true ? 'bg-primary' : 'border border-gray-600'} `}>
                        {isToggle && <FaCheck className={`${size == 'lg' ? 'h-6 w-6' : 'h-4 w-4'} text-white`} />}
                    </div>
                </div>
                <input
                    className="hidden"
                    type="checkbox"
                    id={trueValue}
                    name={name}
                    value={isToggle === true ? trueValue : falseValue}
                    checked={isToggle}
                />
                <label className="ml-2 w-full pointer-events-none cursor-pointer" htmlFor={trueValue}>{label}</label>
            </div>
        </div>
    )
}

export default Checkbox;
