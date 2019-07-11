import React, { useState, useEffect, useContext } from 'react'
import './BtnCardReveal.css';
import { useHttp } from '../Hooks/Fetch';
import AuthContext from '../../context/auth/AuthContext';
import setAuthToken from '../../utils/setAuthToken';
import ClockingBtns from './clockingBtns';
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

    //set global variables ============================================================================
    const token = authContext.token;
    const jobId = props.jobId;
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    headers['x-auth-token'] = token;


    //fetch timecards for each job ========================================================================
    let fetchedTc = useHttp('/api/timecard/' + jobId, 'GET', '', headers, []);
    const latestTcArr = fetchedTc[1];
    const latestTc = latestTcArr[0];
    useEffect(() => { setTcObj(latestTc) }, [latestTc])



    //hooks ==================================================================================================
    const [cardHeight, setCardHeight] = useState();
    const [tcObj, setTcObj] = useState({msg: 'fetch has not finished yet'});


        //functions ==============================================================================================
        const openTcChecker = () => {
            if(tcObj){
                if(tcObj.clockIn && !tcObj.clockOut){
                    if(tcObj.lunchIn && !tcObj.lunchOut){
                        return ['Lunch Out'];
                    } else if(tcObj.breakIn && !tcObj.breakOut){
                        return ['Break Out'];
                    } else if (tcObj.lunchIn && tcObj.lunchOut && !tcObj.breakOut){
                        return ['Break In', 'Clock Out'];
                    } else if (tcObj.breakIn && tcObj.breakOut && !tcObj.lunchOut){
                        return ['Lunch In', 'Clock Out'];
                    } else if (tcObj.breakOut && tcObj.lunchOut){
                        return ['Clock Out'];
                    } else {
                        return ['Lunch In', 'Break In', 'Clock Out'];
                    }
                    }  else {
                        return ['Clock In'];
                }
            }
        }


    // //functions ==============================================================================================
    // const openTcChecker = () => {
    //     if (tcObj) {
    //         if (tcObj.clockIn && !tcObj.clockOut) {
    //             if (tcObj.lunchIn && !tcObj.lunchOut) {
    //                 return ['Lunch Out'];
    //             } else if (tcObj.breakIn && !tcObj.breakOut) {
    //                 return ['Break Out'];
    //             } else if (tcObj.lunchIn && tcObj.lunchOut) {
    //                 return ['Break In', 'Clock Out'];
    //             } else if (tcObj.breakIn && tcObj.breakOut) {
    //                 return ['Lunch In', 'Clock Out'];
    //             } else if (tcObj.breakOut && tcObj.lunchOut) {
    //                 return ['Clock Out'];
    //             } else {
    //                 return ['Lunch In', 'Break In', 'Clock Out'];
    //             }
    //         } else {
    //             return ['Clock In'];
    //         }

    //     }
    // }

    const cstate = openTcChecker();
    console.log(`this is the cstate!!!!!!!!: ${cstate}`)

    return (
        <div className='container'>
            <div className="card" data-id={jobId} style={{ height: cardHeight }}>
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
                            <div id='btnList'>
                                <button className="btn-floating btn-small waves-effect waves-light blue hoverable" value='All Timecards' onClick={() => window.location = "/timecards/" + props.jobId}>
                                    <i className="material-icons small">library_books</i>
                                </button>
                                <div>All Timecards</div>
                            </div>
                        </li>
                        <ClockingBtns state={cstate} tc={latestTc} jobId={jobId} token={token} />
                    </ul>
                    <EditBtn url = "/editjob/" id = {jobId} title = 'Edit Job' key = {jobId} />
                </div>
            </div>
        </div>
    );
}

export default BtnCardReveal;