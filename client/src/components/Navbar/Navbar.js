import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper cyan lighten-1">
                    <a href="#!" className="brand-logo center">Timecard App</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="sass.html">Sass</a></li>
                        <li><a href="badges.html">Components</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
            </ul>
        </div>
    )
}

export default Navbar;
