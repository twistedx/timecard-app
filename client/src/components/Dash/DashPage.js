import React from 'react';
import Navbar from '../Navbar/Navbar.js';
import BtnList from './btnlist.js';
import Footer from '../Footer/Footer.js';

const DashPage = () => {
    return (
        [
            <div>
                <header>
                    <Navbar />
                </header>
                <main>
                    <body>
                    <BtnList />
                    </body>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        ]
    )
}

export default DashPage;
