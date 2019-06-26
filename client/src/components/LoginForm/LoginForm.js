import React, { useContext } from 'react';
import AuthContext from '../../'
import './LoginForm.css';

const LoginForm = () => {

    const handleLogin = e => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        console.log(email, password);

        resetLoginForm();

        alert("Clicked and form reset");

    }

    const resetLoginForm = () => {
        const email = document.getElementById("email");
        const password = document.getElementById("password");

        email.value = "";
        password.value = "";
    }

    return (
        <div className="container">

            <div className="row">
                <form className="col s12 m12 l12" id="loginForm">

                    <div className="row">
                        <div className="input-field col s12 m6 l6 offset-m3 offset-l4">
                            <input id="email" type="email" className="validate" />
                            <label for="email">Email</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12 m6 l6 offset-m3 offset-l4 center">
                            <input id="password" type="password" className="validate" />
                            <label for="password">Password</label>
                            <a id="ForgotPassword" href="#">Forgot My Password</a> |
                                <a id="CreateAccount" href="#">Create account</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="s12 m12 l12 center">
                            <a onClick={handleLogin} className="btn blue lighten-1" id="LoginBtn">Login</a>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    );

}



export default LoginForm;
