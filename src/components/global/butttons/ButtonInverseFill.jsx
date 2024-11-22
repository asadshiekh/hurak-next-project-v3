"use client";
const ButtonInverseFill = ({ text, IconLeft, IconRight, color, size, align, shadow, handelClick, Padding, fontWeight, widthAuto, Rounded }) => {

    let BtnColor = '';
    if (color == 'danger') {
        BtnColor = 'bg-danger hover:bg-transparent text-white hover:text-danger shadow-danger/50 hover:shadow-danger/50 border-transparent border hover:border-danger';
    } else if (color == 'primary') {
        BtnColor = 'bg-primary hover:bg-transparent text-white hover:text-primary shadow-primary/50 hover:shadow-primary/50 border-transparent border hover:border-primary';
    } else if (color == 'primary-light') {
        BtnColor = 'bg-primary-light hover:bg-transparent text-white hover:text-primary-light shadow-primary/50 hover:shadow-primary/50 border-transparent border hover:border-primary';
    } else if (color == 'warning') {
        BtnColor = 'bg-warning hover:bg-transparent text-white hover:text-warning shadow-warning/50 hover:shadow-warning/50 border-transparent border hover:border-warning';
    } else if (color == 'info') {
        BtnColor = 'bg-info hover:bg-transparent text-white hover:text-info shadow-info/50 hover:shadow-info/50 border-transparent border hover:border-info';
    } else if (color == 'success') {
        BtnColor = 'bg-success hover:bg-transparent text-white hover:text-success shadow-success/50 hover:shadow-success/50 border-transparent border hover:border-success';
    } else if (color == 'light') {
        BtnColor = 'bg-light hover:bg-transparent text-black shadow-light-active hover:shadow-light-active border-transparent border hover:border-light-active';
    } else if (color == 'dark') {
        BtnColor = 'bg-dark hover:bg-transparent text-white hover:text-dark shadow-dark/50 hover:shadow-dark/50 border-transparent border hover:border-dark';
    } else if (color == 'secondary') {
        BtnColor = 'bg-secondary hover:bg-transparent text-white hover:text-secondary shadow-secondary/50 hover:shadow-secondary/50 border-transparent border hover:border-secondary';
    } else if (color == 'gray') {
        BtnColor = 'bg-gray-500 hover:bg-transparent text-white hover:text-gray-500 shadow-bg-gray-500 hover:bg-gray-500 border-transparent border hover:border-secondary';
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

export default ButtonInverseFill;
