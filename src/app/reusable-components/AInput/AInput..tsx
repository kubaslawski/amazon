import React from "react";
import './AInput.scss';

type TValue = "string" | "number";

interface IAInput {
    errors?: Array<string>;
    name?: string;
    onChange: (...args: any) => void;
    placeholder?: string;
    type?: string;
    value: TValue;
}

const AInput: React.FC<IAInput> = ({
   errors,
   name,
   onChange,
   placeholder,
   type = "text",
   value,
}) => {
    return (
        <div className="a__input">
            <h5>{placeholder}</h5>
            <input
                className="a__input--input"
                value={value}
                name={name}
                type={type}
                onChange={onChange}
            />
            {errors && errors.length > 0 &&
            errors.map((error, index) => {
                return (
                    <>
                        <span key={index} className="span_error">
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