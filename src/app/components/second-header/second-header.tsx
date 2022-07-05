import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import './second-header.scss';
import {Link} from "react-router-dom";
// images / icons
import menu from "../../images/menu-white.png";
import close from "../../../icons/close-grey.png";
// components
import LeftMenu from "../left-menu/left-menu";
// interfaces
import {IState} from "../../../redux/store";

const SecondHeader: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const authenticated = useSelector((state: IState) => state.user.authenticated);

    useEffect(() => {
        if(isOpen){
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [isOpen])

    return (
        <>
            <div className="secondHeader__container">
                <div className="secondHeader__navbar">
                    <div
                        className="global__navbar--link flex"
                        onClick={() => setIsOpen(true)}
                    >
                        <img src={menu} alt="menu" className="secondHeader__container--menu-image"/>
                        <p>All</p>
                    </div>
                    {authenticated && (
                        <div className="global__navbar--link ">
                            <Link className="link" to="/my-purchases">My Purchases</Link>
                        </div>
                    )}
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
                </div>
                <div className="secondHeader__navbar">
                    <div className="global__navbar--link ">
                        <Link className="link" to="/products">Shop All Deals</Link>
                    </div>
                </div>
            </div>
            {isOpen && (
                <>
                    <LeftMenu/>
                    <img
                        className={'left_menu__close-icon'}
                        src={close}
                        alt={'close'}
                        onClick={() => setIsOpen(false)}
                    />
                </>
            )}
        </>
    )
}

export default SecondHeader;