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
                    <Link to="/">All</Link>
                </div>
                <div className="global__navbar--link ">
                    <Link to="/">Today's Deals</Link>
                </div>
                <div className="global__navbar--link ">
                    <Link to="/">Customer Service</Link>
                </div>
                <div className="global__navbar--link ">
                    <Link to="/">Registry</Link>
                </div>
                <div className="global__navbar--link ">
                    <Link to="/">Gift Cards</Link>
                </div>
                <div className="global__navbar--link ">
                    <Link to="/">Sell</Link>
                </div>
                <div className="global__navbar--link">
                    <Link to="/product">Add Product</Link>
                </div>
            </div>
            <div className="secondHeader__navbar">
                <div className="global__navbar--link ">
                    <Link to="/">Shop All Deals</Link>
                </div>
            </div>
        </div>
    )
}

export default SecondHeader;