import React, { Fragment, useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/AuthContext';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom';
import './DropdownMenu.css';

const DropdownMenu = props => {

    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout, user } = authContext;

    useEffect(() => {
        M.AutoInit();
        //eslint-disable-next-line
    }, []);

    const onLogout = () => {
        logout();
    };

    const authLinks = (
        <div className="right">
            <li>
                <Link to='/edituser'>Edit Profile</Link>
            </li>
            <li className="divider"></li>
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
                <li className="divider"></li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </div>
        </Fragment>
    );

    return (

        <div>
            <style>
                @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap');
            </style>

            <ul id="dropdown1" className="dropdown-content">
                {isAuthenticated ? authLinks : guestLinks}
            </ul>

            <div className="nav-wrapper" style={{ display: props.visible ? 'block' : 'none' }}>
                <ul className="right">
                    <li><a className="dropdown-trigger" href="#!" data-target="dropdown1"><i className="material-icons right">menu</i></a></li>
                </ul>
            </div>
        </div>

    )
}

export default DropdownMenu
