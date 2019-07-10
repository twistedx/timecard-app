import React, { useState, useEffect, useContext } from 'react'
import './BtnCardReveal.css';
import { useHttp } from '../Hooks/Fetch';
import AuthContext from '../../context/auth/AuthContext';
import setAuthToken from '../../utils/setAuthToken';
import EditBtn from './EditBtn';

const BtnCardReveal = (props) => {
    //set auth=========================================================================
    const authContext = useContext(AuthContext);

    useEffect(() => {
        authContext.loadUser();
    }, [])

    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    const token = authContext.token;
    let h = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    h['x-auth-token'] = token;

    // let result = useHttp('http://localhost:5000/api/job', 'POST', '', h, []);

    const timeNow = () => {
        var temp = Date.now();
        console.log(temp);
    }

    const initialState = []

    const [cardHeight, setCardHeight] = useState();
    const [btnValues, setBtnValues] = useState(['Clock In']);

    const btnSetter = (state, jid) => {
        // eslint-disable-next-line
        switch (state) {
            case 'Clock In':
                console.log('this is the jid', jid)
                clockIn(timeNow, jid)
                setBtnValues(['Lunch In', 'Break In', 'Clock Out']);
                break;
            case 'Lunch In':
                window.localStorage.setItem('btnState', state);
                setBtnValues(['Lunch Out']);
                break;
            case 'Lunch Out':
                window.localStorage.setItem('btnState', state);
                setBtnValues(['Break In', 'Clock Out']);
                break;
            case 'Break In':
                window.localStorage.setItem('btnState', state);
                setBtnValues(['Break Out']);
                break;
            case 'Break Out':
                window.localStorage.setItem('btnState', state);
                setBtnValues(['Break In', 'Clock Out']);
                break;
            case 'Clock Out':
                window.localStorage.setItem('btnState', state);
                setBtnValues(['Clock In']);
                break;
        }
    }

    const clockIn = async (time, jid) => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        };
        try {
            // const res = await axios.post("/api/job/" + jid, time, config);
            console.log(Date.now())

        } catch (err) {
            console.log(err)
        }
    };
    const btnArr = btnValues.map((v, i) =>
        <li key={i} data-id={props.jobId}> <input type='button' value={v} onClick={() => btnSetter(v, props.jobId)} />  </li>
    );

    return (
        <div className='container'>
            <div className="card" data-id={props.jobId} style={{ height: cardHeight }}>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4" onClick={() => setCardHeight('300px')} > {props.title} <i className="material-icons right" >more_vert</i></span>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4" onClick={() => setCardHeight()} > {props.title} <i className="material-icons right">close</i></span>
                    <div>
                        <span className='title'>Job Description: </span>
                        {props.description}
                    </div>
                    <div>
                        <span className='title'>Job Role: </span>
                        {props.role}
                    </div>
                    <div>
                        <span className='title'>Job Type: </span>
                        {props.type}
                    </div>
                    <ul>
                        <li> <input type='button' value='All Timecards' onClick={() => window.location = "/timecards/" + props.jobId} /> </li>
                        {btnArr}
                    </ul>
                    <div>
                        you've clocked in at blah o clock
                    </div>
                    <div>
                        <EditBtn jid={props.jobId} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BtnCardReveal;