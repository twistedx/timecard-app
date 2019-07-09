import React, { useState, useEffect, useContext } from 'react'
import UserDashboardCard from '../UserDashboardCard/UserDashboardCard.js';
import BtnCardReveal from '../../BtnList/BtnCardReveal';
import JobModal from '../../Modal/JobModal'
import { useHttp } from '../../Hooks/Fetch';
import AuthContext from '../../../context/auth/AuthContext';
import setAuthToken from '../../../utils/setAuthToken';
import loadingImg from '../../../img/loading.gif';
import { inherits } from 'util';

const Dashboard = (props) => {

    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        authContext.setAppName("Dashboard");
        // eslint-disable-next-line
    }, [])


    if (localStorage.token) {
        setAuthToken(localStorage.token);
    } else {
        props.history.push('/login');
    }


    console.log(`
    this is the token:
    ${authContext.token}
    
    `)


    // const loading = 'loading . . .';
    const loading = 'loading . . .';
    const [profile, setProfile] = useState(loading)
    const profileLoadingChecker = (obj) => { obj ? setProfile(obj) : setProfile(loading) };

    const [jobs, setJobs] = useState(loading)
    const jobsLoadingChecker = (arr) => { arr[0] ? setJobs(arr) : setJobs(loading) };

    const token = authContext.token;
    let h = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    h['x-auth-token'] = token;

    //fetch user profile =============================================================================================
    let fetchedProfile = useHttp('http://localhost:5000/api/user', 'GET', '', h, []);
    const p = fetchedProfile[1];

    useEffect(() => profileLoadingChecker(p[0]), [p[0]]);

    const profileloading = fetchedProfile[0];


    if (profile) {
        console.log(`
        
            this is fetchedprofile
            ${profile.name}
            
            `);
    }



    //fetch Job Profile ==============================================================================================
    let fetchedJobs = useHttp('http://localhost:5000/api/job', 'GET', '', h, []);
    const jobloading = fetchedJobs[0];
    const j = fetchedJobs[1];

    useEffect(() => jobsLoadingChecker(j), [j]);

    console.log(`
        
        this is jobprofile
        ${JSON.stringify(j)}
        
        `);



    // load dom ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    return (
        <div>

            <main>
                <body>
                    <UserDashboardCard
                        name={profile === loading ? profile : profile.name}
                        email={profile === loading ? profile : profile.email}
                        jobTitle={profile === loading ? profile : profile.title}
                    />
                    <JobModal token={token} />
                    {jobs === loading ? <img src={loadingImg} style={{ height: '200px', width: '200px', position: 'absolute', top: 'calc(50% - 100px', left: 'calc(50% - 100px' }} /> : jobs.map((v, i) => {
                        return <BtnCardReveal
                            key={i}
                            jobId={v._id}
                            title={v.name}
                            description={v.description}
                            role={v.role}
                            type={v.jobType}
                        />
                    })
                    }
                </body>
            </main>
        </div>
    )
}

export default Dashboard;