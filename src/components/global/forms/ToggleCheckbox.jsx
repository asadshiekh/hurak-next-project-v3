"use client";
import { useState } from "react";

const ToggleCheckbox = ({ size, trueValue, falseValue }) => {

    const [isToggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(previsToggle => !previsToggle);
    }

    return (
        <div className="block">
            <div className={`hover:shadow-md cursor-pointer ${size == 'lg' ? 'h-6 w-12' : 'h-5 w-10'} ${isToggle ? 'bg-primary' : 'bg-white'} overflow-hidden transition-color duration-300 ease-in-out border border-gray-400 rounded-full relative`} onClick={handleToggle}>
                <div className={`absolute h-[90%] w-full transition-all duration-300 ease-in-out rounded-[45%] ${isToggle ? size == 'lg' ? 'bg-white translate-x-7' : 'bg-white translate-x-6' : size == 'lg' ? 'bg-gray-300 -translate-x-7' : 'bg-gray-300 -translate-x-6'}  top-1/2 -translate-y-1/2`}></div>
                <div className={`absolute h-full w-full transition-border duration-300 ease-in-out rounded-full border-4 ${isToggle ? 'border-primary' : 'border-white'}`}></div>
                <input type="checkbox" className="hidden" value={isToggle === true ? trueValue : falseValue} />
            </div>
        </div>
    )
}

export default ToggleCheckbox;
