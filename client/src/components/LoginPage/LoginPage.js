import React from 'react';
import './LoginPage.css';
import Navbar from '../Navbar/Navbar.js';
import LoginForm from '../LoginForm/LoginForm.js';
import LoginPageLogo from '../LoginPageLogo/LoginPageLogo.js';
import Footer from '../Footer/Footer.js';

const LoginPage = () => {
    return (
        [
            <div>
                <header>
                    <Navbar />
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
