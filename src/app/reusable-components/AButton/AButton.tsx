import React from "react";
import './AButton.scss';

type TVariant = "filled" | "transparent"
interface IAButton {
    disabled?: boolean;
    onClick?: (...args: any) => void;
    text: string;
    variant?: TVariant
}

const AButton: React.FC<IAButton> = ({disabled, onClick, text, variant = "filled"}) => {
    const AButtonClassName = `a__button ${variant}`;
    return (
        <button className={AButtonClassName} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
};

export default AButton;
