import React from 'react'
import Navbar from '../../Layout/Navbar/Navbar.js';
import UserDashboardCard from '../UserDashboardCard/UserDashboardCard.js';
import Footer from '../../Layout/Footer/Footer.js';
import BtnCardReveal from '../../BtnList/BtnCardReveal';


const Dashboard = () => {
    return (
        <div>
            
                <header>
                    <Navbar title="Dashboard">
                        
                    </Navbar>
                </header>
                <main>
                    <body>
                        <UserDashboardCard 
                            name="Rambo"
                            email="Rambo@rambo.com"
                            jobTitle="Test"    
                        />
                        <BtnCardReveal 
                            title = 'TEST JOB TITLE BLAH BLAH'
                            description = 'This is a test job description'
                            role = 'this is a test role'
                            type = 'this is a test job type'
                        />
                    </body>
                </main>
                <footer>
                    <Footer />
                </footer>
            
        </div>
    )
}

export default Dashboard;