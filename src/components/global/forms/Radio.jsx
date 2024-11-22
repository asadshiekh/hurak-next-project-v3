"use client";
const Radio = ({ label, name, size, RadioValue, selectedRadioValue, setSelectedRadioValue }) => {

    return (
        <div className="block">
            <div className="inline-flex items-start cursor-pointer" onClick={() => setSelectedRadioValue(RadioValue)}>
                <div className="block mt-1 w-auto">
                    <div className={`${size == 'lg' ? 'h-5 w-5' : 'h-4 w-4'}  rounded-full ${selectedRadioValue == RadioValue ? 'border-[5px] border-primary' : 'border border-gray-600'} `}></div>
                </div>
                <input
                    className="hidden"
                    type="radio"
                    id={RadioValue}
                    name={name}
                    value={RadioValue}
                    checked={selectedRadioValue == RadioValue}
                />
                <label className="ml-2 w-full cursor-pointer" htmlFor={RadioValue}>{label}</label>
            </div>
        </div>
    )
}

export default Radio;
