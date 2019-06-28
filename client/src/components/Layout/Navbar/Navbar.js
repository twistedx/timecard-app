import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
    return (


        <nav className="nav-wrapper blue lighten-1">
            <a href="#!" className="brand-logo center">{props.title}</a>
        </nav>


    )
}

export default Navbar;
