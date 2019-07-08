import React, { useState, useEffect} from 'react'
import './BtnCardReveal.css';
import { useHttp } from '../Hooks/Fetch';



const ClockingBtns = (props) => {
    //set auth=========================================================================
    const token = props.token;
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
        <li>
            {btnArr}
        </li>
    );


}

export default ClockingBtns;