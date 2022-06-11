import React from 'react';
import '../inputs.scss';

export interface IASelectInput {
    errors?: Array<string>;
    name?: string;
    onChange: (...args: any) => void;
    label?: string;
    type?: string;
}

const ASelectInput: React.FC<IASelectInput> = ({

}) => {

    return (
        <div>

        </div>
    )
}

export default ASelectInput;