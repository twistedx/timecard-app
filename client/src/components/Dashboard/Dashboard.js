import React from 'react'
import Navbar from '../Navbar/Navbar.js';
import UserDashboardCard from '../UserDashboardCard/UserDashboardCard.js';
import Footer from '../Footer/Footer.js';


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
                    </body>
                </main>
                <footer>
                    <Footer />
                </footer>
            
        </div>
    )
}

export default Dashboard
