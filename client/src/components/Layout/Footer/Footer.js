import React from 'react';
import './Footer.css';
import quotes from './quotes';
import Clock from 'react-live-clock';

const Footer = () => {

    const selectRandom = () => {
        var random = Math.floor(Math.random() * quotes.length);
        return quotes[random];
    }

    return (


        <footer className="page-footer" id="quoteFooter">
            <div className="container">
                <div className="row mb">
                    <div className="col l12 m12 s12 center flow-text">
                        <strong><Clock format="HH:mm:ss" ticking={true} interval={1000} /></strong>
                    </div>
                </div>
                <div className="row smallScreen">
                    <div className="col l12 m12 s12 center">
                        <h6>{selectRandom()}</h6>
                    </div>
                </div>
            </div>
            <div className="footer-copyright" id="copyrightFooter">
                <div className="container center">
                    © 2019 Copyright
                    </div>
            </div>
        </footer>

    )
}

export default Footer
