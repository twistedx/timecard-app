import React from 'react';
import quotes from './quotes';

const Footer = () => {

    const selectRandom = () => {
        var random = Math.floor(Math.random() * quotes.length);
        return quotes[random];
    }

    return (

        <div>
            <footer className="page-footer blue lighten-1">
                <div className="container">
                    <div className="row">
                        <div className="col l12 m12 s12 center">
                            <h6 className="white-text">{selectRandom()}</h6>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container center">
                        © 2019 Copyright
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
