import React from 'react';
import './Footer.css';
import quotes from './quotes';

const Footer = () => {

    const selectRandom = () => {
        var random = Math.floor(Math.random() * quotes.length);
        return quotes[random];
    }

    return (

        <div>
            <footer className="page-footer" id="quoteFooter">
                <div className="container">
                    <div className="row">
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
        </div>
    )
}

export default Footer
