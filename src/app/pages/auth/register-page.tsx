import React, {ChangeEvent, FunctionComponent, useState} from "react";
import './auth.scss';
// ext libraries
import {Link} from "react-router-dom";
// icons
import amazonLogo from '../../../icons/amazon-logo.svg';
// components
import AInput from "../../reusable-components/inputs/AInput/AInput.";
import AButton from "../../reusable-components/AButton/AButton";
// interfaces
import {ICreateUser} from "../../../interfaces/users";
// HOC
import {isLoadingHOC, IBaseLoadableComponent} from "../../HOC/IsLoadingHOC";

interface IRegisterPage extends IBaseLoadableComponent {}

const RegisterPage: FunctionComponent<IRegisterPage> = ({setLoading}) => {

    const [userData, setUserData] = useState<ICreateUser>({
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
    };


    return (
        <div className='register-page row'>
            <div className='col-4'></div>
            <div className='col-4 auth-panel__container'>
                <div className='global__amazon--logo--container'>
                    <img
                        className="global__amazon--logo"
                        src={amazonLogo}
                        alt="amazong--logo"
                    />
                </div>
                <div className='auth-panel'>
                    <p className='auth-title'>
                        Create an account
                    </p>
                    <form
                        onSubmit={handleSubmit}
                        noValidate={true}
                        className='auth-form'>
                        <AInput
                            label='Email Address'
                            name='email'
                            onChange={handleChange}
                            value={userData.email}
                            variant={'transparent'}
                        />
                        <AInput
                            label='Password'
                            name='password'
                            onChange={handleChange}
                            placeholder={'At least 6 characters'}
                            type='password'
                            value={userData.password}
                            variant={'transparent'}
                        />
                        <AInput
                            label='Confirm Password'
                            name='confirmPassword'
                            onChange={handleChange}
                            type='password'
                            value={userData.confirmPassword}
                            variant={'transparent'}
                        />
                        <AButton
                            className='global__form--submitButton'
                            text={'Create an Amazon Account'}
                            variant='transparent'
                        />
                    </form>
                    <p className='globa__afterForm--hint'>
                        Already have an account?
                        <Link to="/login">
                            <small>Log in</small>
                        </Link>
                    </p>
                </div>
            </div>
            <div className='col-4'></div>
        </div>
    )
}

export default isLoadingHOC(RegisterPage);