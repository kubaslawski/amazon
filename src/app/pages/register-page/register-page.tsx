import React, {useState} from "react";
import './register-page.scss';
// ext libraries
import {Link} from "react-router-dom";
// icons
import amazonLogo from '../../../icons/amazon-logo.svg';
// components
import AInput from "../../reusable-components/inputs/AInput/AInput.";
import AButton from "../../reusable-components/AButton/AButton";


const RegisterPage: React.FC = () => {

    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })


    const handleChange = (event: any) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    };

    return (
        <div className='register-page row'>
            <div className='col-4'></div>
            <div className='col-4 register-panel__container'>
                <div className='global__amazon--logo--container'>
                    <img
                        className="global__amazon--logo"
                        src={amazonLogo}
                        alt="amazong--logo"
                    />
                </div>
                <div className='register-panel'>
                    <p className='register-title'>
                        Create an account
                    </p>
                    <form className='register-form'>
                        <AInput
                            label='Username'
                            name='username'
                            onChange={handleChange}
                            placeholder='Your username'
                            value={userData.username}
                            variant={'transparent'}
                        />
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
                            value={userData.password}
                            variant={'transparent'}
                        />
                        <AInput
                            label='Confirm Password'
                            name='confirmPassword'
                            onChange={handleChange}
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

export default RegisterPage;