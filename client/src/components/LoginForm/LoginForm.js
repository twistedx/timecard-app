import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
    return (
        <div className="container">

            <div className="row">
                <form className="col s12 m12 l12">

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
                            <a id="ForgotPassword" href="#">Forgot my password</a> |
                            <a id="CreateAccount" href="#"> Create account</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="s12 m12 l12 center">
                            <a className="btn blue lighten-1" id="LoginBtn">Login</a>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    );
}

export default LoginForm;
