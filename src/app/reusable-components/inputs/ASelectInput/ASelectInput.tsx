import React from 'react';
import '../inputs.scss';
import {IOption} from "../../../../interfaces/global";

export interface IASelectInput {
    errors?: Array<string>;
    name?: string;
    onChange: (...args: any) => void;
    options: Array<IOption>;
    label: string;
}

const ASelectInput: React.FC<IASelectInput> = ({
errors, label,  name, onChange, options
}) => {

    return (
        <div className="a__select-input">
            {label && (<h5 className="a__input--label">{label}</h5>)}
            <select>
                {options.map((obj: IOption) => {
                    return (
                        <option key={obj.value} value={obj.value}>
                            {obj.label}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default ASelectInput;