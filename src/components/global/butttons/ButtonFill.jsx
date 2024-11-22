"use client";
const ButtonFill = ({ text, IconLeft, IconRight, color, size, align, shadow, handelClick, Padding, fontWeight, widthAuto, Rounded }) => {

    let BtnColor = '';
    if (color == 'danger') {
        BtnColor = 'bg-danger hover:bg-danger-active text-white shadow-danger/50 hover:shadow-danger/50 border-transparent border hover:border-danger';
    } else if (color == 'primary') {
        BtnColor = 'bg-primary hover:bg-primary-active text-white shadow-primary/50 hover:shadow-primary/50 border-transparent border hover:border-primary';
    } else if (color == 'primary-light') {
        BtnColor = 'bg-primary-light hover:bg-primary-light/80 text-white shadow-primary/50 hover:shadow-primary/50 border-transparent border hover:border-primary';
    } else if (color == 'warning') {
        BtnColor = 'bg-warning hover:bg-warning-active text-white shadow-warning/50 hover:shadow-warning/50 border-transparent border hover:border-warning';
    } else if (color == 'info') {
        BtnColor = 'bg-info hover:bg-info-active text-white shadow-info/50 hover:shadow-info/50 border-transparent border hover:border-info';
    } else if (color == 'success') {
        BtnColor = 'bg-success hover:bg-success-active text-white shadow-success/50 hover:shadow-success/50 border-transparent border hover:border-success';
    } else if (color == 'light') {
        BtnColor = 'bg-light hover:bg-light-active text-black shadow-light-active hover:shadow-light-active border-transparent border hover:border-light';
    } else if (color == 'dark') {
        BtnColor = 'bg-dark hover:bg-dark-active text-white shadow-dark/50 hover:shadow-dark/50 border-transparent border hover:border-dark';
    } else if (color == 'secondary') {
        BtnColor = 'bg-secondary hover:bg-secondary-active text-white shadow-secondary/50 hover:shadow-secondary/50 border-transparent border hover:border-secondary';
    } else if (color == 'gray') {
        BtnColor = 'bg-gray-500 hover:bg-gray-500 text-white shadow-bg-gray-500 hover:bg-gray-500 border-transparent border hover:border-secondary';
    }

    let BtnFontWeight = 'font-bold';
    if (fontWeight == 'light') {
        BtnFontWeight = 'font-light';
    } else if (fontWeight == 'normal') {
        BtnFontWeight = 'font-normal';
    } else if (fontWeight == 'medium') {
        BtnFontWeight = 'font-medium';
    } else if (fontWeight == 'semibold') {
        BtnFontWeight = 'font-semibold';
    } else if (fontWeight == 'bold') {
        BtnFontWeight = 'font-bold';
    }

    let BtnSize = `text-lg py-2 ${BtnFontWeight}`;
    if (size == 'sm') {
        BtnSize = `text-base py-2 ${BtnFontWeight}`;
    } else if (size == 'xs') {
        BtnSize = `text-xs py-2 ${BtnFontWeight}`;
    } else if (size == 'lg') {
        BtnSize = `text-xl py-3 ${BtnFontWeight}`;
    } else if (size == 'xlg') {
        BtnSize = `text-2xl py-3 ${BtnFontWeight}`;
    }

    let BtnAllign = 'justify-center';
    if (align == 'center') {
        BtnAllign = 'justify-center';
    } else if (align == 'left') {
        BtnAllign = 'justify-start';
    } else if (align == 'right') {
        BtnAllign = 'justify-end';
    }

    let BtnRounded = 'rounded';
    if (Rounded == 'full') {
        BtnRounded = 'rounded-full';
    } else if (Rounded == 'none') {
        BtnRounded = 'rounded-0';
    }

    let Width = 'w-full';
    if (widthAuto == 'sm') {
        Width = 'w-full sm:w-auto';
    } else if (widthAuto == 'md') {
        Width = 'w-full md:w-auto';
    } else if (widthAuto == 'lg') {
        Width = 'w-full lg:w-auto';
    } else if (widthAuto == 'auto') {
        Width = 'w-auto';
    }

    let BtnPadding = 'px-5';
    if (Padding == 'sm') {
        BtnPadding = 'px-3';
    } else if (Padding == 'md') {
        BtnPadding = 'px-5';
    } else if (Padding == 'lg') {
        BtnPadding = 'px-8';
    } else if (Padding == 'xl') {
        BtnPadding = 'px-10';
    } else if (Padding == '2xl') {
        BtnPadding = 'px-12';
    }


    return (
        <button className={`${BtnColor} ${BtnSize} ${shadow && 'shadow-md hover:shadow-xl'} ${BtnPadding} ease-in-out duration-500 ${BtnRounded} ${Width} flex items-center ${BtnAllign}`} onClick={handelClick}>{IconLeft && <span className="mr-1 mt-0.5">{IconLeft}</span>}<span>{text}</span>{IconRight && <span className="ml-1 mt-0.5">{IconRight}</span>}</button>
    )
}

export default ButtonFill;
