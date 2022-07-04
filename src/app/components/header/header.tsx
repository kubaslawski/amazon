import React, {ChangeEvent, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import './header.scss';
// ext
import {Link} from "react-router-dom";
import axios from "axios";
// images
import location from "../../images/location-white.png";
import dropdown from "../../images/dropdown-grey.png";
import polishFlag from "../../images/flags/poland.png";
import cart from "../../images/shopping-cart-white.png";
// components
import ASearchBar from "../../reusable-components/ASearchBar/ASearchBar";
import ADropdown from "../../reusable-components/ADropdown/ADropdown";
import UserPanel from "./user-panel/user-panel";
import SearchResult from "../search-result/search-result";
// interfaces
import {IProduct} from "../../../interfaces/products";
import {keyboardKey} from "../../variables";
import {IState} from "../../../redux/store";


const optionList = ["products"];

const Header = () => {

    const [searchInputValue, setSearchInputValue] = useState<string>("");
    const [searchResults, setSearchResults] = useState([]);

    const address = useSelector((state: IState) => state.user.credentials.address);
    const basket_count = useSelector((state: IState) => state.user.credentials.basket_count)

    const onSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchInputValue(event.target.value);
    };

    const searchItems = async () => {
        await axios.get(`search/products/?q=${searchInputValue}`)
            .then((res) => {
                setSearchResults(res.data);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        if(searchInputValue.length > 0){
            searchItems();
        } else {
            setSearchResults([]);
        }
    }, [searchInputValue]);

    useEffect(() =>{
        document.addEventListener("keyup", escHandler, false);
        return () => {
            document.removeEventListener('keyup', escHandler, false)
        }
    }, []);

    const escHandler = (event: KeyboardEvent) => {
        if(event.key === keyboardKey.escape){
            setSearchResults([]);
            setSearchInputValue('');
        }
    }

    return (
        <>
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
                            {address?.country && (
                                <span>Deliver to <br/> <b>{address.country}</b></span>
                            )}
                        </div>
                    </div>
                    <div className="header__container--searchBar">
                        <ADropdown optionList={optionList} initialOption={optionList[0]}/>
                        <ASearchBar value={searchInputValue} onInputChange={onSearchInputChange}/>
                        {searchResults.length > 0 && (
                            <div className={'search-results'}>
                                {searchResults.map((obj: IProduct) => {
                                    return (
                                        <SearchResult key={obj.id} product={obj}/>
                                    )
                                })}
                            </div>
                        )}
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
                                <span className="basket-items"><b>{basket_count}</b></span>
                                <img className="basket" src={cart} alt="your basket"/>
                                <span className="basket-panel__span"><b>Cart</b></span>
                            </Link>
                        </div>
                </div>
            </div>

        </>
    )
}

export default Header;