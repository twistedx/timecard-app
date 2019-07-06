import React, { Fragment } from 'react';
import './DropdownMenu.css';

const DropdownMenu = props => {
    return (
        <Fragment>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>

            <ul className="sidenav" id="mobile-demo">
                <h3 className="center" id="Menu">Menu</h3>
                <hr></hr>
                <li><a href="#" className="">Account Settings</a></li>
                <li><a href="#">Logout</a></li>
            </ul>

        </Fragment>
    )
}

export default DropdownMenu
