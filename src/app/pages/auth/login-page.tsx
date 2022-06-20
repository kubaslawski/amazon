import React, {useState} from "react";
import './auth.scss';
// ext libraries
import {Link} from "react-router-dom";
// icons
import amazonLogo from '../../../icons/amazon-logo.svg';
// components
import AInput from "../../reusable-components/inputs/AInput/AInput.";
import AButton from "../../reusable-components/AButton/AButton";
// interfaces
import {IAuth} from "../../../interfaces/users";

const LoginPage: React.FC = () => {

    const [userData, setUserData] = useState<IAuth>({
        email: '',
        password: '',
    })

    const handleChange = (event: any) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
    };


    return (
        <>
            <div className='register-page row'>
                <div className='col-4'></div>
                <div className='col-4 auth-panel__container'>
                    <div className='global__amazon--logo--container'>
                        <img
                            className="global__amazon--logo"
                            src={amazonLogo}
                            alt="amazon--logo"
                        />
                    </div>
                    <div className='auth-panel'>
                        <p className='auth-title'>
                            Sign-In
                        </p>
                        <form
                            onSubmit={handleSubmit}
                            noValidate={true}
                            className='auth-form--login'>
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
                                type='password'
                                value={userData.password}
                                variant={'transparent'}
                            />
                            <AButton
                                className='global__form--submitButton'
                                text={'Sign In'}
                                variant='transparent'
                            />
                        </form>
                    </div>
                </div>
                <div className='col-4'></div>
            </div>
            <div className='row'>
                <div className='col-4'></div>
                <div className={'col-4'}>
                    <div className={'divider'}>
                        <h5 className={'h5-dividerBreak'}>New to Amazon?</h5>
                        <Link to={'/register'}>
                            <AButton
                                className={'button-login'}
                                text={'Create your Amazon account'}
                            />
                        </Link>

                    </div>
                </div>
                <div className={'col-4'}/>
            </div>
        </>
    )
}

export default LoginPage;