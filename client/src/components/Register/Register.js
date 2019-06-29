import React, { useState, useContext, useEffect } from 'react'
import AlertContext from '../../context/alert/AlertContext';
import AuthContext from '../../context/auth/AuthContext';
import { SET_ALERT } from '../../context/types';

const Register = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''

    })
    const { name, email, password, password2 } = user;

    const { setAlert } = alertContext;
    const { register, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/')
        }
        if (error === 'User already exists') {
            setAlert(error, 'danger')
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventdefault();
        if (name === '' || email === '' || password === '') {
            setAlert('Please Enter all fields', 'danger')
        } else if (password !== password2) {
            setAlert('Passwords do not match', 'danger')
        } else {

            register({
                name,
                email,
                password
            })
        }
    }

    return (
        <div className="form-container">
            <h1>Account</h1> <span className="text-primary">Register</span>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input type="name" name="name" value={name} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" value={email} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" value={password} onChange={onChange} required minLength="6" />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password2" name="password2" value={password2} onChange={onChange} required minLength="6" />
                </div>
                <input type="submit" value="Login" className="btn btn-primary btn-block" />
            </form>
        </div>
    )
}

export default Register
