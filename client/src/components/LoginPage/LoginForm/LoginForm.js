import React, { useState, useContext } from 'react';
import AuthContext from '../../../context/auth/AuthContext';
import { Link, withRouter } from 'react-router-dom';
import setAuthToken from '../../../utils/setAuthToken';

const LoginForm = props => {

    const authContext = useContext(AuthContext);

    const { login } = authContext;

    if (localStorage.token) {
        setAuthToken(localStorage.token);
        props.history.push('/');
    }


    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        login({
            email,
            password
        });

    };

    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-primary'>Login</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='email'>Email Address</label>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                        required
                    />
                </div>
                <input
                    type='submit'
                    value='Login'
                    className='btn btn-primary btn-block'
                />
            </form>
            <Link id="ForgotPassword" to="/forgotmypassword">Forgot My Password</Link> | <Link id="CreateAccount" to="/createaccount">Create account</Link>
        </div>
    );
};

export default withRouter(LoginForm);


