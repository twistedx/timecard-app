import React, { Fragment, useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/AuthContext';
import M from 'materialize-css/dist/js/materialize.min.js';
import { Link } from 'react-router-dom';
import './HomeBtn.css'





const HomeBtn = props => {

    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout, user } = authContext;

    useEffect(() => {
        M.AutoInit();
        //eslint-disable-next-line
    }, []);


    const authHome = (
        <div className="left">
            <li>
                <Link to='/edituser'>Edit Profile</Link>
            </li>
        </div>
    );


    return (

        <div>

            <div className="left nav-wrapper valign-wrapper" style = {{ marginLeft: '10px', display: props.visible ? 'block' : 'none' }}>
                <button onClick={() => window.location.href = '/'} className="btn-floating btn-medium waves-effect waves-light transparent hoverable">
                    <div className = 'valign-wrapper center'  style = {{ height: '35px', width: '40px'}}><i className="material-icons" >home</i></div>
                </button>
            </div>
        </div>

    )
}

export default HomeBtn;