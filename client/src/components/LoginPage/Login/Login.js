import React from 'react';
import './Login.css';
import Navbar from '../../Layout/Navbar/Navbar.js';
import LoginForm from '../LoginForm/LoginForm.js';
import LoginPageLogo from '../LoginPageLogo/LoginPageLogo.js';
import Footer from '../../Layout/Footer/Footer.js';

const LoginPage = () => {
    return (
        [
            <div>
                <header>
                    <Navbar title="Timecard App" />
                </header>
                <main>
                    <body>
                    <LoginPageLogo />
                    <LoginForm />
                    </body>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        ]
    )
}

export default LoginPage;
