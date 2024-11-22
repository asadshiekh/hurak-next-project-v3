// Example Code
// const Options = [
//     { selected:true ,disabled:true, text: 'Mr', value: 'Mr' },
//     { text: 'Mrs', value: 'Mrs' },
//     { text: 'Ms.', value: 'Ms.' }
// ];
// <SelectField options={Options} setSelectValue={setSelectValue} required={true} /> 

import { GoChevronDown } from "react-icons/go";

const SelectField = ({ options, required, SelectValue, setSelectValue }) => {

    return (
        <div className="relative">
            <select onChange={(e) => setSelectValue(e.target.value)} value={SelectValue} required={required} className="w-full border text-gray-900 border-gray-400 rounded p-3 outline-primary">
                {options && options.map((item) => (
                    <option
                        key={item.value}
                        value={item.value}
                        selected={item.selected}
                        disabled={item.disabled}
                    >
                        {item.text}
                    </option>
                ))}
            </select >
            <GoChevronDown className="h-5 w-5 absolute inset-y-0 right-1 top-1/2 -translate-y-1/2 bg-white flex justify-center items-center text-gray-500 pointer-events-none" />
        </div>
    )
}

export default SelectField;
