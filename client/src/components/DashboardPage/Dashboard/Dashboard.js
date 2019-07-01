import React, { useState, useEffect } from 'react'
import Navbar from '../../Layout/Navbar/Navbar.js';
import UserDashboardCard from '../UserDashboardCard/UserDashboardCard.js';
import Footer from '../../Layout/Footer/Footer.js';
import BtnCardReveal from '../../BtnList/BtnCardReveal';
import { useHttp } from '../../Hooks/Fetch';


const Dashboard = () => {
    const loading = 'loading . . .';
    const [profile, setProfile] = useState(loading)
    const profileLoadingChecker = ( obj )  => { obj ? setProfile(obj) : setProfile(loading) };

    const [jobs, setJobs] = useState(loading)
    const jobsLoadingChecker = ( arr )  => { arr[0] ? setJobs(arr) : setJobs(loading) };

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWQwYzIzN2M5OTIzYjcwYTcwNTcxZjdlIn0sImlhdCI6MTU2MTkyNTQ2MSwiZXhwIjoxNTYxOTI5MDYxfQ.N-b7qw1wXlVXkh5vb2ukmt2jpRdJwf2u9SIf8dQ89Q8';
    let h = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    h['x-auth-token'] = token;

    //fetch user profile =============================================================================================
        let fetchedProfile = useHttp('http://localhost:5000/api/user', 'GET', '', h, []);
        const p = fetchedProfile[1];

        useEffect( () => profileLoadingChecker(p[0]), [p[0]] );
        
        const profileloading = fetchedProfile[0];


        if(profile){
            console.log(`
        
            this is fetchedprofile
            ${profile.name}
            
            `);
        }

        
        
    //fetch Job Profile ==============================================================================================
        let fetchedJobs = useHttp('http://localhost:5000/api/job', 'GET', '', h, []);
        // const jobProfile = fetchedJobs[1];
        const jobloading = fetchedJobs[0];
        const j = fetchedJobs[1];

        useEffect( () => jobsLoadingChecker(j), [j] );

        console.log(`
        
        this is jobprofile
        ${j}
        
        `);
        


    // load dom ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    return (
        <div>
            
            <header>
                <Navbar title="Dashboard">
                    
                </Navbar>
            </header>
            <main>
                <body>
                    <UserDashboardCard 
                        name= { profile === loading ? profile : profile.name }
                        email= { profile === loading ? profile : profile.email }
                        jobTitle= { profile === loading ? profile : profile.date }
                    />

                    { jobs === loading ? jobs : jobs.map( (v, i) => {
                        return <BtnCardReveal
                        key = { i }
                        title = { v.name }
                        description = { v.description }
                        role = { v.role }
                        type = { v.jobType }
                        />
                        }) 
                    }
                </body>
            </main>
            <footer>
                <Footer />
            </footer>
            
        </div>
    )
}

export default Dashboard;