import React from "react";
import '../inputs.scss';

export interface IAInput {
    errors?: Array<string>;
    name?: string;
    onChange: (...args: any) => void;
    label?: string;
    type?: string;
    value: any;
}

const AInput: React.FC<IAInput> = ({
   errors,
   name,
   onChange,
   label,
   type = "text",
   value,
}) => {
    return (
        <div className="a__input">
            {label && (<h5 className="a__input--label">{label}</h5>)}
            <input
                className="a__input--input"
                value={value}
                name={name}
                type={type}
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