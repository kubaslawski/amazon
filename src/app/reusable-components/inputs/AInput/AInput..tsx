import React from "react";
import '../inputs.scss';

export interface IAInput {
    errors?: Array<string>;
    name?: string;
    onChange: (...args: any) => void;
    label?: string;
    placeholder?: string;
    type?: string;
    value: any;
    variant?: 'normal' | 'transparent';
}

const AInput: React.FC<IAInput> = ({
   errors,
   name,
   onChange,
   label,
   placeholder,
   type = "text",
   value,
   variant='normal'
}) => {
    return (
        <div className="a__input">
            {label && (<h5 className="a__input--label">{label}</h5>)}
            <input
                className={`a__input--input ${variant}-input`}
                value={value}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                min="1"
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
    );
};

export default AInput;