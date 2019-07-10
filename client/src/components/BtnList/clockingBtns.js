import React, { useState, useEffect} from 'react'
import './ClockingBtns.css';
import moment from 'moment';
import { useHttp } from '../Hooks/Fetch';



const ClockingBtns = (props) => {
    const [openTc, setOpenTc] = useState({});
    const [tcid, setTcid] = useState();
    const token = props.token;
    const jobId = props.jobId;
    const state = props.state;
    const newDate = () => moment(new Date()).utc().format();
    let timecard = props.tc;
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    headers['x-auth-token'] = token;

    console.log(`
    
    THIS IS THE DATE NOW INSIDE CLOCKING BTNS:
    ${moment(newDate()).local().format('LLLL X')}
    
    
    
    
    `)

    if(timecard){
        if(openTc !== timecard){
            setOpenTc(timecard);
            setTcid(timecard._id);
            console.log(`------------------ OPENTC HOOK SET -----------------------`)
        }
        console.log(`

        THIS IS THE TIMECARD OBJ FROM PROPS:
        `, timecard, `

        `,tcid,`


        `)
}
    


    useEffect( () => { console.log('THIS IS THE OPEN TC:      ', openTc) }, [openTc]);

    const newTc = (id, method, body) => {
        // let tcObj = {msg: 'nothing in here yet'};
        console.log(`
        
        this is "h" inside of clockingbtns
        
        
        ${JSON.stringify(headers)}
        
        
        
        `)

        async function f() {
        //fetch request
            const r = await fetch(`/api/timecard/${id}`, {
            method,
            body: JSON.stringify(body),
            headers
        })
                const r1 = await r.json();
                const res = await r1;
                console.log('THIS IS RES!!!!!!',res)
                setOpenTc(res);
        }

       f();
    }


//functions =================================================================
    const d = () => new Date();

    const [btnValues, setBtnValues] = useState(state ? state : ['Clock In']);
    useEffect( () => { setBtnValues(state ? state : ['Clock In']) }, [state])
    const btnSetter = (state, jid) => {
        let newTcBody;
        // eslint-disable-next-line
        switch (state) {
            case 'Clock In':
                console.log('this is the jid', jid)
                newTcBody = {
                    date: d(),
                    clockIn: d()
                  }
                newTc(jobId, 'POST', newTcBody);
                window.location.reload();
                // setBtnValues(['Lunch In', 'Break In', 'Clock Out']);
                break;
            case 'Lunch In':
                newTcBody = {
                    lunchIn: d()
                  }
                  console.log(`++++++++++++ this is the body of the put lunchIn request +++++++++++++++++
                  `,newTcBody,tcid)
                newTc(tcid, 'PUT', newTcBody); 
                window.location.reload();
                // setBtnValues(['Lunch Out']);
                break;
            case 'Lunch Out':
                newTcBody = {
                    lunchOut: d()
                    }
                    console.log(`++++++++++++ this is the body of the put lunchOut request +++++++++++++++++
                    `,newTcBody,tcid)
                newTc(tcid, 'PUT', newTcBody); 
                window.location.reload();
                // setBtnValues(['Break In', 'Clock Out']);
                break;
            case 'Break In':
                newTcBody = {
                    breakIn: d()
                    }
                    console.log(`++++++++++++ this is the body of the put breakIn request +++++++++++++++++
                    `,newTcBody,tcid)
                newTc(tcid, 'PUT', newTcBody); 
                window.location.reload();
                // setBtnValues(['Break Out']);
                break;
            case 'Break Out':
                newTcBody = {
                    breakOut: d()
                    }
                    console.log(`++++++++++++ this is the body of the put breakOut request +++++++++++++++++
                    `,newTcBody,tcid)
                newTc(tcid, 'PUT', newTcBody); 
                window.location.reload();
                // setBtnValues(['Break In', 'Clock Out']);
                break;
            case 'Clock Out':
                newTcBody = {
                    clockOut: d()
                    }
                    console.log(`++++++++++++ this is the body of the put clockOut request +++++++++++++++++
                    `,newTcBody,tcid)
                newTc(tcid, 'PUT', newTcBody); 
                window.location.reload();
                // setBtnValues(['Clock In']);
                break;
        }
    }



    const btnArr = btnValues.map((v, i) => 
        <li key={i} data-id={jobId}>
            <div id = 'btnList'>
                <button className="btn-floating btn-small waves-effect waves-light blue hoverable" value = {v} onClick = {() => btnSetter(v, jobId) }>
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