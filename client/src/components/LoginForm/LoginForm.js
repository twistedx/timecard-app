import React, { Component } from 'react';
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
                            <a id="ForgotPassword" href="#">Forgot My Password</a> | <a id="CreateAccount" href="#">Create account</a>
                        </div>
                        <a onClick={this.handleLogin.bind(this)} className="btn blue lighten-1" id="LoginBtn">Login</a>
                    </form>
                </div>
    
            </div>
        );

    }

}

export default LoginForm;
