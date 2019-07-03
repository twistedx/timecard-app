import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/auth/AuthContext';
import PropTypes from 'prop-types';
import './Navbar.css';
import Register from '../../Register/Register';
import LoginForm from '../../LoginPage/LoginForm/LoginForm';

const Navbar = (props) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout, user, appName } = authContext;

    const onLogout = () => {
        logout();
    };

    const authLinks = (
        <div className="right">
            <li>Hello {user && user.name}</li>
            <li>
                <a onClick={onLogout} href='#!'>
                    <span>Logout</span>
                </a>
            </li>
        </div>
    );

    const guestLinks = (
        <Fragment>
            <div className="right">
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </div>
        </Fragment>
    );





    return (

        <nav className="nav-wrapper blue lighten-1">
            <a href="#!" className="brand-logo center"> {isAuthenticated ? "Dashboard" : props.appName} </a>
            <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
        </nav>


    )
}
Navbar.propTypes = {
    appName: PropTypes.string.isRequired

};

Navbar.defaultProps = {
    appName: 'TimeCardApp'
};

export default Navbar;
