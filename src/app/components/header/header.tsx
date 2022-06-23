import React, {useEffect, useState} from "react";
import './header.scss';
import "../../../scss/global.scss";
// components
import {Link} from "react-router-dom";
// images
import location from "../../images/location-white.png";
import dropdown from "../../images/dropdown-grey.png";
import polishFlag from "../../images/flags/poland.png";
import cart from "../../images/shopping-cart-white.png";
// components
import ASearchBar from "../../reusable-components/ASearchBar/ASearchBar";
import ADropdown from "../../reusable-components/ADropdown/ADropdown";
import UserPanel from "./user-panel/user-panel";


const optionList = ["option1", "option2", "option3", "option4"];

const Header = () => {

    const [searchInputValue, setSearchInputValue] = useState<string>("");
    const onSearchInputChange = (event: any) => {
        setSearchInputValue(event.target.value);
    };

    const [itemCount, setItemCount] = useState(0);


    useEffect(() => {

    }, []);

    return (
        <div className="header__container">
            <div className="left-panel">
                <div>
                    <Link to="/">
                        <img
                            className="global__amazon--logo"
                            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                            alt="amazong--logo"/>
                    </Link>
                </div>
                <div className="global__navbar--link flex">
                    <div className="image__container">
                        <img src={location} alt="location-white"/>
                    </div>
                    <div>
                        <span>Deliver to <br/> <b>Poland</b></span>
                    </div>
                </div>
                <div className="header__container--searchBar">
                    <ADropdown optionList={optionList}/>
                    <ASearchBar value={searchInputValue} onInputChange={onSearchInputChange}/>
                </div>
            </div>
            <div className="right-panel">
                <div className="header__container--languagePanel">
                    <img className="flag-image" src={polishFlag} alt="your country"/>
                    <img className="dropdown-image" src={dropdown} alt="dropdown"/>
                </div>
                
                <UserPanel/>
                
                
                <div className="global__navbar--link flex">
                    <span>Returns <br/> <b>& Orders</b> </span>
                </div>

                    <div className="global__navbar--link flex basket-panel">
                        <Link to={'/basket'}>
                            <span className="basket-items"><b>{itemCount}</b></span>
                            <img className="basket" src={cart} alt="your basket"/>
                            <span className="basket-panel__span"><b>Cart</b></span>
                        </Link>
                    </div>

            </div>
        
        
        </div>
    )
}

export default Header;