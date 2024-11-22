"use client";
const ButtonOutline = ({ text, textShow, IconLeft, IconRight, color, size, align, shadow, handelClick, Padding, fontWeight, widthAuto, Rounded, customStyle }) => {

    let BtnColor = '';
    if (color == 'danger') {
        BtnColor = 'bg-white hover:text-white hover:bg-danger text-danger shadow-danger/50 hover:shadow-danger/50 border border-danger';
    } else if (color == 'primary') {
        BtnColor = 'bg-white hover:text-white hover:bg-primary text-primary shadow-primary/50 hover:shadow-primary/50 border border-primary';
    } else if (color == 'warning') {
        BtnColor = 'bg-white hover:text-white hover:bg-warning text-warning shadow-warning/50 hover:shadow-warning/50 border border-warning';
    } else if (color == 'info') {
        BtnColor = 'bg-white hover:text-white hover:bg-info text-info shadow-info/50 hover:shadow-info/50 border border-info';
    } else if (color == 'success') {
        BtnColor = 'bg-white hover:text-white hover:bg-success text-success shadow-success/50 hover:shadow-success/50 border border-success';
    } else if (color == 'light') {
        BtnColor = 'bg-white hover:text-black hover:bg-light text-black shadow-light-active hover:shadow-light-active border border-gray-300';
    } else if (color == 'dark') {
        BtnColor = 'bg-white hover:text-white hover:bg-dark text-dark shadow-dark/50 hover:shadow-dark/50 border border-dark';
    } else if (color == 'secondary') {
        BtnColor = 'bg-white hover:text-black hover:bg-secondary text-black shadow-secondary/50 hover:shadow-secondary/50 border border-secondary';
    } else {
        BtnColor = color;
    }

    let BtnFontWeight = '';
    if (customStyle == null) {
        BtnFontWeight = 'font-bold';
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
    }

    let BtnSize = '';
    if (customStyle == null) {
        BtnSize = `text-lg py-2 ${BtnFontWeight}`;
        if (size == 'sm') {
            BtnSize = `text-base py-2 ${BtnFontWeight}`;
        } else if (size == 'xs') {
            BtnSize = `text-xs py-2 ${BtnFontWeight}`;
        } else if (size == 'lg') {
            BtnSize = `text-xl py-3 ${BtnFontWeight}`;
        } else if (size == 'xlg') {
            BtnSize = `text-2xl py-3 ${BtnFontWeight}`;
        }
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

    let BtnPadding = '';
    if (customStyle == null) {
        BtnPadding = 'px-5';
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
    }

    return (
        <button className={`${customStyle} ${BtnColor} ${BtnSize} ${shadow && 'hover:shadow-xl'} ${BtnPadding} ease-in-out duration-500 ${BtnRounded} ${Width} flex items-center ${BtnAllign} `} onClick={handelClick}>{IconLeft && <span className={`${textShow != null ? `${textShow}:mr-1` : 'mr-1'} `}>{IconLeft}</span>}<span className={`${textShow && 'hidden'} ${textShow}:block`}>{text}</span>{IconRight && <span className={`${textShow != null ? `${textShow}:ml-1` : 'ml-1'} `}>{IconRight}</span>}</button>
    )
}

export default ButtonOutline;
