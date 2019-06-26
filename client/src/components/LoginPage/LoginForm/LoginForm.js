import React, { useState } from 'react';
import AlertContext from '../../context/alert/AlertContext';

import './LoginForm.css';

const LoginForm = () => {

    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const { email, password } = user;

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventdefault();
        console.log('Login Submit');
    }

    return (
        <div className="container">

            <div className="row">
                <form className="col s12 m12 l12" id="loginForm" onSubmit={onSubmit}>

                    <div className="row">
                        <div className="input-field col s12 m6 l6 offset-m3 offset-l4">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" name="email" value={email} onChange={onChange} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12 m6 l6 offset-m3 offset-l4 center">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={password} onChange={onChange} />
                            <a id="ForgotPassword" href="#">Forgot My Password</a> |
                                <a id="CreateAccount" href="#">Create account</a>
                        </div>
                    </div>

                    <div className="row">
                        <div className="s12 m12 l12 center">
                            <input type="submit" value="Login" className="btn blue lighten-1" />
                        </div>
                    </div>

                </form>
            </div>

        </div>
    );

}



export default LoginForm;
