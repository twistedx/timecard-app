import React, { Fragment, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/auth/AuthContext';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import DropDownMenu from '../../Layout/DropdownMenu/DropdownMenu.js';
import './Navbar.css';
import HomeBtn from '../HomeBtn/HomeBtn';


const Navbar = (props) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout, user } = authContext;

    useEffect(() => {
        M.AutoInit();
        //eslint-disable-next-line
    }, []);

    const onLogout = () => {
        logout();
    };

    return (

        <Fragment>

            <style>
                @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400i&display=swap');
            </style>

            <nav className="nav-wrapper Nav">

                <div>
                    <a href="#!" className="brand-logo center" id="navTitle"> {isAuthenticated ? props.title : props.appName} </a>
                </div>
                <div>
                    <DropDownMenu visible = { props.dropdown ? true : false }/>
                    <HomeBtn visible = { props.home ? true : false } />

                </div>
            </nav>
        </Fragment>

    )
}

Navbar.propTypes = {
    appName: PropTypes.string.isRequired

};

Navbar.defaultProps = {
    appName: 'Time'
};

export default Navbar;