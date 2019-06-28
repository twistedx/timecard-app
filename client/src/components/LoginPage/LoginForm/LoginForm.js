import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';

class LoginForm extends Component {
    
    handleLogin = e => {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        console.log(email, password);

        this.resetLoginForm();

        alert("Clicked and form reset");

    }

    resetLoginForm() {
        const email = document.getElementById("email");
        const password = document.getElementById("password");

        email.value = "";
        password.value = "";
    }

    render() {

        return (
            <div className="container">
    
                <div className="row">
                    <form className="col s12 m12 l12" id="loginForm">
                        <input id="email" type="email" className="validate" />
                        <label for="email">Email</label>
                        <input id="password" type="password" className="validate" />
                        <label for="password">Password</label>
                        <div>
                            <Link id="ForgotPassword" to="/forgotmypassword">Forgot My Password</Link> | <Link id="CreateAccount" to="/createaccount">Create account</Link>
                        </div>
                        <Link onClick={this.handleLogin.bind(this)} to="" className="btn blue lighten-1" id="LoginBtn">Login</Link>
                    </form>
                </div>
    
            </div>
        );

    }

}

export default LoginForm;