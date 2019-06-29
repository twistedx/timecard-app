import React, { useEffect } from 'react'
import Navbar from '../../Layout/Navbar/Navbar.js';
import UserDashboardCard from '../UserDashboardCard/UserDashboardCard.js';
import Footer from '../../Layout/Footer/Footer.js';
import BtnCardReveal from '../../BtnList/BtnCardReveal';
import { useHttp } from '../../Hooks/Fetch';


const Dashboard = () => {


    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWQwYzIzN2M5OTIzYjcwYTcwNTcxZjdlIn0sImlhdCI6MTU2MTg0Mjk4MywiZXhwIjoxNTYxODQ2NTgzfQ.-Kt7TjzthaMsbjlQqvtBOKEZ07o8qQbEgOH2wq5xRwM';
    let h = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    h['x-auth-token'] = token;

    //fetch user profile =============================================================================================
        let fetchedProfile = useHttp('http://localhost:5000/api/user', 'GET', '', h, []);
        const profile = fetchedProfile[1];
        const profileloading = fetchedProfile[0];
        
        
    //fetch Job Profile ==============================================================================================
        let fetchedJobs = useHttp('http://localhost:5000/api/job', 'GET', '', h, []);
        const jobProfile = fetchedJobs[1];
        const jobloading = fetchedJobs[0];

    return (
        <div>
            
            <header>
                <Navbar title="Dashboard">
                    
                </Navbar>
            </header>
            <main>
                <body>
                    <UserDashboardCard 
                        name= {profile.name}
                        email= {profile.email}
                        jobTitle= {profile.date}
                    />
                    <BtnCardReveal 
                        title = {jobProfile.name}
                        description = 'This is a test job description'
                        role = 'this is a test role'
                        type = 'this is a test job type'
                    />
                                            <BtnCardReveal 
                        title = 'TEST JOB TITLE BLAH BLAH'
                        description = 'This is a test job description'
                        role = 'this is a test role'
                        type = 'this is a test job type'
                    />
                                            <BtnCardReveal 
                        title = 'TEST JOB TITLE BLAH BLAH'
                        description = 'This is a test job description'
                        role = 'this is a test role'
                        type = 'this is a test job type'
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