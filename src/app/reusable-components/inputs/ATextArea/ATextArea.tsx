import React from "react";
import '../inputs.scss';

interface IATextArea {
    errors?: Array<string>;
    className?: string;
    name?: string;
    onChange: (...args: any) => void;
    label?: string;
    placeholder?: string;
    value: string;
}

const ATextArea: React.FC<IATextArea> = ({
    errors,
    className,
    name,
    onChange,
    label,
    placeholder,
    value
    }) => {
    return (
        <div className={'a__textarea'}>
            {label && (<h5 className="a__input--label">{label}</h5>)}
            <textarea
                className={`a__textarea--textarea ${className}`}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            />
            {errors && errors.length > 0 &&
                errors.map((error, index) => {
                    return (
                        <>
                        <span key={index} className="span-error">
                            {error}
                        </span>
                            <br/>
                        </>
                    );
                })}
        </div>
    )
}

export default ATextArea;