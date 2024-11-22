const TextInput = ({ label, IconLeft, IconRight, InputValue, setInputValue, required }) => {

    return (
        <div className="w-full relative group">
            {IconLeft && <span className="absolute top-0 left-0 h-full w-10 flex justify-center items-center">{IconLeft}</span>}
            <input onInput={(e) => setInputValue(e.target.value)} value={InputValue} required={required} className={`${IconLeft ? 'pl-10' : 'px-3'} ${IconRight ? 'pr-10' : 'px-3'} w-full pb-1 pt-5 peer border outline-0 focus:border-primary border-gray-400 rounded`} type="text" placeholder="" />
            <label
                className={`${IconLeft ? 'left-10' : 'left-3'} absolute pointer-events-none transition-all duration-200  peer-placeholder-shown:text-gray-400 text-gray-400 peer-focus:text-primary -translate-y-1/2 peer-placeholder-shown:top-1/2 top-3 peer-focus:top-3 text-[12px] peer-focus:text-[12px] peer-placeholder-shown:text-base`}
                dangerouslySetInnerHTML={{ __html: label }}
            />
            {IconRight && <span className="absolute top-0 right-0 h-full w-10 flex justify-center items-center">{IconRight}</span>}
        </div>
    )
}

export default TextInput;
