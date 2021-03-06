import React from 'react';
import '../inputs.scss';
import {IOption} from "../../../../interfaces/global";

export interface IASelectInput {
    errors?: Array<string>;
    label: string;
    name?: string;
    onChange: (...args: any) => void;
    options: Array<IOption>;
    value?: string | number;
}

const ASelectInput: React.FC<IASelectInput> = ({
    errors,
    label,
    name,
    onChange,
    options,
    value
}) => {

    return (
        <div className="a__select-input">
            {label && (<h5 className="a__input--label">{label}</h5>)}
            <select name={name} onChange={onChange} value={value}>
                {options.map((obj: IOption) => {
                    return (
                        <option key={obj.value} value={obj.value}>
                            {obj.label}
                        </option>
                    )
                })}
            </select>
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

export default ASelectInput;