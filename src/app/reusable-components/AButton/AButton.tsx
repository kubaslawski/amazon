import React from "react";
import './AButton.scss';

type TVariant = "filled" | "transparent"
interface IAButton {
    onClick?: () => void;
    text: string;
    variant?: TVariant
}

const AButton: React.FC<IAButton> = ({onClick, text, variant = "filled"}) => {
    const AButtonClassName = `a__button ${variant}`;
    return (
        <button className={AButtonClassName} onClick={onClick}>
            {text}
        </button>
    )
};

export default AButton;