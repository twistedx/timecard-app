import React, { useState, useEffect} from 'react'
import './ClockingBtns.css';
import moment from 'moment';
import { useHttp } from '../Hooks/Fetch';



const ClockingBtns = (props) => {
    const date = moment(new Date()).utc().format();
    const body = {
      date,
      clockIn: date
    }

    console.log(`
    
    THIS IS THE DATE NOW INSIDE CLOCKING BTNS:
    ${moment(date).local().format('LLLL X')}
    
    
    
    
    `)
    //set auth=========================================================================
    const token = props.token;
    const jobId = props.jobId;

    // let result = useHttp('http://localhost:5000/api/job', 'POST', '', h, []);

    const newTc = (jid, t) => {
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
        headers['x-auth-token'] = t;
        console.log(`
        
        this is "h" inside of clockingbtns
        
        
        ${JSON.stringify(headers)}
        
        
        
        `)
        //fetch request
        fetch(`/api/timecard/${jid}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers
        })
            .then(r => {
                console.log(r);
                return r.json();
            })
            .then(r => {
                console.log(r);
            })
            .catch(e => console.error('ERROR: ', e));
            // window.location.reload();
    }




    const [btnValues, setBtnValues] = useState(['Clock In']);

    const btnSetter = (state, jid) => {
        // eslint-disable-next-line
        switch (state) {
            case 'Clock In':
                console.log('this is the jid', jid)
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



    const btnArr = btnValues.map((v, i) => 
        <li key={i} data-id={jobId}>
            <div id = 'btnList'>
                <button className="btn-floating btn-small waves-effect waves-light blue hoverable" value = {v} onClick = {() => {
                    newTc(jobId, token);
                    btnSetter(v, jobId);
                }}>
                    <i className="material-icons small">add_alarm</i>
                </button>
                <div>{v}</div>
            </div>
        </li>
    );


    return (
        <li>
            {btnArr}
        </li>
    );


}

export default ClockingBtns;