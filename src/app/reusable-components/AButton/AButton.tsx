import React from "react";
import './AButton.scss';

type TVariant = "filled" | "transparent"
interface IAButton {
    disabled?: boolean;
    className?: string;
    onClick?: (...args: any) => void;
    text: string;
    value?: string | number;
    variant?: TVariant
}

const AButton: React.FC<IAButton> = ({disabled, className, onClick, text, value, variant = "filled"}) => {
    const AButtonClassName = `a__button ${variant} ${className}`;
    return (
        <button className={AButtonClassName} onClick={onClick} disabled={disabled} value={value}>
            {text}
        </button>
    )
};

export default AButton;
