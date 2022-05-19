import React, {useState} from "react";
import "./ASearchBar.scss";
import AInput from "../inputs/AInput/AInput.";
import searchIcon from "../../images/search-black.png";

interface IASearchBar {
    value: string;
    onInputChange: (...args: any) => void;
}

const ASearchBar: React.FC<IASearchBar> = ({value, onInputChange}) => {
    
    
    return (
        <div className="ASearchBar__container">
            <AInput onChange={onInputChange} value={value}/>
            <div className="searchIcon__container">
                <img src={searchIcon} alt="search-icon"/>
            </div>
        </div>
    )
}

export default ASearchBar;