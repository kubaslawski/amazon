import React from "react";
import "../inputs.scss";

interface IAPhotoInput {
    label?: string;
    name: string;
    onPhotoChange: (...args: any) => void;
}

const APhotoInput: React.FC<IAPhotoInput> = ({
    label,
    name,
    onPhotoChange,
}) => {
    

    return (
        <div>
            {label && (<h5 className="a__input--label">{label}</h5>)}
            <input type="file" name={name} accept="image/jpeg, image/png, image/gif" onChange={onPhotoChange}/>
        </div>
    )
}

export default APhotoInput;