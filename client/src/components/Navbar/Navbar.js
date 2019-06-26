import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper blue lighten-1">
                    <a href="#!" className="brand-logo center">{props.title}</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
