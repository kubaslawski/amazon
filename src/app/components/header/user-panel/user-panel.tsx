import React, { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import "./user-panel.scss"
// ext.
import {Link} from "react-router-dom";
// components
import AButton from "../../../reusable-components/AButton/AButton";
// icons/images
import dropdown from "../../../images/dropdown-grey.png";
import close from "../../../../icons/cancel.png";
// interfaces
import {IDispatchInterface} from "../../../../interfaces/global";
// actions
import {logoutUser} from "../../../../redux/actions/user";

const UserPanel: React.FC = () => {

    const dispatch: IDispatchInterface = useDispatch();
    const user = useSelector((state: any) => state.user);

    const {first_name, last_name} = user.credentials;

    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {setOpen(prevState => !prevState)};
    const handleLogout = () => {
        dispatch(logoutUser());
    }


    return (
        <>
            <div className="global__navbar--link login-panel" onClick={handleOpen}>
                {user.authenticated ? (
                    <span>Hello {first_name} {last_name} <br/> <b>Account & List</b></span>
                ) : (
                    <span>Hello, Sign In <br/></span>
                )}

                <img className="dropdown-image" src={dropdown} alt="dropdown"/>
            </div>
            {open && (
                <div className="user-panel">
                    <img
                        className={'close-icon'}
                        src={close}
                        alt={'close'}
                        onClick={() => setOpen(false)}
                    />
                    <div className="user-panel__top">
                        {user.authenticated ? (
                            <>
                                <Link to={{pathname: '/login'}}>
                                    <AButton className='user-panel__login-button' text={'Logout'} onClick={handleLogout}/>
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link to={{pathname: '/login'}}>
                                    <AButton className='user-panel__login-button' text="Sign in"/>
                                </Link>
                                <br/>
                                <small>New customer? <Link to="/register">Start here.</Link></small>
                            </>
                        )}
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