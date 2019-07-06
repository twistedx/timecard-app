import React, { Fragment } from 'react';
import './Login.css';
import LoginForm from '../LoginForm/LoginForm.js';
import LoginPageLogo from '../LoginPageLogo/LoginPageLogo.js';



const LoginPage = () => {
    return (
        [
            <Fragment>
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
