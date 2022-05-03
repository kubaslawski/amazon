import React from "react";
import './second-header.scss';
import {Link} from "react-router-dom";

const SecondHeader: React.FC = () => {
    return (
        <div className="secondHeader__container">
            <div className="secondHeader__navbar">
                <div className="secondHeader__navbar--link">
                    <Link to="/">All</Link>
                </div>
                <div className="secondHeader__navbar--link">
                    <Link to="/">Today's Deals</Link>
                </div>
                <div className="secondHeader__navbar--link">
                    <Link to="/">Customer Service</Link>
                </div>
                <div className="secondHeader__navbar--link">
                    <Link to="/">Registry</Link>
                </div>
                <div className="secondHeader__navbar--link">
                    <Link to="/">Gift Cards</Link>
                </div>
                <div className="secondHeader__navbar--link">
                    <Link to="/">Sell</Link>
                </div>
            </div>
            <div className="secondHeader__navbar">
                <div className="secondHeader__navbar--link">
                    <Link to="/">Shop All Deals</Link>
                </div>
            </div>
        </div>
    )
}

export default SecondHeader;