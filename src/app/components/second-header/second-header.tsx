import React from "react";
import './second-header.scss';
import {Link} from "react-router-dom";
// images
import menu from "../../images/menu-white.png";

const SecondHeader: React.FC = () => {
    return (
        <div className="secondHeader__container">
            <div className="secondHeader__navbar">
                <div className="global__navbar--link">
                    <img src={menu} alt="menu" className="secondHeader__container--menu-image"/>
                    <Link className="link" to="/">All</Link>
                </div>
                <div className="global__navbar--link ">
                    <Link className="link" to="/">Today's Deals</Link>
                </div>
                <div className="global__navbar--link ">
                    <Link className="link" to="/">Customer Service</Link>
                </div>
                <div className="global__navbar--link ">
                    <Link className="link" to="/">Registry</Link>
                </div>
                <div className="global__navbar--link ">
                    <Link className="link" to="/">Gift Cards</Link>
                </div>
                <div className="global__navbar--link ">
                    <Link className="link" to="/">Sell</Link>
                </div>
                <div className="global__navbar--link">
                    <Link className="link" to="/add-product">Add Product</Link>
                </div>
            </div>
            <div className="secondHeader__navbar">
                <div className="global__navbar--link ">
                    <Link className="link" to="/products">Shop All Deals</Link>
                </div>
            </div>
        </div>
    )
}

export default SecondHeader;