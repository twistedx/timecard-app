import React from 'react';
import './DropdownMenu.css';

const DropdownMenu = () => {
    return (
        <div>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="#">Account Settings</a></li>
                <li><a href="#">Logout</a></li>
            </ul>
        </div>
    )
}

export default DropdownMenu
