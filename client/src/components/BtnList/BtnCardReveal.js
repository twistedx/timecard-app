import React, { useState, useEffect, useContext } from 'react'
import './BtnCardReveal.css';
import { useHttp } from '../Hooks/Fetch';
import AuthContext from '../../context/auth/AuthContext';
import setAuthToken from '../../utils/setAuthToken';
import ClockingBtns from './ClockingBtns';
import axios from 'axios';



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

    const [cardHeight, setCardHeight] = useState();

    return (
        <div className='container'>
            <div className="card" data-id={props.jobId} style={{ height: cardHeight }}>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4" onClick={() => setCardHeight('300px')} > {props.title} <i className="material-icons right" >keyboard_arrow_down</i></span>
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
                        <li> 
                            <div id = 'btnList'>
                                <button className="btn-floating btn-small waves-effect waves-light blue hoverable" value = 'All Timecards' onClick = {() => window.location = "/timecards/"+props.jobId}>
                                    <i className="material-icons small">library_books</i>
                                </button>
                                <div>All Timecards</div>
                            </div>
                        </li>
                        <ClockingBtns jobId = { props.jobId } token = { token } />
                    </ul>
                </div>
            </div>
        </div>
    );


}

export default BtnCardReveal;