import React, { useContext, useEffect } from 'react'
import Navbar from '../../Layout/Navbar/Navbar.js';
import UserDashboardCard from '../UserDashboardCard/UserDashboardCard.js';
import BtnCardReveal from '../../BtnList/BtnCardReveal';
import AuthContext from '../../../context/auth/AuthContext';
import setAuthToken from '../../../utils/setAuthToken';

const Dashboard = (props) => {

    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
    }, [])


    if (localStorage.token) {
        setAuthToken(localStorage.token);
    } else {
        props.history.push('/login');
    }


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
                        title='TEST JOB TITLE BLAH BLAH'
                        description='This is a test job description'
                        role='this is a test role'
                        type='this is a test job type'
                    />
                    <BtnCardReveal
                        title='TEST JOB TITLE BLAH BLAH'
                        description='This is a test job description'
                        role='this is a test role'
                        type='this is a test job type'
                    />
                    <BtnCardReveal
                        title='TEST JOB TITLE BLAH BLAH'
                        description='This is a test job description'
                        role='this is a test role'
                        type='this is a test job type'
                    />
                    <BtnCardReveal
                        title='TEST JOB TITLE BLAH BLAH'
                        description='This is a test job description'
                        role='this is a test role'
                        type='this is a test job type'
                    />
                </body>
            </main>
        </div>
    )
}

export default Dashboard;