import React, { useState } from "react";
import "./user-panel.scss"
import AButton from "../../../reusable-components/AButton/AButton";
import {Link} from "react-router-dom";
import dropdown from "../../../images/dropdown-grey.png";

const UserPanel: React.FC = () => {
    
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => {setOpen(!open)};
    
    return (
        <>
            <div className="global__navbar--link login-panel" onClick={handleOpen}>
                <span>Hello, Sign In <br/> <b>Account & List</b></span>
                <img className="dropdown-image" src={dropdown} alt="dropdown"/>
            </div>
            {open && (
                <div className="user-panel">
                    <div className="user-panel__top">
                        <AButton text="Sign in"/>
                        <br/>
                        <small>New customer? <Link to="/">Start here.</Link></small>
                    </div>
                    <div className="user-panel__bottom">
                        <div className="user-panel__left">
                            <p className="global-p__title">Your Lists</p>
                            <p className="global-p__common">Create a List</p>
                            <p className="global-p__common">Find a List or Registry</p>
                            <p className="global-p__common">AmazonSmile Charity Lists</p>
                        </div>
                        <div className="user-panel__right">
                            <p className="global-p__title">Your Account</p>
                            <p className="global-p__common">Orders</p>
                            <p className="global-p__common">Recommendations</p>
                            <p className="global-p__common">Browsing History</p>
                            <p className="global-p__common">Watchlist</p>
                            <p className="global-p__common">Video Purchases & Rentails</p>
                            <p className="global-p__common">Kindle Unlimited</p>
                            <p className="global-p__common">Content & Devices</p>
                            <p className="global-p__common">Subscribe & Save Items</p>
                            <p className="global-p__common">Memberships & Subscriptions</p>
                            <p className="global-p__common">Music Library</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default UserPanel;