import React, {useState} from "react";
import "./ADropdown.scss";
// images
import dropdown from "../../images/dropdown-grey.png";
import ListDisplay from "./helpers/list-display/ListDisplay";

interface IADropdown {
    optionList: Array<string>;
}

const ADropdown: React.FC<IADropdown> = ({optionList}) => {

    const [open, setOpen] = useState<boolean>(false);
    const onClickOutsideListener = () => {
        setOpen(false);
        document.removeEventListener("click", onClickOutsideListener);
    }
    
    return (
        <>
            <div className="ADropdown__container" onClick={() => setOpen(!open)} onMouseLeave={() => document.addEventListener("click", onClickOutsideListener)} >
                <div className="ADropdown__dropdown-title">
                    All
                </div>
                <img src={dropdown} alt="dropdown-black"/>
            </div>
            <ListDisplay optionList={optionList} isListOpened={open}/>
        </>
    )
}

export default ADropdown;
