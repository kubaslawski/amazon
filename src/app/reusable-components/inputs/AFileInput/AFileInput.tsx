import React, {useRef, useState} from "react";
import "../inputs.scss";
import AButton from "../../AButton/AButton";

interface IAFileInput {
    label?: string;
    name?: string;
    onFileSelectSuccess: any;
    onFileSelectError?: (...args: any) => void;
    value?: any;
}

const AFileInput: React.FC<IAFileInput> = ({
    label,
    name,
    onFileSelectSuccess,
    value
}) => {
    
    const fileInput: any = useRef(null);
    const [errors, setErrors] = useState([] as Array<string>);
    
    
    
    const handleFileInput = (event: any) => {
        setErrors([]);
        const file = event.target.files[0];
        const fileTypes = ["image/jpeg", "image/jpg", "image.png"];
        if(file.size > 2048000000) {
            onFileSelectError("Max file size is 2MB");
        }
        else if(!fileTypes.includes(file.type)){
            onFileSelectError("Wrong format, available formats are jpg, jpeg, png");
        } else onFileSelectSuccess(file);
    }
    
    const onFileSelectError = (message: string) => {
        setErrors([...errors, message]);
    };
    
    return (
        <div className="a__file-input">
            {label && (<h5 className="a__input--label">{label}</h5>)}
            <div className="file-input">
                <input
                    className="a__input--input"
                    value={value}
                    name={name}
                    type="file"
                    onChange={handleFileInput}
                    min="1"
                />
                <br/>
                <AButton text="Upload File" onClick={() => fileInput.current && fileInput.current.click()} disabled={errors.length > 0}/>
            </div>
          
            <div className="errors-container">
                {errors.map((err) => {
                    return <span className="span-error">{err}</span>
                })}
            </div>

            {/*{errors && errors.length > 0 &&*/}
            {/*errors.map((error, index: any) => {*/}
            {/*    return (*/}
            {/*        <>*/}
            {/*            <span key={index} className="span_error">*/}
            {/*                {error}*/}
            {/*            </span>*/}
            {/*            <br/>*/}
            {/*        </>*/}
            {/*    );*/}
            {/*})}*/}
        </div>
    )
}

export default AFileInput;