import React, { Fragment } from 'react';
import './Login.css';
import LoginForm from '../LoginForm/LoginForm.js';
import LoginPageLogo from '../LoginPageLogo/LoginPageLogo.js';
import Navbar from '../../Layout/Navbar/Navbar'



const LoginPage = () => {
    return (
        [
            <Fragment>
                <Navbar title="Time" dropdown = { false } home = { false } />
                <main>
                    <div className="container">
                        <LoginPageLogo />
                        <LoginForm />
                    </div>
                </main>
            </Fragment>
        ]
    )
}

export default LoginPage;
