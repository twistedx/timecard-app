import React, { useState, useEffect, useContext, Fragment } from 'react'
import UserDashboardCard from '../UserDashboardCard/UserDashboardCard.js';
import BtnCardReveal from '../../BtnList/BtnCardReveal';
import JobModal from '../../Modal/JobModal'
import { useHttp } from '../../Hooks/Fetch';
import AuthContext from '../../../context/auth/AuthContext';
import setAuthToken from '../../../utils/setAuthToken';
import loadingImg from '../../../img/loading.gif';
import Navbar from '../../Layout/Navbar/Navbar';



const Dashboard = (props) => {
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, []);

    if (localStorage.token) {
        setAuthToken(localStorage.token);
    } else {
        props.history.push('/login')
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
    let fetchedProfile = useHttp('/api/user', 'GET', '', h, []);
    const p = fetchedProfile[1];

    useEffect(() => profileLoadingChecker(p[0]), [p[0]]);

    const profileloading = fetchedProfile[0];


    if (profile) {
        console.log(`
        
            this is fetchedprofile
            ${profile.name}
            
            `);
    }

    const loadingTimeout = () => {
        if (j.length === 0) {
            return <h3 className="center">Please Create a Job</h3>;
        } else {
            return <img src={loadingImg} style={{ height: '200px', width: '200px', position: 'absolute', top: 'calc(50% - 100px', left: 'calc(50% - 100px' }} />;
        }
    }


    //fetch Job Profile ==============================================================================================
    let fetchedJobs = useHttp('/api/job', 'GET', '', h, []);
    const jobloading = fetchedJobs[0];
    const j = fetchedJobs[1];

    useEffect(() => jobsLoadingChecker(j), [j]);

    console.log(`
        
        this is jobprofile
        ${JSON.stringify(j)}
        
        `);



    // load dom ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    return (
        <Fragment>
            <Navbar title="Dashboard" dropdown={true} home={false} addJob = {true} token={token} />
            <main>
                

                <UserDashboardCard
                    name={profile === loading ? profile : profile.name}
                    email={profile === loading ? profile : profile.email}
                    jobTitle={profile === loading ? profile : profile.title}
                />

                {jobs === loading ? loadingTimeout() : jobs.map((v, i) => {
                    return <div className="heightSize"><BtnCardReveal
                        key={i}
                        jobId={v._id}
                        title={v.name}
                        description={v.description}
                        role={v.role}
                        type={v.jobType}
                    />
                    </div>
                })
                }
            </main>
        </Fragment>
    )

}

export default Dashboard;