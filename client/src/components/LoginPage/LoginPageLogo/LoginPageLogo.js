import React from 'react'
import './LoginPageLogo.css';
import logo from '../../../img/timecardicon.png';
import tag from '../../../img/TitlePage.png';

const LoginPageLogo = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m12 l12 center">
                <img className="responsive-img PlaceholderImg" src = {logo} alt='' />
                </div>
            </div>
        </div>
    )
}

export default LoginPageLogo
