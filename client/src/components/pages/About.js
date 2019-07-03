import React, { useEffect, useContext } from 'react'
import setAuthToken from "../../utils/setAuthToken";
import AuthContext from '../../context/auth/AuthContext';

const About = (props) => {

    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
        // eslint-disable-next-line
    }, [])


    if (localStorage.token) {
        setAuthToken(localStorage.token);
    } else {
        props.history.push('/login');
    }

    return (
        <div>
            <h1>About This App</h1>
            <p className="my-1">
                This is a full stack React App for keeping contacts
           </p>
            <p className="bg-dark p">
                <strong>Version:</strong> 1.0.0
           </p>

        </div>
    )
}

export default About
